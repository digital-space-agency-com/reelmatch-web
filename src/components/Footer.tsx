import React from "react";
import Logo from "./ui/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

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
        const footerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - footerOffset;
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

  return (
    <footer className="bg-reelmatch-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/" onClick={handleLogoClick}>
              <Logo mode="dark" />
            </a>
            <p className="mt-4 text-gray-400">
              Find your next movie night faster with ReelMatch.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleNavClick(e, '#features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#press" 
                  onClick={(e) => handleNavClick(e, '#press')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleNavClick(e, '#testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources - New section with relevant outbound links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Powered By</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.themoviedb.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  The Movie Database (TMDB)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.imdb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IMDb
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href={`${import.meta.env.BASE_URL}download.html`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a 
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  App Store
                </a>
              </li>
              <li>
                <a 
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:hey@reelmatch.app" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hey@reelmatch.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Attribution Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          {/* Copyright */}
          <p className="text-gray-400 mb-4">&copy; {new Date().getFullYear()} ReelMatch. All rights reserved.</p>
          
          {/* TMDB Attribution - smaller and centered */}
          <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <img 
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB Logo"
              className="h-4"
            />
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
