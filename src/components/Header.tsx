import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If we're on privacy policy page, navigate to home first
    if (location.pathname === '/privacy-policy') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/privacy-policy') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { text: "Features", href: "#features" },
    { text: "How It Works", href: "#how-it-works" },
    { text: "Press", href: "#press" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "FAQ", href: "#faq" },
    { text: "Download App", href: "/download" },
    { text: "Privacy Policy", href: "/privacy-policy" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="/" onClick={handleLogoClick}>
            <Logo mode="light" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-reelmatch-dark hover:text-reelmatch-primary transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
            <a 
              href={`${import.meta.env.BASE_URL}download.html`}
              className="btn-primary"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-reelmatch-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-subtle">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-reelmatch-dark hover:text-reelmatch-primary py-2 transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
            <a 
              href={`${import.meta.env.BASE_URL}download.html`}
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
