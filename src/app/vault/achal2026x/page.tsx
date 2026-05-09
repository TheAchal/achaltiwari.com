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
}

const STORAGE_KEY = 'achal_stock_portfolio';

export default function VaultPage() {
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    trades: [],
    startingCapital: 1000,
    currentCapital: 1000,
  });

  const [showAddTrade, setShowAddTrade] = useState(false);
  const [showCloseTrade, setShowCloseTrade] = useState<number | null>(null);
  const [newTrade, setNewTrade] = useState({ symbol: '', price: '', quantity: '' });
  const [closePrice, setClosePrice] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPortfolio(JSON.parse(saved));
    }
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

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-400">Stock Vault</h1>
          <p className="text-gray-400 mt-1">Private trading dashboard</p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-gray-400 text-sm">Starting Capital</p>
            <p className="text-2xl font-bold">₹{portfolio.startingCapital}</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-gray-400 text-sm">Current Capital</p>
            <p className={`text-2xl font-bold ${portfolio.currentCapital >= portfolio.startingCapital ? 'text-emerald-400' : 'text-red-400'}`}>
              ₹{portfolio.currentCapital.toFixed(0)}
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-gray-400 text-sm">Total P&L</p>
            <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {totalProfit >= 0 ? '+' : ''}₹{totalProfit.toFixed(0)}
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-gray-400 text-sm">ROI</p>
            <p className={`text-2xl font-bold ${roi >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {roi >= 0 ? '+' : ''}{roi.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900/50 rounded-lg p-3 text-center">
            <p className="text-gray-400 text-xs">Win Rate</p>
            <p className="text-lg font-semibold">{winRate.toFixed(0)}%</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3 text-center">
            <p className="text-gray-400 text-xs">Total Trades</p>
            <p className="text-lg font-semibold">{closedTrades.length}</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3 text-center">
            <p className="text-gray-400 text-xs">Open Positions</p>
            <p className="text-lg font-semibold">{openTrades.length}</p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Open Positions</h2>
            <button
              onClick={() => setShowAddTrade(true)}
              className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              + Add Trade
            </button>
          </div>

          {showAddTrade && (
            <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-emerald-600">
              <div className="grid grid-cols-3 gap-3 mb-3">
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
                  onClick={() => setShowAddTrade(false)}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {openTrades.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No open positions</p>
          ) : (
            <div className="space-y-3">
              {openTrades.map((trade) => (
                <div key={trade.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-lg">{trade.symbol}</p>
                      <p className="text-gray-400 text-sm">
                        {trade.quantity} @ ₹{trade.price} = ₹{trade.value}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{trade.date}</p>
                    </div>
                    <div>
                      {showCloseTrade === trade.id ? (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="Sell Price"
                            value={closePrice}
                            onChange={(e) => setClosePrice(e.target.value)}
                            className="bg-gray-800 rounded-lg px-2 py-1 text-sm w-24"
                          />
                          <button
                            onClick={() => closeTrade(trade.id)}
                            className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg text-sm"
                          >
                            Sell
                          </button>
                          <button
                            onClick={() => setShowCloseTrade(null)}
                            className="bg-gray-700 px-2 py-1 rounded-lg text-sm"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowCloseTrade(trade.id)}
                          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
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
          <h2 className="text-xl font-semibold mb-4">Trade History</h2>
          {closedTrades.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No completed trades yet</p>
          ) : (
            <div className="space-y-2">
              {closedTrades.slice().reverse().map((trade) => (
                <div
                  key={trade.id}
                  className={`rounded-xl p-4 border ${
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
                      <p
                        className={`font-bold ${
                          (trade.profit || 0) >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {(trade.profit || 0) >= 0 ? '+' : ''}₹{(trade.profit || 0).toFixed(0)}
                      </p>
                      <p
                        className={`text-sm ${
                          (trade.profitPct || 0) >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {(trade.profitPct || 0) >= 0 ? '+' : ''}
                        {(trade.profitPct || 0).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Started: May 12, 2026 | Capital: ₹1,000</p>
          <p className="mt-1">Powered by Claude + Achal</p>
        </div>
      </div>
    </div>
  );
}
