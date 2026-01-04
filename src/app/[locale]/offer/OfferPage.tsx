"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/[locale]/Component/Nave";
import Carousel from "@/app/[locale]/Component/SpotlightSection";
import { title } from "process";
import { useTranslations } from "next-intl";


export default function OfferPage() {
const t = useTranslations("offer");
const offers = [
  {
    title: t("offer1Title"),
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1767517716/MKN05548_ypyi6z.webp",
    desc: t("offer1desc"),
    details: t("offer1details"),
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517846/MKN05270_nl4l4v.webp",
        caption: t("offer1image1"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517845/MKN05291_fcggkq.webp",
        caption: t("offer1image2"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517839/MKN05326_bulj1x.webp",
        caption: t("offer1image3"),
      },
    ],
  },
  // {
  //   title: t("offer2Title"),
  //   image:
  //     "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05888_lffvkp.webp",
  //   desc: t("offer2desc"),
  //   details: t("offer2details"),
  //   extraImages: [
  //     {
  //       src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05888_lffvkp.webp",
  //       caption: t("offer2image1"),
  //     },
  //     {
  //       src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956545/MKN05641_ewila0.webp",
  //       caption: t("offer2image2"),
  //     },
  //     {
  //       src: "https://res.cloudinary.com/diatamf9x/image/upload/v1760956543/MKN05643_jgkcbo.webp",
  //       caption: t("offer2image3"),
  //     },
  //   ],
  // },
  {
    title: t("offer3Title"),
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1767518006/MKN05633_l9ayna.webp",
    desc: t("offer3desc"),
    details: t("offer3details"),
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518462/MKN05648_flm24c.jpg",
        caption: t("offer3image1"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767516949/MKN05360_z2xvoj.webp",
        caption: t("offer3image2"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517260/MKN05652_xqpxlw.webp",
        caption: t("offer3image3"),
      },
    ],
  },
  {
    title: t("offer4Title"),
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1767518529/MKN05613_mfppbu.webp",
    desc: t("offer4desc"),
    details: t("offer4details"),
    extraImages: [

    ],
  },
  {
    title: t("offer5Title"),
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1767517441/MKN06013_uklcxp.webp",
    desc: t("offer5desc"),
    details: t("offer1details"),
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517548/MKN05921_soqxne.webp",
        caption: t("offer5image1"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518624/MKN05972_jqqqsq.webp",
        caption: t("offer5image2"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518631/MKN05995_h5a4rj.jpg",
        caption: t("offer5image3"),
      },
    ],
  },
  {
    title: t("offer6Title"),
    image:
      "https://res.cloudinary.com/diatamf9x/image/upload/v1767517627/MKN05415_s0btq0.webp",
    desc: t("offer6desc"),
    details: t("offer6details"),
    extraImages: [
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518737/MKN06027_ki3iec.webp",
        caption: t("offer6image1"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518731/MKN06170_ym8ohh.webp",
        caption: t("offer6image2"),
      },
      {
        src: "https://res.cloudinary.com/diatamf9x/image/upload/v1767518724/MKN06079_h9weft.webp",
        caption: t("offer6image3"),
      },
    ],
  },
];


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
    <section className="bg-black text-white min-h-screen overflow-hidden pb-20">
      {/* ---------- HERO ---------- */}
      <section className="relative w-full h-130 md:h-[87vh]">
        <Navbar />
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1767517627/MKN05415_s0btq0.webp"
          alt="We Offer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white font-sans text-4xl sm:text-8xl text-center mb-10 relative inline-block mx-auto">
            {t("offerTitle")}
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
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
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
