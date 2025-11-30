// Performance monitoring and Core Web Vitals optimization
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: {
    lcp: number | null;
    fid: number | null;
    cls: number | null;
    fcp: number | null;
    ttfb: number | null;
  } = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  };

  private constructor() {
    this.init();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private init() {
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID) - replaced by INP in newer browsers
    this.observeFID();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // First Contentful Paint (FCP)
    this.observeFCP();
    
    // Time to First Byte (TTFB)
    this.measureTTFB();
    
    // Monitor page load performance
    this.observePageLoad();
  }

  private observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', this.metrics.lcp);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEventTiming) => {
          if (entry.name === 'first-input') {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.reportMetric('FID', this.metrics.fid);
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as PerformanceLayoutShift).value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', this.metrics.cls);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private observeFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('FCP', this.metrics.fcp);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  private measureTTFB() {
    if (performance.getEntriesByType) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0];
        this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
        this.reportMetric('TTFB', this.metrics.ttfb);
      }
    }
  }

  private observePageLoad() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        this.reportMetric('PageLoad', loadTime);
      }, 0);
    });
  }

  private reportMetric(name: string, value: number) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}: ${value.toFixed(2)}ms`);
    }

    // Send to analytics service (Google Analytics, etc.)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('event', 'web_vitals', {
          name: name.toLowerCase(),
          value: Math.round(value),
          event_category: 'Web Vitals'
        });
      }
    }

    // Custom analytics endpoint
    this.sendToAnalytics(name, value);
  }

  private sendToAnalytics(name: string, value: number) {
    // Send to your analytics endpoint
    fetch('/api/analytics/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: name,
        value: value,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
    }).catch(() => {
      // Silently fail for analytics
    });
  }

  public getMetrics() {
    return { ...this.metrics };
  }

  public getPerformanceGrade() {
    const metrics = this.metrics;
    const grades = {
      lcp: this.getLCGrade(metrics.lcp),
      fid: this.getFIDGrade(metrics.fid),
      cls: this.getCLSGrade(metrics.cls),
      fcp: this.getFCPGrade(metrics.fcp),
      ttfb: this.getTTFBGrade(metrics.ttfb)
    };

    const scores = Object.values(grades).filter(grade => grade !== null) as number[];
    const averageScore = scores.length > 0 ? scores.reduce((a, b) => a + b) / scores.length : 0;

    return {
      individual: grades,
      overall: Math.round(averageScore),
      color: this.getGradeColor(averageScore)
    };
  }

  private getLCGrade(value: number | null): number | null {
    if (!value) return null;
    if (value <= 2500) return 100; // Good
    if (value <= 4000) return 80;  // Needs Improvement
    return 60; // Poor
  }

  private getFIDGrade(value: number | null): number | null {
    if (!value) return null;
    if (value <= 100) return 100;  // Good
    if (value <= 300) return 80;   // Needs Improvement
    return 60; // Poor
  }

  private getCLSGrade(value: number | null): number | null {
    if (!value) return null;
    if (value <= 0.1) return 100;  // Good
    if (value <= 0.25) return 80; // Needs Improvement
    return 60; // Poor
  }

  private getFCPGrade(value: number | null): number | null {
    if (!value) return null;
    if (value <= 1800) return 100; // Good
    if (value <= 3000) return 80;  // Needs Improvement
    return 60; // Poor
  }

  private getTTFBGrade(value: number | null): number | null {
    if (!value) return null;
    if (value <= 800) return 100;  // Good
    if (value <= 1800) return 80; // Needs Improvement
    return 60; // Poor
  }

  private getGradeColor(score: number): string {
    if (score >= 90) return '#10b981'; // Green
    if (score >= 80) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  }
}

// Performance optimization utilities
export class PerformanceOptimizer {
  // Lazy load images
  static lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  // Preload critical resources
  static preloadResources(resources: Array<{ href: string; as: string; type?: string }>) {
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.as === 'font') link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  // Optimize font loading
  static optimizeFontLoading() {
    // Add font-display: swap to existing fonts
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }

  // Reduce JavaScript execution time
  static deferNonCriticalJS() {
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach((script) => {
      const newScript = document.createElement('script');
      newScript.src = (script as HTMLScriptElement).src;
      newScript.defer = true;
      document.head.appendChild(newScript);
      script.remove();
    });
  }

  // Minimize main thread work
  static optimizeMainThread() {
    // Use requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Load non-critical features
        this.loadNonCriticalFeatures();
      });
    } else {
      // Fallback for older browsers
      setTimeout(() => {
        this.loadNonCriticalFeatures();
      }, 100);
    }
  }

  private static loadNonCriticalFeatures() {
    // Load chat widgets, analytics, etc.
    console.log('Loading non-critical features...');
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  const monitor = PerformanceMonitor.getInstance();
  PerformanceOptimizer.lazyLoadImages();
  PerformanceOptimizer.optimizeFontLoading();
  PerformanceOptimizer.optimizeMainThread();
  
  // Preload critical resources
  PerformanceOptimizer.preloadResources([
    { href: '/hero-image.webp', as: 'image' },
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' }
  ]);

  return monitor;
};

// Export for use in components
export default PerformanceMonitor;
