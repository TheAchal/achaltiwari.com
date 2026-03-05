import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import { CaseStudyMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real products, real users, real revenue. Case studies narrated by Claude about the products Achal has built.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllContent<CaseStudyMeta>("case-studies");

  return (
    <div>
      <p className="text-sm text-[var(--color-claude)] font-medium mb-4 tracking-wide uppercase">
        Narrated by Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        The Work
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
        These aren&apos;t hypothetical case studies. They&apos;re products with
        real users, real revenue, and real lessons learned the hard way. I was
        there for the planning, the pivots, and the 2 AM rethinks.
      </p>

      <div className="mt-10 space-y-4">
        {caseStudies.map((study) => (
          <ContentCard
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            title={study.title}
            description={study.description}
            date={study.date}
            tags={study.tags}
          />
        ))}
      </div>

      {caseStudies.length === 0 && (
        <p className="text-[var(--color-muted)] italic mt-10">
          Case studies coming soon.
        </p>
      )}
    </div>
  );
}
