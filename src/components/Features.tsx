
import React from "react";
import SectionHeading from "./ui/SectionHeading";
import FeatureCard from "./ui/FeatureCard";
import { Clock, Users, ThumbsUp, Film } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: Film,
      title: "Swipe Through Trailers",
      description: "Watch trailers and swipe right on movies and shows you like, just like a dating app."
    },
    {
      icon: Users,
      title: "Match With Friends",
      description: "Connect with friends and family to discover content that you both want to watch together."
    },
    {
      icon: ThumbsUp,
      title: "Create Watchlists",
      description: "Build personal watchlists of content you're interested in for future viewing."
    },
    {
      icon: Clock,
      title: "Save Time Deciding",
      description: "No more long debates about what to watch - find matches instantly and start watching."
    }
  ];

  return (
    <section id="features" className="section-container">
      <SectionHeading 
        title="Why Use ReelMatch?"
        subtitle="Stop the endless scrolling and arguing over what to watch. ReelMatch makes finding your next movie night pick effortless."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
