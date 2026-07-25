import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Achal Tiwari — AI-native Product Manager at Infinity Learn. Selected work, outcomes, skills, and background.",
};

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Product & Strategy",
    items: [
      "PRDs & Specs",
      "User Research & Discovery",
      "Prioritization (RICE / Impact-Effort)",
      "Metrics & Experimentation",
      "Go-to-Market",
      "Pricing & Unit Economics",
    ],
  },
  {
    group: "AI & Technical",
    items: [
      "LLM / agent product design",
      "Prompt & eval design",
      "Model cost / latency tradeoffs",
      "React / Next.js · React Native",
      "PostHog · GA4 · Firebase · GCP",
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
            Product Manager · builds 0→1 · Infinity Learn
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Open to Senior / AI-PM roles · UK + India ·{" "}
            <Link href="/contact" className="text-[var(--color-achal)] hover:underline">
              get in touch
            </Link>
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Summary */}
      <section className="mt-8">
        <p className="text-[var(--color-ink)] leading-relaxed">
          I’m a product manager who ships. I take ideas 0→1 and run several live
          AI products at once across domains — from a profitable notes platform
          with 10,000+ users to a text-first study companion — and I build them
          fast by directing AI rather than writing the code myself. I treat
          assumptions as testable, document failures alongside wins, and care
          most about the decision behind the metric.
        </p>
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
                InfiNotes — AI study-notes platform
              </h3>
              <span className="text-xs text-[var(--color-muted)]">Live · owner</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
              <li>• Grew to 10,000+ registered users on zero paid marketing; profitable within five weeks of launch.</li>
              <li>• 12.9% free-to-paid conversion (of students who claimed a free sample), 1,015+ paid orders.</li>
              <li>• Ran the whole product on ~20% team bandwidth while shipping a second product in parallel.</li>
              <li>• Owned pricing (₹99–₹249 micro-SKUs), WhatsApp-OTP funnel, SEO, and the analytics taxonomy.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Infi Companion — AI study companion
              </h3>
              <span className="text-xs text-[var(--color-muted)]">In market prep · owner</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--color-ink)] text-sm leading-relaxed">
              <li>• Defined a text-first, Hinglish, peer-toned companion for Class 6–12 students (NEET/JEE/boards).</li>
              <li>• Made the hard calls: reversed a voice-first bet to text-first, and designed a token economy priced off real per-model cost (cost / quality / latency tradeoffs).</li>
              <li>• Age-tiered safety guardrails; distress support never gated. Beta NPS 8.6–8.8.</li>
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
            <strong>MBA in AI for Business</strong> — BITS Pilani ·{" "}
            <span className="text-[var(--color-muted)]">2025–2027</span>
          </p>
          <p>
            <strong>B.Tech, Computer Science</strong> — Dr. A.P.J. Abdul Kalam
            Technical University ·{" "}
            <span className="text-[var(--color-muted)]">2019–2023</span>
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
