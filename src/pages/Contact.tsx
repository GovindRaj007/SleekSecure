import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { trackWhatsAppClick, trackCallClick } from "@/lib/gtm-tracking";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const contactInfo = [
  { icon: Phone, label: "Phone", value: BUSINESS.phone, href: `tel:${BUSINESS.phone}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}` },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: MapPin, label: "Address", value: BUSINESS.address },
  { icon: Clock, label: "Working Hours", value: BUSINESS.workingHours },
];

const Contact = () => {
  const handleContactLinkClick = (label: string, href: string) => {
    if (label === "Phone") {
      trackCallClick('contact_page', 'contact_card');
    } else if (label === "WhatsApp") {
      trackWhatsAppClick('contact_page', 'contact_card');
    }
  };
  return (
    <Layout>
      <Seo
        title="Contact Sleek Secure — Free Quote for Invisible Grills | Hyderabad, Telangana & Andhra Pradesh"
        description="Call, WhatsApp or message Sleek Secure for a free site visit and quote on invisible grills, balcony & window grills, and ceiling cloth hangers across Hyderabad, Telangana & Andhra Pradesh."
        canonicalPath="/contact"
        ogImage={`${SITE_URL}/assets/hero-luxury-balcony.jpg`}
        jsonLd={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        badge="Contact Us"
        title="Get in Touch"
        subtitle="Have questions or need a quote? We'd love to hear from you. Reach out and our team will respond promptly."
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
                <BreadcrumbPage className="text-primary-foreground">Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us an Inquiry</h2>
              <div className="card-gradient rounded-xl p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="card-gradient rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover-lift">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-md">
                      <c.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-muted-foreground">{c.label}</div>
                      {c.href ? (
                        <a 
                          href={c.href} 
                          onClick={c.label !== "Email" ? () => handleContactLinkClick(c.label, c.href) : undefined}
                          target={c.href.startsWith("http") ? "_blank" : undefined} 
                          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} 
                          className="font-medium text-xs sm:text-sm md:text-base text-foreground hover:text-primary transition-colors break-words"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-medium text-xs sm:text-sm md:text-base text-foreground break-words">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 h-72 sm:h-80 md:h-96 lg:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.720304970648!2d78.35087862462886!3d17.47309610033148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300351aa505%3A0x3c5c65d1f98b0288!2sSaraswathi%20Heights%20Kondapur!5e0!3m2!1sen!2sin!4v1778497561924!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
