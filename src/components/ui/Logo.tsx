declare global {
  interface Window {
    __PUBLIC_PATH__?: string;
  }
}

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };

  // Use the PUBLIC_PATH from window for the base path
  const basePath = window.__PUBLIC_PATH__ || '/';
  
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={`${basePath}lovable-uploads/reelmatch-logo.png`}
        alt="ReelMatch Logo" 
        className={cn(sizeClasses[size], "mr-2 rounded-[10px]")}
      />
      <span className="font-bold">
        <span className="text-reelmatch-primary">Reel</span>
        <span className="text-reelmatch-black">Match</span>
      </span>
    </div>
  );
};

export default Logo;
