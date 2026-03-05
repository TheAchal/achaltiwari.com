import { TimelineEntry } from "@/lib/types";

function getTagStyle(tag: string) {
  switch (tag) {
    case "with Claude":
      return "bg-[var(--color-claude-light)] text-[var(--color-claude)] border border-[var(--color-claude)]/20";
    case "shipped":
      return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    case "milestone":
      return "bg-[var(--color-achal-light)] text-[var(--color-achal)] border border-[var(--color-achal)]/20";
    case "failure":
      return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    case "building":
      return "bg-sky-500/10 text-sky-400 border border-sky-500/20";
    default:
      return "bg-[var(--color-beige-dark)] text-[var(--color-muted)] border border-[var(--color-muted)]/20";
  }
}

function getDotColor(tag: string) {
  switch (tag) {
    case "with Claude":
      return "bg-[var(--color-claude)] shadow-[0_0_8px_var(--color-claude)]";
    case "shipped":
      return "bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]";
    case "milestone":
      return "bg-[var(--color-achal)] shadow-[0_0_8px_var(--color-achal)]";
    case "failure":
      return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]";
    case "building":
      return "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]";
    default:
      return "bg-[var(--color-muted)]";
  }
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--color-beige-dark)]" />

      <div className="space-y-10">
        {entries.map((entry, i) => (
          <div key={i} className="relative pl-12">
            {/* Dot */}
            <div
              className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ring-4 ring-[var(--color-beige)] ${getDotColor(entry.tag)}`}
            />

            <time className="text-xs text-[var(--color-muted)]">
              {entry.date}
            </time>
            <h3
              className="mt-1 text-lg font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed">
              {entry.description}
            </p>
            <span
              className={`inline-block mt-2 px-2.5 py-0.5 text-xs rounded-full font-medium ${getTagStyle(entry.tag)}`}
            >
              {entry.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
