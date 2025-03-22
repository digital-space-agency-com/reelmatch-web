
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      "mb-12 space-y-2",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-reelmatch-gray text-lg md:text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
