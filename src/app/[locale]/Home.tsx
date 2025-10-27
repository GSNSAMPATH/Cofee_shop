"use client";

import BlogSection from "@/app/[locale]/Component/BlogSection";
import CustomerFeedback from "@/app/[locale]/Component/CustomerFeedback";
import OurMenu from "@/app/[locale]/Component/menu";
import Navbar from "@/app/[locale]/Component/Nave";
import Service from "@/app/[locale]/Component/service";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SpotlightSection from "@/app/[locale]/Component/SpotlightSection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";



export default function Home() {
    const t = useTranslations("home");
    const t2 = useTranslations("coffees");

  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

      const coffees = [
    { name: t2("americano"), src: "/cofeecup.png" },
    { name: t2("icedLatte"), src: "/cofeecup.png" },
    { name: t2("affogato"), src: "/cofeecup.png" },
    { name: t2("cappuccino"), src: "/cofeecup.png" },
    { name: t2("espresso"), src: "/cofeecup.png" }
  ];
  const [coffeeIndex, setCoffeeIndex] = useState(0);

  // auto-change index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCoffeeIndex((prev) => (prev + 1) % coffees.length);
    }, 3000000);
    return () => clearInterval(interval);
  }, []);

  // next 3 cups based on index
  const cups = [
    coffees[coffeeIndex % coffees.length],
    coffees[(coffeeIndex + 1) % coffees.length],
    coffees[(coffeeIndex + 2) % coffees.length],
  ];

  return (
    <section className="w-full bg-black">
      <section className="relative h-130 md:h-170 bg-black w-full py-20">
        <Image
          src="/Background.png"
          alt="Coffee Background"
          fill
          className=" h-10 md:h-100 object-cover opacity-900 w-full object-top-left "
          priority
        />
        <div className="hidden lg:block absolute top-60 mb-50 right-0 w-[380px] h-[280px] z-0 ">
          <Image
            src="/bg_cofeenut.png"
            alt="Coffee Background2"
            fill
            className=" top-30 left-30 h-10 w-10 opacity-30 object-cover object-top-left "
            priority
          /> 
          <div className="absolute top-30 mb-50 left- w-[380px] h-[280px] z-0 ">
            <Image
              src="/bg_cofeenut.png"
              alt="Coffee Background2"
              fill
              className="absolute top-10 left-30 h-10 w-10 opacity-50 object-cover object-top-left "
              priority
            />
          </div>
        </div>
        <div className="w-full h-200 items-center justify-between md:flex md:pl-10 xl:pr-15 md:pr-0  mx-auto ">
          <div className="md:mt-40 xl:mt-70 mt-17 relative xl:w-full h-200 md:justify-between md:items-center sm:mx-10 md:mx-0 lg:mx-23 sm:mx-1 mx-5">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inria-heading text-white md:mt-10 xl:mt-0 mb-6 md:mb-5 xl:mb-1">{t("heroTitle")}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
             className="inria-heading3 sm:leading-6 md:leading-10 :max-w-2xl lg:leading-10 xl:leading-10 text-lg text-white mb-10 line-clamp-7 w-4/5 md:line-clamp-3 lg:line-clamp-3 xl:line-clamp-5 md:w-3/5 lg:w-1/2 xl:w-full">
              {t("heroSubtitle")}
            </motion.p>
            <a
              href={`/${locale}/offer`}
              className="inline-flex items-center px-6 py-2 border border-red-500 rounded-full text-white font-medium bg-red-600
               hover:bg-red-500 transition duration-300"
            >
              {t("viewOffer")}
            </a>
          </div>
          <div className="hidden lg:flex relative  w-full h-full left-0 px-20">
            <div className="absolute md:top-14 2xl:top-0 mb-50 2xl:left-[-50] xl:left-[-40] md:left-[-190] left-[-100]  2xl:w-[680px] 2xl:h-[680px] md:w-[520px] md:h-[520px] z-10">
              <Image
                src="/unsplash_RFLDagtOsMM.png"
                alt="Coffee Background2"
                fill
                className="absolute xl:top-10 md:top-0 opacity-700 left-30 h-20 w-20 object-cover object-top-left "
                priority
              />
          </div>
        </div>
      </div>
    </section>
     <section className=" md:h-220 bg-black w-full">

      <div className="w-full h-190 md:h-160 items-center justify-between md:flex lg:px-23 mx-auto">
        <div className="md:mt-20 mt-30 relative  md:w-full h-160 sm:h-200 lg:max-w-mx sm:mx-12 ">
          <div className="md:mt-40 md:flex md:justify-between md:items-center sm:mx-0 mx-5 ">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl text-white inria-heading2 mb-6"
              >
                {t("aboutTitle")}
             <span className=" block w-16 h-[2px] bg-red-600 mt-2"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inria-text mb-6 text-justify leading-relaxed text-gray-200 md:max-w-280 max-w-full sm:max-w-full ">
              {t("aboutPara1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inria-text text-justify mb-6 leading-relaxed text-gray-300 sm:max-w-full max-w-full"
            >
              {t("aboutPara2")}
            </motion.p>
            </div>
          </div>
          <div className="relative justify-center md:flex sm:mr-20 mx-10 mt-10 ">
              <div className="grid grid-cols-2 w-fit mx-auto text-center text-white ">
                <div className="p-5 border-r border-b">
                  <h3 className="text-4xl font-bold text-[22px] md:text-4xl">
                    20<span className="align-super md:text-lg">+</span>
                  </h3>
                  <p className="uppercase tracking-wide text-[12px] xl:text-[22px] sm:text-[14px]">{t("statsYears")}<br/>{t("statsYears2")}</p>
                </div>

                <div className="p-5 border-l border-b">
                  <h3 className="text-4xl font-bold text-[22px] md:text-4xl">
                    10<span className="align-super text-lg">+</span>
                  </h3>
                  <p className="uppercase tracking-wide text-[12px] sm:text-[14px] xl:text-[22px]">{t("statsCustomers")} <br/>{t("statsCustomers2")}</p>
                </div>

                <div className="p-5 border-r border-t">
                  <h3 className="text-4xl font-bold text-[22px] md:text-4xl">
                    500<span className="align-super text-lg">+</span>
                  </h3>
                  <p className="uppercase tracking-wide text-[12px] sm:text-[14px] xl:text-[22px]">{t("statsVarieties")} <br/>{t("statsVarieties2")} </p>
                </div>
                <div className="p-5 border-l border-t">
                <h3 className="text-4xl font-bold text-[22px] md:text-4xl">
                  20<span className="align-super text-lg ">+</span>
                </h3>
                <p className="uppercase tracking-wide text-[12px] sm:text-[14px] xl:text-[22px] ">{t("statsAwards")} <br /> {t("statswon")}</p>
              </div>
            </div>

          </div>
        </div>
        
        <div className="hidden lg:block relative bottom-8 w-full h-100">
        <div className="hidden lg:block absolute mt-100 mb-50  right-0 w-[480px] h-[380px] z-0 ">
          <Image
            src="/bg_cofeenut.png"
            alt="Coffee Background2"
            fill
            className=" top-30 left-30 h-10 w-10 opacity-60 object-cover object-top-left"
            priority
          /> 
        </div>
          <div className="relative flex justify-center items-center">
            {/* Vertical brown bar */}
            <div className="hidden lg:block absolute h-230 mt-55 w-36 bg-[#4E2A20] rounded-lg"></div>               
              {/* Top image */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden lg:block relative z-10 ml-10 bottom-20">
                <Image
                  src="https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp"
                  alt="Coffee & Pastries"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg mt-40 mb-6 ml-50 mouse-pointer"
                />
                {/* Bottom image */}
                <Image
                  src="https://res.cloudinary.com/diatamf9x/image/upload/v1760608885/MKN05685_u3sbe6.webp"
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
      <section className=" pb-10 md:py-16 bg-black w-full">
          <div className="w-full items-center justify-between md:flex md:max-w-7xl mx-auto ">
              <div className="mt-[-20px] md:mt-20 md:flex md:justify-between md:items-center lg:mx-0 mx-5">
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white inria-heading2 text-center mb-10 relative inline-block md:px-12">
                  {t("offerTitle")}
                  <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                </motion.h2>
              </div>
          </div>
          <OurMenu />
          <SpotlightSection/>
      </section>


      <section className="bg-gradient-to-r from-black to-[#4E2A20] h-full py-16  sm:mt-80 md:mt-10  w-full">
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

