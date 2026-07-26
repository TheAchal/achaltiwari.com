import type { Metadata } from "next";
import Link from "next/link";
/* The PDF in /public is the canonical résumé; this page mirrors it.
   Keep them in step when either changes. */
const RESUME_PDF = "/Achal-Tiwari-Resume.pdf";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Achal Tiwari, AI-native Associate Product Manager at Infinity Learn. Selected work, outcomes, skills, and background.",
};

/* Kept in step with the downloadable PDF, since anyone comparing the two is
   doing it on this page. The about page keeps its own shorter list. */
const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Product & Strategy",
    items: [
      "PRDs & Specs",
      "User Research & Discovery",
      "Prioritization (RICE / MoSCoW / Impact-Effort)",
      "Metrics, A/B Testing & Experimentation",
      "Roadmapping & Product Lifecycle",
      "Go-to-Market",
      "Pricing & Unit Economics",
      "Stakeholder Management",
    ],
  },
  {
    group: "AI & Technical",
    items: [
      "LLM / agent product design",
      "Prompt & eval design",
      "Model cost / latency tradeoffs",
      "React / Next.js · React Native",
      "Python · SQL · Django · JavaScript",
    ],
  },
  {
    group: "Tools & Analytics",
    items: [
      "PostHog · GA4 · Google Analytics",
      "Firebase · GCP",
      "JIRA · Confluence",
      "Figma · Whimsical",
      "Semrush · SEO",
    ],
  },
];

/* Career history. Selected Work below carries the detail for the current role,
   so this section only expands roles that aren't covered there. */
const EXPERIENCE: {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}[] = [
  {
    company: "Infinity Learn (Team Black / I3W)",
    role: "Associate Product Manager",
    dates: "Oct 2025 - Present",
    location: "Noida, India",
    bullets: [
      "Run several 0→1 AI products at once across web and mobile, owning each from discovery and PRD through launch, analytics and monetisation. Detail in Selected Work below.",
    ],
  },
  {
    company: "GeeksforGeeks",
    role: "Associate Product Manager",
    dates: "Oct 2024 - Jul 2025",
    location: "Noida, India",
    bullets: [
      "Owned the end-to-end lifecycle of an AI-powered SEO suggestion tool inside the internal CMS: 37% more content published per day, and editorial cycles 44% faster.",
      "Tied product goals to business outcomes, contributing to a 33% revenue uplift (₹9L to ₹12L per day) and a 35% rise in peak real-time engagement.",
      "Led B2B work with 30+ universities to ship personalised assessment platforms, defining the personas and workflows that grew institutional engagement 30%.",
      "Ran A/B tests and post-launch analysis in Google Analytics, lifting daily active contributors and satisfaction scores 25%.",
    ],
  },
  {
    company: "GeeksforGeeks",
    role: "Member of Technical Staff",
    dates: "Mar 2023 - Sep 2024",
    location: "Noida, India",
    bullets: [
      "Improved UI/UX with JavaScript, HTML/CSS and Django, cutting bounce rate 12% and lifting engagement 18%.",
      "Drove SEO with Semrush and Ubersuggest, growing organic traffic 20% and click-through rate 15%.",
      "Optimised load time and responsiveness, improving Core Web Vitals and search rankings.",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Achal Tiwari
          </h1>
          <p className="mt-1 text-[var(--color-achal)] font-medium">
            Associate Product Manager · builds 0→1 · Infinity Learn
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Open to Senior / AI-PM roles · UK + India ·{" "}
            <Link href="/contact" className="text-[var(--color-achal)] hover:underline">
              get in touch
            </Link>
          </p>
        </div>
        <a
          href={RESUME_PDF}
          download
          className="no-print inline-block px-4 py-2 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)] transition-colors text-sm font-medium"
        >
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <section className="mt-8">
        <p className="text-[var(--color-ink)] leading-relaxed">
          I’m a product manager who ships. I take ideas 0→1 and run several live
          AI products at once across domains, from a profitable notes platform
          with 10,000+ users to a text-first study companion, and I build them
          fast by directing AI rather than writing the code myself. I treat
          assumptions as testable, document failures alongside wins, and care
          most about the decision behind the metric.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="text-sm font-medium text-[var(--color-achal)] uppercase tracking-wide mb-4">
          Experience
        </h2>

        <div className="space-y-6">
          {EXPERIENCE.map((e) => (
            <div key={e.company + e.dates}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {e.role} · {e.company}
                </h3>
                <span className="text-xs text-[var(--color-muted)]">
                  {e.dates} · {e.location}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
                {e.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="mt-10">
        <h2 className="text-sm font-medium text-[var(--color-achal)] uppercase tracking-wide mb-4">
          Selected Work
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                InfiNotes, AI study-notes platform
              </h3>
              <span className="text-xs text-[var(--color-muted)]">Live · owner</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
              <li>• Grew to 10,000+ registered users on zero paid marketing; profitable within five weeks of launch.</li>
              <li>• 12.9% free-to-paid conversion (of students who claimed a free sample), 1,015+ paid orders.</li>
              <li>• Ran the whole product on ~20% team bandwidth while shipping a second product in parallel.</li>
              <li>• Owned pricing (₹99 to ₹249 micro-SKUs), WhatsApp-OTP funnel, SEO, and the analytics taxonomy.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Project X, AI study companion
              </h3>
              <span className="text-xs text-[var(--color-muted)]">In market prep · owner</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
              <li>• Defined a text-first, Hinglish, peer-toned companion for Class 6 to 12 students (NEET/JEE/boards).</li>
              <li>• Made the hard calls: reversed a voice-first bet to text-first, and designed a token economy priced off real per-model cost (cost / quality / latency tradeoffs).</li>
              <li>• Age-tiered safety guardrails; distress support never gated. Beta NPS 8.6 to 8.8.</li>
              <li>• Led a 5-person squad on a readiness-driven launch instead of a fake deadline.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                NEET Counselling and more 0→1 builds
              </h3>
              <span className="text-xs text-[var(--color-muted)]">Live · owner</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
              <li>• NEET Counselling: a full lead-to-payment funnel that helps NEET students find their real college options after results.</li>
              <li>• Shipped several more production products by directing AI: German AI (a teacher platform) and the I3W company site.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-sm font-medium text-[var(--color-achal)] uppercase tracking-wide mb-4">
          Core Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <h3 className="text-sm font-medium text-[var(--color-ink)] mb-2">{s.group}</h3>
              <ul className="space-y-1 text-sm text-[var(--color-muted)]">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-sm font-medium text-[var(--color-achal)] uppercase tracking-wide mb-4">
          Education
        </h2>
        <div className="space-y-2 text-sm text-[var(--color-ink)]">
          <p>
            <strong>MBA in AI for Business</strong>, BITS Pilani ·{" "}
            <span className="text-[var(--color-muted)]">2025 to 2027</span>
          </p>
          <p>
            <strong>B.Tech, Computer Science</strong>, Dr. A.P.J. Abdul Kalam
            Technical University ·{" "}
            <span className="text-[var(--color-muted)]">2019 to 2023</span>
          </p>
        </div>
      </section>

      <p className="mt-10 text-sm text-[var(--color-muted)] no-print">
        This is the short version.{" "}
        <Link href="/case-studies" className="text-[var(--color-achal)] hover:underline">
          Read the case studies
        </Link>{" "}
        for the decisions behind the numbers.
      </p>
    </div>
  );
}
