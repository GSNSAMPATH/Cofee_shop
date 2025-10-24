import fs from "fs";
import path from "path";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/[locale]/Component/Nave";
import Footer from "@/app/[locale]/Component/Footer";
import "../globals.css";
import WhatsAppButton from "./Component/WhatsAppButton";

// ✅ Font imports
import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Sans, Inter, Poppins } from "next/font/google";

// ✅ Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

// ✅ Metadata
export const metadata = {
  title: "AIDA Coffee",
  description: "Experience the best coffee in Induruwa",
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ FIXED VERSION
export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // ❌ not Promise — must be plain object
}) {
  const { locale } = params;

  // ✅ Load messages safely
  const messagesPath = path.join(process.cwd(), "src/messages", `${locale}.json`);
  let messages = {};

  try {
    if (fs.existsSync(messagesPath)) {
      messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));
    } else {
      console.warn(`⚠️ Missing translations for locale: ${locale}`);
    }
  } catch (error) {
    console.error("Error loading translations:", error);
  }

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
