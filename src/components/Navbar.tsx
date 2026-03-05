"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/journey", label: "Journey" },
  { href: "/case-studies", label: "Work" },
  { href: "/blog", label: "Reflections" },
  { href: "/prompts", label: "Prompt Lab" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-beige)]/95 backdrop-blur-sm border-b border-[var(--color-beige-dark)]">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <span
            className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Achal
          </span>
          <span className="text-xs text-[var(--color-claude)] bg-[var(--color-claude-light)] px-2 py-0.5 rounded-full border border-[var(--color-claude)]/20">
            + Claude
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-1">
          {links.slice(1).map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[var(--color-achal)] text-[#0a0a0f]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-beige-dark)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
          {links.slice(1).map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[var(--color-achal)] text-[#0a0a0f]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
