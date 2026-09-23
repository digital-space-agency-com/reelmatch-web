import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EsFooter from '@/components/EsFooter';
import AppStoreButton from '@/components/ui/AppStoreButton';
import { useDocumentMeta } from '@/seo/useDocumentMeta';
import { isCrawler, withStoreAttribution } from '@/lib/download';

type Lang = 'en' | 'es';

const copy = {
  en: {
    path: '/download',
    iosDetected: "We detected you're using an iOS device. You'll be redirected to the App Store automatically.",
    androidDetected: "We detected you're using an Android device. You'll be redirected to Google Play automatically.",
    redirecting: (store: string) => `Redirecting to ${store}`,
    now: 'NOW',
    title: 'Download ReelMatch',
    intro: 'Find the movies you all want to watch. Free on iPhone and Android.',
    phoneHint: 'Open this page on your phone and it will take you straight to your app store.',
    stepsTitle: 'Get started in three steps',
    steps: [
      'Download ReelMatch free from the App Store or Google Play.',
      'Connect with your partner, friends or family inside the app.',
      'Everyone swipes through trailers on their own phone. Any title two or more of you say yes to shows up in your matches, ready to watch.',
    ],
    platformsTitle: 'Works on iPhone and Android',
    platforms:
      'ReelMatch runs on iPhone, iPad and Android phones and tablets. An iPhone user and an Android user can use it together with no extra setup, so nobody in the group is left out.',
    proTitle: 'Free, with an optional Pro upgrade',
    pro: 'Swiping, watchlists and matching are free. ReelMatch Pro adds filters for your streaming services and genres, plus instant launch on your smart TV. ReelMatch covers titles on Netflix, Prime Video, Disney+, Hulu, Apple TV+ and Max, and you watch on the services you already pay for.',
    appLanguage: null as string | null,
    moreBefore: 'Questions before you install? See the ',
    moreFaq: { to: '/faq', text: 'ReelMatch FAQ' },
    moreMiddle: ' or read ',
    moreGuide: { to: '/guides/how-movie-matching-apps-work', text: 'how movie matching apps work' },
  },
  es: {
    path: '/es/download',
    iosDetected: 'Detectamos que usas un iPhone o iPad. Te llevaremos al App Store automáticamente.',
    androidDetected: 'Detectamos que usas un dispositivo Android. Te llevaremos a Google Play automáticamente.',
    redirecting: (store: string) => `Te llevamos a ${store}`,
    now: 'YA',
    title: 'Descarga ReelMatch',
    intro: 'Encuentra las películas que todos quieren ver. Gratis en iPhone y Android.',
    phoneHint: 'Abre esta página en tu teléfono y te llevará directo a tu tienda de apps.',
    stepsTitle: 'Empieza en tres pasos',
    steps: [
      'Descarga ReelMatch gratis en el App Store o en Google Play.',
      'Conecta con tu pareja, tus amigos o tu familia dentro de la app.',
      'Cada quien desliza tráilers en su teléfono. Cualquier título al que dos o más digan que sí aparece en sus coincidencias, listo para ver.',
    ],
    platformsTitle: 'Funciona en iPhone y Android',
    platforms:
      'ReelMatch funciona en iPhone, iPad y teléfonos y tablets Android. Una persona con iPhone y otra con Android pueden usarla juntas sin configuraciones extra, así nadie se queda fuera.',
    proTitle: 'Gratis, con ReelMatch Pro opcional',
    pro: 'Deslizar, armar tu lista y encontrar coincidencias es gratis. ReelMatch Pro agrega filtros por plataforma y género, y abre el título directo en tu smart TV. ReelMatch incluye títulos de Netflix, Prime Video, Disney+, Max, Apple TV+ y más, y tú lo ves en las plataformas que ya pagas.',
    appLanguage: 'Por ahora la app está en inglés, pero es muy visual: ves tráilers y deslizas.',
    moreBefore: '¿Tienes dudas antes de instalar? Lee las ',
    moreFaq: { to: '/es#preguntas', text: 'preguntas frecuentes' },
    moreMiddle: ' o ',
    moreGuide: { to: '/guides/how-movie-matching-apps-work', text: 'cómo funcionan las apps para elegir películas (en inglés)' },
  },
};

