/**
 * Build-time prerender + SEO/GEO file generation.
 *
 * Runs after `vite build` (client → dist/) and `vite build --ssr` (server → dist-ssr/).
 * For every route it writes a fully rendered HTML file with page-specific
 * <title>, meta, canonical, Open Graph and JSON-LD, so Google, Bing and AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) see real content.
 * It also generates sitemap.xml, llms.txt and llms-full.txt from the same data.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://www.sleeksecure.in";

const { render, ALL_ROUTES, BLOG_POSTS, ALL_LOCATIONS, BUSINESS, SERVICES } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const rawTemplate = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

// Preload the self-hosted Latin font files (hashed names) so text renders in the
// final font quickly, avoiding font-swap layout shift.
const fontPreloads = fs
  .readdirSync(path.join(dist, "assets"))
  .filter((f) => /^(dm-sans|playfair-display)-latin-wght-normal\..*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join("\n    ");
// The template's <title> is stripped per page, so anchor on the charset meta instead.
const template = rawTemplate.replace(
  '<meta charset="UTF-8" />',
  `<meta charset="UTF-8" />\n    ${fontPreloads}`,
);

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Remove the template's static, homepage-only head tags; each page gets its own.
const stripHead = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="(description|keywords|author|publisher|robots|googlebot)"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");

const headTags = (h) => {
  const robots = h.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const tags = [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    h.keywords && `<meta name="keywords" content="${esc(h.keywords)}" />`,
    h.author && `<meta name="author" content="${esc(h.author)}" />`,
    h.publisher && `<meta name="publisher" content="${esc(h.publisher)}" />`,
    `<meta name="robots" content="${robots}" />`,
    !h.noindex && `<link rel="canonical" href="${esc(h.url)}" />`,
    `<meta property="og:locale" content="${esc(h.locale)}" />`,
    `<meta property="og:type" content="${esc(h.ogType)}" />`,
    `<meta property="og:site_name" content="SleekSecure Invisible Grills" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${esc(h.url)}" />`,
    `<meta property="og:image" content="${esc(h.ogImage)}" />`,
    `<meta property="og:image:alt" content="${esc(h.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${esc(h.ogImage)}" />`,
    `<meta name="twitter:site" content="${esc(h.twitterHandle)}" />`,
    h.jsonLd &&
      `<script type="application/ld+json" id="page-jsonld">${JSON.stringify(h.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
};

const outFile = (route) =>
  route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route.replace(/^\//, "")}.html`);

const writePage = async (route, file) => {
  const { html, head } = await render(route);
  if (!head) throw new Error(`No <Seo> rendered for ${route}`);
  const page = stripHead(template)
    .replace("</head>", `    ${headTags(head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  return head;
};

let failures = 0;
for (const r of ALL_ROUTES) {
  try {
    const head = await writePage(r.path, outFile(r.path));
    const canonicalPath = head.url.replace(SITE, "") || "/";
    if (!r.noSitemap && canonicalPath !== r.path) {
      console.warn(`  ! ${r.path} canonicalises to ${canonicalPath}`);
    }
    console.log(`  ✓ ${r.path}`);
  } catch (err) {
    failures++;
    console.error(`  ✗ ${r.path}:`, err);
  }
}
// Real 404 page (served by Vercel with a 404 status for unknown URLs).
await writePage("/__not-found__", path.join(dist, "404.html"));
console.log("  ✓ 404.html");

// ---------- sitemap.xml ----------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_ROUTES.filter((r) => !r.noSitemap)
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(2)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

// ---------- llms.txt (https://llmstxt.org) ----------
const hyd = ALL_LOCATIONS.filter((l) => l.state === "Telangana" && l.slug !== "hyderabad");
const ap = ALL_LOCATIONS.filter((l) => l.state === "Andhra Pradesh");
const llms = `# SleekSecure Invisible Grills

> SleekSecure Invisible Grills is an invisible grill installation company based in Kondapur (JV Hills, Gachibowli), Hyderabad, Telangana, India. It installs SS316 marine-grade stainless steel invisible grills for balconies and windows, child-safety and pigeon-safe grills, and ceiling cloth hangers across Hyderabad, Telangana and Andhra Pradesh.

Key facts:
- Product: invisible grills made of 2mm SS316 marine-grade stainless steel cable (nylon coated) on aluminium tracks
- Child-safe spacing: 25mm standard, customisable up to 40mm
- Strength: about 250kg breaking strength per cable, tension-tested on site
- Warranty: 10-year written warranty on invisible grills
- Price: ₹100 to ₹145 per sq ft of the opening for SS316 invisible grills (exact rate confirmed after a free site visit)
- Experience: 6+ years and 1,100+ installations across Hyderabad, Telangana and Andhra Pradesh
- Free site visit and measured written quote
- Typical installation time: about 1 day per apartment
- Offer: free ceiling cloth hanger with invisible grill orders of ₹20,000 or more
- Phone / WhatsApp: ${BUSINESS.phone}
- Email: ${BUSINESS.email}
- Address: ${BUSINESS.address}
- Hours: ${BUSINESS.workingHours}
- Google Business Profile: ${BUSINESS.googleBusinessProfile.mapsUrl}

## Services
${SERVICES.map((s) => `- [${s.title}](${SITE}${s.path}): ${s.shortDesc}`).join("\n")}

## Hyderabad
- [Invisible grills in Hyderabad](${SITE}/invisible-grills-hyderabad): city-wide service page, areas covered and FAQs

## Hyderabad & Telangana areas served
${hyd.map((l) => `- [Invisible grills in ${l.name}](${SITE}/invisible-grills-${l.slug}): ${l.intro}`).join("\n")}

## Andhra Pradesh areas served
${ap.map((l) => `- [Invisible grills in ${l.name}](${SITE}/invisible-grills-${l.slug}): ${l.intro}`).join("\n")}

## Guides
${BLOG_POSTS.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.summary}`).join("\n")}

## Optional
- [Full guide text for AI systems](${SITE}/llms-full.txt)
- [About](${SITE}/about)
- [Contact](${SITE}/contact)
`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);

const llmsFull = [
  llms,
  ...BLOG_POSTS.map(
    (p) => `\n---\n\n# ${p.title}\n\nURL: ${SITE}/blog/${p.slug}\nPublished: ${p.date}\n\n**Quick answer:** ${p.summary}\n\n${p.body.trim()}\n\n## FAQs\n\n${p.faqs
      .map((f) => `### ${f.question}\n\n${f.answer}`)
      .join("\n\n")}\n`,
  ),
].join("\n");
fs.writeFileSync(path.join(dist, "llms-full.txt"), llmsFull);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`\nPrerendered ${ALL_ROUTES.length - failures}/${ALL_ROUTES.length} routes, wrote sitemap.xml, llms.txt, llms-full.txt`);
if (failures) process.exit(1);
