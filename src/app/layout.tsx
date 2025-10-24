// app/layout.tsx
import "./globals.css"; // your global CSS
import { ReactNode } from "react";

export const metadata = {
  title: "AIDA Coffee",
  description: "Experience the best coffee in Induruwa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
