import React from "react";
import AppStoreButton from "./ui/AppStoreButton";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  // Add the base path
  const basePath = window.__PUBLIC_PATH__ || '/';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-reelmatch-secondary rounded-full filter blur-3xl opacity-40 animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-reelmatch-primary rounded-full filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-reelmatch-secondary text-reelmatch-black rounded-full text-sm font-medium mb-6 animate-fade-in">
              Find perfect movies together
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Don't waste time choosing what to watch
            </h1>
            <p className="text-reelmatch-gray text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              ReelMatch helps you and your friends find movies and series you both like by swiping through trailers, creating matches and saving time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "300ms" }}>
              <AppStoreButton 
                type="google"
                url="https://play.google.com/store/apps/details?id=team.dsa.reelmatch"
              />
              <AppStoreButton 
                type="apple"
                url="https://apps.apple.com/ie/app/reelmatch/id6457263386"
              />
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative z-10 mx-auto max-w-xs">
              <div className="aspect-[9/19] rounded-[2.5rem] border-8 border-reelmatch-black overflow-hidden shadow-elevated bg-reelmatch-black">
                <div className="w-full h-full bg-gradient-to-b from-reelmatch-primary/20 to-reelmatch-primary/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <img 
                        src={`${basePath}lovable-uploads/reelmatch-logo.png`}
                        alt="ReelMatch Logo" 
                        className="w-full h-full rounded-[10px]"
                      />
                    </div>
                    <p className="text-white font-medium">ReelMatch App</p>
                    <p className="text-white/60 text-sm">Swipe. Match. Watch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-20 h-20 bg-reelmatch-primary rounded-xl blur-sm opacity-30 animate-pulse-soft"></div>
            <div className="absolute bottom-10 right-0 w-16 h-16 bg-reelmatch-black rounded-xl blur-sm opacity-20 animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#features" className="flex flex-col items-center text-reelmatch-gray">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
