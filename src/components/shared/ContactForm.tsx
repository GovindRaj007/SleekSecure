import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { trackFormSubmission } from "@/lib/gtm-tracking";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const validatePhoneNumber = (phone: string) => {
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10) {
      setPhoneError("enter valid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Remove all non-numeric characters
    const numericOnly = value.replace(/\D/g, "");
    // Restrict to 10 digits maximum
    const limitedToTenDigits = numericOnly.slice(0, 10);
    
    setPhoneNumber(limitedToTenDigits);
    
    if (limitedToTenDigits.length > 0) {
      if (limitedToTenDigits.length < 10) {
        setPhoneError("enter valid phone number");
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
    }
  };

  const sendToTelegram = async (formData: {
    name: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn("Telegram notification failed:", response.status);
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.warn("Telegram notification timeout");
      } else {
        console.warn("Telegram notification error:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate phone number
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Validate required fields
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!service) {
      toast.error("Please select a service");
      return;
    }

    setLoading(true);

    const formData = {
      name: name.trim(),
      phone: phoneNumber,
      service: service,
      message: message.trim() || "",
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const formspreeResponse = await fetch("https://formspree.io/f/xbdeveqp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!formspreeResponse.ok) {
        let errorMessage = "Failed to send inquiry via email";
        try {
          const error = await formspreeResponse.json();
          errorMessage = error.errors?.[0]?.message || errorMessage;
        } catch (parseError) {
          console.warn("Could not parse Formspree error response:", formspreeResponse.status);
          errorMessage = `Server error (${formspreeResponse.status}). Please try again.`;
        }
        throw new Error(errorMessage);
      }

      sendToTelegram(formData);

      // Show success message
      toast.success("Thank you! We'll get back to you shortly.");

      // Track form submission to GTM
      trackFormSubmission('contact_form', 'contact_page');

      // Reset form fields
      setName("");
      setPhoneNumber("");
      setPhoneError("");
      setService("");
      setMessage("");
      
      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error) {
      console.error("Form submission error:", error);
      
      let userMessage = "An error occurred. Please try again.";
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          userMessage = "Request timed out. Please check your connection and try again.";
        } else {
          userMessage = error.message;
        }
      }
      
      toast.error(userMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Your Name *"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-background"
        />
        <div className="flex flex-col">
          <Input
            placeholder="Phone Number *"
            type="tel"
            required
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="bg-background"
          />
          {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
        </div>
      </div>
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
      >
        <option value="">Select Service</option>
        <option value="Invisible Grills">Invisible Grills</option>
        <option value="Invisible Grills for Balcony">Invisible Grills for Balcony</option>
        <option value="Invisible Grills for Windows">Invisible Grills for Windows</option>
        <option value="Ceiling Cloth Hangers">Ceiling Cloth Hangers</option>
      </select>
      <Textarea
        placeholder="Your Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-background"
      />
      <Button
        type="submit"
        className="w-full gradient-primary text-primary-foreground border-0 font-semibold"
        size="lg"
        disabled={loading || phoneError !== ""}
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;
