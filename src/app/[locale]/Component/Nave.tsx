"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navbar");

  // Extract current locale from URL: "/en/about" → "en"
  const currentLocale = pathname.split("/")[1] || "en";

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path: string) => {
    const baseClass =
      "transition text-[14px] lg:text-[16px] px-4 lg:px-6 lg:py-1 border border-red-500 rounded-full whitespace-nowrap";
    const activeClass = "bg-red-600 text-white font-semibold shadow-md";
    const hoverClass = "hover:text-red-600";

    return `${baseClass} ${
      pathname === `/${currentLocale}${path}` ? activeClass : hoverClass
    }`;
  };

  return (
    <nav
      className={`absolute w-full z-50 transition-colors duration-300 ${
        isOpen ? "bg-black" : "bg-transparent"
      } md:bg-transparent`}
    >
      <div className="mx-auto md:px-30 px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${currentLocale}/`} className="text-2xl font-bold text-gray-800">
          <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1767516387/icons_sajopv.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center text-white font-medium">
          <Link href={`/${currentLocale}/`} className={getLinkClass("/")}>
            {t("home")}
          </Link>
          <Link href={`/${currentLocale}/about`} className={getLinkClass("/about")}>
            {t("about")}
          </Link>
          <Link href={`/${currentLocale}/offer`} className={getLinkClass("/offer")}>
            {t("offer")}
          </Link>
          <Link href={`/${currentLocale}/blog`} className={getLinkClass("/blog")}>
            {t("blog")}
          </Link>
          <Link href={`/${currentLocale}/gallery`} className={getLinkClass("/gallery")}>
            {t("gallery")}
          </Link>
          <Link href={`/${currentLocale}/contact`} className={getLinkClass("/contact")}>
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />
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
            <Link
              href={`/${currentLocale}/`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("home")}
            </Link>
            <Link
              href={`/${currentLocale}/about`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/about` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${currentLocale}/offer`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/offer` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("offer")}
            </Link>
            <Link
              href={`/${currentLocale}/blog`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/blog` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("blog")}
            </Link>
            <Link
              href={`/${currentLocale}/gallery`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/gallery` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("gallery")}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              onClick={toggleMenu}
              className={pathname === `/${currentLocale}/contact` ? "text-red-500 font-semibold" : "hover:text-red-500"}
            >
              {t("contact")}
            </Link>

            {/* Language Switcher in mobile menu */}
            <div className="mt-2 self-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
