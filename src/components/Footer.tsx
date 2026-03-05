export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-beige-dark)] mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-[var(--color-ink)] font-medium">
              Achal Tiwari + Claude
            </p>
            <p className="text-xs text-[var(--color-muted)] mt-1">
              A PM and his AI thinking partner, building in public.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/achaltiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-achal)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/achaltiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-achal)] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/achaltiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-achal)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--color-muted)] mt-8">
          This entire site was designed, written, and built through a collaboration
          between Achal and Claude. Every word you read is part of that story.
        </p>
      </div>
    </footer>
  );
}
