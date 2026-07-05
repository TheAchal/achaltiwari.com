import Link from "next/link";
import HeroImmersive from "@/components/HeroImmersive";

// Crossing-marquee service words (two bands)
const svcA = [
  "Product Strategy",
  "0→1 Building",
  "AI Products",
  "Growth",
  "Roadmapping",
  "Go-to-Market",
];
const svcB = [
  "PRDs & Specs",
  "User Research",
  "Monetization",
  "Analytics",
  "Prioritization",
  "Beta Strategy",
];

function MarqTrack({ words, rev }: { words: string[]; rev?: boolean }) {
  return (
    <div className={`marq-track${rev ? " marq-track--rev" : ""}`}>
      {[...words, ...words].map((w, i) => (
        <span key={i} className="marq-item">
          {w}
          <span className="marq-star">✳</span>
        </span>
      ))}
    </div>
  );
}

const projects = [
  {
    n: "01",
    title: "InfiNotes",
    href: "/case-studies/infinotes",
    roles: ["Product", "Growth", "0→1"],
    metric: "10K+ users · 12.9% free→paid",
    desc: "AI study-notes platform. 10,000+ users, 12.9% free-to-paid, profitable in five weeks — on zero marketing spend.",
  },
  {
    n: "02",
    title: "Project X",
    href: "/case-studies/project-x",
    roles: ["Product", "AI", "Monetization"],
    metric: "Text-first AI study companion",
    desc: "AI study companion. Hinglish, peer-toned, priced off a token economy modelled from real model cost.",
  },
  {
    n: "03",
    title: "NestPrep",
    href: "/case-studies/nestprep",
    roles: ["Product", "0→1", "Full-stack"],
    metric: "Live CBT engine · built 0→1",
    desc: "Science-prep platform built 0→1: live CBT engine, auth, checkout, and an honest results page.",
  },
];

// Placeholder slots — replace with the real LinkedIn recommendations you paste in.
const testimonials = [
  {
    quote: "Add a real recommendation here — a line or two from a manager or teammate.",
    name: "Name",
    role: "Title · Company",
  },
  {
    quote: "Second recommendation slot. Keep the strongest, most specific quotes.",
    name: "Name",
    role: "Title · Company",
  },
  {
    quote: "Third recommendation slot — ideally someone who saw you ship end-to-end.",
    name: "Name",
    role: "Title · Company",
  },
];

export default function Home() {
  return (
    <div className="-mt-6">
      <HeroImmersive />

      {/* Intro statement */}
      <section id="intro" className="py-24 scroll-mt-24">
        <p className="text-3xl sm:text-5xl font-semibold leading-[1.12] max-w-4xl tracking-tight text-[var(--color-ink)]">
          I turn ideas into{" "}
          <span className="text-[var(--color-achal)]">live products</span> — a
          profitable study platform with 10,000+ users, AI companions, and 0→1
          builds shipped across domains.
        </p>
      </section>

      {/* Crossing services marquee */}
      <section className="marquee-x" aria-hidden="true">
        <div className="marq-band marq-band--black">
          <MarqTrack words={svcA} />
        </div>
        <div className="marq-band marq-band--orange">
          <MarqTrack words={svcB} rev />
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="work scroll-mt-24">
        <div className="work__head">
          <h2 className="eyebrow">Selected work</h2>
          <Link
            href="/case-studies"
            className="eyebrow hover:text-[var(--color-achal)] transition-colors"
          >
            All work →
          </Link>
        </div>

        {projects.map((p, i) => (
          <Link key={p.n} href={p.href} className="work__item group">
            <div className={`work__cover work__cover--${i + 1}`}>
              <span className="work__cover-title">{p.title}</span>
              <span className="work__cover-metric">{p.metric}</span>
            </div>
            <div className="work__info">
              <span className="work__num">{p.n}</span>
              <h3 className="work__name">{p.title}</h3>
              <div className="work__roles">
                {p.roles.map((r) => (
                  <span key={r} className="work__role">
                    {r}
                  </span>
                ))}
              </div>
              <p className="work__desc">{p.desc}</p>
              <span className="work__cta">
                View case study <span aria-hidden>↗</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Testimonials */}
      <section className="testi">
        <div className="work__head">
          <h2 className="eyebrow">What people say</h2>
          <span className="eyebrow opacity-60">Recommendations</span>
        </div>
        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="testi__card">
              <blockquote className="testi__quote">“{t.quote}”</blockquote>
              <figcaption className="testi__by">
                <span className="testi__avatar" aria-hidden>
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="testi__name">{t.name}</span>
                  <span className="testi__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
