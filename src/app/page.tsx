"use client";

import BlogSection from "@/Component/BlogSection";
import CustomerFeedback from "@/Component/CustomerFeedback";
import OurMenu from "@/Component/menu";
import Navbar from "@/Component/Nave";
import Service from "@/Component/service";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

export default function Home() {
  return (
    <section className="w-full bg-black">
      <section className="relative h-160 bg-black w-full">
        <Navbar />
        <Image
          src="/Background.png"
          alt="Coffee Background"
          fill
          className=" h-100 object-cover opacity-900 w-full"
          priority
        />
        <div className="hidden lg:block absolute top-60 mb-50 right-0 w-[380px] h-[280px] z-0 ">
          <Image
            src="/bg_cofeenut.png"
            alt="Coffee Background2"
            fill
            className=" top-30 left-30 h-10 w-10 opacity-30"
            priority
          /> 
          <div className="absolute top-30 mb-50 left- w-[380px] h-[280px] z-0 ">
            <Image
              src="/bg_cofeenut.png"
              alt="Coffee Background2"
              fill
              className="absolute top-10 left-30 h-10 w-10 opacity-50"
              priority
            />
          </div>
        </div>
        <div className="w-full h-200 items-center justify-between md:flex md:max-w-7xl mx-auto ">
          <div className="md:mt-80 mt-30 relative md:w-full h-200 md:justify-between md:items-center lg:mx-0 mx-5">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inria-heading text-white md:mt-10 mb-6 ">Bentota’s Newest Coffee</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
             className="inria-text text-lg text-white leading-relaxed mb-8 ">
              Bentota’s Newest Coffee Experience – Lavazza Coffee, Fresh Pastries & More
            </motion.p>
            <a
              href="/menu"
              className="inline-flex items-center px-6 py-2 border border-red-500 rounded-full text-white font-medium 
               hover:bg-[#5D2E0F] transition duration-300"
            >
              View Menu →
            </a>
          </div>
          <div className="hidden lg:flex relative  w-full h-100 left-0">
            <div className="mt-50 flex  justify-center items-center  bottom-35 ">
              {/* Big Front Cup */}
              <div className="absolute Bottom-1 mb-50 right-15 w-[580px] h-[780px] z-30 mouuse-pointer">
                <Image
                  src="/cofeecup.png"
                  alt="Front Coffee Cup"
                  fill
                  className="object-contain drop-shadow-xl rotate-[-10deg]"
                              
                />
                {/* Connector Line */}
                <div className="relative top-60 -right-8 mr-40 w-44 h-[2px] bg-white"><text className="absolute text-white bottom-1 right-1 text-2xl">Iced Americano</text></div>              
                <div className="absolute top-74 -right-12 mr-80 w-33 h-[2px] bg-white rotate-60"></div>
              </div>
                
              {/* Medium Cup */}
              <div className="absolute bottom-55 right-20 w-[400px] h-[400px] z-20 mouuse-pointer">
                <Image
                  src="/cofeecup.png"
                  alt="Middle Coffee Cup"
                  fill
                  className="object-contain drop-shadow-lg rotate-[-10deg]"
                />
                <div className="absolute top-28 -right-0 mr-66 w-30 h-[2px] bg-white"><text className="absolute text-white bottom-1 right-1 text-lg">Iced Latte</text></div>
                <div className="absolute top-38 -right-0 mr-48 w-24 h-[2px] bg-white rotate-60"></div>
              </div>
                
              {/* Small Cup */}
              <div className="absolute bottom-94 right-5  w-[200px] h-[200px] z-10 mouuse-pointer">
                <Image
                  src="/cofeecup.png"
                  alt="Back Coffee Cup"
                  fill
                  className="object-contain drop-shadow-md rotate-[-10deg]"
                  />
                <div className="absolute mt-1 top-8 -right-1 mr-35 w-20 h-[2px] bg-white"><text className="absolute text-white bottom-1 right-1 text-sm">Affogato</text></div>
                <div className="absolute top-18 -right-1 mr-20 w-20 h-[2px] bg-white rotate-60"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
     <section className=" h-220 bg-black w-full">

      <div className="w-full h-160 items-center justify-between md:flex lg:max-w-7xl mx-auto">
        <div className="md:mt-20 mt-30 relative w-full h-200 lg:max-w-mx md:mx-2">
          <div className="mt-40 md:flex md:justify-between md:items-center lg:mx-0 mx-5">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl text-white inria-heading2 mb-6"
              >
             About Us
             <span className=" block w-16 h-[2px] bg-red-600 mt-2"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inria-text mb-6 text-justify leading-relaxed text-gray-200 md:max-w-280 max-w-full sm:max-w-full ">
              Welcome to The Coffee Shop by AIDA Group, the newest and trendiest coffee shop in Bentota, Sri Lanka. 
              We serve authentic Lavazza coffee, brewed to perfection on our professional LaCimbali espresso machine, 
              paired with a wide selection of freshly baked pastries, signature cakes, fresh juices, and smoothies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inria-text text-justify mb-6 leading-relaxed text-gray-300 sm:max-w-full max-w-full"
            >
              Our café is designed as a work-friendly, relaxing, and aesthetic space, perfect for travelers, locals, and 
              digital nomads looking for a cozy spot with WiFi. As part of the trusted AIDA Group, known for over 50 years 
              in hospitality, we bring you not just coffee—but a full lifestyle experience in the heart of Bentota.
            </motion.p>
            </div>
          </div>
          <div className="relative justify-center md:flex sm:mr-20 mx-10 mt-10 ">
            <div className="grid grid-cols-2 w-fit mx-auto text-center text-white divide-x divide-y divide-white ">
              {Array(4)
                .fill("10+")
                .map((exp, i) => (
                  <div key={i} className="p-10">
                    <h3 className="text-4xl font-bold">
                      10<span className="align-super text-lg">+</span>
                    </h3>
                    <p className="uppercase tracking-wide">Experience</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block relative bottom-10 w-full h-100">
        <div className="hidden lg:block absolute mt-100 mb-50  right-0 w-[480px] h-[380px] z-0 ">
          <Image
            src="/bg_cofeenut.png"
            alt="Coffee Background2"
            fill
            className=" top-30 left-30 h-10 w-10 opacity-60"
            priority
          /> 
        </div>
          <div className="relative flex justify-center items-center">
            {/* Vertical brown bar */}
            <div className="hidden lg:block absolute h-250 mt-55 w-36 bg-[#4E2A20] rounded-lg"></div>               
              {/* Top image */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:block relative z-10 ml-10 bottom-20">
                <Image
                  src="/about (1).jpg"
                  alt="Coffee & Pastries"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg mt-40 mb-6 ml-50 mouse-pointer"
                />
                {/* Bottom image */}
                <Image
                  src="/about (2).jpg"
                  alt="Coffee Latte"
                  width={250}
                  height={300}
                  className="absolute top-100 rounded-lg shadow-lg mr-40 mouse-pointer"
                />
                <Image
                  src="/about (1).png"
                  alt="Coffee & Pastries"
                  width={400}
                  height={300}
                  className="absolute top-20 rounded-lg shadow-lg mb-6 ml-10 mouse-pointer"
                />
              </motion.div>
            </div>  
          </div>
        </div>
      </section>
      <section className=" py-16 bg-black w-full">
          <div className="w-full items-center justify-between md:flex md:max-w-7xl mx-auto ">
              <div className="mt-20 md:flex md:justify-between md:items-center lg:mx-0 mx-5">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white inria-heading2 text-center mb-10 relative inline-block mx-auto">
                  OUR MENU
                  <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                </motion.h2>
              </div>
          </div>
          <OurMenu />
      </section>

      <section className="py-10 bg-black w-full">
        <div className="w-full items-center justify-between md:flex md:max-w-7xl mx-auto">
            <div className="mt-0 md:justify-between md:items-center lg:mx-0 mx-5">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white inria-heading2 text-3xl font-regular text-center mb-1 relative inline-block mx-auto">
                OUR SERVICES
                <span className="block w-16 h-[2px] bg-red-600 mt-2"></span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              className="inria-text font-regular text-white leading-relaxed">
                why choose us
              </motion.p>
            </div>
           
        </div>
        <Service />
      </section>
      <section className="bg-gradient-to-r from-black to-[#4E2A20] h-full py-16 mt-160 sm:mt-80 md:mt-10  w-full">
        <div className="w-full items-center justify-between md:flex  mx-auto">
                <CustomerFeedback />
        </div>
      </section>
      <section className="bg-gradient-to-t from-black to-[#4E2A20] h-full py-16 md:mt-10 mt-30 w-full">
         <div className="w-full items-center justify-between md:flex  mx-auto">
           <BlogSection/>
         </div>
       
      </section>
    </section>

  );
}

