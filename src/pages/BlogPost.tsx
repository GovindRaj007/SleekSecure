import { Link, Navigate, useParams } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL, SITE_NAME } from "@/components/shared/Seo";
import PageHero from "@/components/shared/PageHero";
import Markdown, { extractToc } from "@/components/blog/Markdown";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BLOG_POSTS, BLOG_AUTHOR, getPostBySlug } from "@/content/blog";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { trackCallClick, trackWhatsAppClick } from "@/lib/gtm-tracking";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const path = `/blog/${post.slug}`;
  const url = `${SITE_URL}${path}`;
  const toc = extractToc(post.body);
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const wa = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I read "${post.title}" and would like a free site visit and quote.`)}`;

  return (
    <Layout>
      <Seo
        title={`${post.metaTitle} | SleekSecure`}
        description={post.description}
        keywords={post.keywords.join(", ")}
        canonicalPath={path}
        ogType="article"
        ogImage={`${SITE_URL}${post.image}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            mainEntityOfPage: url,
            headline: post.title,
            description: post.description,
            abstract: post.summary,
            image: `${SITE_URL}${post.image}`,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            inLanguage: "en-IN",
            keywords: post.keywords.join(", "),
            articleSection: post.category,
            about: { "@type": "Thing", name: "Invisible grills" },
            spatialCoverage: { "@type": "City", name: "Hyderabad" },
            author: {
              "@type": "Organization",
              name: BLOG_AUTHOR.name,
              description: BLOG_AUTHOR.description,
              url: `${SITE_URL}/about`,
            },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
            },
          },
          faqSchema(post.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />

      <PageHero
        badge={post.category}
        title={post.title}
        breadcrumbs={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground line-clamp-1">{post.metaTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <article className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-muted-foreground mb-6">
            By <Link to="/about" className="text-primary hover:underline">{BLOG_AUTHOR.name}</Link> ·{" "}
            <time dateTime={post.updated ?? post.date}>
              {post.updated ? `Updated ${formatDate(post.updated)}` : formatDate(post.date)}
            </time>
          </p>

          {/* Answer-first summary: the passage AI overviews and assistants are most likely to quote */}
          <div className="rounded-2xl border-l-4 border-primary bg-secondary p-5 md:p-6 mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Quick answer</p>
            <p className="text-foreground leading-relaxed">{post.summary}</p>
          </div>

          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            className="w-full rounded-2xl mb-8 object-cover aspect-[16/9]"
          />

          {toc.length > 2 && (
            <nav aria-label="Table of contents" className="rounded-xl border border-border/60 p-5 mb-8">
              <p className="font-heading font-semibold text-foreground mb-2">In this guide</p>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-primary hover:underline">{t.text}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <Markdown source={post.body} />

          <section className="mt-12" aria-labelledby="faqs">
            <h2 id="faqs" className="text-2xl font-heading font-bold text-foreground mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {post.faqs.map((f) => (
                <details key={f.question} className="group rounded-xl border border-border/60 p-4" open>
                  <summary className="cursor-pointer list-none font-heading font-semibold text-foreground">
                    <h3 className="inline text-base">{f.question}</h3>
                  </summary>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <aside className="mt-12 rounded-2xl gradient-dark p-6 md:p-8 text-center">
            <p className="text-xl md:text-2xl font-heading font-bold text-primary-foreground mb-2">
              Get a free site visit in Hyderabad
            </p>
            <p className="text-primary-foreground/70 mb-6">SS316 invisible grills · 25mm child-safe spacing · 10-year warranty</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white">
                <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("blog_post")}>
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp us
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} onClick={() => trackCallClick("blog_post")}>
                  <Phone className="w-5 h-5 mr-2" /> {BUSINESS.phoneFormatted}
                </a>
              </Button>
            </div>
          </aside>

          {post.related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">Related services</h2>
              <ul className="flex flex-wrap gap-2">
                {post.related.map((r) => (
                  <li key={r.path}>
                    <Link to={r.path} className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-foreground hover:border-primary hover:text-primary">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12">
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">More guides</h2>
            <ul className="space-y-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-2 text-primary hover:underline">
                    <ArrowRight className="w-4 h-4" /> {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
