
import React from "react";
import AppStoreButton from "./ui/AppStoreButton";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-reelmatch-primary/10 to-reelmatch-accent/5 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-reelmatch-primary rounded-full filter blur-3xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-reelmatch-accent rounded-full filter blur-3xl opacity-5 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in">Ready to Transform Your Viewing Experience?</h2>
          <p className="text-reelmatch-gray text-lg mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Download ReelMatch today and start finding perfect matches for your next movie night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <AppStoreButton 
              type="google"
              url="https://play.google.com/store/apps/details?id=team.dsa.reelmatch"
            />
            <AppStoreButton 
              type="apple"
              url="#"
              className="opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
