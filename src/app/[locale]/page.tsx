// app/[locale]/page.tsx
import Home from "./Home"; // your client component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aida Coffee Shop | Home",
  description: "Enjoy our signature coffee and pastries at Aida Coffee Shop.",
  openGraph: {
    title: "Aida Coffee Shop | Home",
    description: "Enjoy our signature coffee and pastries at Aida Coffee Shop.",
    url: "https://www.aidacoffeeshop.com",
    siteName: "Aida Coffee Shop",
  },
};

export default function Page() {
  return <Home />; // client component
}
