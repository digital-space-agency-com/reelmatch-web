
import React from "react";
import { cn } from "@/lib/utils";

interface BlurContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BlurContainer: React.FC<BlurContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(
      "blur-container rounded-2xl p-6",
      className
    )}>
      {children}
    </div>
  );
};

export default BlurContainer;
