'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaLanguage, FaSignLanguage } from 'react-icons/fa';

const languages = [
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'ru', label: '🇷🇺 RU' },
  { code: 'de', label: '🇩🇪 DE' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLocale = (locale: string) => {
    // Replace the first locale segment (en, ru, de)
    const newPath = pathname.replace(/^\/(en|ru|de)/, `/${locale}`);
    return newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-red-500 transition"
      >
        <FaLanguage className='text-[30px]' />
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-red border border-gray-200 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={changeLocale(lang.code)}
              className="block px-4 py-2 text-sm hover:bg-red-500"
              onClick={() => setIsOpen(false)}
            >
              {lang.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
