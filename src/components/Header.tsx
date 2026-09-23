import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import { useLocation, useNavigate, Link } from "react-router-dom";

type Lang = "en" | "es";

/**
 * Per-language navigation. "#" links scroll to a section on that language's
 * homepage; the language switch always points at the other homepage.
 */
const nav: Record<
  Lang,
  {
    homePath: string;
    links: { text: string; href: string }[];
    download: string;
    switchTo: { text: string; to: string; lang: Lang; label: string };
  }
> = {
  en: {
    homePath: "/",
    links: [
      { text: "Features", href: "#features" },
      { text: "How It Works", href: "#how-it-works" },
      { text: "Press", href: "#press" },
      { text: "FAQ", href: "/faq" },
      { text: "Guides", href: "/guides" },
    ],
    download: "Download",
    switchTo: { text: "Español", to: "/es", lang: "es", label: "Ver en español" },
  },
  es: {
    homePath: "/es",
    links: [
      { text: "Cómo funciona", href: "#como-funciona" },
      { text: "Para quién", href: "#para-quien" },
      { text: "Por qué tráilers", href: "#por-que-trailers" },
      { text: "Preguntas", href: "#preguntas" },
      { text: "Guías", href: "/es/guias" },
    ],
    download: "Descargar",
    switchTo: { text: "English", to: "/", lang: "en", label: "View in English" },
  },
};

const Header: React.FC<{ lang?: Lang }> = ({ lang = "en" }) => {
  const { homePath, links: navLinks, download, switchTo } = nav[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // Static hosts may serve /es as /es/; treat both as the homepage.
  const onHome = (location.pathname.replace(/\/+$/, "") || "/") === homePath;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!onHome) {
      navigate(homePath);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const scrollToSection = (href: string) => {
    // Remove the # symbol to get the section ID
    const sectionId = href.substring(1);
    
    // Sections live on the homepage for this language; go there first.
    if (!onHome) {
      navigate(homePath);
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

  const languageSwitch = (className: string) => (
    <Link
      to={switchTo.to}
      hrefLang={switchTo.lang}
      lang={switchTo.lang}
      aria-label={switchTo.label}
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        "inline-flex items-center gap-1.5 text-reelmatch-dark hover:text-reelmatch-primary transition-colors duration-300",
        className,
      )}
    >
      <Globe size={18} aria-hidden="true" />
      {switchTo.text}
    </Link>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to={homePath} onClick={handleLogoClick}>
            <Logo mode="light" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 whitespace-nowrap">
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
            {languageSwitch("")}
            <Link
              to={lang === "es" ? "/es/download" : "/download"}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
            >
              {download}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-reelmatch-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={lang === "es" ? (mobileMenuOpen ? "Cerrar menú" : "Abrir menú") : (mobileMenuOpen ? "Close navigation menu" : "Open navigation menu")}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{lang === "es" ? (mobileMenuOpen ? "Cerrar menú" : "Abrir menú") : (mobileMenuOpen ? "Close menu" : "Open menu")}</span>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-subtle">
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
            {languageSwitch("py-2")}
            <Link
              to={lang === "es" ? "/es/download" : "/download"}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary py-2 text-center"
            >
              {download}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
