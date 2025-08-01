// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import CaseStudyAmbientAI from "./pages/CaseStudyAmbientAI";
import CaseStudyMedoraHealth from "./pages/CaseStudyMedoraHealth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public login route */}
            <Route path="/login" element={<Login />} />

            {/* All other routes are protected */}
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />

            <Route path="/about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            } />

            {/* Ambient AI Case Study */}
            <Route path="/case-study/ambient-ai" element={
              <ProtectedRoute>
                <CaseStudyAmbientAI />
              </ProtectedRoute>
            } />

            {/* Medora Health Case Study */}
            <Route path="/case-study/medora-health" element={
              <ProtectedRoute>
                <CaseStudyMedoraHealth />
              </ProtectedRoute>
            } />

            {/* Protected 404 page */}
            <Route path="*" element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;