// app/layout.tsx
import "./globals.css"; // your global CSS
import { ReactNode } from "react";

export const metadata = {
  title: "AIDA Coffee | Freshly Brewed Happiness",
  description:
    "Experience the rich aroma and smooth flavor of AIDA Coffee — the best coffee in Induruwa. Brewed with passion and perfection.",
  keywords: [
    "AIDA Coffee",
    "coffee shop Induruwa",
    "best coffee Sri Lanka",
    "espresso",
    "cappuccino",
    "pastries",
  ],
    icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.aidacoffeeshop.com",
  },
  openGraph: {
    title: "AIDA Coffee | Freshly Brewed Happiness",
    description:
      "AIDA Coffee — your cozy spot in Induruwa for rich, freshly brewed coffee and delicious pastries.",
    url: "https://www.aidacoffeeshop.com",
    siteName: "AIDA Coffee",
    images: [
      {
        url: "https://www.aidacoffeeshop.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIDA Coffee Shop Front",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIDA Coffee | Freshly Brewed Happiness",
    description:
      "Visit AIDA Coffee in Induruwa for perfectly roasted coffee and handmade pastries.",
    images: ["https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp"],
  },

};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Structured Data for Google (LocalBusiness Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "AIDA Coffee",
              logo: "https://www.aidacoffeeshop.com/logo.png",
              image: "https://www.aidacoffeeshop.com/logo.png",
             
              "@id": "https://www.aidacoffeeshop.com",
              url: "https://www.aidacoffeeshop.com",
              telephone: "+94 71 234 5678",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Beach Road",
                addressLocality: "Induruwa",
                addressRegion: "Southern Province",
                postalCode: "80510",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.34567,
                longitude: 79.99876,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/aidacoffeeshop",
                "https://www.instagram.com/aidacoffeeshop",
                "https://maps.app.goo.gl/your-location-link",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
