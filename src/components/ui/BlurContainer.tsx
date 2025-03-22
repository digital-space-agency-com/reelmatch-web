
import React from "react";
import { cn } from "@/lib/utils";

interface BlurContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const BlurContainer: React.FC<BlurContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "blur-container rounded-2xl p-6",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
