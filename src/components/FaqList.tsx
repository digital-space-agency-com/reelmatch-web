import React from "react";
import type { Faq } from "@/data/faq";

/**
 * Questions and answers as plain, always-visible HTML. Unlike the homepage
 * accordion this hides nothing behind an interaction, which is what search and
 * AI crawlers read most reliably.
 */
const FaqList: React.FC<{ faqs: Faq[]; headingLevel?: "h2" | "h3" }> = ({
  faqs,
  headingLevel = "h3",
}) => {
  const Heading = headingLevel;

  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div
          key={faq.question}
          className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100"
        >
          <Heading className="text-lg font-semibold mb-2 text-reelmatch-dark">
            {faq.question}
          </Heading>
          <p className="text-reelmatch-gray leading-relaxed">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
