import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.sleeksecuregrills.in";
export const SITE_NAME = "SleekSecure Invisible Grills";
export const GOOGLE_SITE_VERIFICATION = "your-google-verification-code"; // Update with actual code
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoProps {
  title: string;
  description: string;
  /** Path-only canonical, e.g. "/about". Defaults to current pathname. */
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  /** Optional JSON-LD object(s) injected as application/ld+json. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** If true, prevents indexing (e.g. 404 pages). */
  noindex?: boolean;
  /** Optional comma-separated keyword list. */
  keywords?: string;
  /** Optional author metadata. */
  author?: string;
  /** Optional publisher metadata. */
  publisher?: string;
  /** Optional Twitter handle */
  twitterHandle?: string;
  /** Optional locale for Open Graph */
  locale?: string;
}

const upsertMeta = (
  selector: string,
  attrs: Record<string, string>,
): HTMLMetaElement => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  return el;
};

const upsertLink = (rel: string, href: string): HTMLLinkElement => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
};

const Seo = ({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noindex = false,
  keywords,
  author,
  publisher,
  twitterHandle = "@SleekSecure",
  locale = "en_IN",
}: SeoProps) => {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Google Site Verification
    upsertMeta('meta[name="google-site-verification"]', { 
      name: "google-site-verification", 
      content: GOOGLE_SITE_VERIFICATION 
    });

    // Standard meta
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    }
    if (author) {
      upsertMeta('meta[name="author"]', { name: "author", content: author });
    }
    if (publisher) {
      upsertMeta('meta[name="publisher"]', { name: "publisher", content: publisher });
    }
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    // Canonical
    upsertLink("canonical", url);

    // Open Graph Tags
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: ogType });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
    upsertMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });
    upsertMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/jpeg" });
    upsertMeta('meta[property="og:image:alt"]', { 
      property: "og:image:alt", 
      content: `${title} - SleekSecure Invisible Grills` 
    });

    // Twitter Card Tags
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
    upsertMeta('meta[name="twitter:site"]', { name: "twitter:site", content: twitterHandle });
    upsertMeta('meta[name="twitter:creator"]', { name: "twitter:creator", content: twitterHandle });

    // JSON-LD — manage a single tagged script element per page
    const SCRIPT_ID = "page-jsonld";
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCRIPT_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, url, ogImage, ogType, jsonLd, noindex, keywords, author, publisher, twitterHandle, locale]);

  return null;
};

export default Seo;
