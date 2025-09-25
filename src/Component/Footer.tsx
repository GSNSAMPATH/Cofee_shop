import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3e2723] to-[#1c1c1c] text-white pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left - About */}
        <div>
          <h3 className="text-xl text-center sm:text-left font-bold mb-3">
            <span className="border-b-2 border-red-600">COFFEE</span>
          </h3>
          <p className="text-gray-300 text-center sm:text-left leading-relaxed">
            Xtreamdigital is a results-driven digital marketing company focused on
            transforming ambitious brands into powerhouses. We combine strategic
            thinking, innovative technology, and creative execution to help startups
            and SMEs grow faster, build stronger identities, and dominate their
            markets.
          </p>
        </div>

        {/* Middle - Services */}
        <div>
          <h3 className="text-xl font-bold mb-3 leading-relaxed text-center">SERVICES</h3>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/menu">Menu</Link></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-xl font-bold  mb-3 leading-relaxed text-center">SOCIAL MEDIA</h3>
          {/* QR Code */}
          <Image
            src="/ad867825910d582545d85fb9f870ecf801eef8ec.png"
            alt="QR Code"
            width={120}
            height={120}
            className="mb-4 mx-auto block"
          />
          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl justify-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-600 pt-4 text-center text-gray-400">
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
}
