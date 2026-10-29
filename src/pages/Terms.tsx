import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDocumentMeta } from "@/seo/useDocumentMeta";

const Terms = () => {
  useDocumentMeta("/terms");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-reelmatch-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center">Terms of Use</h1>

          <div className="text-sm text-gray-500 text-center mb-12">
            Last updated: October 29, 2026
          </div>

          <div className="space-y-4">
            <section className="bg-gray-50">
              <p className="text-xl text-gray-900 mb-4">
                These Terms of Use govern your use of ReelMatch, a mobile app for discovering movies and TV series and
                matching on what to watch with friends, family or a partner. ReelMatch is provided by Digital Space
                Agency UG.
              </p>
              <p>
                By creating an account or using the app or this website, you agree to these Terms and to our{" "}
                <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, please do not use ReelMatch.
              </p>
            </section>

            <section>
              <h2>Using ReelMatch</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 13 years old to use ReelMatch. If you are under the age of majority where you live, use it with a parent or guardian's permission.</li>
                <li>Give accurate information when you sign up and keep your sign-in details secure. You are responsible for activity on your account.</li>
                <li>Use ReelMatch for personal, non-commercial purposes only.</li>
              </ul>
            </section>

            <section>
              <h2>Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>harass, abuse or impersonate other people, or send friend requests or invitations as spam;</li>
                <li>try to access other users' accounts or data, or interfere with the security or operation of the service;</li>
                <li>copy, scrape, reverse engineer or resell the app or its content, except where the law allows it;</li>
                <li>use bots or automated means to swipe, match or create accounts; or</li>
                <li>use ReelMatch for anything unlawful.</li>
              </ul>
              <p>We may suspend or close accounts that break these Terms.</p>
            </section>

            <section>
              <h2>Friends and matches</h2>
              <p>
                When you connect with a friend, they can see your name and the titles you have both liked (your
                matches). They cannot see titles you liked that they did not. You can remove a friend at any time. See
                the Privacy Policy for details on how your information is handled.
              </p>
            </section>

            <section>
              <h2>Movie and TV data</h2>
              <p>
                Film and TV information, images, trailers and streaming availability come from third parties, including
                The Movie Database (TMDB) and YouTube. This product uses the TMDB API but is not endorsed or certified
                by TMDB. Availability, ratings and release details can change or be wrong, and we do not guarantee that
                a title is available on a particular service in your country. Trailers and artwork belong to their
                respective owners.
              </p>
            </section>

            <section>
              <h2>Free plan, subscriptions and billing</h2>
              <p>
                ReelMatch is free to download and use. Some features, such as a longer list of liked and matched titles,
                streaming-platform filters and QuickMatch with friends, are available through optional paid
                subscriptions. The features and price of each plan are shown in the app before you subscribe.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions are billed through your Apple App Store or Google Play account, not by us.</li>
                <li>Subscriptions renew automatically at the same length and price unless you cancel at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the period ends.</li>
                <li>Manage or cancel in your device settings: on iPhone, Settings &gt; your name &gt; Subscriptions; on Android, the Google Play Store app &gt; Payments &amp; subscriptions &gt; Subscriptions. Deleting the app does not cancel a subscription.</li>
                <li>Refunds are handled by Apple or Google under their policies. We cannot issue refunds for purchases made through their stores.</li>
                <li>If a subscription ends, your account stays open on the free plan. You keep your data, but some features, including how many liked and matched titles you can view, return to the free limits.</li>
              </ul>
              <p>
                For purchases made on iPhone and iPad, Apple's standard{" "}
                <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
                  Licensed Application End User License Agreement
                </a>{" "}
                also applies. Apple is not a party to these Terms and is not responsible for the app or its support.
              </p>
            </section>

            <section>
              <h2>Your content and licence to the app</h2>
              <p>
                You keep ownership of anything you provide to ReelMatch, such as your name and profile details. You give
                us a limited licence to store and display it to run the service, for example to show your name to friends
                you connect with.
              </p>
              <p>
                We grant you a personal, non-exclusive, non-transferable, revocable licence to use the app on devices
                you own or control. ReelMatch, its name, logo and software belong to Digital Space Agency UG and its
                licensors.
              </p>
            </section>

            <section>
              <h2>Deleting your account</h2>
              <p>
                You can delete your account at any time from Settings in the app. Deleting it removes your profile and
                your likes. See the Privacy Policy for what we keep, if anything, and for how long.
              </p>
            </section>

            <section>
              <h2>Availability and changes</h2>
              <p>
                We work to keep ReelMatch running but do not promise it will always be available or error free. We may
                change, add or remove features, and may update these Terms. If a change is significant, we will tell you
                in the app or by email. If you keep using ReelMatch after a change, you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2>Disclaimer and liability</h2>
              <p>
                ReelMatch is provided "as is" and "as available". To the extent the law allows, we are not liable for
                indirect or consequential losses, or for loss of data, arising from your use of the service, and our
                total liability for any claim is limited to the amount you paid us in the 12 months before the claim.
                Nothing in these Terms limits liability that cannot be limited by law, including for intent or gross
                negligence, or injury to life, body or health, and your statutory consumer rights are not affected.
              </p>
            </section>

            <section>
              <h2>Governing law</h2>
              <p>
                These Terms are governed by the laws of the Federal Republic of Germany, without affecting any mandatory
                consumer protections of the country where you live.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a href="mailto:hey@reelmatch.app">hey@reelmatch.app</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
