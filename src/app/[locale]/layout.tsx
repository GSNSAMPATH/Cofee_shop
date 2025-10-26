// ✅ Server Component

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/[locale]/Component/Nave";
import Footer from "@/app/[locale]/Component/Footer";
import "../globals.css";
import WhatsAppButton from "./Component/WhatsAppButton";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Sans, Inter, Poppins } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inriaSans = Inria_Sans({ variable: "--font-inria-sans", subsets: ["latin"], weight: ["400","700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400","700"] });

// Static messages
import messagesEn from "@/app/messages/en.json";
import messagesDe from "@/app/messages/de.json";
import messagesRu from "@/app/messages/ru.json";

const messagesMap: Record<string, Record<string, any>> = {
  en: messagesEn,
  de: messagesDe,
  ru: messagesRu,
};

// ✅ SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const baseUrl = "https://www.aidacoffeeshop.com"; // 🌐 Replace with your real domain

  const meta = {
    en: {
      title: "AIDA Coffee | Taste the Best in Induruwa",
      description: "Experience authentic Sri Lankan coffee brewed to perfection.",
    },
    de: {
      title: "AIDA Kaffee | Der beste Kaffee in Induruwa",
      description: "Erleben Sie authentischen srilankischen Kaffee, perfekt gebrüht.",
    },
    ru: {
      title: "AIDA Кофе | Лучший кофе в Индурве",
      description: "Ощутите вкус настоящего цейлонского кофе, приготовленного с любовью.",
    },
  } as const;

  // ✅ Explicitly define allowed locales
  type LocaleKey = keyof typeof meta;

  // ✅ Safely pick locale or fallback to "en"
  const currentLocale = (["en", "de", "ru"].includes(locale) ? locale : "en") as LocaleKey;
  const currentMeta = meta[currentLocale];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    metadataBase: new URL(baseUrl),
    keywords: [
      "coffee",
      "espresso",
      "cappuccino",
      "latte",
      "coffee shop",
      "best coffee",
    ],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        ru: `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.description,
      url: `${baseUrl}/${currentLocale}`,
      siteName: "AIDA Coffee",
      images: [
        {
          url: `${baseUrl}/MKN05652.jpg`,
          width: 1200,
          height: 630,
          alt: "AIDA Coffee Shop",
        },
      ],
      locale: currentLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: currentMeta.title,
      description: currentMeta.description,
      images: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    },
    icons: {
        icon: [{ url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon.png", type: "image/png" },
        ],
        shortcut: "/favicon.png",
        apple: "/favicon.png",
      },
  };
}


// ✅ Server Component Layout
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>; // Note: params is a Promise in Next.js 15+
}) {
  // ✅ Await params before using
  const { locale } = await params;

  const messages = messagesMap[locale] || messagesMap["en"];

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.variable} ${inter.variable} ${poppins.variable}`}
    >
       <head>
        {/* ✅ Structured Data for Google (Organization Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aida Coffee Shop",
              url: "https://www.aidacoffeeshop.com",
              logo: "https://www.aidacoffeeshop.com/logo.jpg",
              image: "https://www.aidacoffeeshop.com/MKN05652.jpg",
              sameAs: [
                "https://www.facebook.com/aidacoffeeshop",
                "https://www.instagram.com/aidacoffeeshop",
                "https://maps.app.goo.gl/your-location-link",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94704871510",
                contactType: "customer service",
                areaServed: "LK",
                availableLanguage: ["English", "Russian", "German"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 123, Main Street",
                addressLocality: "Induruwa",
                addressRegion: "kalutara",
                postalCode: "12345",
                addressCountry: "LK",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white font-[var(--font-poppins)]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <WhatsAppButton />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
