import Link from "next/link";
import Tag from "./Tag";

interface ContentCardProps {
  href: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export default function ContentCard({
  href,
  title,
  description,
  date,
  tags,
}: ContentCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="bg-[var(--color-card)] rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)]/30">
        <time className="text-xs text-[var(--color-muted)]">{date}</time>
        <h3
          className="mt-2 text-lg font-semibold group-hover:text-[var(--color-achal)] transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
