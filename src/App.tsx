// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudyAmbientAI from "./pages/CaseStudyAmbientAI";
import CaseStudyMedoraHealth from "./pages/CaseStudyMedoraHealth";  // make sure this path is correct!
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Ambient AI Case Study */}
          <Route
            path="/case-study/ambient-ai"
            element={<CaseStudyAmbientAI />}
          />

          {/* Medora Health Case Study */}
          <Route
            path="/case-study/medora-health"
            element={<CaseStudyMedoraHealth />}
          />

          {/* catch‑all must come last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
