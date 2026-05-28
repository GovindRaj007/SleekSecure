import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import { homeGraph } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import ServiceAreas from "@/components/home/ServiceAreas";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import offerPoster from "@/assets/Offer-Poster.jpg";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Layout>
      <Seo
        title="Premium SS316 Invisible Grills in Hyderabad | SleekSecure"
        description="Secure your home with premium SS316 invisible grills in Hyderabad. We provide balcony invisible grills, stainless steel window grills, ceiling cloth hangers, child safety solutions, and modern safety installations across Telangana & Andhra Pradesh."
        keywords="invisible grills Hyderabad, what are invisible grills, SS316 invisible grills, balcony invisible grills, stainless steel window grills, balcony safety grills, invisible grills for windows, ceiling cloth hangers Hyderabad, invisible grill installation Hyderabad, SleekSecure Invisible Grills, invisible grills near me, best invisible grills in hyderabad"
        canonicalPath="/"
        ogImage={`${SITE_URL}/assets/hero-balcony-invisible-grills.jpg`}
        author="SleekSecure Invisible Grills"
        publisher="SleekSecure Invisible Grills"
        jsonLd={homeGraph()}
      />

      {/* Fixed hero — stays anchored at top while content scrolls over it */}
      <div className="fixed top-0 left-0 right-0 h-[80svh] z-0 pointer-events-none">
        <div ref={heroRef} className={`pointer-events-auto h-full ${isScrolled ? "" : "rounded-t-3xl"}`}>
          <HeroSection />
        </div>
      </div>

      {/* Spacer matching hero height so floating content begins below it */}
      <div aria-hidden className="h-[80svh]" />

      {/* Floating premium content card — overlaps the bottom of the hero */}
      <div className="relative z-10 -mt-[15svh] sm:-mt-[20svh] md:-mt-[18svh] pb-10 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] md:rounded-[2.25rem] bg-background shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.25),0_30px_60px_-25px_rgba(0,0,0,0.25)] ring-1 ring-border/60 overflow-hidden animate-fade-in">
          {/* Offer Poster */}
          <div className="w-full">
            <img 
              src={offerPoster} 
              alt="Exclusive Offer: Get free ceiling cloth hanger with invisible grill installation worth Rs.20,000 or more" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
          <div>
            <ServiceShowcase />
            <BeforeAfterShowcase />
            <ServicesOverview />
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <WhyChooseUs />
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <ServiceAreas />
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <Testimonials />
            <CTASection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
