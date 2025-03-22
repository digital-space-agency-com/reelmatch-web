
import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get ReelMatch on your iOS or Android device for free."
    },
    {
      number: "02",
      title: "Swipe Through Trailers",
      description: "Watch trailers and swipe right on content you like."
    },
    {
      number: "03",
      title: "Connect With Friends",
      description: "Add friends and family members to your network."
    },
    {
      number: "04",
      title: "Discover Matches",
      description: "Find shows and movies you both want to watch."
    }
  ];

  return (
    <section id="how-it-works" className="bg-reelmatch-secondary/30">
      <div className="section-container">
        <SectionHeading 
          title="How ReelMatch Works"
          subtitle="Our simple process helps you find the perfect content to watch with loved ones in just minutes."
        />

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 mb-12"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-subtle flex items-center justify-center">
                <span className="text-reelmatch-primary font-bold text-xl">{step.number}</span>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-reelmatch-gray mb-6">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="ml-8 h-10 flex items-center">
                    <ArrowRight className="text-reelmatch-primary opacity-60" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
