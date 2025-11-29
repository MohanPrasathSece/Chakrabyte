import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EthicalHacking from "./pages/courses/EthicalHacking";
import SOCAnalyst from "./pages/courses/SOCAnalyst";
import CyberForensics from "./pages/courses/CyberForensics";
import NetworkSecurity from "./pages/courses/NetworkSecurity";
import WebAppSecurity from "./pages/courses/WebAppSecurity";
import CloudSecurity from "./pages/courses/CloudSecurity";
import MalwareAnalysis from "./pages/courses/MalwareAnalysis";
import RedTeam from "./pages/courses/RedTeam";
import BlueTeam from "./pages/courses/BlueTeam";
import CybersecurityBasics from "./pages/courses/CybersecurityBasics";
import CorporateTraining from "./pages/services/CorporateTraining";
import DeviceSecurity from "./pages/services/DeviceSecurity";
import CollegeWorkshops from "./pages/services/CollegeWorkshops";
import VAPT from "./pages/services/VAPT";
import Consultation from "./pages/services/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/ethical-hacking" element={<EthicalHacking />} />
              <Route path="/courses/soc-analyst" element={<SOCAnalyst />} />
              <Route path="/courses/cyber-forensics" element={<CyberForensics />} />
              <Route path="/courses/network-security" element={<NetworkSecurity />} />
              <Route path="/courses/web-app-security" element={<WebAppSecurity />} />
              <Route path="/courses/cloud-security" element={<CloudSecurity />} />
              <Route path="/courses/malware-analysis" element={<MalwareAnalysis />} />
              <Route path="/courses/red-team" element={<RedTeam />} />
              <Route path="/courses/blue-team" element={<BlueTeam />} />
              <Route path="/courses/cybersecurity-basics" element={<CybersecurityBasics />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/corporate-training" element={<CorporateTraining />} />
              <Route path="/services/device-security" element={<DeviceSecurity />} />
              <Route path="/services/college-workshops" element={<CollegeWorkshops />} />
              <Route path="/services/vapt" element={<VAPT />} />
              <Route path="/services/consultation" element={<Consultation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
