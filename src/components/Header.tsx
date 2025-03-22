
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-reelmatch-dark hover:text-reelmatch-primary transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
          <a 
            href="https://www.reelmatch.app/download"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Download
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-reelmatch-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-subtle">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-reelmatch-dark hover:text-reelmatch-primary py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a 
              href="https://www.reelmatch.app/download"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
