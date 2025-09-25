"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMenu() {
  const menuItems = [
    {
      src: "/galleryimage2.jpg",
      alt: "Tea Cup",
      className: "col-span-1  row-span-2",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10  left-4 text-white",
    },
    {
      src: "/Rectangle 17.png",
      alt: "Croissant",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute text-center bottom-20 text-white",
    },
    {
      src: "/492fa468f7a3106ea9eff6a77a531836f19d2783.jpg",
      alt: "Cupcake",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10 left-4 text-white",
    },
    {
      src: "/galleryimage1.jpg",
      alt: "Strawberry Drink",
      className: "col-span-1 row-span-2",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10 left-4 text-white",
    },
    {
      src: "/54fc38f73008258e6fdf2850511c19c06bba69f7.jpg",
      alt: "Croissant",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute bottom-10 left-4 text-white",
    },
    {
      src: "/Rectangle 17.png",
      alt: "Cupcake",
      className: "col-span-1 row-span-1",
      title: "Coffee",
      description:
        "Enjoy handcrafted espresso, pour over, and cold brew made with premium beans.",
      className2: "absolute text-center bottom-20 text-white",
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
            {/* Image scales when parent is hovered */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1
                className={`mb-38 sm:mb-22 inria-heading2-bold text-center ${item.className2}`}
              >
                {item.title}
              </h1>
              <p className={`inria-text  ${item.className2}`}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
