"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/Component/Nave";
import Carousel from "@/Component/SpotlightSection";

const offers = [
  {
    title: "DRINK",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "We are a company that makes and distributes delicious drinks. Our main product is made with a secret recipe and available in stores worldwide.",
    details: `
      Our drinks are more than just beverages — they’re experiences in a bottle. 
      Every flavor is carefully balanced to excite your senses, using premium fruit extracts, herbs, and natural sweeteners. 
      Whether you're starting your morning, taking a midday break, or winding down after work, our range of drinks offers something for every mood. 
      From revitalizing lemon iced teas to creamy chocolate blends, we prioritize taste, freshness, and health. 
      Sustainability is at the heart of our process — we use recyclable materials and locally sourced ingredients to reduce our carbon footprint.
    `,
    extraImages: [
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760608535/MKN05633_ou3v1n.webp",
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760944812/MKN05326_yf8tmi.webp",
      "https://res.cloudinary.com/diatamf9x/image/upload/v1760944926/MKN05291_oixhcp.webp",
    ],
  },
  {
    title: "BURGER",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "Deliciously juicy burgers made with fresh ingredients and grilled to perfection.",
    details: `
      Our burgers are built with passion — each bite is a harmony of textures and flavors. 
      We use freshly baked brioche buns, locally sourced vegetables, and 100% pure meat or plant-based patties, grilled over a smokey flame to lock in that irresistible char. 
      Add our signature sauce — a mix of herbs, caramelized onions, and special spices — and you get a burger that speaks for itself. 
      Whether you’re a fan of classic cheeseburgers, spicy chicken, or veggie delights, we guarantee satisfaction in every bite.
    `,
    extraImages: [
      "https://res.cloudinary.com/demo/image/upload/burger1.jpg",
      "https://res.cloudinary.com/demo/image/upload/burger2.jpg",
      "https://res.cloudinary.com/demo/image/upload/burger3.jpg",
    ],
  },
  {
    title: "COFFEE",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "Experience the finest roasted beans, carefully brewed for perfection.",
    details: `
      Every cup of our coffee carries the aroma of freshly ground beans and the craftsmanship of our expert baristas. 
      We partner directly with farmers to source ethically grown beans, ensuring fair trade and exceptional quality. 
      From smooth espresso shots to creamy cappuccinos and artisanal cold brews, every drink is crafted with precision and love. 
      Visit our café to enjoy the atmosphere — warm lights, soothing music, and the comforting smell of roasted beans that feel like home.
    `,
    extraImages: [
      "https://res.cloudinary.com/demo/image/upload/coffee1.jpg",
      "https://res.cloudinary.com/demo/image/upload/coffee2.jpg",
      "https://res.cloudinary.com/demo/image/upload/coffee3.jpg",
    ],
  },
  {
    title: "EVENTS",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "We host exciting community events that bring people together.",
    details: `
      Our events are more than gatherings — they are celebrations of creativity, community, and culture. 
      From live music nights to art showcases and coffee-tasting sessions, every event is designed to connect people. 
      We partner with local artists, musicians, and chefs to create an environment where ideas and friendships brew as easily as our coffee. 
      Whether you’re looking for entertainment or inspiration, there’s always something happening here.
    `,
    extraImages: [
      "https://res.cloudinary.com/demo/image/upload/event1.jpg",
      "https://res.cloudinary.com/demo/image/upload/event2.jpg",
      "https://res.cloudinary.com/demo/image/upload/event3.jpg",
    ],
  },
  {
    title: "LIVE KITCHEN",
    image: "https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp",
    desc: "Enjoy food prepared live before your eyes — where freshness meets flair.",
    details: `
      Our live kitchen is an experience that brings cooking and creativity together. 
      Watch our chefs transform fresh ingredients into mouthwatering dishes right in front of you. 
      Every plate tells a story — from sizzling pastas to smoky grilled meals, each one prepared with passion and precision. 
      The sound, the aroma, and the final presentation make dining here truly unforgettable. 
      It’s not just food, it’s a performance of flavor and skill.
    `,
    extraImages: [
      "https://res.cloudinary.com/demo/image/upload/kitchen1.jpg",
      "https://res.cloudinary.com/demo/image/upload/kitchen2.jpg",
      "https://res.cloudinary.com/demo/image/upload/kitchen3.jpg",
    ],
  },
];

export default function OfferPage() {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOfferClick = (index: number) => {
    const newActive = activeOffer === index ? null : index;
    setActiveOffer(newActive);
  };

  // Auto-scroll to the opened section
  useEffect(() => {
    if (activeOffer !== null && sectionRefs.current[activeOffer]) {
      sectionRefs.current[activeOffer]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeOffer]);

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section className="relative w-full h-130  md:h-[87vh] w-full">
        <Navbar />
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1760936369/MKN05415_xojhj9.webp"
          alt="We Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            WHAT WE OFFER
          </h1>
        </div>
      </section>

      {/* ---------- OFFERS ---------- */}
      <section className="w-full text-white">
        <div className="mx-auto py-20  space-y-24">
          {offers.map((offer, index) => (
            <div
                            style={{
                  background:
                    index % 2 === 1
                      ? "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)"
                      : "#0d0d0d",
                }}>
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-8 py-16 px-6 md:px-20 rounded-lg transition-all duration-500`}
                // style={{
                //   background:
                //     index % 2 === 1
                //       ? "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)"
                //       : "#0d0d0d",
                // }}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg h-[400px] md:w-full object-cover"
                  />
                </div>

              {/* Content */}
              <div className="md:w-1/2 w-full ">
                <h2 className="text-3xl font-semibold mb-4">{offer.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{offer.desc}</p>
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
                      className="overflow-hidden mt-6 space-y-6 bg px-6 md:px-20"
                    >
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {offer.details}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {offer.extraImages.map((img, i) => (
                          <Image
                            key={i}
                            src={img}
                            alt={`${offer.title} extra ${i + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg h-[400px] object-cover shadow-md hover:scale-105 transition-transform duration-300"
                          />
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
