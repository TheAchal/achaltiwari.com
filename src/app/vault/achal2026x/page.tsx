'use client';

import { useState, useEffect } from 'react';

interface Trade {
  id: number;
  date: string;
  symbol: string;
  action: 'BUY' | 'SELL';
  price: number;
  quantity: number;
  value: number;
  status: 'OPEN' | 'CLOSED';
  sellPrice?: number;
  sellDate?: string;
  profit?: number;
  profitPct?: number;
}

interface PortfolioData {
  trades: Trade[];
  startingCapital: number;
  currentCapital: number;
}

interface StockPick {
  symbol: string;
  price: number;
  entry: number;
  target1: number;
  target2: number;
  stopLoss: number;
  riskReward: number;
  ret5d: number;
  rsi: number;
  isLowPrice: boolean;
  isAffordable: boolean;
  sharesPossible: number;
  category: string;
  macdBullish: boolean;
}

interface PerformanceResult {
  symbol: string;
  status: 'TARGET1_HIT' | 'STOPLOSS_HIT' | 'OPEN';
  profitPct: number;
}

interface StockData {
  date: string;
  time: string;
  budget: number;
  maxPrice: number;
  stable: StockPick[];
  aggressive: StockPick[];
  yesterdayPerformance: PerformanceResult[];
}

const STORAGE_KEY = 'achal_stock_portfolio';
const GIST_URL = 'https://gist.githubusercontent.com/TheAchal/ebfe28667e9d746285eff83b8520baad/raw/stock_picks.json';

