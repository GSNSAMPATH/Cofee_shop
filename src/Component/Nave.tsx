// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1760798950/logocofee_pjh43r.png" //https://res.cloudinary.com/diatamf9x/image/upload/v1760692085/newlogo2_yhv2oy.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-white font-medium">
          <Link
            href="/"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-4 lg:px-6 lg:py-1 border border-red-500 rounded-full"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-4 lg:px-6 lg:py-1 border border-red-500 rounded-full"
          >
            About
          </Link>
          <Link
            href="/offer"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-4 lg:px-6 lg:py-1 border border-red-500 rounded-full"
          >
            Offer
          </Link>
          <Link
            href="/blog"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-4 lg:px-7 lg:py-1 border border-red-500 rounded-full"
          >
            Blog
          </Link>
          <Link
            href="/gallery"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-3 lg:px-5 lg:py-1 border border-red-500 rounded-full"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-600 transition text-[14px] lg:text-[16px] px-3 lg:px-4 lg:py-1 border border-red-500 rounded-full"
          >
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
            <Link href="/" onClick={toggleMenu} className="hover:text-red-500">
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-red-500">
              About
            </Link>
            <Link href="/offer" onClick={toggleMenu} className="hover:text-red-500">
              Offer
            </Link>
            <Link href="/gallery" onClick={toggleMenu} className="hover:text-red-500">
              Gallery
            </Link>
            <Link href="/blog" onClick={toggleMenu} className="hover:text-red-500">
              Blog
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-red-500">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
