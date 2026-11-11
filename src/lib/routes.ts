import { ALL_LOCATIONS } from "./locations";
import { BLOG_POSTS } from "@/content/blog";

/** Slugs served at /invisible-grills-<slug>. */
export const LOCATION_ROUTE_SLUGS = ALL_LOCATIONS.map((l) => l.slug);

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
  lastmod?: string;
  /** Rendered for crawlers but kept out of the sitemap (canonicalised elsewhere). */
  noSitemap?: boolean;
}

const BUILD_DATE = new Date().toISOString().slice(0, 10);

/** Every indexable URL, used by the prerenderer and to generate sitemap.xml. */
const ROUTES: SitemapRoute[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/invisible-grills-hyderabad", priority: 0.98, changefreq: "weekly" },
  { path: "/balcony-invisible-grills", priority: 0.95, changefreq: "monthly" },
  { path: "/child-safety-invisible-grills", priority: 0.95, changefreq: "monthly" },
  { path: "/pigeon-safe-invisible-grills", priority: 0.95, changefreq: "monthly" },
  { path: "/window-invisible-grills", priority: 0.95, changefreq: "monthly" },
  { path: "/ceiling-cloth-hangers", priority: 0.9, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "weekly" },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.8,
    changefreq: "monthly" as const,
    lastmod: p.updated ?? p.date,
  })),
  ...LOCATION_ROUTE_SLUGS.filter((s) => s !== "hyderabad").map((s) => ({
    path: `/invisible-grills-${s}`,
    priority: 0.85,
    changefreq: "monthly" as const,
  })),
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
];

export const ALL_ROUTES: SitemapRoute[] = ROUTES.map((r) => ({ lastmod: BUILD_DATE, ...r }));
