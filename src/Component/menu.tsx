"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "menuCard"] | order(index asc){
          index, title, paragraph, image
        }`
      );
      setCards(data);
    };
    fetchData();
  }, []);

  const getImage = (image: any, fallback: string) =>
    image ? urlFor(image) : fallback;

  const menuItems = [
    {
      src: getImage(cards[0]?.image, "/Rectangle2.png"),
      alt: cards[0]?.title || "Coffee",
      title: cards[0]?.title || "Drink",
      description:
        cards[0]?.paragraph ||
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className: "md:col-span-1 md:row-span-2",
      className2: "mt-40 md:mt-90 text-white mt-0 left-4",
    },
    {
      src: getImage(cards[1]?.image, "/Rectangle17.png"),
      alt: cards[1]?.title || "Burger",
      title: cards[1]?.title || "Burger",
      description:
        cards[1]?.paragraph || "Freshly baked buttery croissants every morning.",
      className: "col-span-1 row-span-1",
      className2: "mt-40 text-center text-white",
    },
    {
      src: "/Rectangle 17.png",
      alt: "Event",
      title: "Event",
      description:
        "Join our vibrant events — live music, art shows, and more.",
      className: "col-span-1 row-span-1",
      className2: "mt-40 text-center text-white",
    },
    {
      src: getImage(cards[2]?.image, "/galleryimage1.jpg"),
      alt: cards[2]?.title || "Coffee",
      title: cards[2]?.title || "Coffee",
      description:
        cards[2]?.paragraph ||
        "Refreshing cold brews and fruit drinks made fresh.",
      className: "md:col-span-1 md:row-span-2",
      className2: "mt-40 md:mt-90 text-white mt-0 left-4",
    },
    {
      src: "/Rectangle 17.png",
      alt: "Live Kitchen",
      title: "Live Kitchen",
      description: "Experience our chefs cook your meal right before your eyes.",
      className: "col-span-1 row-span-1",
      className2: "mt-40 text-center text-white",
    },
    {
      src: getImage(cards[3]?.image, "/Rectangle17.png"),
      alt: cards[3]?.title || "Cupcake",
      title: cards[3]?.title || "Cupcake",
      description:
        cards[3]?.paragraph ||
        "Sweet cupcakes with rich chocolate and vanilla frosting.",
      className: "col-span-1 row-span-1",
      className2: "mt-40 text-center text-white",
    },
  ];

  // Navigate to /offer with selected section
  const handleClick = (title: string) => {
    router.push(`/offer?section=${encodeURIComponent(title)}`);
  };

  return (
    <section className="bg-black py-16">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[300px] h-full gap-4">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            onClick={() => handleClick(item.title)}
            className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${item.className}`}
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
            <div className="absolute inset-0 flex flex-col justify-center bg-black/40">
              <div className={`${item.className2}`}>
                <h1 className="inria-heading2-bold text-white text-2xl">
                  {item.title}
                </h1>
                <p className="inria-text text-white/80 mt-2 max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
