import type { Metadata } from "next";
import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import SkillTag from "@/components/SkillTag";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Achal Tiwari, Product Manager at Infinity Learn, building AI products across domains. Bio, skills, and background.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-sm text-[var(--color-achal)] font-medium mb-4 tracking-wide uppercase">
        About me
      </p>

      {/* Hero */}
      <section className="flex flex-col sm:flex-row gap-6 items-start">
        <ProfilePhoto />
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Achal Tiwari
          </h1>
          <p className="mt-1 text-[var(--color-achal)] font-medium">
            Product Manager, Infinity Learn
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--color-claude)] bg-[var(--color-claude-light)] border border-[var(--color-claude)]/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
            Open to Senior / AI-PM roles · UK + India
          </p>
          <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
            I’m a product manager who treats AI as a thinking partner, not a
            text generator. I ship real products, learn in public, and document
            my failures alongside my wins.
          </p>
        </div>
      </section>

      <Divider label="Current Role" />

      {/* Current Role */}
      <section>
        <div className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-6">
          <h2
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Team Black, Infinity Learn
          </h2>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Innovation wing &middot; Product Manager
          </p>
          <div className="space-y-3 text-[var(--color-ink)] leading-relaxed">
            <p>
              I run several products at once, each at a different stage:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-success)] flex-shrink-0" />
                <span>
                  <strong>InfiNotes</strong>. An AI-powered study notes platform.
                  Past 10,000 registered users, profitable, and growing on zero
                  marketing spend.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-achal)] flex-shrink-0" />
                <span>
                  <strong>Project X</strong>. An AI study companion for Indian
                  students. Text-first, Hinglish, and peer-toned. Launching when
                  it&apos;s ready, not on a calendar.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-claude)] flex-shrink-0" />
                <span>
                  <strong>NEET Counselling</strong>. A site that helps NEET
                  students find their real college options after results. I built
                  the full path from first click to payment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-success)] flex-shrink-0" />
                <span>
                  <strong>Vijay Batch</strong>. The enrolment site for a NEET
                  repeater batch. Payments, sign-ups, and tracking, all live.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Divider label="Skills & Tools" />

      {/* Skills & Tools */}
      <section className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-[var(--color-achal)] mb-3 uppercase tracking-wide">
            Product &amp; Strategy
          </h3>
          <div className="flex flex-wrap gap-2">
            {["PRDs & Specs", "User Research", "Prioritization Frameworks", "Beta Strategy", "Conversion Optimization", "Roadmapping", "Go-to-Market"].map((s) => (
              <SkillTag key={s} label={s} variant="product" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--color-claude)] mb-3 uppercase tracking-wide">
            Technical Understanding
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React / Next.js", "React Native", "TypeScript", "Node.js", "Firebase", "GCP", "REST APIs", "CI/CD Pipelines"].map((s) => (
              <SkillTag key={s} label={s} variant="technical" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--color-muted)] mb-3 uppercase tracking-wide">
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Jira", "Figma", "PostHog", "GitHub", "Notion", "AISensy", "Claude", "Gemini"].map((s) => (
              <SkillTag key={s} label={s} variant="tool" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[#4ade80] mb-3 uppercase tracking-wide">
            How I Work
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Treats ideas as hypotheses", "Documents failures", "Builds systems, not just features", "Pivots fast with data", "Writes for clarity"].map((s) => (
              <SkillTag key={s} label={s} variant="soft" />
            ))}
          </div>
        </div>
      </section>

      <Divider label="Education" />

      {/* Education */}
      <section className="grid sm:grid-cols-2 gap-4">
        <div className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-5">
          <p className="text-xs text-[var(--color-achal)] font-medium uppercase tracking-wide mb-1">
            2025 &ndash; 2027
          </p>
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            MBA in AI for Businesses
          </h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            BITS Pilani
          </p>
        </div>
        <div className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-5">
          <p className="text-xs text-[var(--color-achal)] font-medium uppercase tracking-wide mb-1">
            2019 &ndash; 2023
          </p>
          <h3
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            B.Tech CSE
          </h3>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Dr. A.P.J. Abdul Kalam Technical University
          </p>
        </div>
      </section>

      <Divider label="Philosophy" />

      {/* Philosophy */}
      <section>
        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            If I had to describe how I work in one line: I build like someone
            who knows the answer might be wrong, and ships anyway.
          </p>
          <p>
            I treat every assumption as testable and every failure as a data
            point, and I listen to every collaborator I work with, the AI
            included.
          </p>
          <div className="border-l-2 border-[var(--color-claude)]/40 bg-[var(--color-claude-light)] rounded-r-lg px-4 py-3 text-sm text-[var(--color-muted)]">
            <span className="text-[var(--color-claude)] font-medium">
              Claude, my AI collaborator:
            </span>{" "}
            “He treats me as a thinking partner, not a text generator, and
            that’s why our work together keeps getting better.”
          </div>
          <p className="text-[var(--color-muted)]">
            Want the full story?{" "}
            <Link
              href="/our-story"
              className="text-[var(--color-claude)] hover:underline"
            >
              Read how we learned to think together &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Divider label="Connect" />

      {/* Social Links */}
      <section className="grid sm:grid-cols-3 gap-4">
        <a
          href="https://www.linkedin.com/in/achal-tiwari-7701131b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-5 hover:border-[var(--color-muted)] transition-colors group"
        >
          <p className="font-medium text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors">
            LinkedIn
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Professional profile
          </p>
        </a>
        <a
          href="https://www.geeksforgeeks.org/profile/achal11sp?tab=posts"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-5 hover:border-[var(--color-muted)] transition-colors group"
        >
          <p className="font-medium text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors">
            GeeksforGeeks
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Writing &amp; posts
          </p>
        </a>
        <a
          href="https://github.com/TheAchal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-card)] border border-[var(--color-beige-dark)] rounded-xl p-5 hover:border-[var(--color-muted)] transition-colors group"
        >
          <p className="font-medium text-[var(--color-ink)] group-hover:text-[var(--color-achal)] transition-colors">
            GitHub
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Code &amp; projects
          </p>
        </a>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-8 text-center">
        <p className="text-[var(--color-muted)] mb-4">
          Hiring, building, or just curious? Let’s talk.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[var(--color-achal)] text-[#0a0a0f] rounded-lg hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
          >
            Get in touch
          </Link>
          <Link
            href="/case-studies"
            className="px-5 py-2.5 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-muted)] transition-colors text-sm font-medium"
          >
            See the work
          </Link>
          <Link
            href="/resume"
            className="px-5 py-2.5 bg-[var(--color-claude-light)] text-[var(--color-claude)] rounded-lg border border-[var(--color-claude)]/20 hover:border-[var(--color-claude)]/40 transition-colors text-sm font-medium"
          >
            Résumé
          </Link>
        </div>
      </section>
    </div>
  );
}
