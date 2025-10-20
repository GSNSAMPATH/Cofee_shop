// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function to apply active class
  const getLinkClass = (path: string) => {
    const baseClass =
      "transition text-[14px] lg:text-[16px] px-4 lg:px-6 lg:py-1 border border-red-500 rounded-full";
    const activeClass =
      "bg-red-600 text-white font-semibold shadow-md";
    const hoverClass = "hover:text-red-600";

    return `${baseClass} ${pathname === path ? activeClass : hoverClass}`;
  };

  return (
    <nav
      className={`relative w-full z-50 transition-colors duration-300 ${
        isOpen ? "bg-black" : "bg-transparent"
      } md:bg-transparent`}
    >
      <div className="mx-auto md:px-30 px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1760798950/logocofee_pjh43r.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-white font-medium">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link href="/offer" className={getLinkClass("/offer")}>
            Offer
          </Link>
          <Link href="/blog" className={getLinkClass("/blog")}>
            Blog
          </Link>
          <Link href="/gallery" className={getLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-100 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-black shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-100 font-medium">
            <Link href="/" onClick={toggleMenu} className={pathname === "/" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className={pathname === "/about" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              About
            </Link>
            <Link href="/offer" onClick={toggleMenu} className={pathname === "/offer" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              Offer
            </Link>
            <Link href="/gallery" onClick={toggleMenu} className={pathname === "/gallery" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              Gallery
            </Link>
            <Link href="/blog" onClick={toggleMenu} className={pathname === "/blog" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              Blog
            </Link>
            <Link href="/contact" onClick={toggleMenu} className={pathname === "/contact" ? "text-red-500 font-semibold" : "hover:text-red-500"}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
