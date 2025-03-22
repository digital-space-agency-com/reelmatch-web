
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

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/52a13312-9869-4813-9f44-7b39d8eef4f5.png" 
        alt="ReelMatch Logo" 
        className={cn(sizeClasses[size], "mr-2")}
      />
      <span className="font-bold">
        <span className="text-reelmatch-primary">Reel</span>
        <span className="text-reelmatch-black">Match</span>
      </span>
    </div>
  );
};

export default Logo;
