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
    <nav className="bg-transparent relative  w-full z-50">
      <div className=" mx-auto md:px-30 px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src="/Logo2.png" alt="Logo" width={80} height={60} className="rounded-3xl"/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-teal-600 transition px-4  border border-red-500 rounded-full">Home</Link>
          <Link href="/about" className="hover:text-teal-600 transition px-4  border border-red-500 rounded-full">About</Link>
          <Link href="/menu" className="hover:text-teal-600 transition px-4  border border-red-500 rounded-full">Menu</Link>
          <Link href="/contact" className="hover:text-teal-600 transition px-4  border border-red-500 rounded-full">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-black shadow-lg ">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <Link href="/" onClick={toggleMenu} className="hover:text-teal-600">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-teal-600">About</Link>
            <Link href="/menu" onClick={toggleMenu} className="hover:text-teal-600">Menu</Link>
            <Link href="/gallery" onClick={toggleMenu} className="hover:text-teal-600">Gallery</Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-teal-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
