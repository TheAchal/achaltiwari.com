import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    n: "01",
    title: "InfiNotes",
    href: "/case-studies/infinotes",
    year: "2026",
    role: "PM & Builder",
    desc: "AI study-notes platform. 10,000+ users, 12.9% free-to-paid, profitable in five weeks.",
  },
  {
    n: "02",
    title: "Project X",
    href: "/case-studies/project-x",
    year: "2026",
    role: "PM & Builder",
    desc: "Text-first AI study companion. Hinglish, priced off a token economy modelled from real model cost.",
  },
  {
    n: "03",
    title: "NestPrep",
    href: "/case-studies/nestprep",
    year: "2026",
    role: "PM & Builder",
    desc: "Science-prep platform, built 0→1: live CBT engine, auth, checkout, honest results page.",
  },
];

const stats = [
  { v: "10K+", l: "Users · InfiNotes" },
  { v: "12.9%", l: "Free → paid" },
  { v: "5 wks", l: "To profit" },
  { v: "6+", l: "Products shipped & live" },
];

export default function Home() {
  return (
    <div className="-mt-6">
      {/* Hero */}
      <section className="min-h-[86vh] flex flex-col justify-center py-10">
        <p className="eyebrow mb-6">Hi there — this is</p>
        <h1
          className="display upper text-[var(--color-ink)]"
          style={{ fontSize: "clamp(3.2rem, 13vw, 10rem)" }}
        >
          Achal
          <br />
          Tiwari
        </h1>

        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <p className="text-xl sm:text-2xl text-[var(--color-muted)] max-w-lg leading-snug">
              Product Manager. I take ideas{" "}
              <span className="text-[var(--color-ink)]">0→1</span> and ship real
              AI products — fast, by directing AI, not just writing specs.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[var(--color-achal)] text-[#0a0a0b] rounded-full hover:bg-[var(--color-achal-dark)] transition-colors font-medium"
              >
                How can I help?
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3 border border-[var(--color-beige-dark)] rounded-full hover:border-[var(--color-ink)] transition-colors font-medium"
              >
                See the work
              </Link>
            </div>
          </div>

          <div className="relative w-[220px] sm:w-[300px] aspect-[4/5] justify-self-start md:justify-self-end">
            <div className="glow-orange" />
            <Image
              src="/images/achal-profile.jpeg"
              alt="Achal Tiwari"
              fill
              sizes="(max-width: 768px) 220px, 300px"
              className="relative z-10 object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3">
          <span className="eyebrow">scroll</span>
          <span className="h-px w-16 bg-[var(--color-beige-dark)]" />
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-20 reveal">
        <p className="text-3xl sm:text-5xl font-semibold leading-[1.12] max-w-4xl tracking-tight text-[var(--color-ink)]">
          I turn ideas into{" "}
          <span className="text-[var(--color-achal)]">live products</span>. From a
          profitable study platform with 10,000+ users to AI companions and 0→1
          builds — I ship real AI products across domains, fast.
        </p>
      </section>

      {/* Selected work */}
      <section className="py-10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="eyebrow">Selected work</h2>
          <Link
            href="/case-studies"
            className="eyebrow hover:text-[var(--color-achal)] transition-colors"
          >
            All work →
          </Link>
        </div>

        <div className="border-b border-[var(--color-beige-dark)]">
          {projects.map((p) => (
            <Link
              key={p.n}
              href={p.href}
              className="group block border-t border-[var(--color-beige-dark)] py-8"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 md:items-center">
                <span className="font-mono text-sm text-[var(--color-muted)] pt-2">
                  {p.n}
                </span>
                <div>
                  <h3
                    className="display upper leading-[0.95] text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors"
                    style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-muted)] max-w-xl">
                    {p.desc}
                  </p>
                </div>
                <div className="text-left md:text-right text-sm font-mono text-[var(--color-muted)] whitespace-nowrap">
                  <div>{p.year}</div>
                  <div>{p.role}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="reveal">
              <div
                className="display text-[var(--color-ink)]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
              >
                {s.v}
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted)]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
