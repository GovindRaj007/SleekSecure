import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Native <details>/<summary> accordion: answers stay in the HTML (prerendered)
 * so search engines and AI crawlers can read and cite them, while visitors
 * still get a collapsible list.
 */
const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <div className="w-full">
      {faqs.map((faq, i) => (
        <details key={i} className="group border-b border-border/50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-heading font-semibold text-foreground hover:text-primary [&::-webkit-details-marker]:hidden">
            <h3 className="text-base">{faq.question}</h3>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQAccordion;
