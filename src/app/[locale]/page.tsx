// app/[locale]/page.tsx
import Home from "./Home"; // your client component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aida Coffee Shop | Home",
  description: "Enjoy our signature coffee and pastries at Aida Coffee Shop.",
  keywords: [
    "Aida Coffee Shop",
    "coffee",
    "pastries",
    "induruwa",
    "sri lanka",
    "coffee shop",
    "induruwa coffee",
    "induruwa pastries",
    "sri lanka coffee",
    "sri lanka pastries",
  ],
  openGraph: {
    title: "Aida Coffee Shop | Home",
    description: "Enjoy our signature coffee and pastries at Aida Coffee Shop.",
    url: "https://www.aidacoffeeshop.com",
    siteName: "Aida Coffee Shop",
    images: [
      {
        url: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
        width: 800,
        height: 600,
        alt: "Aida Coffee Shop",
      },
    ]
  },
};

export default function Page() {
  return <Home />; // client component
}
