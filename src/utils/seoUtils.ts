import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Define all routes for sitemap generation
const allRoutes = [
  { path: '/', priority: 1.0, changeFreq: 'daily' },
  { path: '/about', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses', priority: 0.9, changeFreq: 'weekly' },
  { path: '/courses/ethical-hacking', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/soc-analyst', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/cyber-forensics', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/network-security', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/web-app-security', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/cloud-security', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/red-team', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/blue-team', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/malware-analysis', priority: 0.8, changeFreq: 'monthly' },
  { path: '/courses/cybersecurity-basics', priority: 0.8, changeFreq: 'monthly' },
  { path: '/services', priority: 0.9, changeFreq: 'weekly' },
  { path: '/services/corporate-training', priority: 0.8, changeFreq: 'monthly' },
  { path: '/services/college-workshops', priority: 0.8, changeFreq: 'monthly' },
  { path: '/services/device-security', priority: 0.8, changeFreq: 'monthly' },
  { path: '/services/vapt', priority: 0.8, changeFreq: 'monthly' },
  { path: '/services/consultation', priority: 0.8, changeFreq: 'monthly' },
  { path: '/contact', priority: 0.7, changeFreq: 'monthly' },
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://chakrabyte.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://chakrabyte.com/sitemap.xml

# Popular bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# Crawl delay for respectful crawling
User-agent: *
Crawl-delay: 1`;
};

// Component to generate sitemap and robots.txt
export const SEOUtils = () => {
  useEffect(() => {
    // Generate sitemap
    const sitemap = generateSitemap();
    console.log('Generated Sitemap:', sitemap);
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt();
    console.log('Generated Robots.txt:', robotsTxt);
    
    // In production, you would save these to public directory
    // This is for demonstration - in real app, use build scripts
  }, []);

  return null;
};

export { generateSitemap, generateRobotsTxt, allRoutes };
