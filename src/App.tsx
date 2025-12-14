import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Breadcrumbs from "./components/Breadcrumbs";
import StickyFooterAndActions from "./components/StickyFooterAndActions";
import ExitIntentPopup, { useExitIntent } from "./components/ExitIntentPopup";
import { initPerformanceMonitoring } from "./utils/performance";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SecurityPlus from "./pages/courses/SecurityPlus";
import CySAPlus from "./pages/courses/CySAPlus";
import EthicalHacking from "./pages/courses/EthicalHacking";
import CloudSecurity from "./pages/courses/CloudSecurity";
import PenetrationTesting from "./pages/courses/PenetrationTesting";
import IAMCyberArk from "./pages/courses/IAMCyberArk";
import SecurityPro from "./pages/courses/SecurityPro";
import AzureSentinel from "./pages/courses/AzureSentinel";
import MicrosoftDefender from "./pages/courses/MicrosoftDefender";
import CorporateTraining from "./pages/services/CorporateTraining";
import VAPT from "./pages/services/VAPT";
import GapAssessment from "./pages/services/GapAssessment";
import SecurityConsulting from "./pages/services/SecurityConsulting";
import CareerConsulting from "./pages/services/CareerConsulting";
import NotFound from "./pages/NotFound";

// Initialize performance monitoring
const performanceMonitor = initPerformanceMonitoring();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (replaced cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Performance optimization: Use requestAnimationFrame for smooth scrolling
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [pathname]);

  return null;
};

// Preload critical resources
const PreloadCriticalResources = () => {
  React.useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images
    const heroImage = document.createElement('link');
    heroImage.rel = 'preload';
    heroImage.href = '/hero-image.webp';
    heroImage.as = 'image';
    document.head.appendChild(heroImage);
  }, []);

  return null;
};

// SEO configuration for different routes
const getSEOConfig = (pathname: string) => {
  const configs: Record<string, {
    title: string;
    description: string;
    keywords: string;
    structuredData: Record<string, unknown>[];
  }> = {
    '/': {
      title: 'Chakrabyte Security - Professional Cybersecurity Training & Consulting',
      description: 'Industry-leading cybersecurity training, consulting, and VAPT services. Expert-led courses in ethical hacking, network security, and cyber forensics. Corporate training and college workshops available.',
      keywords: 'cybersecurity training, ethical hacking, network security, cyber forensics, SOC analyst, VAPT services, corporate training, chakrabyte',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Chakrabyte Security',
          url: 'https://chakrabyte.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://chakrabyte.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    },
    '/courses': {
      title: 'Cybersecurity Courses - Professional Training Programs',
      description: 'Comprehensive cybersecurity courses including ethical hacking, SOC analyst, cyber forensics, network security, and more. Industry-certified training with hands-on labs.',
      keywords: 'cybersecurity courses, ethical hacking course, SOC analyst training, cyber forensics course, network security certification',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Cybersecurity Training Programs',
          description: 'Professional cybersecurity courses and certifications',
          provider: {
            '@type': 'Organization',
            name: 'Chakrabyte Security'
          }
        }
      ]
    },
    '/services': {
      title: 'Cybersecurity Services - VAPT, Consulting & Corporate Training',
      description: 'Professional cybersecurity services including VAPT, security consulting, corporate training, device security, and college workshops. Expert security solutions.',
      keywords: 'cybersecurity services, VAPT services, security consulting, corporate cybersecurity training, penetration testing',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cybersecurity Services',
          description: 'Professional cybersecurity consulting and training services',
          provider: {
            '@type': 'Organization',
            name: 'Chakrabyte Security'
          }
        }
      ]
    },
    '/contact': {
      title: 'Contact Chakrabyte Security - Cybersecurity Training & Consulting',
      description: 'Get in touch with Chakrabyte Security for cybersecurity training, consulting, and VAPT services. Expert guidance for your security needs.',
      keywords: 'contact cybersecurity, chakrabyte security contact, cybersecurity training inquiry, security consulting',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Chakrabyte Security',
          description: 'Contact page for cybersecurity services and training'
        }
      ]
    }
  };

  return configs[pathname] || {};
};

const AppContent = () => {
  const location = useLocation();
  const { showPopup, closePopup } = useExitIntent();
  const seoConfig = getSEOConfig(location.pathname);

  return (
    <>
      <SEO {...seoConfig} />
      <ScrollToTop />
      <PreloadCriticalResources />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Breadcrumbs />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/security-plus" element={<SecurityPlus />} />
            <Route path="/courses/ethical-hacking" element={<EthicalHacking />} />
            <Route path="/courses/cysa-plus" element={<CySAPlus />} />
            <Route path="/courses/security-plus-intermediate" element={<SecurityPlus />} />
            <Route path="/courses/cloud-security" element={<CloudSecurity />} />
            <Route path="/courses/penetration-testing" element={<PenetrationTesting />} />
            <Route path="/courses/iam-cyberark" element={<IAMCyberArk />} />
            <Route path="/courses/security-pro" element={<SecurityPro />} />
            <Route path="/courses/azure-sentinel" element={<AzureSentinel />} />
            <Route path="/courses/microsoft-defender" element={<MicrosoftDefender />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/gap-assessment" element={<GapAssessment />} />
            <Route path="/services/corporate-training" element={<CorporateTraining />} />
            <Route path="/services/vapt" element={<VAPT />} />
            <Route path="/services/security-consulting" element={<SecurityConsulting />} />
            <Route path="/services/career-consulting" element={<CareerConsulting />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <StickyFooterAndActions />
      <ExitIntentPopup isVisible={showPopup} onClose={closePopup} />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
