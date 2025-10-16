"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/Component/Nave";

export default function OfferPage() {
  const [selected, setSelected] = useState("Live Kitchen");

  const categories = ["Coffee", "Burger", "Live Kitchen", "Drinks", "Events"];

  const galleryImages = [
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
    "/about (2).jpg",
  ];

  const spotlightImages = [
    { src: "/about (2).jpg", title: "Quick profiles and behind-the-scenes" },
    { src: "/about (2).jpg", title: "Quick profiles and behind-the-scenes" },
    { src: "/about (2).jpg", title: "Quick profiles and behind-the-scenes" },
    { src: "/about (2).jpg", title: "Quick profiles and behind-the-scenes" },
    { src: "/about (2).jpg", title: "Quick profiles and behind-the-scenes" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-[60vh]">
        <Navbar />
        <Image
          src="/6d3d6aa76335ce8d7cdc10f75534bc4cfb0c5ecb.jpg"
          alt="We Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            WE OFFER
          </h1>
        </div>
      </div>

      {/* ---------- CATEGORY SELECTOR ---------- */}
      <div className="relative flex flex-col md:flex-row items-center justify-center py-10 gap-4">
        <div className="flex flex-col text-gray-400 text-xl space-y-3">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelected(cat)}
              className={`cursor-pointer transition-all ${
                selected === cat ? "text-white font-semibold" : "hover:text-white/80"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="relative w-[150px] h-[150px] md:ml-10">
          <Image
            src="/922cac9acc60b4f35e848097721de57891a22b00.png"
            alt="Cup"
            fill
            className="object-contain"
          />
          <div className="absolute inset-y-0 right-[-30px] flex items-center">
            <div className="text-3xl font-bold">{selected}</div>
            <span className="ml-2 text-white text-2xl">◀</span>
          </div>
        </div>
      </div>

      {/* ---------- LIVE SECTION ---------- */}
      <div className="text-center px-6 mt-6">
        <h2 className="text-2xl font-semibold">{selected}</h2>
        <p className="text-gray-300 mt-2">
          Get the latest updates and deeper coffee experience from IMAJI Coffee
        </p>
      </div>

      {/* ---------- IMAGE GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg shadow-lg "
          >
            <Image
              src={img}
              alt={`Gallery ${i}`}
              width={400}
              height={400}
              className="object-cover w-full h-[400px]"
            />
          </motion.div>
        ))}
      </div>

      {/* ---------- SPOTLIGHT SECTION ---------- */}
      <div
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">OUR SPOTLIGHT</h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Our blog brings together stories from coffee culture, travel, and
            AIDA’s legacy in hospitality. Best Coffee Shops in Bentota — Why
            AIDA’s Coffee Shop.
          </p>
        </div>

        {/* Spotlight carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-6 scrollbar-hide">
          {spotlightImages.map((spot, i) => (
            <div
              key={i}
              className="min-w-[200px] md:min-w-[250px] bg-[#4B2E2B]/60 rounded-xl overflow-hidden shadow-md flex-shrink-0 hover:scale-105 transition-transform"
            >
              <Image
                src={spot.src}
                alt={spot.title}
                width={250}
                height={250}
                className="object-cover w-full h-[250px]"
              />
              <div className="p-4">
                <p className="text-white text-sm">{spot.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
