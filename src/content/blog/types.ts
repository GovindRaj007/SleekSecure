export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPostData {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> tag, keep under ~60 characters. */
  metaTitle: string;
  /** Meta description, keep under ~155 characters. */
  description: string;
  /** ISO date first published. */
  date: string;
  updated?: string;
  category: "Buying Guide" | "Pricing" | "Materials" | "Comparison" | "Area Guide" | "Safety";
  primaryKeyword: string;
  keywords: string[];
  /** Answer-first summary shown at the top of the post (40–80 words). Quoted by AI engines. */
  summary: string;
  /** Public image path under /images. */
  image: string;
  imageAlt: string;
  /** Markdown body (see components/blog/Markdown.tsx for supported syntax). */
  body: string;
  faqs: BlogFaq[];
  /** Related service/location paths for internal linking. */
  related: { label: string; path: string }[];
}
