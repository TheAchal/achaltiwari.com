interface MetricCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <div className="bg-[var(--color-card)] rounded-xl p-5 border border-[var(--color-beige-dark)] text-center hover:border-[var(--color-achal)]/30 transition-colors">
      <div
        className="text-3xl font-bold text-[var(--color-achal)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-[var(--color-ink)]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-xs text-[var(--color-muted)]">
          {sublabel}
        </div>
      )}
    </div>
  );
}
