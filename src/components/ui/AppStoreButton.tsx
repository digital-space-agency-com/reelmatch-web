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
  const basePath = window.__PUBLIC_PATH__ || '/';
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block w-[160px] h-[48px] relative transition-opacity duration-300 hover:opacity-90",
        type === "apple" && "scale-[1.02]",
        className
      )}
    >
      <img
        src={type === "apple" 
          ? `${basePath}images/apple_store_button.svg`
          : `${basePath}images/google_play_button.png`
        }
        alt={`${type === "apple" ? "Download on the App Store" : "Get it on Google Play"}`}
        className={cn(
          "w-full h-full object-contain",
          type === "google" && "scale-[0.98]"
        )}
      />
    </a>
  );
};

export default AppStoreButton;
