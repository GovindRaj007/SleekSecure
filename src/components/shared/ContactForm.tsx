import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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

    try {
      // Send form data to Telegram Bot API via serverless function
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phoneNumber,
          service: service,
          message: message.trim() || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }

      // Show success message
      toast.success(data.message || "Thank you! We'll get back to you shortly.");

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
      toast.error(
        error instanceof Error 
          ? error.message 
          : "An error occurred. Please try again."
      );
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
