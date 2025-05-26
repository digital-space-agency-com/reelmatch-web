import React, { useState } from "react";
import { Share2, Copy, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const articles = [
  {
    tag: "#launch",
    image: "https://ph-files.imgix.net/a332604b-aeef-423e-a380-7062aa785e8c.png",
    title: "ReelMatch - Find movies you both love, fast! | movie night made easy",
    description: "Swipe trailers, like & watchlist! Connect with friends, see their lists & match on films/series you'll both love. Upgrade for instant TV launch, quick friend matching, and provider/genre filters. Enjoy personalized suggestions for easy movie nights!",
    author: {
      name: "Product Hunt",
      avatar: "/images/product-hunt-logo-orange-480.png",
      date: "May 21, 2025"
    },
    url: "https://www.producthunt.com/products/reelmatch"
  },
  {
    tag: "#review",
    image: "https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2025/01/reelmatch_553cbfc33a6644ab15e98c1a80e13cd9-m.jpg",
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
      date: "May 8, 2025"
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
        return; // Exit early if native share works
      } catch (error) {
        console.log('Native share cancelled or failed:', error);
        // Fall through to show custom share options
      }
    }
    
    // For desktop or devices without native share, or if native share failed
    setShowShareOptions(showShareOptions === index ? null : index);
  };

  const handleCopy = async (url: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        });
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          toast({
            title: "Link copied!",
            description: "The article link has been copied to your clipboard.",
          });
        } catch (err) {
          console.error('Fallback copy failed:', err);
          toast({
            title: "Copy failed",
            description: "Unable to copy link. Please copy manually: " + url,
            variant: "destructive"
          });
        }
        
        document.body.removeChild(textArea);
      }
    } catch (error) {
      console.error('Failed to copy:', error);
      toast({
        title: "Copy failed",
        description: "Unable to copy link. Please try again.",
        variant: "destructive"
      });
    }
    setShowShareOptions(null);
  };

  const handleEmail = (article: typeof articles[0]) => {
    const subject = encodeURIComponent(`Check out: ${article.title}`);
    const body = encodeURIComponent(`I thought you might be interested in this article about ReelMatch:\n\n${article.title}\n\n${article.description}\n\nRead more: ${article.url}`);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    
    try {
      window.location.href = mailtoUrl;
    } catch (error) {
      console.error('Failed to open email client:', error);
      // Fallback: copy the link instead
      handleCopy(article.url);
    }
    setShowShareOptions(null);
  };

  const handleWhatsApp = (article: typeof articles[0]) => {
    const text = encodeURIComponent(`Check out this article about ReelMatch:\n\n${article.title}\n\n${article.url}`);
    const whatsappUrl = `https://wa.me/?text=${text}`;
    
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
      // Fallback: copy the link instead
      handleCopy(article.url);
    }
    setShowShareOptions(null);
  };

  // Close share options when clicking outside
  const handleClickOutside = () => {
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        className="w-10 h-10 rounded-full flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium truncate">by {article.author.name}</p>
                        <p className="text-gray-500 text-sm">{article.author.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <div className="relative">
                        <button 
                          onClick={() => handleShare(article, index)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label="Share article"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                        
                        {showShareOptions === index && (
                          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-20 border">
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
                        className="px-4 py-2 bg-reelmatch-primary text-reelmatch-black rounded-full hover:bg-reelmatch-primary/90 transition-colors whitespace-nowrap"
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
      
      {showShareOptions !== null && (
        <div 
          className="fixed inset-0 z-10"
          onClick={handleClickOutside}
        />
      )}
    </section>
  );
} 