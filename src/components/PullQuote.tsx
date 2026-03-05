interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="my-10 pl-6 border-l-4 border-[var(--color-achal)]/50">
      <p
        className="text-xl sm:text-2xl leading-relaxed text-[var(--color-ink)]/80 italic"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {children}
      </p>
      {attribution && (
        <cite className="block mt-3 text-sm text-[var(--color-muted)] not-italic">
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}
