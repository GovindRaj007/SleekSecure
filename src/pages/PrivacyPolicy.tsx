import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import PageHero from "@/components/shared/PageHero";
import { BUSINESS } from "@/lib/constants";
import { trackCallClick } from "@/lib/gtm-tracking";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy — SleekSecure Invisible Grills"
        description="Read the SleekSecure Invisible Grills privacy policy to learn how we collect, use, and protect your personal information when you visit our website or request a quote."
        canonicalPath="/privacy-policy"
        ogImage={`${SITE_URL}/assets/hero-luxury-balcony.jpg`}
      />
      <PageHero title="Privacy Policy" subtitle="Your privacy matters to us. Learn how we handle your information." />

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Introduction</h2>
              <p className="leading-relaxed">
                {BUSINESS.name} ("we", "our", or "us") is committed to protecting the privacy of our customers and website visitors. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, phone number, and email address when you submit a contact or quote request form.</li>
                <li>Address or location details for service area verification and site visits.</li>
                <li>Website usage data such as pages visited, time spent, and browser type through cookies and analytics tools.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide quotes for our services.</li>
                <li>To schedule site visits and installations.</li>
                <li>To improve our website and customer experience.</li>
                <li>To send relevant updates about our services (only with your consent).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Data Protection</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is only accessible to authorized personnel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Third-Party Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to any third parties. We may share information with trusted partners who assist us in operating our website or conducting our business, as long as they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Opt out of receiving marketing communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:${BUSINESS.email}`} className="text-primary hover:text-accent transition-colors">{BUSINESS.email}</a>{" "}
                or call us at{" "}
                <a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallClick('privacy_policy', 'contact_link')} className="text-primary hover:text-accent transition-colors">{BUSINESS.phone}</a>.
              </p>
            </div>

            <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">
              Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
