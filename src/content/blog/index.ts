import type { BlogPostData } from "./types";
import { hyderabadGuide, priceGuide, nearMeGuide } from "./pillar";
import { gradeComparison, comparisonGuide, prosConsGuide } from "./materials";
import { westHyderabadGuide, newHighRiseGuide, northWestGuide } from "./areas";
import { childSafetyGuide, pigeonGuide } from "./safety";

export type { BlogPostData, BlogFaq } from "./types";

/** Ordered by keyword priority: pillar/"near me" first, then pricing, materials, areas, safety. */
export const BLOG_POSTS: BlogPostData[] = [
  hyderabadGuide,
  priceGuide,
  nearMeGuide,
  westHyderabadGuide,
  gradeComparison,
  comparisonGuide,
  newHighRiseGuide,
  northWestGuide,
  childSafetyGuide,
  pigeonGuide,
  prosConsGuide,
];

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const BLOG_AUTHOR = {
  name: "SleekSecure Installation Team",
  description:
    "Invisible grill installers based in Kondapur, Hyderabad, with 8+ years of experience fitting SS316 invisible grills across Telangana and Andhra Pradesh.",
};
