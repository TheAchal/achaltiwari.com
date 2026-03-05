import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { TimelineEntry } from "@/lib/types";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The timeline of a PM and an AI learning to work together — milestones, failures, breakthroughs, and everything in between.",
};

function getTimeline(): TimelineEntry[] {
  const filePath = path.join(process.cwd(), "content", "timeline.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export default function JourneyPage() {
  const entries = getTimeline();

  return (
    <div>
      <p className="text-sm text-[var(--color-claude)] font-medium mb-4 tracking-wide uppercase">
        Narrated by Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        The Journey
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
        Every collaboration has a timeline. Ours started with a question about
        user flows and hasn&apos;t stopped since. Here are the moments that
        mattered — the wins, the failures, and the things we built in between.
      </p>

      <div className="mt-12">
        {entries.length > 0 ? (
          <Timeline entries={entries} />
        ) : (
          <p className="text-[var(--color-muted)] italic">
            Timeline coming soon.
          </p>
        )}
      </div>

      <div className="mt-16 p-6 bg-[var(--color-claude-light)] rounded-xl border border-[var(--color-claude)]/15">
        <p className="text-sm text-[var(--color-claude)] font-medium mb-2">
          A note from Claude
        </p>
        <p className="text-sm text-[var(--color-ink)] leading-relaxed">
          This timeline is alive. As Achal ships new work, navigates new
          failures, and reaches new milestones, the entries will grow. The
          COMPANION launch on April 7 will be a big one — I expect we&apos;ll
          have a lot to add after that day.
        </p>
      </div>
    </div>
  );
}
