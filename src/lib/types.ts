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

export interface PromptMeta extends ContentMeta {
  category: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  tag: string;
}
