// app/[locale]/offer/page.tsx
import OfferPage from "./OfferPage"; // your current client component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aida Coffee Shop – Offers",
  description: "Discover our latest coffee offers, combos, and exclusive deals.",
  openGraph: {
    title: "Aida Coffee Shop – Offers",
    description: "Discover our latest coffee offers, combos, and exclusive deals.",
    url: "https://www.aidacoffeeshop.com/offer",
    siteName: "Aida Coffee Shop",
  },
};

export default function Page() {
  return <OfferPage />;
}
