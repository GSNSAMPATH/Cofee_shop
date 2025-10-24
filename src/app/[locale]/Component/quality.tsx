"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Quality() {
  const feedbacks = [
    {
      name: "Global Quality, Local Soul",
      text: " We proudly serve Lavazza, one of the world’s finest coffee brands, to ensure every cup meets international standards —while our setting, hospitality, and atmosphere reflect the warm soul of Sri Lanka.",
    },
    {
      name: "Tranquility & Wellness",
      text: "As part of AIDA’s wellness-driven vision, we offer more than just coffee—we offer peace. Our beachside setting, calming interiors, and slow-living ethos invite guests to pause, breathe, and savor the moment",
    },
    {
      name: "Connection & Community",
      text: "We create a welcoming space where travelers, locals, and creatives can gather, recharge, and connect—over conversation, books, or the simple joy of a perfect cup.",
    },
  ];

  return (
   
      <div className=" container mx-auto py-16 px-6 mt-20 md:mt-0">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {feedbacks.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              key={i}
              className="bg-[#6a5d55] text-white p-6 rounded-xl shadow-lg mouuse-pointer"
            >
              {/* Top part */}
              <div className="flex items-center mb-4">
                <Image
                  src="/405a13dc41782b46aad8026d211eadca804f85a3.png"
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold poppins-heading2-bold">{item.name}</h3>
                        <p className="poppins-text text-justify mt-2">{item.text}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">

              </div>

              {/* Text */}
     
            </motion.div>
          ))}
        </div>
      </div>

  );
}
