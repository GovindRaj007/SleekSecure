import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, type ReactNode } from "react";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LOCATION_ROUTE_SLUGS } from "@/lib/routes";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BalconyGrillsPage = lazy(() => import("./pages/BalconyGrillsPage"));
const ChildSafetyGrillsPage = lazy(() => import("./pages/ChildSafetyGrillsPage"));
const PigeonSafeGrillsPage = lazy(() => import("./pages/PigeonSafeGrillsPage"));
const WindowGrillsPage = lazy(() => import("./pages/WindowGrillsPage"));
const CeilingClothHangersPage = lazy(() => import("./pages/CeilingClothHangersPage"));
const CityPage = lazy(() => import("./pages/CityPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

/** Route table, shared by the browser app and the build-time prerenderer. */
export const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/balcony-invisible-grills" element={<BalconyGrillsPage />} />
      <Route path="/child-safety-invisible-grills" element={<ChildSafetyGrillsPage />} />
      <Route path="/pigeon-safe-invisible-grills" element={<PigeonSafeGrillsPage />} />
      <Route path="/window-invisible-grills" element={<WindowGrillsPage />} />
      <Route path="/ceiling-cloth-hangers" element={<CeilingClothHangersPage />} />
      <Route path="/areas/:citySlug" element={<CityPage />} />
      {LOCATION_ROUTE_SLUGS.map((s) => (
        <Route key={s} path={`/invisible-grills-${s}`} element={<LocationPage />} />
      ))}
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const App = () => (
  <AppProviders>
    <SpeedInsights />
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
