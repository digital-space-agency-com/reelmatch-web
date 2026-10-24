import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Infinity as InfinityIcon, Lock, Tv, Filter, Smartphone, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoreCTA from "@/components/StoreCTA";
import FaqList from "@/components/FaqList";
import { proFaqs } from "@/data/proFaqs";
import { WEB_CHECKOUT } from "@/seo/site";
import { useWebPrices, type PlanPrice } from "@/lib/webPrices";
import { useWebCheckoutEnabled } from "@/lib/remoteConfig";

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

const trackCheckout = (placement: string) => {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", "web_checkout_click", { placement, page_path: "/pro" });
};

const benefits = [
  {
    icon: InfinityIcon,
    title: "Unlimited swipes",
    body: "No daily cap. Free accounts get 15 swipes a day; Pro lets you swipe until you've found tonight's film.",
  },
  {
    icon: Filter,
    title: "Only your streaming services",
    body: "Limit the deck to Netflix, Prime Video, Disney+ and the others you already pay for, so every match is something you can press play on.",
  },
  {
    icon: Filter,
    title: "Genre filters",
    body: "Horror night, feel-good night, documentary night. Set the genre and skip the rest.",
  },
  {
    icon: Tv,
    title: "Instant TV launch",
    body: "Open a matched title on your TV without hunting through apps.",
  },
];

const comparison: [string, boolean, boolean][] = [
  ["Swipe trailers and match with friends and family", true, true],
  ["Group matching for three or more", true, true],
  ["iPhone and Android together", true, true],
  ["Unlimited daily swipes", false, true],
  ["Streaming-service filters", false, true],
  ["Genre filters", false, true],
  ["Instant TV launch", false, true],
];

const steps = [
  { title: "Choose ReelMatch Pro below", body: "Pay securely by card through Stripe. Enter the email you use for ReelMatch." },
  { title: "Open the email we send you", body: "It has a link that opens the ReelMatch app and links your purchase to your account." },
  { title: "Swipe without limits", body: "Pro unlocks on your phone straight away, on iPhone or Android." },
];

type Plan = "monthly" | "annual";

const CheckoutButton: React.FC<{ placement: string; label?: string; className?: string }> = ({
  placement,
  label = "Get ReelMatch Pro",
  className = "",
}) => {
  const enabled = useWebCheckoutEnabled();
  return enabled ? (
    <a
      href={WEB_CHECKOUT.url}
      rel="noopener"
      onClick={() => trackCheckout(placement)}
      className={`btn-primary inline-flex items-center justify-center text-lg px-8 py-4 ${className}`}
    >
      {label}
    </a>
  ) : (
    <span
      aria-disabled="true"
      className={`inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-600 px-8 py-4 text-lg font-semibold ${className}`}
    >
      Web checkout opening soon
    </span>
  );
};

