import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import { useLocation, useNavigate, Link } from "react-router-dom";

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

    // If we're on privacy policy or download page, navigate to home first
    if (location.pathname === '/privacy-policy' || location.pathname === '/download') {
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
    if (location.pathname === '/privacy-policy' || location.pathname === '/download') {
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
    { text: "Privacy Policy", href: "/privacy-policy" }
  ];

  const scrollToSection = (href: string) => {
    // Remove the # symbol to get the section ID
    const sectionId = href.substring(1);
    
    // If we're on privacy policy or download page, navigate to home first
    if (location.pathname === '/privacy-policy' || location.pathname === '/download') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
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
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" onClick={handleLogoClick}>
            <Logo mode="light" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
                <button 
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-reelmatch-dark hover:text-reelmatch-primary transition-colors duration-300"
                >
                  {link.text}
                </button>
              ) : (
                <Link 
                  key={index}
                  to={link.href}
                  className="text-reelmatch-dark hover:text-reelmatch-primary transition-colors duration-300"
                >
                  {link.text}
                </Link>
              )
            ))}
            <Link 
              to="/download"
              className="btn-primary"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-reelmatch-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-subtle">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
                <button 
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-reelmatch-dark hover:text-reelmatch-primary py-2 transition-colors duration-300 text-left"
                >
                  {link.text}
                </button>
              ) : (
                <Link 
                  key={index}
                  to={link.href}
                  className="text-reelmatch-dark hover:text-reelmatch-primary py-2 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              )
            ))}
            <Link 
              to="/download"
              className="btn-primary py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
