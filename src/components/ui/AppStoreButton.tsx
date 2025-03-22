import React from "react";

interface AppStoreButtonProps {
  type: "apple" | "google";
  url: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ type, url }) => {
  const basePath = import.meta.env.BASE_URL;
  
  const imagePath = type === "apple" 
    ? `${basePath}images/apple_store_button.svg`
    : `${basePath}images/google_play_button.svg`;
  
  const altText = type === "apple" 
    ? "Download on the App Store" 
    : "Get it on Google Play";

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      <img 
        src={imagePath}
        alt={altText}
        className="h-[40px] md:h-[45px]"
      />
    </a>
  );
};

export default AppStoreButton;
