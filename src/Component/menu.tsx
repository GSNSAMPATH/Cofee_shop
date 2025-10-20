"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanity.config";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

interface MenuCard {
  index: number;
  title: string;
  paragraph?: string;
  image?: any;
}

export default function OurMenu() {
  const [cards, setCards] = useState<MenuCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch from "menuCard" schema ordered by index
      const data = await client.fetch(
        `*[_type == "menuCard"] | order(index asc){
          index, title, paragraph, image
        }`
      );
      setCards(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const getImage = (image: any, fallback: string) =>
    image ? urlFor(image) : fallback;

  const menuItems = [
    // 1️⃣ Dynamic from Sanity
    {
      src: getImage(cards[0]?.image, "/Rectangle2.png"),
      alt: cards[0]?.title || "Coffee",
      title: cards[0]?.title || "Coffee",
      description:
        cards[0]?.paragraph ||
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className: "md:col-span-1 md:row-span-2 ",
      className2: "  mt-90 text-white mt-0 left-4 ",
    },

    // 2️⃣ Dynamic from Sanity
    {
      src: getImage(cards[1]?.image, "/Rectangle17.png"),
      alt: cards[1]?.title || "Croissant",
      title: cards[1]?.title || "Croissant",
      description:
        cards[1]?.paragraph ||
        "Freshly baked buttery croissants every morning.",
      className: "col-span-1 row-span-1",
      className2: " text-center bottom-20 text-white",
    },

    // 3️⃣ Static (Don’t change)
    {
      src: "/Rectangle 17.png",
      alt: "Cupcake",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10 left-4 text-black",
    },

    // 4️⃣ Dynamic from Sanity
    {
      src: getImage(cards[2]?.image, "/galleryimage1.jpg"),
      alt: cards[2]?.title || "Strawberry Drink",
      title: cards[2]?.title || "Strawberry Drink",
      description:
        cards[2]?.paragraph ||
        "Refreshing cold brews and fruit drinks made fresh.",
      className: "md:col-span-1 md:row-span-2",
      className2: " mt-90 text-white mt-0 left-4",
    },

    // 5️⃣ Static (Don’t change)
    {
      src: "/Rectangle 17.png",
      alt: "Croissant",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10 left-4 text-center text-white",
    },

    // 6️⃣ Dynamic from Sanity
    {
      src: getImage(cards[3]?.image, "/Rectangle17.png"),
      alt: cards[3]?.title || "Cupcake",
      title: cards[3]?.title || "Cupcake",
      description:
        cards[3]?.paragraph ||
        "Sweet cupcakes with rich chocolate and vanilla frosting.",
      className: "col-span-1 row-span-1",
      className2: "absolute text-center bottom-[-10px] text-white",
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[300px] h-full gap-4">
        {menuItems.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            key={i}
            className={`relative overflow-hidden rounded-lg shadow-lg group ${item.className}`}
          >
            {/* Image */}
            {item.src && (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Overlay */}
            <div className={ `absolute inset-0 flex flex-col justify-center bg-black/40` }>
            <div className={`${item.className2}`}></div>
              <h1
                className={`inria-heading2-bold  text-white `}
              >
                {item.title}
              </h1>
              <p className={`inria-text text-white/80 mt-2 max-w-xs`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
