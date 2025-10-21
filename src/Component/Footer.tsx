import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaL, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3e2723] to-[#1c1c1c] text-white pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Middle - Services */}
        <div className="justify-center flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-bold mb-3 leading-relaxed ">SERVICES</h3>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-center sm:text-start">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/offer">Offer</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
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



        {/* Right - Social Media */}
        <div className="sm:justify-center  sm:align-end  flex flex-col items-center sm:items-end">
          <h3 className="text-xl font-bold  mb-3 leading-relaxed">SOCIAL MEDIA</h3>
          {/* QR Code */}
          <div className="mb-4 ">
            <Image
              src="/ad867825910d582545d85fb9f870ecf801eef8ec.png"
              alt="QR Code"
              width={120}
              height={120}
              className="mb-4 mx-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl justify-end">
            <a href="https://www.facebook.com/share/17eNyYuR5h/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+94704871510" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm ">
        <p>Copyright © {new Date().getFullYear()} AIDA’s Coffee</p>
        <p className="mt-2 md:mt-0">
          Built with <span className="text-white"><a href="http://www.thedigitalescapes.com">Digital Escapes</a></span> and <span className="text-white"><a href="https://www.facebook.com/share/1MSV8Ut5B9/">Novrith Technology</a></span> in Sri Lanka
        </p>
      </div>
    </footer>
  );
}
