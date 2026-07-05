import Link from "next/link";

interface ContactCTAProps {
  heading?: string;
  sub?: string;
}

export default function ContactCTA({
  heading = "Let’s build something.",
  sub = "I’m open to Senior / AI‑PM roles in the UK and India — and always up for a conversation about AI products, 0→1 building, or shipping fast.",
}: ContactCTAProps) {
  return (
    <section className="my-16">
      <div className="relative overflow-hidden bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-8 sm:p-12 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold chrome-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h2>
        <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
          {sub}
        </p>
        <div className="mt-7 flex justify-center gap-3 flex-wrap">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[var(--color-achal)] text-[#08080b] rounded-md hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
          >
            Get in touch
          </Link>
          <Link
            href="/resume"
            className="px-5 py-2.5 bg-transparent text-[var(--color-ink)] rounded-md border border-[var(--color-beige-dark)] hover:border-[var(--color-claude)] transition-colors text-sm font-medium"
          >
            View r&eacute;sum&eacute;
          </Link>
        </div>
      </div>
    </section>
  );
}
