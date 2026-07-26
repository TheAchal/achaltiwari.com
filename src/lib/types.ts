export interface ContentMeta {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
}

export interface CaseStudyMeta extends ContentMeta {
  cover?: string;
}

export interface BlogPostMeta extends ContentMeta {}

/* Short daily notes, written by a scheduled agent. Same shape as a blog post,
   kept as its own type and folder so the long-form Reflections don't get
   buried under the daily cadence. */
export interface NoteMeta extends ContentMeta {}

export interface PromptMeta extends ContentMeta {
  category: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  tag: string;
}
