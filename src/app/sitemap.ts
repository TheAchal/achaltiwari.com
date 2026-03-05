import type { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://achaltiwari.com";

  const staticRoutes = ["", "/about", "/journey", "/case-studies", "/blog", "/prompts"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const caseStudies = getContentSlugs("case-studies").map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
  }));

  const blogPosts = getContentSlugs("blog").map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const prompts = getContentSlugs("prompts").map((slug) => ({
    url: `${baseUrl}/prompts/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudies, ...blogPosts, ...prompts];
}
