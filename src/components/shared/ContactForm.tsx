import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Your Name *" required className="bg-background" />
        <Input placeholder="Phone Number *" type="tel" required className="bg-background" />
      </div>
      <Input placeholder="Email Address" type="email" className="bg-background" />
      <Input placeholder="City" className="bg-background" />
      <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
        <option value="">Select Service</option>
        <option>Invisible Grills</option>
        <option>Invisible Grills for Balcony</option>
        <option>Invisible Grills for Windows</option>
        <option>Ceiling Cloth Hangers</option>
      </select>
      <Textarea placeholder="Your Message" rows={4} className="bg-background" />
      <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 font-semibold" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;
