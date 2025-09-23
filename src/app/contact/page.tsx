import LocationMap from "@/Component/map";
import Navbar from "@/Component/Nave";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    return (
        <section className=" h-auto bg-black w-full">
            <section className="relative h-160 bg-black w-full">
                <Navbar />
                <Image
                    src="/6edc9a0f3e7b0480f6b403ef6035e717736ff4cd.jpg"
                    alt="Coffee Background"
                    fill
                    className=" h-100 object-cover opacity-900 w-full"
                    priority
                    />
                <div className="w-full  bottom-50 items-center justify-between md:flex md:max-w-7xl mx-auto ">
                    <div className=" mt-0 md:flex md:justify-between mt-100 md:items-center lg:mx-0 mx-5">
                        <h2 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">
                        CONTACT US
                            <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                        </h2>
                    </div>
                </div>
            </section>
            <section >
                <div className="hidden lg:block absolute items-center  mt-100 right-20 xl:right-60 h-10 justify-center mt-10 lg:flex md:max-w-7xl mx-auto ">
                    <Image
                        src="/922cac9acc60b4f35e848097721de57891a22b00.png"
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
                            <h3 className="text-lg font-bold text-white text-center tracking-widest mb-8">
                             GET IN TOUCH
                            </h3>
                            <p className="text-gray-400">
                            We are open for any suggestions or just to have a chat. Feel free to reach out to us through the form below.
                            </p>
                                </div> 
                            <div className=" mt-0 md:flex md:justify-between mt-10 md:items-center lg:mx-0 mx-5">
                            <form className=" font-bold text-white lg:text-md max-w-2xl items-center  text-center mb-10 relative inline-block mx-auto space-y-6 ">
                            <input
                                type="text"
                                placeholder="Name"
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                />
                            <input
                                type="email"
                                placeholder="Mail"
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                />
                            <textarea
                                placeholder="Message"
                                rows={3}
                                className="text-white text-xl w-full bg-transparent border-b border-gray-600 py-6 outline-none focus:border-white"
                                >
                            </textarea>
                            <div className="flex">
                                <button
                                type="submit"
                                className="px-8 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
                                >
                                SEND
                                </button>
                            </div>
                            </form>
                        </div>
                        <div className="relative  lg:left-100 xl:left-170 mt-20 xl:top-2 lg:top-25 z-0 bg-[#E3D7C5] p-3 h-15 max-w-sm flex flex-col items-center lg:block lg:flex-row justify-center rounded-4xl shadow-lg ">
                            <div className="flex space-x-6 text-4xl 0 text-black justify-center lg:mr-40">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FaFacebook />
                                </a>
                                <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
                                <FaWhatsapp />
                                </a>
                            </div>
                        </div> 
                    </div>
                    </div>
                    <div className="hidden lg:block w-3/5 h-200 bottom-50 bg-[#4B2E2B] z-0">
                        

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