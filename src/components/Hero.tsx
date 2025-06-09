import React from "react";
import AppStoreButton from "./ui/AppStoreButton";
import { ArrowDown } from "lucide-react";
import ProductHuntBadge from './ProductHuntBadge';

export default function Hero() {
  // Add the base path
  const basePath = window.__PUBLIC_PATH__ || '/';

  return (
    <article className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements - more dramatic with gold/yellow */}
      <div className="absolute inset-0 -z-10">
        {/* First orb - yellow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-reelmatch-primary rounded-full filter blur-3xl opacity-40 animate-pulse-soft"></div>
        
        {/* Second orb - black */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-reelmatch-black rounded-full filter blur-3xl opacity-30 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main content section */}
          <header className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-reelmatch-primary text-reelmatch-dark rounded-full text-sm font-medium border border-yellow-400/30">
                Find movies faster together
              </span>
              <ProductHuntBadge 
                theme="light" 
                size="chip-height"
                className="drop-shadow-sm"
              />
            </div>
            {/* Primary H1 heading for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Find Movies You Both Love - ReelMatch App
            </h1>
            {/* Main descriptive content */}
            <p className="text-xl md:text-2xl text-reelmatch-gray mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
              Stop wasting time choosing what to watch.
              <br className="hidden sm:block" />
              Get matched with movies you'll both enjoy!
            </p>
            {/* Call to action section */}
            <div className="flex gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: "300ms" }}>
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
          </header>
          
          {/* App preview section */}
          <figure className="relative animate-float">
            <div className="relative z-10 mx-auto max-w-xs">
              <div className="aspect-[9/19] rounded-[2.5rem] border-8 border-reelmatch-black overflow-hidden shadow-elevated bg-reelmatch-black">
                <div className="m-1">
                  <picture>
                    <source srcSet={`${basePath}images/screen_home_1_small.webp`} type="image/webp" />
                    <img 
                      src={`${basePath}images/screen_home_1_small.png`}
                      alt="ReelMatch app showing movie trailer swiping interface"
                      loading="eager"
                      width="400"
                      height="890"
                      sizes="(max-width: 768px) 300px, 400px"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </picture>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-20 h-20 bg-reelmatch-primary rounded-xl blur-sm opacity-30 animate-pulse-soft"></div>
            <div className="absolute bottom-10 right-0 w-16 h-16 bg-reelmatch-black rounded-xl blur-sm opacity-20 animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
          </figure>
        </div>
      </div>

      {/* Navigation aid */}
      <nav className="absolute bottom-10 left-0 right-0 hidden md:flex justify-center animate-bounce">
        <a 
          href="#features" 
          onClick={(e) => {
            e.preventDefault();
            const headerOffset = 80; // Match header offset
            const element = document.getElementById('features');
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }}
          className="flex flex-col items-center text-reelmatch-gray"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown size={20} />
        </a>
      </nav>
    </article>
  );
}
