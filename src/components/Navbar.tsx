"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Index" },
  { href: "/case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
];

const socials = [
  { label: "li", href: "https://www.linkedin.com/in/achaltiwari/" },
  { label: "gh", href: "https://github.com/TheAchal" },
  { label: "x", href: "https://x.com/AchalTiwari_" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-beige)]/70 backdrop-blur-md border-b border-[var(--color-beige-dark)]/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-[var(--color-ink)] hover:text-[var(--color-achal)] transition-colors"
        >
          Achal Tiwari
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  isActive(l.href)
                    ? "text-[var(--color-achal)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full bg-[var(--color-achal)] text-[#0a0a0b] text-sm font-medium hover:bg-[var(--color-achal-dark)] transition-colors"
          >
            Let’s talk!
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-muted)]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-beige-dark)] px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block text-lg ${
                isActive(l.href)
                  ? "text-[var(--color-achal)]"
                  : "text-[var(--color-ink)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 text-sm text-[var(--color-muted)] pt-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 px-4 py-2 rounded-full bg-[var(--color-achal)] text-[#0a0a0b] text-sm font-medium"
          >
            Let’s talk!
          </Link>
        </div>
      )}
    </nav>
  );
}
