import type { Metadata } from "next";
import Link from "next/link";

const EMAIL = "achal.tiwaari@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/achal-tiwari-7701131b6/";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Achal Tiwari, a Product Manager open to Senior / AI-PM roles in the UK and India.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-sm text-[var(--color-achal)] font-medium mb-4 tracking-wide uppercase">
        Get in touch
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Let’s talk.
      </h1>
      <p className="mt-5 text-lg text-[var(--color-ink)] leading-relaxed">
        I’m a product manager who ships. I build AI products that get real users
        and real revenue. If you’re hiring, building something with AI, or just
        want to trade notes, I’d love to hear from you.
      </p>

      <div className="mt-8 bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-6">
        <h2 className="text-sm font-medium text-[var(--color-achal)] uppercase tracking-wide mb-3">
          What I’m looking for
        </h2>
        <ul className="space-y-2 text-[var(--color-ink)]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-achal)] flex-shrink-0" />
            Senior / AI Product Manager roles
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-achal)] flex-shrink-0" />
            United Kingdom or India (open to remote)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-achal)] flex-shrink-0" />
            Teams building AI-native products, in any domain
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="px-5 py-2.5 bg-[var(--color-achal)] text-[#0a0a0f] rounded-lg hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
        >
          Email me
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-muted)] transition-colors text-sm font-medium"
        >
          LinkedIn
        </a>
        <Link
          href="/resume"
          className="px-5 py-2.5 bg-[var(--color-claude-light)] text-[var(--color-claude)] rounded-lg border border-[var(--color-claude)]/20 hover:border-[var(--color-claude)]/40 transition-colors text-sm font-medium"
        >
          View résumé
        </Link>
      </div>

      <p className="mt-8 text-sm text-[var(--color-muted)]">
        Prefer email?{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-[var(--color-achal)] hover:underline"
        >
          {EMAIL}
        </a>
      </p>
    </div>
  );
}
