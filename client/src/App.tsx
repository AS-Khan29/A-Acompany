import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeOffer from "./pages/WhatWeOffer";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
};

const routes: Record<string, () => React.ReactNode> = {
  "/": () => <Home />,
  "/about": () => <AboutUs />,
  "/services": () => <WhatWeOffer />,
  "/products": () => <Products />,
  "/contact": () => <ContactUs />,
  "/404": () => <NotFound />,
};

function Router() {
  const [location] = useLocation();
  const PageContent = routes[location] ?? (() => <NotFound />);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location} {...pageTransition}>
        {PageContent()}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
