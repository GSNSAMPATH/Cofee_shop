"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/[locale]/Component/Nave";
import Carousel from "@/app/[locale]/Component/SpotlightSection";
import { title } from "process";

const offers = [
  {
    title: "BEVERAGE",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760956844/MKN05548_gqmxxw.webp",
    desc: "We are a company that makes and distributes delicious drinks. Our main product is made with a secret recipe and available in stores worldwide.",
    details: `
      Our drinks are more than just beverages — they’re experiences in every sip. 
      Each creation is a perfect balance of flavor, crafted with premium fruit extracts, 
      aromatic herbs, and natural sweeteners to awaken your senses. Whether you’re jumpstarting your morning, 
      taking a refreshing midday break, or unwinding after a long day, our diverse range of drinks has something to match every mood. 
      From zesty lemon iced teas that energize you to indulgent chocolate blends that comfort your soul, every bottle reflects our dedication to taste, 
      freshness, and well-being. At the heart of what we do lies sustainability — we proudly use recyclable materials and locally sourced ingredients to support our community and reduce our carbon footprint.`,
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760957207/MKN05270_xoamfd.webp",
        caption: "Refreshing and energizing iced teas for a vibrant start to your day.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760944812/MKN05326_yf8tmi.webp",
        caption: "Delicious and indulgent chocolate blends that comfort your soul.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760944926/MKN05291_oixhcp.webp",
        caption: "Premium fruit extracts and aromatic herbs for a perfect balance of flavor.",
      },
    ],
  },
  {
    title: "BURGER",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05888_lffvkp.webp",
    desc: "Deliciously juicy burgers made with fresh ingredients and grilled to perfection.",
    details: `
      Our burgers are built with passion — each bite is a harmony of textures and flavors. 
      We use freshly baked brioche buns, locally sourced vegetables, and 100% pure meat or plant-based patties. 
      Add our signature sauce — a mix of herbs, caramelized onions, and special spices — and you get a burger that speaks for itself.
    `,
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05888_lffvkp.webp",
        caption: "Juicy and juicy burgers made with fresh ingredients.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05641_ewila0.webp",
        caption: "Deliciously juicy burgers made with fresh ingredients and grilled to perfection.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956543/MKN05643_jgkcbo.webp",
        caption: "Juicy and juicy burgers made with fresh ingredients.",
      },
    ],
  },
  {
    title: "COFFEE",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "Experience the finest roasted beans, carefully brewed for perfection.",
    details: `
      Our coffee is a harmonious blend of handcrafted beans sourced from the finest regions of the world. 
      We roast each batch to perfection, ensuring that every cup is a masterpiece of flavor and aroma. 
      Our commitment to quality extends to the beans themselves, which are carefully selected and roasted to perfection.
    `,
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760608535/MKN05633_ou3v1n.webp",
        caption: "Handcrafted beans sourced from the finest regions of the world.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760957512/MKN05648_l2xryg.jpg",
        caption: "Each cup is a masterpiece of flavor and aroma.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760607805/MKN05652_xjq9sa.webp",
        caption: "Handcrafted beans sourced from the finest regions of the world.",
      },
    ],
  },
  {
    title: "EVENTS",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760680238/MKN05613_hme9sj.webp",
    desc: "Experience the magic of our events, where we bring together people, food, and music to create unforgettable moments.",
    details: `
      Our events are more than just a gathering — they're a celebration of culture, creativity, and community. 
      We believe in the power of events to bring people together and create memories that last a lifetime.
    `,
    extraImages: [

    ],
  },
  {
    title: "Community",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760680100/MKN06013_zungn6.webp",
    desc: "Experience the magic of our events, where we bring together people, food, and music to create unforgettable moments.",
    details: `
      Our events are more than just a gathering — they're a celebration of culture, creativity, and community. 
      We believe in the power of events to bring people together and create memories that last a lifetime.
    `,
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760971727/MKN05972_t731ty.webp",
        caption: "Community gatherings filled with energy and joy.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760972009/MKN05995_fx22l6.jpg",
        caption: "Celebrating creativity and connections.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760971880/MKN06182_wfaac3.webp",
        caption: "Community gatherings filled with energy and joy.",
      },
    ],
  },
  {
    title: "LIVE KITCHEN",
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760936369/MKN05415_xojhj9.webp",
    desc: "Experience food prepared live before your eyes — where freshness meets flair.",
    details: `
      Our live kitchen is an experience that brings cooking and creativity together. 
      Watch our chefs transform fresh ingredients into mouthwatering dishes right in front of you. 
      Every plate tells a story — from sizzling pastas to smoky grilled meals, each one prepared with passion and precision. 
      The sound, the aroma, and the final presentation make dining here truly unforgettable. 
      It’s not just food, it’s a performance of flavor and skill.
    `,
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760958023/MKN05440_uajo3d.jpg",
        caption: "Chefs in action — every dish crafted live.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760958234/MKN05818_sykm2s.webp",
        caption: "Fresh ingredients sizzling to perfection.",
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760958655/MKN06170_deofjp.webp",
        caption: "The energy of the kitchen — live and authentic.",
      },
    ],
  },
];

export default function OfferPage() {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOfferClick = (index: number) => {
    setActiveOffer(activeOffer === index ? null : index);
  };

  // ✅ Auto-scroll to section when opened manually
  useEffect(() => {
    if (activeOffer !== null && sectionRefs.current[activeOffer]) {
      sectionRefs.current[activeOffer]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeOffer]);

  // ✅ Auto-scroll when arriving via /offer#coffee etc.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    }
  }, []);

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section className="relative w-full h-130 md:h-[87vh]">
        <Navbar />
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1760936369/MKN05415_xojhj9.webp"
          alt="We Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white font-sans text-4xl sm:text-8xl text-center mb-10 relative inline-block mx-auto">
            WHAT WE OFFER
          </h1>
        </div>
      </section>

      {/* ---------- OFFERS ---------- */}
      <section className="w-full text-white">
        <div className="mx-auto py-20 space-y-24">
          {offers.map((offer, index) => (
            <div
              key={index}
              id={offer.title.toLowerCase().replace(/\s+/g, "-")}
              style={{
                background:
                  index % 2 === 1
                    ? "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)"
                    : "#0d0d0d",
              }}
            >
              <div
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-8 py-16 px-6 md:px-20 mx-auto rounded-lg transition-all duration-500`}
              >
                {/* Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg h-[400px] md:w-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <motion.h2 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl font-semibold mb-4 inria-heading2">{offer.title}</motion.h2>
                  <motion.p 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}  
                  viewport={{ once: true }}
                  className="text-gray-300 mb-6 leading-relaxed inria-text">
                    {offer.desc}
                  </motion.p>
                  <button
                    onClick={() => handleOfferClick(index)}
                    className="px-5 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded transition-all duration-300"
                  >
                    {activeOffer === index ? "Close" : "See More"}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {activeOffer === index && (
                  <motion.div
                    key="expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden mt-6 space-y-6 px-6 md:px-20 pb-12"
                  >
                    <p className="text-gray-300 text-justify mb-20 inria-text-small">
                      {offer.details}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {offer.extraImages.map((img, i) => (
                        <div
                          key={i}
                          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        >
                          <Image
                            src={img.src}
                            alt={`${offer.title} extra ${i + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg h-[300px] w-full object-cover"
                          />
                          <p className="text-gray-400 text-sm mt-3 text-center italic">
                            {img.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ---------- ADDITIONAL CAROUSEL ---------- */}
        <Carousel />
      </section>
    </section>
  );
}
