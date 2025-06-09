import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 flex flex-col items-start animate-scale",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-reelmatch-primary/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-reelmatch-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-reelmatch-dark">{description}</p>
    </div>
  );
};

export default FeatureCard;
