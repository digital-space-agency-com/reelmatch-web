
import React from "react";
import { cn } from "@/lib/utils";

type StoreType = "google" | "apple";

interface AppStoreButtonProps {
  type: StoreType;
  url: string;
  className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({
  type,
  url,
  className,
}) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 shadow-subtle",
        type === "google" 
          ? "bg-reelmatch-primary text-reelmatch-black hover:opacity-90" 
          : "bg-reelmatch-black text-white hover:opacity-90",
        className
      )}
    >
      {type === "google" ? (
        <>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mr-1"
          >
            <polygon points="3 3 21 12 3 21 3 3"></polygon>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-xs opacity-80">GET IT ON</span>
            <span className="text-sm font-medium">Google Play</span>
          </div>
        </>
      ) : (
        <>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
          </svg>
          <div className="flex flex-col items-start">
            <span className="text-xs opacity-80">Download on the</span>
            <span className="text-sm font-medium">App Store</span>
          </div>
        </>
      )}
    </a>
  );
};

export default AppStoreButton;
