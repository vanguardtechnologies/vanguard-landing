import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vanguardtech.bd'),
  title: 'Vanguard Technology - Official DGDP Agent Bangladesh | Defence Procurement Services',
  description: 'Expert DGDP agent services for international defence manufacturers. Navigate Bangladesh\'s $3.34B defence market with local expertise and government relationships.',
  keywords: 'DGDP agent Bangladesh, defence procurement Bangladesh, Bangladesh defence market, Ministry of Defence Bangladesh, defence suppliers Bangladesh, local agent services',
  authors: [{ name: 'Vanguard Technology' }],
  creator: 'Vanguard Technology',
  publisher: 'Vanguard Technology',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vanguardtech.bd',
    title: 'Vanguard Technology - Official DGDP Agent Bangladesh',
    description: 'Expert DGDP agent services for international defence manufacturers. Navigate Bangladesh\'s $3.34B defence market with certified local representation.',
    siteName: 'Vanguard Technology',
    images: [
      {
        url: '/images/vanguard-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vanguard Technology - DGDP Agent Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard Technology - DGDP Agent Bangladesh',
    description: 'Expert DGDP agent services for Bangladesh defence procurement',
    images: ['/images/vanguard-twitter-card.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://vanguardtech.bd',
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#005BAD" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vanguard Technology",
              "alternateName": "VT DGDP Agent",
              "url": "https://vanguardtech.bd",
              "logo": "https://vanguardtech.bd/images/logo.png",
              "description": "Official DGDP agent in Bangladesh providing expert defence procurement services for international manufacturers",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD",
                "addressLocality": "Dhaka",
                "addressRegion": "Dhaka Division"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+880-XXX-XXXX",
                "email": "dgdp@vanguardtech.bd",
                "contactType": "customer service",
                "areaServed": "BD",
                "availableLanguage": ["en", "bn"]
              },
              "sameAs": [
                "https://linkedin.com/company/vanguard-technology-bd",
                "https://twitter.com/vanguardtech_bd"
              ],
              "foundingDate": "2010",
              "numberOfEmployees": "10-50",
              "industry": "Defence Procurement Consulting",
              "serviceArea": {
                "@type": "Country",
                "name": "Bangladesh"
              }
            })
          }}
        />
        
        {/* Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "DGDP Agent Services",
              "description": "Complete DGDP registration and defence procurement services for international defence manufacturers",
              "provider": {
                "@type": "Organization",
                "name": "Vanguard Technology"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Bangladesh"
              },
              "serviceType": "Defence Procurement Consulting",
              "category": "Business Consulting",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "Contact for quote",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        
        {/* Initialize Professional Scroll Animations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  // Professional parallax scroll tracking
                  let ticking = false;
                  function updateScrollPosition() {
                    const scrollY = window.pageYOffset;
                    document.documentElement.style.setProperty('--scroll-y', scrollY + 'px');
                    ticking = false;
                  }
                  
                  function requestTick() {
                    if (!ticking) {
                      requestAnimationFrame(updateScrollPosition);
                      ticking = true;
                    }
                  }
                  
                  window.addEventListener('scroll', requestTick);
                  
                  // Initialize reveal animations on load
                  window.addEventListener('load', function() {
                    const revealElements = document.querySelectorAll('.vt-reveal');
                    const observer = new IntersectionObserver(function(entries) {
                      entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('visible');
                        }
                      });
                    }, {
                      threshold: 0.1,
                      rootMargin: '0px 0px -50px 0px'
                    });
                    
                    revealElements.forEach(function(el) {
                      observer.observe(el);
                    });
                  });
                }
              })();
            `
          }}
        />
      </head>
      <body className="antialiased vt-body-text" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}