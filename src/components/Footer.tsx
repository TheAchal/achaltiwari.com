import Link from "next/link";

// TODO(Achal): confirm/replace with the email you want public.
const EMAIL = "achaltiwari9450@gmail.com";

const marqueeItems = Array.from({ length: 6 });

function MarqueeTrack() {
  return (
    <div className="marquee__track">
      {marqueeItems.map((_, i) => (
        <span
          key={i}
          className="display upper text-[var(--color-muted)] flex items-center gap-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Let’s build something
          <span className="text-[var(--color-achal)]">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-beige-dark)]">
      <Link
        href="/contact"
        className="block py-6 border-b border-[var(--color-beige-dark)] marquee group"
        aria-label="Get in touch"
      >
        <MarqueeTrack />
        <div aria-hidden="true" className="flex">
          <MarqueeTrack />
        </div>
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="eyebrow mb-4">Have something in mind?</p>
        <Link
          href="/contact"
          className="display upper text-[var(--color-ink)] hover:text-[var(--color-achal)] transition-colors block"
          style={{ fontSize: "clamp(2.5rem, 9vw, 6rem)" }}
        >
          How can I help?
        </Link>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="eyebrow mb-3">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[var(--color-ink)] hover:text-[var(--color-achal)] transition-colors break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <div className="flex flex-col gap-1.5 text-[var(--color-muted)]">
              <a
                href="https://www.linkedin.com/in/achaltiwari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/TheAchal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://x.com/AchalTiwari_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">More</p>
            <div className="flex flex-col gap-1.5 text-[var(--color-muted)]">
              <Link href="/our-story" className="hover:text-[var(--color-ink)] transition-colors">
                Our Story
              </Link>
              <Link href="/journey" className="hover:text-[var(--color-ink)] transition-colors">
                Journey
              </Link>
              <Link href="/blog" className="hover:text-[var(--color-ink)] transition-colors">
                Reflections
              </Link>
              <Link href="/prompts" className="hover:text-[var(--color-ink)] transition-colors">
                Prompt Lab
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-muted)] border-t border-[var(--color-beige-dark)] pt-6">
          <span>
            © 2026 Achal Tiwari — Product Manager who builds &amp; ships AI
            products.
          </span>
          <span>Designed &amp; built by directing Claude.</span>
        </div>
      </div>
    </footer>
  );
}
