import React from "react";
import AppStoreButton from "./ui/AppStoreButton";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/seo/site";

const StoreCTA: React.FC<{ heading?: string; body?: string }> = ({
  heading = "Stop deciding. Start watching.",
  body = "ReelMatch is free on iOS and Android. Swipe trailers, match with the people you watch with, and pick from titles you have all already said yes to.",
}) => (
  <aside className="my-12 rounded-2xl bg-reelmatch-secondary/30 p-8 text-center">
    <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
      {heading}
    </h2>
    <p className="text-reelmatch-gray max-w-xl mx-auto mb-6">{body}</p>
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <AppStoreButton
        type="google"
        url={PLAY_STORE_URL}
        aria-label="Download ReelMatch on Google Play"
      />
      <AppStoreButton
        type="apple"
        url={APP_STORE_URL}
        aria-label="Download ReelMatch on the App Store"
      />
    </div>
  </aside>
);

export default StoreCTA;
