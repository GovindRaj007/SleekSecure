import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL, SITE_NAME } from "@/components/shared/Seo";
import PageHero from "@/components/shared/PageHero";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BLOG_POSTS } from "@/content/blog";
import { breadcrumbSchema } from "@/lib/seo";

const BlogIndex = () => (
  <Layout>
    <Seo
      title="Invisible Grills Blog: Hyderabad Guides, Prices & Safety Tips | SleekSecure"
      description="Expert guides on invisible grills in Hyderabad: prices per sq ft, SS316 vs SS304, child and pigeon safety, and area guides for Gachibowli, Kondapur, Kokapet, Kukatpally and more."
      canonicalPath="/blog"
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-IN",
          publisher: { "@id": `${SITE_URL}/#organization` },
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
            dateModified: p.updated ?? p.date,
          })),
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ]}
    />
    <PageHero
      badge="Guides & Insights"
      title="Invisible Grills Guides for Hyderabad Homes"
      subtitle="Prices, materials, safety and area-by-area advice from the SleekSecure installation team."
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
              <BreadcrumbPage className="text-primary-foreground">Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
    />

    <section className="section-padding bg-background">
      <div className="container-custom grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((p) => (
          <article key={p.slug} className="group flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden hover:shadow-lg transition-shadow">
            <Link to={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={p.imageAlt}
                loading="lazy"
                width={640}
                height={360}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
              <h2 className="mt-2 text-lg font-heading font-bold text-foreground leading-snug">
                <Link to={`/blog/${p.slug}`} className="hover:text-primary">{p.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
              <Link to={`/blog/${p.slug}`} className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default BlogIndex;
