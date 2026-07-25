import Link from "next/link";
import Image from "next/image";
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
    href: "https://infinotes.live/",
    external: true,
    img: "/images/work/infinotes.png",
    tag: null,
    roles: ["Product", "Growth", "0→1"],
    metric: "10K+ users · profitable",
    desc: "An AI study-notes platform. Past 10,000 users and profitable in five weeks, with nothing spent on marketing. Roughly 13 in every 100 free users go on to pay.",
  },
  {
    n: "02",
    title: "Project X",
    href: "/case-studies/project-x",
    external: false,
    img: null,
    tag: "Anonymized · pre-launch",
    roles: ["Product", "AI", "Monetization"],
    metric: "AI study companion",
    desc: "An AI study buddy for Indian students. It talks in Hinglish, more like a friend than a teacher, and its pricing is built around what the AI actually costs to run.",
  },
  {
    n: "03",
    title: "NEET Counselling",
    href: "https://neetcounselling.live/",
    external: true,
    img: "/images/work/neetcounselling.png",
    tag: null,
    roles: ["Product", "0→1", "Growth"],
    metric: "Live · lead to payment",
    desc: "Helps NEET students work out their real college options once results are out. I built the whole path, from first click to payment.",
  },
];

// Hidden until Achal's real LinkedIn recommendations land. Flip to true after
// replacing the slots below with the real quotes.
const SHOW_TESTIMONIALS = false;
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
          <span className="text-[var(--color-achal)]">live products</span>. So
          far that&apos;s a profitable platform with 10,000+ users, a few AI
          apps, and a bunch of things I&apos;ve shipped from scratch across
          different domains.
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

        {projects.map((p, i) => {
          const inner = (
            <>
              <div
                className={`work__cover work__cover--${i + 1}${
                  p.img ? " work__cover--shot" : ""
                }`}
              >
                {p.img && (
                  <Image
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="work__cover-img"
                  />
                )}
                {p.tag && <span className="work__cover-tag">{p.tag}</span>}
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
                  {p.external ? "Visit site" : "Read the story"}{" "}
                  <span aria-hidden>↗</span>
                </span>
              </div>
            </>
          );
          return p.external ? (
            <a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="work__item group"
            >
              {inner}
            </a>
          ) : (
            <Link key={p.n} href={p.href} className="work__item group">
              {inner}
            </Link>
          );
        })}
      </section>

      {/* Testimonials — hidden until real LinkedIn recommendations are added */}
      {SHOW_TESTIMONIALS && (
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
      )}
    </div>
  );
}
