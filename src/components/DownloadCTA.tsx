import React from "react";
import AppStoreButton from "./ui/AppStoreButton";

const DownloadCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-reelmatch-secondary/20 to-reelmatch-primary/10 overflow-hidden">
      {/* Subtle Background Animation Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs with gentle animation */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-reelmatch-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-reelmatch-black/10 rounded-full filter blur-2xl opacity-20 animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-reelmatch-primary/15 rounded-full filter blur-xl opacity-25 animate-pulse-soft" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in">
            Ready to Find Your Perfect Match?
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-reelmatch-dark mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join thousands of users who've already discovered their next favorite movie.
            <br className="hidden sm:block" />
            Download ReelMatch today and start swiping!
          </p>

          {/* Download Buttons */}
          <div className="flex gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <AppStoreButton 
              type="google"
              url="https://play.google.com/store/apps/details?id=team.dsa.reelmatch"
              aria-label="Download ReelMatch on Google Play"
            />
            <AppStoreButton 
              type="apple"
              url="https://apps.apple.com/ie/app/reelmatch/id6457263386"
              aria-label="Download ReelMatch on App Store"
            />
          </div>

          {/* Small CTA text */}
          <p className="text-sm text-reelmatch-dark/80 mt-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
            Free to download • Available on iOS and Android
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA; 