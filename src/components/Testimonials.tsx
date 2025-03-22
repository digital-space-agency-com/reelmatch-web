
import React from "react";
import SectionHeading from "./ui/SectionHeading";
import BlurContainer from "./ui/BlurContainer";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      quote: "ReelMatch has transformed our family movie nights! We used to spend more time choosing than watching.",
      rating: 5
    },
    {
      name: "David L.",
      quote: "My girlfriend and I have completely different tastes in movies, but ReelMatch helps us find common ground.",
      rating: 5
    },
    {
      name: "Megan T.",
      quote: "The trailer swiping feature is genius. It's like Tinder but for movies and actually useful!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-container">
      <SectionHeading 
        title="What Our Users Say"
        subtitle="Join thousands of happy users who have simplified their movie and series selection process."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <BlurContainer 
            key={index} 
            className="flex flex-col h-full animate-scale"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex mb-4">
              {Array(testimonial.rating).fill(0).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-reelmatch-dark mb-4 flex-grow">"{testimonial.quote}"</p>
            <p className="text-reelmatch-primary font-medium">— {testimonial.name}</p>
          </BlurContainer>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
