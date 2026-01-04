"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";


export default function BlogSection() {
  const t = useTranslations("blog");
  const router = useRouter();
  const { locale } = useParams(); 

  const blogs = [
    {
      title: "AIDA's Coffee Blog",
      desc: "Our blog brings together stories from coffee culture, travel, and AIDA’s legacy in hospitality",
      image: "https://res.cloudinary.com/diatamf9x/image/upload/v1767516953/MKN05685_bpl6vl.webp", // replace with your real images
    },
    {
      title: "Best Coffee Shops in Induruwa ",
      desc: "Best Coffee Shops in Induruwa  – Why AIDA’s Coffee Shop",
      image: "https://res.cloudinary.com/diatamf9x/image/upload/v1767516949/MKN05360_z2xvoj.webp",
    },
    {
      title: "Brewing Coffee with AIDA's Experts",
      desc: "Discover the art of brewing coffee with AIDA’s experts",
      image: "https://res.cloudinary.com/diatamf9x/image/upload/v1767517260/MKN05652_xqpxlw.webp",
    },
  ];

  return (
      <div className="container mx-auto py-16 px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-white text-center inria-heading2-bold font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("title")}
        <span className="block w-16 h-[2px] bg-red-600 mx-auto mt-2"></span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="inria-text font-regular text-white/80 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("text")}
        </motion.p>

    
     {/* ---------- Blog Grid ---------- */}
      <div className="container mx-auto px- pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#2b1f1b] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 p-5"
            style={{
        background: "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)",
      }}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="object-cover w-full h-[250px] rounded-lg mb-4"

            />
            <div className="p-6 text-center">
              <h3 className="text-xl text-white font-bold mb-3 md:line-clamp-1 lg:line-clamp-1 xl:line-clamp-2">{blog.title}</h3>
              <p className="text-gray-300 mb-5 sm:line-clamp-2">{blog.desc}</p>
              <div className="flex items-center gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => router.push(`/${locale}/blog`)}  
                className="border border-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition">
                  {t("button")}
                </button>
                <FaFacebookF className="text-xl text-white hover:text-blue-500 cursor-pointer" />
                <FaYoutube className="text-xl text-white hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


