import type { Metadata } from "next";
import { Geist, Geist_Mono, Inria_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/Component/Footer";

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

export const metadata: Metadata = {
  title: "AIDA Coffee",
  description: "Experience the best coffee in Bentota",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
    
     <body
        className={`${geistSans.variable} ${geistMono.variable} ${inriaSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
