import React, { useState } from "react";
import { Play } from "lucide-react";
import { DEMO_VIDEO } from "@/seo/site";

/**
 * Click-to-play YouTube embed. Shows the thumbnail until the visitor presses
 * play, so the page does not load YouTube's player (about 1 MB of script and
 * its cookies) for people who never watch. Plays from youtube-nocookie.com.
 */
const VideoEmbed: React.FC<{ lang?: "en" | "es"; className?: string }> = ({
  lang = "en",
  className = "",
}) => {
  const [playing, setPlaying] = useState(false);
  const label =
    lang === "es" ? "Reproducir video: cómo funciona ReelMatch" : `Play video: ${DEMO_VIDEO.name}`;

  return (
    <div
      className={`relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-elevated bg-reelmatch-black ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO.id}?autoplay=1&rel=0`}
          title={DEMO_VIDEO.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 w-full h-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${DEMO_VIDEO.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            width="480"
            height="360"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-reelmatch-primary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform">
              <Play size={28} className="text-reelmatch-dark ml-1" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoEmbed;
