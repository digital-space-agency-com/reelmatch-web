import React, { useState } from "react";
import { Share2, Copy, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const articles = [
  {
    tag: "#review",
    image: "https://authors.appadvice.com/wp-content/appadvice-v2-media/2025/01/reelmatch_553cbfc33a6644ab15e98c1a80e13cd9.jpg", // You'll need to add this image
    title: "Your Perfect Movie Watchlist is Just A Right Swipe Away With ReelMatch",
    description: "Creating the movie watchlist of your dreams is just a right swipe away with ReelMatch. The premise is simple. You start with a random trailer from a movie. Watch it and see if it's something your interested in.",
    author: {
      name: "Brent Dirks",
      avatar: "https://appadvice.com/appadvice_logo_768x768.png",
      date: "January 7, 2025"
    },
    url: "https://appadvice.com/post/your-perfect-movie-watchlist-is-just-a-right-swipe-away-with-reelmatch/781267"
  },
  {
    tag: "#app",
    image: "https://itsallwidgets.com/screenshots/app-4409.png",
    title: "ReelMatch: Swipe, Match & Watch - Discover Films & Series with Friends",
    description: "Discover your next favourite film or series with ReelMatch! Swipe through captivating trailers, like the ones that grab your attention, and effortlessly add them to your personal watchlist.",
    author: {
      name: "Its All Widgets",
      avatar: "https://itsallwidgets.com/images/favicon.png", 
      date: "2024"
    },
    url: "https://itsallwidgets.com/reelmatch"
  }
];

export default function Press() {
  const { toast } = useToast();
  const [showShareOptions, setShowShareOptions] = useState<number | null>(null);

  const handleShare = async (article: typeof articles[0], index: number) => {
    // For mobile devices that support native share
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: article.url
        });
      } catch (error) {
        console.log('Error sharing:', error);
        setShowShareOptions(index); // Show fallback if native share is cancelled
      }
    } else {
      // For desktop or devices without native share
      setShowShareOptions(index);
    }
  };

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
    setShowShareOptions(null);
  };

  const handleEmail = (article: typeof articles[0]) => {
    const subject = encodeURIComponent(article.title);
    const body = encodeURIComponent(`Check out this article about ReelMatch:\n\n${article.url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setShowShareOptions(null);
  };

  const handleWhatsApp = (article: typeof articles[0]) => {
    const text = encodeURIComponent(`Check out this article about ReelMatch: ${article.url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareOptions(null);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Press Coverage
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative">
                <span className="absolute top-4 left-4 bg-black/70 text-white px-4 py-1 rounded-full text-sm">
                  {article.tag}
                </span>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {article.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">by {article.author.name}</p>
                        <p className="text-gray-500 text-sm">{article.author.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <button 
                          onClick={() => handleShare(article, index)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label="Share article"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                        
                        {/* Share options dropdown */}
                        {showShareOptions === index && (
                          <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                            <button
                              onClick={() => handleCopy(article.url)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                            >
                              <Copy className="w-4 h-4" />
                              Copy link
                            </button>
                            <button
                              onClick={() => handleEmail(article)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                            >
                              <Mail className="w-4 h-4" />
                              Email
                            </button>
                            <button
                              onClick={() => handleWhatsApp(article)}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                            >
                              <Phone className="w-4 h-4" />
                              WhatsApp
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-reelmatch-primary text-reelmatch-black rounded-full hover:bg-reelmatch-primary/90 transition-colors"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Click outside handler to close share options */}
      {showShareOptions !== null && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setShowShareOptions(null)}
        />
      )}
    </section>
  );
} 