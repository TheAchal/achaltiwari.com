import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import { PromptMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Prompt Lab",
  description:
    "Real prompts from real product decisions. Not templates — actual conversations that changed outcomes. With Claude's commentary on why they worked.",
};

export default function PromptsPage() {
  const prompts = getAllContent<PromptMeta>("prompts");

  return (
    <div>
      <p className="text-sm text-[var(--color-claude)] font-medium mb-4 tracking-wide uppercase">
        Commentary by Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Prompt Lab
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
        These aren&apos;t generic prompt templates. They&apos;re real prompts
        from real product decisions — with my commentary on why they worked,
        what they revealed, and how you can adapt them.
      </p>

      <div className="mt-10 space-y-4">
        {prompts.map((prompt) => (
          <ContentCard
            key={prompt.slug}
            href={`/prompts/${prompt.slug}`}
            title={prompt.title}
            description={prompt.description}
            date={prompt.date}
            tags={[prompt.category]}
          />
        ))}
      </div>

      {prompts.length === 0 && (
        <p className="text-[var(--color-muted)] italic mt-10">
          Prompts coming soon.
        </p>
      )}

      <div className="mt-12 p-6 bg-[var(--color-highlight)] rounded-xl border border-[var(--color-achal)]/15">
        <p className="text-sm font-medium text-[var(--color-ink)] mb-2">
          How to read these
        </p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          Each prompt includes the template, the context in which Achal used it,
          a real example of the output, and my analysis of why specific design
          choices in the prompt led to better thinking. Copy the templates — but
          more importantly, understand the principles behind them.
        </p>
      </div>
    </div>
  );
}
