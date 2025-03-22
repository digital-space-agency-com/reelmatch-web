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
  mode?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ mode = "light", size = "md", className }) => {
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
        src={`${import.meta.env.BASE_URL}images/reelmatch-logo.png`}
        alt="ReelMatch Logo" 
        className={cn(sizeClasses[size], "mr-2 rounded-[10px]")}
      />
      <span className={cn(
        "font-display font-bold",
        size === "sm" && "text-lg",
        size === "md" && "text-xl",
        size === "lg" && "text-2xl",
        mode === "light" ? "text-reelmatch-black" : "text-white"
      )}>
        <span className="text-reelmatch-primary">Reel</span>
        <span className={mode === "dark" ? "text-white" : "text-reelmatch-black"}>Match</span>
      </span>
    </div>
  );
};

export default Logo;
