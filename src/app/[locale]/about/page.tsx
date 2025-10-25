"use client";
import BlogSection from "@/app/[locale]/Component/BlogSection";
import Navbar from "@/app/[locale]/Component/Nave";
import Quality from "@/app/[locale]/Component/quality";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function About() {
    const t = useTranslations("about");
    return (
        <section className=" h-auto bg-black w-full">
            <section className="relative h-130 md:h-[87vh] bg-black w-full">
                <Navbar />
                <Image
                    src="https://res.cloudinary.com/diatamf9x/image/upload/v1760680100/MKN06013_zungn6.webp"
                    alt="Coffee Background"
                    fill
                    className=" h-100 object-cover opacity-700 w-full bg-black"
                    priority
                 />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
                <div className="w-full bottom-50 items-center justify-between md:flex md:max-w-7xl mx-auto ">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-white font-sans text-4xl sm:text-8xl font-regular text-center mb-10 relative inline-block mx-auto">
                            {t("aboutTitle")}
                            {/* <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span> */}
                        </h1>
                    </div>
                </div>
            </section>
            <section className=" py-16 bg-black h-320 px-4  lg:max-w-7xl mx-auto">
                <div className="absolute 2xl:left-300  xl:left-260 lg:left-200 md:left-100 sm:left-50 ml-20 hidden lg:block h-250 top-60 w-36 bg-[#4E2A20] rounded-lg">
                    <div className="relative h-20 mb-10">
                    <Image 
                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1760608885/MKN05685_u3sbe6.webp"
                        alt="about"
                        width={400}
                        height={100}
                        className="object-cover rounded-lg opacity-900 h-30 mb-10"
                        priority
                        />
                    </div>
                    <div className="relative h-10 mb-10 ml-0 mt-12">
                        <Image 
                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1760607805/MKN05652_xjq9sa.webp"
                        alt="about"
                        width={400}
                        height={100}
                        className="opacity-900 mb-10 h-30  rounded-lg"
                        priority
                        />
                    </div>
                    <div className="relative h-20 mt-22">
                        <Image 
                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1760682367/MKN05921_fw80qi.webp"
                        alt="about"
                        width={400}
                        height={100}
                        className="object-cover opacity-900 rounded-lg h-30 mb-10"
                        priority
                        />
                    </div>
                </div>
            
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                     className="text-white inria-heading2-bold text-3xl font-regular sm:text-center mb-10 relative mx-auto ">
                        {t("ourStoryTitle")}
                        <span className="block sm:mx-auto w-16 h-[2px] bg-red-600 mt-2 mb-10"></span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    className="md:absolute text-justify sm:text-center inria-text mb-6  text-white max-w-7xl leading-loose z-20 ">
                        {t("ourStoryText")}                    
                        </motion.p>
                <div className="w-full lg:text-left sm:text-center h-50 md:max-w-full ">   
                    <div className="lg:h-200 w-full  lg:items-center lg:justify-between lg:flex  mx-auto xl:w-full ">
                        <div className="lg:h-100 w-full  lg:px-0 ">
                            <div className="h-50 lg:mt-0 mt-10 sm:mt-40 w-full text-justify s:mpx-20 lg:mt-0 w-auto mx-auto">
                                <motion.h2
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                 className=" text-3xl md:mt-80 lg:mt-0 inria-heading2-bold text-white font-inriasans font-regular mb-6 ">
                                    {t("ourVisionTitle")}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                 className="lg:text-paragraph inria-text mb-6 leading-relaxed text-white ">
                                    {t("ourVisionText")}                                
                                </motion.p>
                            </div>
                            <div className="lg:hidden w-full lg:mt-140 xl:mt-200 mt-10 w-full text-justify  lg:mt-0 w-auto mx-auto">
                            <motion.h2
                             initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className=" text-3xl inria-heading2-bold text-white  font-regular mb-6 lg:ml-0 ">
                                {t("ourMissionTitle")}
                            </motion.h2>
                            <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                             className="lg:text-paragraph inria-text mb-6 line-clamp-10  text-white">
                                {t("ourMissionText")}
                            </motion.a>
                        </div>

                            <div className="mt-30 sm:mt-10 xl:mt-40  xl:mx-20 h-100 lg:mt-45 xl:mt-20 w-auto w-full flex xl:block items-center justify-center ">
                                <Image
                                src="/10caa26122896ca5dd4c53868248e23729604929.png"
                                alt="about"
                                width={400}
                                height={400}
                                className="max-w-[300px] sm:w-[200px] md:w-[200px] lg:w-[400px] h-auto object-cover md:mx-auto lg:mx-0 opacity-90 lg:block"
                                priority
                                />

                            </div>
                        </div>
                        <div className="h-200 w-full md:mx-0 ">
                            <div className="hidden lg:block z-10 absolute mt-30 lg:mt-20 left-135 w-auto oder-2 sm:oder-1">
                                <Image 
                                src="/318f472a558adf3f00de5d344af1329adf88acfa.png"
                                alt="about"
                                width={1000}
                                height={1000}
                                className="object-cover opacity-900"
                                priority
                                />
                            </div>
                            <div className="hidden lg:block h-200  w-full lg:mt-140 xl:mt-200 mt-20 w-full text-justify lg:px-2 mt-10 lg:mt-0 lg:left-135 w-auto mx-auto oder-1 sm:oder-2">
                            <motion.h2
                             initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className=" text-3xl inria-heading2-bold text-white  font-regular mb-6 lg:ml-0 ">
                                {t("ourMissionTitle")}
                            </motion.h2>
                            <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                             className="text-paragraph inria-text mb-6 leading-relaxed text-white ">
                            {t("ourMissionText")}
                            </motion.a>
                        </div>
                        </div>
                        </div>
                </div>
            </section>
            <section className="py-1 bg-black w-full mt-10 sm:mt-0 lg:mt-0">
                <div className="w-full items-center justify-between md:flex w-full">
                    <Quality/>
                </div>
            </section>
            <section className="bg-gradient-to-t from-black to-[#4E2A20] h-full py-16 md:mt-10 mt-40 w-full">
                <div className="w-full items-center justify-between md:flex mx-auto">
                    <BlogSection />
                </div>
            </section>
        </section>
    
    )
}
            