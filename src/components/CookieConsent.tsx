
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CookieConsent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent");
    
    if (!consentGiven) {
      // Show the banner if no consent has been given
      setIsOpen(true);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consentGiven);
        setPreferences(savedPreferences);
      } catch (e) {
        // If parsing fails, reset consent
        localStorage.removeItem("cookieConsent");
        setIsOpen(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(newPreferences);
  };

  const acceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(newPreferences);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    // Save to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setIsOpen(false);
    setShowPreferences(false);
    setPreferences(prefs);
    
    // Apply the preferences (in a real app, this would activate/deactivate tracking scripts)
    applyConsentPreferences(prefs);
  };

  const applyConsentPreferences = (prefs: CookiePreferences) => {
    // This is where you would initialize/disable various tracking scripts
    // based on user consent. For now, we'll just log the preferences.
    console.log("Applied cookie preferences:", prefs);
    
    // Example: If you had Google Analytics, you might do something like:
    if (prefs.analytics) {
      // Initialize analytics
      console.log("Analytics enabled");
    }
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };

  // Button to reopen cookie settings
  const CookieSettingsButton = () => (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 left-4 z-50 bg-reelmatch-secondary text-reelmatch-background text-xs p-2 rounded-md hover:bg-reelmatch-primary transition-colors"
    >
      Cookie Settings
    </button>
  );

  if (!isOpen) return <CookieSettingsButton />;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed bottom-0 left-0 right-0 bg-reelmatch-background p-4 md:p-6 shadow-lg z-50 animate-slide-up border-t-2 border-reelmatch-primary">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close cookie consent"
        >
          <X size={20} />
        </button>
        
        {!showPreferences ? (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-3">Cookie Consent</h2>
            <p className="mb-4 text-reelmatch-gray">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3 justify-end md:justify-between items-center">
              <div className="flex-1 min-w-[200px]">
                <button 
                  onClick={openPreferences}
                  className="text-reelmatch-primary hover:underline mr-4"
                >
                  Customize preferences
                </button>
                <a 
                  href="/privacy-policy" 
                  className="text-reelmatch-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={acceptNecessary}
                >
                  Accept Necessary
                </Button>
                <Button 
                  variant="default"
                  onClick={acceptAll}
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <h3 className="font-medium">Necessary Cookies</h3>
                  <p className="text-sm text-reelmatch-gray">Required for the website to function properly.</p>
                </div>
                <div className="bg-reelmatch-primary/20 text-reelmatch-primary px-2 py-1 rounded text-xs">
                  Required
                </div>
              </div>
              
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <h3 className="font-medium">Analytics Cookies</h3>
                  <p className="text-sm text-reelmatch-gray">Help us understand how visitors interact with our website.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={preferences.analytics}
                    onChange={() => handleToggle('analytics')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-reelmatch-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <h3 className="font-medium">Marketing Cookies</h3>
                  <p className="text-sm text-reelmatch-gray">Used to track visitors across websites to display relevant advertisements.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-reelmatch-primary"></div>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowPreferences(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="default"
                onClick={savePreferences}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CookieConsent;
