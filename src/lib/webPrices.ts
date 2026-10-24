import { useEffect, useState } from "react";
import { WEB_CHECKOUT } from "@/seo/site";

export type PlanPrice = {
  formatted: string;
  /** Price per month as formatted text, for the annual plan. */
  perMonthFormatted: string;
  amountMicros: number;
  currency: string;
};

export type WebPrices = {
  monthly?: PlanPrice;
  annual?: PlanPrice;
  /** Whole-number percent the annual plan saves over 12 monthly payments. */
  annualSavingPercent?: number;
};

/** Region → currency for the places most visitors come from. */
const REGION_CURRENCY: Record<string, string> = {
  US: "USD", CA: "CAD", GB: "GBP", IE: "EUR", DE: "EUR", FR: "EUR", ES: "EUR",
  IT: "EUR", NL: "EUR", PT: "EUR", AT: "EUR", BE: "EUR", FI: "EUR", AU: "AUD",
  NZ: "NZD", MX: "MXN", BR: "BRL", IN: "INR", JP: "JPY", CH: "CHF", SE: "SEK",
  NO: "NOK", DK: "DKK", PL: "PLN",
};

/** Best guess at the visitor's currency from their browser region. */
const guessCurrency = (): string | undefined => {
  const region = navigator.language?.split("-")[1]?.toUpperCase();
  return region ? REGION_CURRENCY[region] : undefined;
};

const format = (micros: number, currency: string) =>
  new Intl.NumberFormat(navigator.language, { style: "currency", currency }).format(micros / 1e6);

async function load(): Promise<WebPrices> {
  const { Purchases } = await import("@revenuecat/purchases-js");
  const purchases = Purchases.configure(
    WEB_CHECKOUT.publicApiKey,
    Purchases.generateRevenueCatAnonymousAppUserId(),
  );

  const read = async (currency?: string) => {
    const offerings = await purchases.getOfferings(currency ? { currency } : undefined);
    const offering = WEB_CHECKOUT.offeringId
      ? offerings.all[WEB_CHECKOUT.offeringId]
      : offerings.current;
    if (!offering) throw new Error("offering not found");
    return offering;
  };

  const guess = guessCurrency();
  let offering;
  try {
    offering = await read(guess);
  } catch {
    // Currency not offered for these products: use RevenueCat's default.
    offering = await read();
  }

  const toPrice = (pkg: typeof offering.monthly): PlanPrice | undefined => {
    const price = pkg?.webBillingProduct.currentPrice;
    if (!price) return undefined;
    return {
      formatted: price.formattedPrice,
      perMonthFormatted: format(price.amountMicros / 12, price.currency),
      amountMicros: price.amountMicros,
      currency: price.currency,
    };
  };

  const monthly = toPrice(offering.monthly);
  const annual = toPrice(offering.annual);
  const annualSavingPercent =
    monthly && annual && monthly.currency === annual.currency
      ? Math.round((1 - annual.amountMicros / (monthly.amountMicros * 12)) * 100)
      : undefined;
  return { monthly, annual, annualSavingPercent };
}

/**
 * The web monthly and annual prices from RevenueCat, localized to the visitor.
 * `null` while loading or when unavailable (no key, offline, bad config); the
 * page then falls back to wording without a number rather than a wrong price.
 */
export function useWebPrices(): WebPrices | null {
  const [prices, setPrices] = useState<WebPrices | null>(null);

  useEffect(() => {
    if (!WEB_CHECKOUT.publicApiKey) return;
    let cancelled = false;
    load()
      .then((p) => !cancelled && setPrices(p))
      .catch(() => !cancelled && setPrices(null));
    return () => {
      cancelled = true;
    };
  }, []);

  return prices;
}
