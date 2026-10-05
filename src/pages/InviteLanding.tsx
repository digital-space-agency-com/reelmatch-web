import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppStoreButton from '@/components/ui/AppStoreButton';

/** Same rule the app enforces: 3-30 lowercase letters, digits or underscores. */
const HANDLE = /^[a-z0-9_]{3,30}$/;

const PLAY_URL = 'https://play.google.com/store/apps/details?id=team.dsa.reelmatch';
const APP_STORE_URL = 'https://apps.apple.com/app/reelmatch/id6457263386';

/**
 * Landing page for a personal invite link (reelmatch.app/i/<handle>).
 * Visitors with the app installed are normally taken straight into it by the
 * operating system; this page is for everyone else, and for phones where the
 * link opened in the browser anyway.
 */
const InviteLanding = () => {
  const params = useParams();
  const raw = (params.handle ?? '').replace(/^@/, '').toLowerCase();
  const handle = HANDLE.test(raw) ? raw : null;
  const [copied, setCopied] = useState(false);

  // Invite pages are personal and shouldn't be indexed.
  useEffect(() => {
    document.title = handle ? `@${handle} invited you to ReelMatch` : 'Join ReelMatch';
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, nofollow';
  }, [handle]);

  // Play passes this through the install so the app can tell who invited you.
  const playUrl = handle
    ? `${PLAY_URL}&referrer=${encodeURIComponent(
        `invite=${handle}&utm_source=reelmatch.app&utm_medium=invite&utm_campaign=invite-link`,
      )}`
    : PLAY_URL;

  // iOS can't carry the invite through the App Store, so leave it on the
  // clipboard for the app to pick up on first launch (the app only reads it
  // when this is enabled there).
  const rememberInvite = () => {
    if (!handle) return;
    navigator.clipboard?.writeText(`https://reelmatch.app/i/${handle}`).catch(() => {});
  };

  const copyHandle = async () => {
    if (!handle) return;
    try {
      await navigator.clipboard.writeText(`@${handle}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard can be blocked; the handle is on screen anyway */
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {handle ? `@${handle} invited you to ReelMatch` : 'Join ReelMatch'}
          </h1>
          <p className="text-gray-600 mb-8">
            Find the movies you both want to watch. Free on iPhone and Android.
          </p>

          {handle && (
            <a
              href={`reelmatch:///i/${handle}`}
              className="inline-block rounded-lg bg-black text-white px-6 py-3 font-semibold mb-8"
            >
              Open in the ReelMatch app
            </a>
          )}

          <p className="text-sm text-gray-500 mb-4">Don't have it yet? Get ReelMatch:</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <AppStoreButton type="apple" url={APP_STORE_URL} onClick={rememberInvite} />
            <AppStoreButton type="google" url={playUrl} />
          </div>

          {handle && (
            <section className="text-left text-gray-700 bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-bold mb-2">After you sign up</h2>
              <p className="mb-3">
                Open the Friends tab, tap +, and add your friend by their handle:
              </p>
              <button
                type="button"
                onClick={copyHandle}
                className="font-mono rounded-md border px-3 py-2 bg-white"
                aria-label={`Copy @${handle}`}
              >
                @{handle} {copied ? '· copied' : '· tap to copy'}
              </button>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InviteLanding;
