import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Aida Coffee Shop | Contact Us",
  description: "Get in touch with Aida Coffee Shop for inquiries or orders.",
  openGraph: {
    title: "Aida Coffee Shop | Contact Us",
    description: "Get in touch with Aida Coffee Shop for inquiries or orders.",
    url: "https://www.aidacoffeeshop.com/contact",
    siteName: "Aida Coffee Shop",
  }
};

export default function ContactPage() {
  return <Contact />;
}
