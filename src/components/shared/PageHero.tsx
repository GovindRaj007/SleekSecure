import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: ReactNode;
}

const PageHero = ({ title, subtitle, badge, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="gradient-dark pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container-custom text-center">
        {breadcrumbs && <div className="text-left mb-6">{breadcrumbs}</div>}
        {badge && (
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
