import React from "react";
import { Link } from "react-router-dom";
import { WEB_CHECKOUT, WEB_DISCOUNT_PERCENT } from "@/seo/site";
import { useWebCheckoutEnabled } from "@/lib/remoteConfig";

/** Homepage nudge to /pro. Renders nothing unless web checkout is switched on. */
const ProTeaser: React.FC = () => {
  const enabled = useWebCheckoutEnabled();
  if (!enabled) return null;
  return (
    <section className="py-16 bg-reelmatch-dark text-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <p className="text-reelmatch-primary font-semibold mb-2">
          Web-only price: {WEB_DISCOUNT_PERCENT}% off
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Go Pro for ${WEB_CHECKOUT.webMonthly.toFixed(2)}/month
        </h2>
        <p className="text-gray-300 mb-6">
          Unlimited swipes, streaming and genre filters and instant TV launch. Cheaper here than in the app.
        </p>
        <Link to="/pro" className="btn-primary inline-block">
          See ReelMatch Pro
        </Link>
      </div>
    </section>
  );
};

export default ProTeaser;
