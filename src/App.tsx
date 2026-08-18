import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Download from "./pages/Download";
import FaqPage from "./pages/Faq";
import GuidesIndex from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import CookieConsent from "./components/CookieConsent";
import ClientOnly from "./components/ClientOnly";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

/**
 * Everything below the router. The browser entry wraps this in a BrowserRouter;
 * the prerender entry wraps it in a StaticRouter.
 */
export const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ClientOnly>
        <Toaster />
        <Sonner />
      </ClientOnly>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guides" element={<GuidesIndex />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ClientOnly>
        <CookieConsent />
      </ClientOnly>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
