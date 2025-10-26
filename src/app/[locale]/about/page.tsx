// app/[locale]/about/page.tsx
import About from "./about"; // your current client component
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aida Coffee Shop | About Us",
  description: "Learn about Aida Coffee Shop, our story, vision, and mission.",
  openGraph: {
    title: "Aida Coffee Shop – About Us",
    description: "Learn about Aida Coffee Shop, our story, vision, and mission.",
    url: "https://www.aidacoffeeshop.com/about",
    siteName: "Aida Coffee Shop",
  },
};

export default function Page() {
  return <About />;
}
