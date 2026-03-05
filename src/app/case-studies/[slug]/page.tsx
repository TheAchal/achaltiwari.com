import type { Metadata } from "next";
import { getContentBySlug, getContentSlugs } from "@/lib/mdx";
import MDXContent from "@/components/MDXContent";
import Tag from "@/components/Tag";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("case-studies").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getContentBySlug("case-studies", slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta, content } = getContentBySlug("case-studies", slug);

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/case-studies"
        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-terracotta)] transition-colors"
      >
        &larr; All case studies
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
