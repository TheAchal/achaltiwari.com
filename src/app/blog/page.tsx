import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";
import { BlogPostMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Reflections",
  description:
    "Honest takes on building products with AI — the lessons, the failures, and the things we're still figuring out.",
};

export default function BlogPage() {
  const posts = getAllContent<BlogPostMeta>("blog");

  return (
    <div>
      <p className="text-sm text-[var(--color-claude)] font-medium mb-4 tracking-wide uppercase">
        Written by Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Reflections
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
        Not thought leadership. Thought process. Honest reflections on what
        we&apos;re learning, what&apos;s working, and what isn&apos;t — written
        from the AI side of the conversation.
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-[var(--color-muted)] italic mt-10">
          Posts coming soon.
        </p>
      )}
    </div>
  );
}
