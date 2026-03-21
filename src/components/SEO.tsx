import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, unknown>[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Chakrabyte Security - Professional Cybersecurity Training & Consulting',
  description = 'Industry-leading cybersecurity training, consulting, and VAPT services. Expert-led courses in ethical hacking, network security, and cyber forensics. Corporate training and college workshops available.',
  keywords = 'cybersecurity training, ethical hacking, network security, cyber forensics, SOC analyst, VAPT services, corporate training, chakrabyte',
  image = '/og-image.jpg',
  type = 'website',
  noIndex = false,
  canonical,
  structuredData = []
}) => {
  const location = useLocation();
  const fullTitle = title.includes('Chakrabyte') ? title : `${title} | Chakrabyte Security`;
  const url = canonical || `https://chakrabyte.com${location.pathname}`;

  // Default structured data for organization
  const defaultStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Chakrabyte Security',
      url: 'https://chakrabyte.com',
      logo: 'https://chakrabyte.com/BCLogo.png',
      description: 'Professional cybersecurity training and consulting services',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://www.linkedin.com/company/chakrabyte'
      ]
    }
  ];

  const allStructuredData = [...defaultStructuredData, ...structuredData];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Chakrabyte Security" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://chakrabyte.com${image}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Chakrabyte Security" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://chakrabyte.com${image}`} />
      <meta name="twitter:site" content="@chakrabyte" />
      <meta name="twitter:creator" content="@chakrabyte" />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai, India" />
      <meta name="ICBM" content="13.0827, 80.2707" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon-rounded.png" />
      <link rel="icon" type="image/x-icon" href="/favicon-rounded.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEO;
