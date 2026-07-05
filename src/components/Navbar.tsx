"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Work" },
  { href: "/journey", label: "Journey" },
  { href: "/blog", label: "Reflections" },
  { href: "/prompts", label: "Prompt Lab" },
  { href: "/resume", label: "Résumé" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-beige)]/80 backdrop-blur-md border-b border-[var(--color-beige-dark)]">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="grid place-items-center w-7 h-7 rounded-md border border-[var(--color-beige-dark)] bg-[var(--color-card)] text-sm font-bold chrome-text"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A
          </span>
          <span
            className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Achal Tiwari
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? "text-[var(--color-achal)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider font-medium bg-[var(--color-achal)] text-[#08080b] hover:bg-[var(--color-achal-dark)] transition-colors"
          >
            Let’s talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--color-muted)]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-beige-dark)] px-6 py-3 space-y-1">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? "text-[var(--color-achal)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-xs font-mono uppercase tracking-wider font-medium bg-[var(--color-achal)] text-[#08080b]"
          >
            Let’s talk
          </Link>
        </div>
      )}
    </nav>
  );
}
