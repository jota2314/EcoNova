import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import TagManager from "@/components/TagManager";
import TelClickTracker from "@/components/TelClickTracker";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Home Insulation & Energy Services | Econova | Save Up to 40% on Energy Bills",
  description: "Get No Cost home energy assessment & professional insulation installation with up to 80% utility rebates. Certified installers, guaranteed 30% savings, $0 down payment. Serving homeowners nationwide with attic, wall, basement insulation, air sealing, solar & HVAC efficiency solutions.",
  keywords: "home insulation, attic insulation, wall insulation, basement insulation, air sealing, energy audit, utility rebates, mass save, energy efficiency, home energy assessment, insulation contractors, blown-in insulation, spray foam, energy savings, HVAC efficiency, solar installation, energy storage",
  openGraph: {
    title: "Professional Home Insulation Services | No Cost Assessment & Up to 80% Rebates",
    description: "Save up to 40% on energy bills with professional insulation. No Cost energy audit, certified installers, guaranteed results, $0 down payment options.",
    type: "website",
    siteName: "Econova",
    locale: "en_US",
    url: "https://econovaenergysaving.com",
    images: [
      {
        url: "https://econovaenergysaving.com/logo%20(4).png",
        width: 1200,
        height: 630,
        alt: "Econova - Professional Home Insulation"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://econovaenergysaving.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <TagManager />
          <TelClickTracker />
          {/* Schema.org Organization */}
          <Script
            id="schema-organization"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Econova",
                url: "https://econovaenergysaving.com",
                telephone: "(617) 596-2476",
                sameAs: [],
                logo: "https://econovaenergysaving.com/logo%20(4).png"
              })
            }}
          />
          {/* Schema.org LocalBusiness with NAP */}
          <Script
            id="schema-localbusiness"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Econova",
                description: "Professional home insulation and energy efficiency services",
                url: "https://econovaenergysaving.com",
                telephone: "(617) 596-2476",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "10 Industrial Way",
                  addressLocality: "Wilmington",
                  addressRegion: "MA",
                  postalCode: "01887",
                  addressCountry: "US"
                },
                areaServed: {
                  "@type": "Country",
                  name: "United States"
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Home Energy Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: "Attic Insulation Installation" }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: "Home Energy Audit" }
                    }
                  ]
                }
              })
            }}
          />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