const PlanToggle: React.FC<{
  plan: Plan;
  onChange: (plan: Plan) => void;
  savingPercent?: number;
}> = ({ plan, onChange, savingPercent }) => (
  <div role="group" aria-label="Billing period" className="inline-flex rounded-full bg-gray-100 p-1 mb-6">
    {(["monthly", "annual"] as const).map((value) => (
      <button
        key={value}
        type="button"
        aria-pressed={plan === value}
        onClick={() => onChange(value)}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
          plan === value ? "bg-reelmatch-primary text-reelmatch-dark shadow-sm" : "text-reelmatch-gray"
        }`}
      >
        {value === "monthly" ? "Monthly" : "Annual"}
        {value === "annual" && savingPercent && savingPercent > 0 ? ` · save ${savingPercent}%` : ""}
      </button>
    ))}
  </div>
);

const PriceBlock: React.FC<{ plan: Plan; price?: PlanPrice }> = ({ plan, price }) => {
  if (!price) {
    return (
      <p className="text-reelmatch-gray mb-6">
        Your price, in your currency, is shown at checkout. Cancel anytime.
      </p>
    );
  }
  return (
    <div className="mb-6">
      <span className="text-5xl font-display font-bold">{price.formatted}</span>
      <span className="text-reelmatch-gray text-xl"> / {plan === "monthly" ? "month" : "year"}</span>
      <p className="text-sm text-reelmatch-gray mt-2">
        {plan === "annual" ? `Just ${price.perMonthFormatted} a month. ` : ""}Cancel anytime.
      </p>
    </div>
  );
};

const Pro: React.FC = () => {
  const prices = useWebPrices();
  const [chosen, setChosen] = useState<Plan>("annual");
  const plan: Plan = chosen === "annual" && prices?.annual ? "annual" : "monthly";
  const price = prices?.[plan];
  const buttonLabel = price
    ? `Get ReelMatch Pro · ${price.formatted}/${plan === "monthly" ? "month" : "year"}`
    : "Get ReelMatch Pro";

  return (
  <PageLayout path="/pro">
    <article className="container mx-auto px-4 max-w-4xl">
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "ReelMatch Pro" }]} />

      <header className="text-center mb-14">
        <p className="inline-block px-4 py-2 bg-reelmatch-primary text-reelmatch-dark rounded-full text-sm font-medium mb-5">
          Web-only price: {WEB_CHECKOUT.discountLabel}
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">
          Unlimited swipes. Only the services you pay for. Movie night sorted.
        </h1>
        <p className="text-xl text-reelmatch-gray max-w-2xl mx-auto mb-8">
          ReelMatch Pro removes the daily swipe limit and adds streaming, genre and TV tools, for less than buying it inside the app.
        </p>

        {prices?.annual && prices?.monthly && (
          <PlanToggle plan={plan} onChange={setChosen} savingPercent={prices.annualSavingPercent} />
        )}
        <PriceBlock plan={plan} price={price} />

        <CheckoutButton placement="hero" label={buttonLabel} />

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-reelmatch-gray">
          <li className="inline-flex items-center gap-1.5"><Lock size={16} aria-hidden="true" /> Secure checkout by Stripe</li>
          <li className="inline-flex items-center gap-1.5"><Check size={16} aria-hidden="true" /> Cancel anytime</li>
          <li className="inline-flex items-center gap-1.5"><Smartphone size={16} aria-hidden="true" /> Works on iPhone and Android</li>
        </ul>
      </header>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">What you get with Pro</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-gray-100 shadow-subtle p-6 bg-white">
              <Icon className="mb-3 text-reelmatch-dark" size={28} aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-reelmatch-gray">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">Free vs Pro</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-subtle">
          <table className="w-full text-left">
            <thead className="bg-reelmatch-secondary/30">
              <tr>
                <th scope="col" className="p-4">Feature</th>
                <th scope="col" className="p-4 text-center">Free</th>
                <th scope="col" className="p-4 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([feature, free, pro]) => (
                <tr key={feature} className="border-t border-gray-100">
                  <th scope="row" className="p-4 font-normal">{feature}</th>
                  <td className="p-4 text-center">
                    {free ? <Check className="inline text-green-600" aria-label="Included" /> : <X className="inline text-gray-300" aria-label="Not included" />}
                  </td>
                  <td className="p-4 text-center">
                    {pro ? <Check className="inline text-green-600" aria-label="Included" /> : <X className="inline text-gray-300" aria-label="Not included" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">How it works</h2>
        <ol className="space-y-5 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-none w-9 h-9 rounded-full bg-reelmatch-primary text-reelmatch-dark font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-reelmatch-gray">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14 text-center rounded-2xl bg-reelmatch-secondary/30 p-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
          Stop losing the evening to choosing
        </h2>
        <p className="text-reelmatch-gray max-w-xl mx-auto mb-6">
          A lower price than in the app, and every movie night after is quicker to sort.
        </p>
        <CheckoutButton placement="footer" label={buttonLabel} />
      </section>

      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Questions about Pro</h2>
        <FaqList faqs={proFaqs} />
      </section>

      <p className="text-center text-reelmatch-gray mb-4">
        Not ready to upgrade? ReelMatch is free to download, and you can{" "}
        <Link to="/download" className="underline">install it now</Link>.
      </p>
      <StoreCTA heading="Get the app first" body="Pro unlocks inside the ReelMatch app. Download it free, then upgrade here for the web price." />
    </article>
  </PageLayout>
  );
};

export default Pro;
