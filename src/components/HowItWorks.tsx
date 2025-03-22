import React from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Download & Sign Up",
    description: "Get started by downloading ReelMatch and creating your profile.",
  },
  {
    number: "2",
    title: "Swipe Through Trailers",
    description: "Watch trailers and swipe right on movies you'd like to watch.",
  },
  {
    number: "3",
    title: "Match with Friends",
    description: "Connect with friends and discover movies you both want to watch.",
  },
  {
    number: "4",
    title: "Enjoy Movie Night",
    description: "No more endless scrolling - just pick from your matches and enjoy!",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-reelmatch-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={cn(
                "relative p-6 rounded-2xl bg-white shadow-subtle",
                "transform hover:-translate-y-1 transition-transform duration-300"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-reelmatch-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-reelmatch-primary font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-reelmatch-gray">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
