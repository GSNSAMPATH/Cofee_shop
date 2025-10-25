"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { client } from "@/app/[locale]/lib/sanity.config";
import imageUrlBuilder from "@sanity/image-url";
import { useTranslations } from "next-intl";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

export default function CustomerFeedback() {
  const t = useTranslations("feedback");
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch feedback data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "feedback"] | order(_createdAt desc){
        name, position, rating, text, image
      }`;
      const data = await client.fetch(query);
      setFeedbacks(data);
    };
    fetchData();
  }, []);

  // Calculate width for seamless looping
  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth);
    }
  }, [feedbacks]);

  return (
    <div className="container mx-auto py-16 px-6 text-center overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center inria-heading2-bold text-white text-3xl font-bold mb-12"
      >
        {t("feedbackTitle")}
        <span className="block w-16 h-[2px] bg-red-600 mx-auto mt-2"></span>
      </motion.h2>

      {/* Infinite Loop Scroll */}
      <div className="relative w-full overflow-hidden ">
        <motion.div
          ref={containerRef}
          className="flex  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
 
        >
          {/* Duplicate cards to make infinite scroll seamless */}
          {[...feedbacks].map((item, i) => (
            <div
              key={i}
              className="bg-[#6a5d55] text-white p-6 rounded-xl shadow-lg w-full md:min-w-auto 2xl:min-w-[400px] h-[250px]"
            >
              {/* Top Section */}
              <div className="flex mb-4 items-center">
                <Image
                  src={urlFor(item.image)}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div className="ml-4 text-left flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="poppins-heading mt-1">{item.name}</h3>
                    <div className="flex">
                      {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                        <span key={idx} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="poppins-heading2 mt-2 opacity-80">{item.position}</p>
                </div>
              </div>

              {/* Feedback Text */}
              <p className="poppins-text text-left leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
