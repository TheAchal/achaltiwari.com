import Link from "next/link";

const socials = [
  { label: "Contact", href: "/contact", internal: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/achaltiwari/" },
  { label: "X", href: "https://x.com/AchalTiwari_" },
  { label: "GitHub", href: "https://github.com/TheAchal" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-beige-dark)] mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-[var(--color-ink)] font-medium">
              Achal Tiwari
            </p>
            <p className="text-xs text-[var(--color-muted)] mt-1 font-mono">
              Product Manager — builds &amp; ships AI products.
            </p>
          </div>

          <div className="flex gap-5 flex-wrap justify-center text-xs font-mono uppercase tracking-wider">
            {socials.map((s) =>
              s.internal ? (
                <Link
                  key={s.label}
                  href={s.href}
                  className="text-[var(--color-muted)] hover:text-[var(--color-achal)] transition-colors"
                >
                  {s.label}
                </Link>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-muted)] hover:text-[var(--color-achal)] transition-colors"
                >
                  {s.label}
                </a>
              )
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[var(--color-muted)] mt-8">
          I designed, wrote, and built this entire site by directing Claude —
          that’s the point.
        </p>
      </div>
    </footer>
  );
}
