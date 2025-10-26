import GalleryPage from "./gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aida Coffee Shop | Gallery",
  description: "Discover our gallery of coffee and pastries.",
  openGraph: {
    title: "Aida Coffee Shop | Gallery",
    description: "Discover our gallery of coffee and pastries.",
    url: "https://www.aidacoffeeshop.com/gallery",
    siteName: "Aida Coffee Shop",
  }
};

export default function Gallerypage() {
  return <GalleryPage/>;
}
