"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print px-4 py-2 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)] transition-colors text-sm font-medium"
    >
      Download PDF
    </button>
  );
}
