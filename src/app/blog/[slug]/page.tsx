import type { Metadata } from "next";
import { getContentBySlug, getContentSlugs } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";
import Tag from "@/components/Tag";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getContentBySlug("blog", slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta, content } = getContentBySlug("blog", slug);

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/blog"
        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-terracotta)] transition-colors"
      >
        &larr; All posts
      </Link>

      <h1
        className="mt-6 text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {meta.title}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <time className="text-sm text-[var(--color-muted)]">{meta.date}</time>
        {meta.tags?.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="mt-10">
        <MDXContent source={content} />
      </div>
    </div>
  );
}
