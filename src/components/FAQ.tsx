
import React from "react";
import SectionHeading from "./ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is ReelMatch free to use?",
      answer: "Yes, ReelMatch is completely free to download and use. We do offer some premium features as in-app purchases, but the core functionality is available at no cost."
    },
    {
      question: "Which streaming services does ReelMatch work with?",
      answer: "ReelMatch is compatible with all major streaming platforms including Netflix, Amazon Prime, Disney+, Hulu, and more. We help you find the content, and then you can watch it on your preferred service."
    },
    {
      question: "How does ReelMatch find matches between friends?",
      answer: "When you and your friends both swipe right on the same movies or shows, ReelMatch identifies these as matches and presents them to you both as recommendations to watch together."
    },
    {
      question: "Is my watch history private?",
      answer: "Yes, your watch history and preferences are private by default. You only share matches with friends you've connected with, and you control what information is shared."
    },
    {
      question: "Is ReelMatch available on iOS?",
      answer: "ReelMatch is currently available on Android and will be coming to iOS soon. Sign up for our newsletter to be notified when the iOS version launches."
    }
  ];

  return (
    <section id="faq" className="section-container bg-reelmatch-secondary/30">
      <SectionHeading 
        title="Frequently Asked Questions"
        subtitle="Got questions about ReelMatch? We've got answers."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl overflow-hidden mb-4 shadow-subtle">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-reelmatch-secondary/20">
                <span className="text-left font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-reelmatch-gray">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
