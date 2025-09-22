"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogSection() {
  const blogs = [
    {
      title: "OUR BLOG",
      desc: "Our blog brings together stories from coffee culture, travel, and AIDA’s legacy in hospitality",
      image: "/galleryimage2.jpg", // replace with your real images
    },
    {
      title: "OUR BLOG",
      desc: "Best Coffee Shops in Bentota – Why AIDA’s Coffee Shop",
      image: "/galleryimage2.jpg",
    },
    {
      title: "OUR BLOG",
      desc: "Discover the art of brewing coffee with AIDA’s experts",
      image: "/galleryimage2.jpg",
    },
  ];

  return (
      <div className="container mx-auto py-16 px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-white text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR BLOG
        <span className="block w-16 h-[2px] bg-red-600 mx-auto  mt-2"></span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-white/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our blog brings together stories from coffee culture, travel, and
          AIDA’s legacy in hospitality
        </motion.p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="relative group rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 transition duration-500 group-hover:bg-black/60">
                <h3 className="text-white text-xl font-bold">{blog.title}</h3>
                <p className="text-white/80 text-sm mt-2">{blog.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

  );
}
