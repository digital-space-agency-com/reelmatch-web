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

  // Use original dimensions for both
  const dimensions = type === "apple" 
    ? { width: 120, height: 40 }
    : { width: 206, height: 80 };

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105 flex items-center"
    >
      <img 
        src={imagePath}
        alt={altText}
        width={dimensions.width}
        height={dimensions.height}
        className={
          type === "apple" 
            ? "h-[40px] md:h-[45px] w-auto" 
            : "h-[55px] md:h-[62px] w-auto" // Slightly taller to better match Apple button
        }
      />
    </a>
  );
};

export default AppStoreButton;
