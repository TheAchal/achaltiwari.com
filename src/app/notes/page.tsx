import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import { NoteMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "A short daily note on what moved in Indian AI, product and edtech, and what it means for people actually building.",
};

export default function NotesPage() {
  const notes = getAllContent<NoteMeta>("notes");

  return (
    <div>
      <p className="text-sm text-[var(--color-achal)] font-medium mb-4 tracking-wide uppercase">
        Daily, by Achal with Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Notes
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
        One short note a day on what moved in Indian AI, product and edtech, and
        what it actually means for someone building. Quick takes, published as
        they land. The longer, more considered pieces live in{" "}
        <a href="/blog" className="text-[var(--color-achal)] hover:underline">
          Reflections
        </a>
        .
      </p>

      <div className="mt-10 space-y-4">
        {notes.map((note) => (
          <ContentCard
            key={note.slug}
            href={`/notes/${note.slug}`}
            title={note.title}
            description={note.description}
            date={note.date}
            tags={note.tags}
          />
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-[var(--color-muted)] italic mt-10">
          The first note lands tomorrow morning.
        </p>
      )}
    </div>
  );
}
