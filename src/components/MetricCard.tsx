interface MetricCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <div className="bg-[var(--color-card)] rounded-lg p-5 border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)]/30 transition-colors">
      <div
        className="text-3xl sm:text-4xl font-bold chrome-text leading-none"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-[var(--color-ink)]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-xs text-[var(--color-muted)] font-mono">
          {sublabel}
        </div>
      )}
    </div>
  );
}