export default function VaultPage() {
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    trades: [],
    startingCapital: 1000,
    currentCapital: 1000,
  });
  const [stockPicks, setStockPicks] = useState<StockData | null>(null);
  const [loadingPicks, setLoadingPicks] = useState(true);
  const [activeTab, setActiveTab] = useState<'picks' | 'portfolio'>('picks');

  const [showAddTrade, setShowAddTrade] = useState(false);
  const [showCloseTrade, setShowCloseTrade] = useState<number | null>(null);
  const [newTrade, setNewTrade] = useState({ symbol: '', price: '', quantity: '' });
  const [closePrice, setClosePrice] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPortfolio(JSON.parse(saved));
    }

    // Fetch stock picks
    fetch(GIST_URL + '?t=' + Date.now())
      .then(res => res.json())
      .then(data => {
        setStockPicks(data);
        setLoadingPicks(false);
      })
      .catch(err => {
        console.error('Failed to fetch picks:', err);
        setLoadingPicks(false);
      });
  }, []);

  const savePortfolio = (data: PortfolioData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setPortfolio(data);
  };

  const addTrade = () => {
    if (!newTrade.symbol || !newTrade.price || !newTrade.quantity) return;

    const trade: Trade = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      symbol: newTrade.symbol.toUpperCase(),
      action: 'BUY',
      price: parseFloat(newTrade.price),
      quantity: parseInt(newTrade.quantity),
      value: parseFloat(newTrade.price) * parseInt(newTrade.quantity),
      status: 'OPEN',
    };

    const newCapital = portfolio.currentCapital - trade.value;
    const newPortfolio = {
      ...portfolio,
      trades: [...portfolio.trades, trade],
      currentCapital: newCapital,
    };

    savePortfolio(newPortfolio);
    setNewTrade({ symbol: '', price: '', quantity: '' });
    setShowAddTrade(false);
  };

  const quickAddTrade = (pick: StockPick) => {
    setNewTrade({
      symbol: pick.symbol,
      price: pick.entry.toString(),
      quantity: '',
    });
    setShowAddTrade(true);
    setActiveTab('portfolio');
  };

  const closeTrade = (tradeId: number) => {
    if (!closePrice) return;

    const updatedTrades = portfolio.trades.map((t) => {
      if (t.id === tradeId && t.status === 'OPEN') {
        const sellValue = parseFloat(closePrice) * t.quantity;
        const profit = sellValue - t.value;
        const profitPct = (profit / t.value) * 100;

        return {
          ...t,
          status: 'CLOSED' as const,
          sellPrice: parseFloat(closePrice),
          sellDate: new Date().toISOString().split('T')[0],
          profit,
          profitPct,
        };
      }
      return t;
    });

    const closedTrade = updatedTrades.find((t) => t.id === tradeId);
    const sellValue = closedTrade ? parseFloat(closePrice) * closedTrade.quantity : 0;

    savePortfolio({
      ...portfolio,
      trades: updatedTrades,
      currentCapital: portfolio.currentCapital + sellValue,
    });

    setClosePrice('');
    setShowCloseTrade(null);
  };

  const openTrades = portfolio.trades.filter((t) => t.status === 'OPEN');
  const closedTrades = portfolio.trades.filter((t) => t.status === 'CLOSED');
  const totalProfit = closedTrades.reduce((sum, t) => sum + (t.profit || 0), 0);
  const winningTrades = closedTrades.filter((t) => (t.profit || 0) > 0).length;
  const winRate = closedTrades.length > 0 ? (winningTrades / closedTrades.length) * 100 : 0;
  const roi = ((portfolio.currentCapital - portfolio.startingCapital) / portfolio.startingCapital) * 100;

  const renderStockPick = (pick: StockPick, index: number) => (
    <div key={pick.symbol} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-lg">{pick.symbol}</span>
            {pick.isLowPrice && (
              <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded">UNDER ₹100</span>
            )}
            {pick.isAffordable && !pick.isLowPrice && (
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">AFFORDABLE</span>
            )}
            <span className={`text-xs px-2 py-0.5 rounded ${pick.category === 'stable' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
              {pick.category === 'stable' ? 'STABLE' : 'AGGRESSIVE'}
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            CMP: ₹{pick.price} • Can buy ~{pick.sharesPossible || Math.floor(1000/pick.entry)} shares
          </p>
        </div>
        <button
          onClick={() => quickAddTrade(pick)}
          className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg text-sm font-medium transition"
        >
          Trade
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-emerald-950/50 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Entry</p>
          <p className="text-emerald-400 font-semibold">₹{pick.entry}</p>
        </div>
        <div className="bg-red-950/50 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Stop Loss</p>
          <p className="text-red-400 font-semibold">₹{pick.stopLoss}</p>
        </div>
        <div className="bg-blue-950/50 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Target 1</p>
          <p className="text-blue-400 font-semibold">₹{pick.target1}</p>
        </div>
        <div className="bg-purple-950/50 rounded-lg p-2">
          <p className="text-gray-400 text-xs">Target 2</p>
          <p className="text-purple-400 font-semibold">₹{pick.target2}</p>
        </div>
      </div>

      <div className="flex justify-between mt-3 text-xs text-gray-400">
        <span>5D: <span className={pick.ret5d >= 0 ? 'text-emerald-400' : 'text-red-400'}>{pick.ret5d > 0 ? '+' : ''}{pick.ret5d}%</span></span>
        <span>RSI: {pick.rsi}</span>
        <span className={pick.macdBullish ? 'text-emerald-400' : 'text-red-400'}>
          MACD: {pick.macdBullish ? 'Bullish' : 'Bearish'}
        </span>
        <span>R:R 1:{pick.riskReward}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-400">Stock Vault</h1>
          <p className="text-gray-400 text-sm mt-1">Private trading dashboard</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('picks')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'picks' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Today's Picks
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'portfolio' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            My Portfolio
          </button>
        </div>

        {/* Today's Picks Tab */}
        {activeTab === 'picks' && (
          <div>
            {loadingPicks ? (
              <div className="text-center py-12 text-gray-400">Loading picks...</div>
            ) : stockPicks ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">Daily Stock Picks</h2>
                    <p className="text-gray-400 text-sm">
                      {stockPicks.date} at {stockPicks.time} IST • Budget: ₹{stockPicks.budget || 1000}
                    </p>
                  </div>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Refresh
                  </button>
                </div>

                {/* Yesterday's Performance */}
                {stockPicks.yesterdayPerformance && stockPicks.yesterdayPerformance.length > 0 && (
                  <div className="mb-6 p-4 bg-gray-900 rounded-xl border border-gray-800">
                    <h3 className="text-sm font-medium mb-3 text-gray-300">Yesterday's Performance</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {stockPicks.yesterdayPerformance.map((result) => (
                        <div
                          key={result.symbol}
                          className={`p-2 rounded-lg text-center ${
                            result.status === 'TARGET1_HIT'
                              ? 'bg-emerald-950/50 border border-emerald-800/50'
                              : result.status === 'STOPLOSS_HIT'
                              ? 'bg-red-950/50 border border-red-800/50'
                              : 'bg-gray-800/50'
                          }`}
                        >
                          <p className="font-medium text-sm">{result.symbol}</p>
                          <p className={`text-xs ${
                            result.status === 'TARGET1_HIT' ? 'text-emerald-400' :
                            result.status === 'STOPLOSS_HIT' ? 'text-red-400' :
                            result.profitPct >= 0 ? 'text-emerald-400' : 'text-red-400'
                          }`}>
                            {result.status === 'TARGET1_HIT' ? '✅ TARGET' :
                             result.status === 'STOPLOSS_HIT' ? '❌ SL HIT' :
                             `${result.profitPct >= 0 ? '+' : ''}${result.profitPct}%`}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {stockPicks.aggressive.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3 text-orange-400">Aggressive Picks</h3>
                    <div className="space-y-3">
                      {stockPicks.aggressive.map((pick, i) => renderStockPick(pick, i))}
                    </div>
                  </div>
                )}

                {stockPicks.stable.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-blue-400">Stable Picks</h3>
                    <div className="space-y-3">
                      {stockPicks.stable.map((pick, i) => renderStockPick(pick, i))}
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-gray-900 rounded-xl border border-gray-800 text-sm text-gray-400">
                  <p className="font-medium text-white mb-2">How to use:</p>
                  <ul className="space-y-1">
                    <li>• Enter at ENTRY price or below</li>
                    <li>• Book partial profits at TARGET 1</li>
                    <li>• Trail stop-loss after TARGET 1</li>
                    <li>• Exit remaining at TARGET 2</li>
                    <li>• Exit ALL if STOP LOSS hits</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <p>No picks available yet</p>
                <p className="text-sm mt-2">Check back at 9:10 AM IST on weekdays</p>
              </div>
            )}
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div>
            {/* Portfolio Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
                <p className="text-gray-400 text-xs">Starting</p>
                <p className="text-xl font-bold">₹{portfolio.startingCapital}</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
                <p className="text-gray-400 text-xs">Current</p>
                <p className={`text-xl font-bold ${portfolio.currentCapital >= portfolio.startingCapital ? 'text-emerald-400' : 'text-red-400'}`}>
                  ₹{portfolio.currentCapital.toFixed(0)}
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
                <p className="text-gray-400 text-xs">P&L</p>
                <p className={`text-xl font-bold ${totalProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {totalProfit >= 0 ? '+' : ''}₹{totalProfit.toFixed(0)}
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
                <p className="text-gray-400 text-xs">ROI</p>
                <p className={`text-xl font-bold ${roi >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {roi >= 0 ? '+' : ''}{roi.toFixed(1)}%
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-900/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Win Rate</p>
                <p className="font-semibold">{winRate.toFixed(0)}%</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Trades</p>
                <p className="font-semibold">{closedTrades.length}</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Open</p>
                <p className="font-semibold">{openTrades.length}</p>
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Open Positions</h2>
                <button
                  onClick={() => setShowAddTrade(true)}
                  className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg text-sm font-medium transition"
                >
                  + Add Trade
                </button>
              </div>

              {showAddTrade && (
                <div className="bg-gray-900 rounded-xl p-4 mb-3 border border-emerald-600">
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Symbol"
                      value={newTrade.symbol}
                      onChange={(e) => setNewTrade({ ...newTrade, symbol: e.target.value })}
                      className="bg-gray-800 rounded-lg px-3 py-2 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={newTrade.price}
                      onChange={(e) => setNewTrade({ ...newTrade, price: e.target.value })}
                      className="bg-gray-800 rounded-lg px-3 py-2 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={newTrade.quantity}
                      onChange={(e) => setNewTrade({ ...newTrade, quantity: e.target.value })}
                      className="bg-gray-800 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={addTrade}
                      className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-sm font-medium flex-1"
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => { setShowAddTrade(false); setNewTrade({ symbol: '', price: '', quantity: '' }); }}
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {openTrades.length === 0 ? (
                <p className="text-gray-500 text-center py-6 text-sm">No open positions</p>
              ) : (
                <div className="space-y-2">
                  {openTrades.map((trade) => (
                    <div key={trade.id} className="bg-gray-900 rounded-xl p-3 border border-gray-800">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{trade.symbol}</p>
                          <p className="text-gray-400 text-sm">
                            {trade.quantity} @ ₹{trade.price} = ₹{trade.value}
                          </p>
                          <p className="text-gray-500 text-xs mt-1">{trade.date}</p>
                        </div>
                        <div>
                          {showCloseTrade === trade.id ? (
                            <div className="flex gap-1">
                              <input
                                type="number"
                                placeholder="Sell ₹"
                                value={closePrice}
                                onChange={(e) => setClosePrice(e.target.value)}
                                className="bg-gray-800 rounded px-2 py-1 text-sm w-20"
                              />
                              <button
                                onClick={() => closeTrade(trade.id)}
                                className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-sm"
                              >
                                Sell
                              </button>
                              <button
                                onClick={() => setShowCloseTrade(null)}
                                className="bg-gray-700 px-2 py-1 rounded text-sm"
                              >
                                ✕
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setShowCloseTrade(trade.id)}
                              className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-sm"
                            >
                              Close
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Trade History */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Trade History</h2>
              {closedTrades.length === 0 ? (
                <p className="text-gray-500 text-center py-6 text-sm">No completed trades yet</p>
              ) : (
                <div className="space-y-2">
                  {closedTrades.slice().reverse().map((trade) => (
                    <div
                      key={trade.id}
                      className={`rounded-xl p-3 border ${
                        (trade.profit || 0) >= 0
                          ? 'bg-emerald-950/30 border-emerald-800/50'
                          : 'bg-red-950/30 border-red-800/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{trade.symbol}</p>
                          <p className="text-gray-400 text-sm">
                            {trade.quantity} @ ₹{trade.price} → ₹{trade.sellPrice}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${(trade.profit || 0) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {(trade.profit || 0) >= 0 ? '+' : ''}₹{(trade.profit || 0).toFixed(0)}
                          </p>
                          <p className={`text-sm ${(trade.profitPct || 0) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {(trade.profitPct || 0) >= 0 ? '+' : ''}{(trade.profitPct || 0).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 pt-4 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>Started: May 12, 2026 | Capital: ₹1,000</p>
          <p className="mt-1">Powered by Claude + Achal</p>
        </div>
      </div>
    </div>
  );
}
