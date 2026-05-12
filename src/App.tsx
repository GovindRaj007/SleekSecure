import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BalconyGrillsPage = lazy(() => import("./pages/BalconyGrillsPage"));
const WindowGrillsPage = lazy(() => import("./pages/WindowGrillsPage"));
const CeilingClothHangersPage = lazy(() => import("./pages/CeilingClothHangersPage"));
const CityPage = lazy(() => import("./pages/CityPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/balcony-invisible-grills" element={<BalconyGrillsPage />} />
            <Route path="/services/balcony-grills" element={<BalconyGrillsPage />} />
            <Route path="/window-invisible-grills" element={<WindowGrillsPage />} />
            <Route path="/services/window-grills" element={<WindowGrillsPage />} />
            <Route path="/ceiling-cloth-hangers" element={<CeilingClothHangersPage />} />
            <Route path="/services/ceiling-cloth-hangers" element={<CeilingClothHangersPage />} />
            <Route path="/areas/:citySlug" element={<CityPage />} />
            
            {[
              "gachibowli","madhapur","hitech-city","kondapur","kukatpally","miyapur",
              "manikonda","kokapet","tellapur","jubilee-hills","banjara-hills","secunderabad",
              "uppal","lb-nagar","kompally","attapur","malkajgiri","mehboobnagar",
              "visakhapatnam","vijayawada","kadapa",
            ].map((s) => (
              <Route key={s} path={`/invisible-grills-${s}`} element={<LocationPage />} />
            ))}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