const DownloadDetails = ({ t }: { t: (typeof copy)[Lang] }) => (
  <div className="max-w-2xl mx-auto mt-16 space-y-10 text-gray-700">
    <section>
      <h2 className="text-2xl font-bold mb-4">{t.stepsTitle}</h2>
      <ol className="list-decimal pl-6 space-y-2">
        {t.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">{t.platformsTitle}</h2>
      <p>{t.platforms}</p>
      {t.appLanguage && <p className="mt-4">{t.appLanguage}</p>}
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">{t.proTitle}</h2>
      <p>{t.pro}</p>
      <p className="mt-4">
        {t.moreBefore}
        <Link to={t.moreFaq.to} className="underline">{t.moreFaq.text}</Link>
        {t.moreMiddle}
        <Link to={t.moreGuide.to} className="underline">{t.moreGuide.text}</Link>
        .
      </p>
    </section>
  </div>
);

const Download = ({ lang = 'en' }: { lang?: Lang }) => {
  const t = copy[lang];
  useDocumentMeta(t.path);
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop' | null>(null);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const appStoreLinks = {
    ios: 'https://apps.apple.com/app/reelmatch/id6457263386',
    android: withStoreAttribution('https://play.google.com/store/apps/details?id=team.dsa.reelmatch', t.path)
  };

  const detectDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Crawlers see the page rather than a redirect, so it can be indexed.
    if (isCrawler(userAgent)) {
      return 'desktop';
    }

    // iPadOS reports a Mac user agent; touch support gives it away.
    if (/iphone|ipad|ipod/.test(userAgent) || (/macintosh/.test(userAgent) && navigator.maxTouchPoints > 1)) {
      return 'ios';
    } else if (/android/.test(userAgent)) {
      return 'android';
    } else {
      return 'desktop';
    }
  };

  useEffect(() => {
    const detected = detectDevice();
    setDeviceType(detected);

    // Auto-redirect mobile users to their respective app store with countdown
    if ((detected === 'ios' || detected === 'android') && !hasRedirected) {
      // Start countdown from 3
      setCountdown(3);
      
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(countdownInterval);
            // Redirect when countdown reaches 0
            setTimeout(() => {
              window.location.href = appStoreLinks[detected];
              setHasRedirected(true);
            }, 1000); // 1 second after showing "1"
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [hasRedirected]);

  const getCountdownText = (storeName: string) => t.redirecting(storeName);

  const renderContent = () => {
    if (deviceType === 'ios') {
      return (
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              {t.iosDetected}
            </p>
            <h1 className="text-3xl font-bold mb-4">
              {getCountdownText("App Store")}
            </h1>
            {countdown !== null && (
              <div className="mb-6">
                <div className="text-6xl font-bold text-black animate-pulse mb-2">
                  {countdown === 0 ? t.now : countdown}
                </div>
                {countdown > 0 && (
                  <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                    <div 
                      className="h-full bg-black transition-all duration-1000 ease-linear"
                      style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            <AppStoreButton 
                type="apple"
                url={appStoreLinks.ios}
              />
          </div>
        </div>
      );
    }

    if (deviceType === 'android') {
      return (
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              {t.androidDetected}
            </p>
            <h1 className="text-3xl font-bold mb-4">
              {getCountdownText("Google Play")}
            </h1>
            {countdown !== null && (
              <div className="mb-6">
                <div className="text-6xl font-bold text-green-600 animate-pulse mb-2">
                  {countdown === 0 ? t.now : countdown}
                </div>
                {countdown > 0 && (
                  <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
                    <div 
                      className="h-full bg-green-600 transition-all duration-1000 ease-linear"
                      style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            <AppStoreButton 
                type="google"
                url={appStoreLinks.android}
              />
          </div>
        </div>
      );
    }

    // Desktop/fallback view
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t.intro}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <AppStoreButton 
              type="apple"
              url={appStoreLinks.ios}
            />
          
          <AppStoreButton 
              type="google"
              url={appStoreLinks.android}
            />
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          {t.phoneHint}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen" lang={lang}>
      <Header lang={lang} />
      <main className="container mx-auto px-4 py-20">
        {renderContent()}
        <DownloadDetails t={t} />
      </main>
      {lang === 'es' ? <EsFooter /> : <Footer />}
    </div>
  );
};

export default Download; 