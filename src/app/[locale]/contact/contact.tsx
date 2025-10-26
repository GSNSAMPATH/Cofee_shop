"use client";

import LocationMap from "@/app/[locale]/Component/map";
import Navbar from "@/app/[locale]/Component/Nave";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {

  const t = useTranslations("contact");
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // Example: send to your backend API route or email service
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setResponseMessage("⚠️ Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <section className=" h-auto bg-black w-full">
            <section className="relative h-130 md:h-[87vh] bg-black w-full">
                <Navbar />
                <Image
                    src="https://res.cloudinary.com/diatamf9x/image/upload/v1760680901/MKN05360_lnifoz.webp"
                    alt="Coffee Background"
                    fill
                    className=" h-100 object-cover opacity-900 w-full"
                    priority
                    />
                <div className="w-full  bottom-50 items-center justify-between md:flex md:max-w-7xl mx-auto ">
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h2 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">
                            {t("contactTitle")}
                            <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                        </h2>
                    </div>
                </div>
            </section>
            <section >
                <div className="hidden lg:block absolute items-center  mt-100 right-20 xl:right-60 h-10 justify-center mt-10 lg:flex md:max-w-7xl mx-auto ">
                    <Image
                        src="/contactinfo1.png"
                        alt="Coffee Background"
                        width={700}
                        height={200}
                        className=" object-cover opacity-900 z-10"
                        priority
                        />
                </div>
                <div className="w-full h-200 bottom-50 flex justify-between mx-auto ">
                    <div className="w-full h-200 ">
                        <div className="mt-10 p-2 lg:p-10 flex flex-col items-center lg:block lg:flex-row justify-center">
                            <div className="text-center mb-8">
                            <h3 className="text-lg font-bold inria-heading2 text-white text-center tracking-widest mb-8">
                                {t("contactSubtitle")}
                            </h3>
                            <p className="text-gray-400 inria-text text-center">
                                {t("contactText")}
                            </p>
                                </div> 
                            <div className=" mt-0 md:flex md:justify-between mt-10 md:items-center lg:mx-0 mx-5">
                            <form 
                                onSubmit={handleSubmit} 
                                className=" font-bold text-white lg:text-md max-w-2xl items-center  text-center mb-10 relative inline-block mx-auto space-y-6 ">
                            <input
                                type="text"
                                name="name"
                                placeholder={t("name")}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                />
                            <input
                                type="email"
                                name="email"
                                placeholder={t("email")}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                />
                            <textarea
                                placeholder={t("message")}
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                >
                            </textarea>
                            <div className="flex">
                                <button
                                type={"submit"}
                                disabled={isSubmitting}
                                className="px-8 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
                                >
                                {isSubmitting ? t("sending") : t("send")}
                                </button>
                            </div>
                            </form>
                        </div>
                        <div className="lg:p-10 flex flex-col items-center  lg:flex-row justify-center mx-auto">
                        <div className="relative mt-15 md:mt-5 z-0 bg-[#E3D7C5] p-3 h-15 max-w-auto flex flex-col items-center lg:block lg:flex-row justify-center rounded-4xl shadow-lg md:w-[220px]">
                            <div className="flex space-x-5 md:space-x-10 text-4xl 0 text-black justify-center md:w-[200px]">
                                <a
                                    href="https://www.facebook.com/share/17eNyYuR5h/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 cursor-pointer transition"
                                >
                                    <FaFacebook />
                                </a>

                                {/* WhatsApp link */}
                                <a
                                    href="https://wa.me/+94704871510"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-600 cursor-pointer transition"
                                >
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div> 
                    </div>
                    </div>
                    </div>
                    <div className="hidden lg:block w-3/5 h-200 bottom-50 bg-[#4B2E2B] z-0">
                            {/* <div className="hidden lg:block absolute mt-100 mb-50 top-80  right-20 w-[480px] h-[380px] z-0 ">
                              <Image
                                src="/bg_cofeenut.png"
                                alt="Coffee Background2"
                                fill
                                className=" top-10 left-30 h-10 w-10 opacity-80 object-cover object-top-left"
                                priority
                              /> 
                            </div>
                                    <div className="hidden lg:block absolute mt-100 mb-50 top-120  right-10 w-[480px] h-[380px] z-0 ">
                                      <Image
                                        src="/bg_cofeenut.png"
                                        alt="Coffee Background2"
                                        fill
                                        className=" top-10 left-30 h-10 w-10 opacity-80 object-cover object-top-left"
                                        priority
                                      /> 
                                    </div>
                                            <div className="hidden lg:block absolute mt-100 mb-50  right-20 w-[480px] h-[380px] z-0 ">
                                              <Image
                                                src="/bg_cofeenut.png"
                                                alt="Coffee Background2"
                                                fill
                                                className=" top-30 left-30 h-10 w-10 opacity-80 object-cover object-top-left"
                                                priority
                                              /> 
                                            </div>     */}
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full mb-30 py-10 md:py-25 flex justify-center items-center mx-auto ">
                <LocationMap />
                </div>
            </section>
        </section>
    )
}