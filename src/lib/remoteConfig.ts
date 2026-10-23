import { useEffect, useState } from "react";
import { FIREBASE_WEB, WEB_CHECKOUT_LIVE } from "@/seo/site";

/**
 * Reads Firebase Remote Config over its REST API, so the site doesn't ship the
 * Firebase SDK. Flow matches the web SDK: register an installation, then fetch
 * with its auth token. Results are cached in sessionStorage for an hour.
 * Any failure resolves to "off", never to a broken checkout.
 */
const CACHE_KEY = "rc_web_checkout_v1";
const CACHE_MS = 60 * 60 * 1000;
const SDK_VERSION = "w:0.6.0";

const newFid = () => {
  const bytes = crypto.getRandomValues(new Uint8Array(17));
  bytes[0] = 0b01110000 | (bytes[0] & 0x0f);
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").slice(0, 22);
};

async function fetchFlag(): Promise<boolean> {
  const { apiKey, appId, projectId } = FIREBASE_WEB;
  const fid = newFid();
  const inst = await fetch(
    `https://firebaseinstallations.googleapis.com/v1/projects/${projectId}/installations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({ fid, appId, authVersion: "FIS_v2", sdkVersion: SDK_VERSION }),
    },
  ).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

  const res = await fetch(
    `https://firebaseremoteconfig.googleapis.com/v1/projects/${projectId}/namespaces/firebase:fetch?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appId,
        appInstanceId: fid,
        appInstanceIdToken: inst.authToken.token,
        sdkVersion: SDK_VERSION,
        languageCode: "en",
      }),
    },
  ).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

  return res?.entries?.web_checkout_enabled === "true";
}

/** True only when a checkout URL is configured and `web_checkout_enabled` is on. */
export function useWebCheckoutEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!WEB_CHECKOUT_LIVE) return;
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? "null");
      if (cached && Date.now() - cached.at < CACHE_MS) {
        setEnabled(cached.value);
        return;
      }
    } catch {
      /* storage unavailable: fetch every time */
    }
    let cancelled = false;
    fetchFlag()
      .then((value) => {
        if (cancelled) return;
        setEnabled(value);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ value, at: Date.now() }));
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        if (!cancelled) setEnabled(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return enabled;
}
