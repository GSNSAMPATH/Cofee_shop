"use client";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // range -15 to 15
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative w-full h-160 bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <Image
        src="/Background.png"
        alt="Coffee Background"
        fill
        className="object-cover opacity-900"
        priority
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-10 md:px-20">
        {/* Left Text */}
        <div className="max-w-lg text-left mt-32 md:mt-0">
          <h1 className="text-5xl font-bold mb-6">Welcome to The Coffee Shop</h1>
          <p className="text-lg leading-relaxed mb-8">
            by AIDA Group, the newest and trendiest coffee shop in Induruwa, Sri Lanka.  
            We serve authentic Lavazza coffee brewed to perfection, paired with pastries,  
            cakes, juices, and smoothies.
          </p>
          <a
            href="/menu"
            className="inline-flex items-center px-6 py-3  rounded-4xl text-white font-semibold hover:bg-[#5D2E0F] transition"
          >
            View Menu →
          </a>
        </div>

        {/* Coffee Cups */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Main cup */}
          <div
            className="relative w-[300px] h-[300px] transition-transform duration-100"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            }}
          >
            <Image
              src="/cofeecup.png"
              alt="Main Coffee Cup"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Small top cup */}
          <Image
            src="/cofeecup.png"
            alt="Small Coffee 1"
            width={120}
            height={120}
            className="absolute -top-10 -right-16 transition-transform duration-100"
            style={{
              transform: `translate(${mousePos.x / 2}px, ${mousePos.y / 2}px)`,
            }}
          />

          {/* Small bottom cup */}
          <Image
            src="/cofeecup.png"
            alt="Small Coffee 2"
            width={100}
            height={100}
            className="absolute bottom-0 -left-16 transition-transform duration-100"
            style={{
              transform: `translate(${mousePos.x / 3}px, ${mousePos.y / 3}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
