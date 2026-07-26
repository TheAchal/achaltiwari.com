import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ContentMeta } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getContentSlugs(folder: string): string[] {
  const dir = path.join(contentDir, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/* Returns null for a slug with no file, so routes can 404 instead of throwing.
   An unknown slug is a normal thing for a URL to contain, not an error. */
export function getContentBySlug(
  folder: string,
  slug: string
): { meta: ContentMeta; content: string } | null {
  const filePath = path.join(contentDir, folder, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      slug,
      ...data,
    } as ContentMeta,
    content,
  };
}

export function getAllContent<T extends ContentMeta>(folder: string): T[] {
  const items = getContentSlugs(folder)
    .map((slug) => getContentBySlug(folder, slug))
    .filter((entry) => entry !== null)
    .map((entry) => entry.meta as T);

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
