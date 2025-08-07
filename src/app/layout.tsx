import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Econova",
              "description": "Professional home insulation and energy efficiency services",
              "url": "https://econova.com",
              "telephone": "833-363-7442",
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Energy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Attic Insulation Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Energy Audit"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2847"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
