import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { homepageFaqs } from "@/data/faq";

/**
 * Native <details> rather than a JS accordion: every answer stays in the served
 * HTML while collapsed, which is what the FAQPage structured data on this page
 * asserts and what non-JS crawlers read. A React accordion unmounts closed
 * panels, so the answers would not exist in the markup at all.
 */
const FAQ: React.FC = () => (
  <section id="faq" className="section-container bg-reelmatch-secondary/30">
    <SectionHeading
      title="Frequently Asked Questions"
      subtitle="Got questions about ReelMatch? We've got answers."
    />

    <div className="max-w-3xl mx-auto">
      {homepageFaqs.map((faq) => (
        <details
          key={faq.question}
          className="group bg-white rounded-xl overflow-hidden mb-4 shadow-subtle"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-medium hover:bg-reelmatch-secondary/20 transition-colors [&::-webkit-details-marker]:hidden">
            <h3 className="text-left font-medium text-base">{faq.question}</h3>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="px-6 pb-4 pt-0 text-reelmatch-gray leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}

      <p className="text-center mt-8 text-reelmatch-gray">
        More questions?{" "}
        <Link
          to="/faq"
          className="font-medium text-reelmatch-dark underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
        >
          Read the full ReelMatch FAQ
        </Link>
        , or browse our{" "}
        <Link
          to="/guides"
          className="font-medium text-reelmatch-dark underline underline-offset-4 hover:text-reelmatch-primary transition-colors"
        >
          guides to deciding what to watch
        </Link>
        .
      </p>
    </div>
  </section>
);

export default FAQ;
