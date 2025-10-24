import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/[locale]/Component/Nave";
import Footer from "@/app/[locale]/Component/Footer";
import WhatsAppButton from "./Component/WhatsAppButton";
import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Sans, Inter, Poppins } from "next/font/google";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inriaSans = Inria_Sans({ variable: "--font-inria-sans", subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "700"] });

// Import translation JSONs statically
import en from "@/app/messages/en.json";
import de from "@/app/messages/de.json"; // Example: German
import es from "@/app/messages/ru.json"; // Example: Spanish

const messagesMap: Record<string, Record<string, any>> = {
  en,
  de,
  es,
};

// Metadata
export const metadata = {
  title: "AIDA Coffee",
  description: "Experience the best coffee in Induruwa",
  icons: { icon: "/favicon.ico" },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // no need for Promise
}) {
  const { locale } = params;
  const messages = messagesMap[locale] || messagesMap["en"];

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.variable} ${inter.variable} ${poppins.variable}`}
    >
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
