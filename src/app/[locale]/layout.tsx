// import fs from "fs";
// import path from "path";
// import { ReactNode } from "react";
// import { NextIntlClientProvider } from "next-intl";
// import Navbar from "@/app/[locale]/Component/Nave";
// import Footer from "@/app/[locale]/Component/Footer";
// import "../globals.css";

// // ✅ Font imports
// import { Geist, Geist_Mono } from "next/font/google";
// import { Inria_Sans, Inter, Poppins } from "next/font/google";
// import WhatsAppButton from "./Component/WhatsAppButton";

// // ✅ Font setup
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inriaSans = Inria_Sans({
//   variable: "--font-inria-sans",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400", "700"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "700"],
// });

// // ✅ Metadata
// export const metadata = {
//   title: "AIDA Coffee",
//   description: "Experience the best coffee in Induruwa",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   // ✅ Await async params
//   const { locale } = await params;

//   const messagesPath = path.join(process.cwd(), "src/messages", `${locale}.json`);

//   // ✅ Ensure translation file exists
//   if (!fs.existsSync(messagesPath)) {
//     console.error(`❌ Missing translations file for locale: ${locale}`);
//     return null;
//   }

//   const messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8"));

//   return (
//     <html
//       lang={locale}
//       className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.variable} ${inter.variable} ${poppins.variable}`}
//     >
//       <body className="bg-black text-white font-[var(--font-poppins)]">
//         <NextIntlClientProvider messages={messages}>
//           <Navbar />
//           <WhatsAppButton />
//           {children}
//           <Footer />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/[locale]/Component/Nave";
import Footer from "@/app/[locale]/Component/Footer";
import WhatsAppButton from "@/app/[locale]/Component/WhatsAppButton";
import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Inria_Sans, Inter, Poppins } from "next/font/google";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inriaSans = Inria_Sans({ variable: "--font-inria-sans", subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "700"] });

// Static translation imports
import en from "@/app/messages/en.json";
import de from "@/app/messages/de.json";
import ru from "@/app/messages/ru.json";

const messagesMap: Record<string, Record<string, any>> = { en, de, ru };

export const metadata = {
  title: "AIDA Coffee",
  description: "Experience the best coffee in Induruwa",
  icons: { icon: "/favicon.ico" },
};

// ❌ Do NOT mark this "use client"
export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // synchronous
}) {
  const { locale } = params; // ✅ no await
  const messages = messagesMap[locale] || messagesMap["en"];

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar /> {/* can be client component */}
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
