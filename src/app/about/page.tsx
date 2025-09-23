import BlogSection from "@/Component/BlogSection";
import Navbar from "@/Component/Nave";
import Quality from "@/Component/quality";
import Image from "next/image";


export default function About() {
    return (
        <section className=" h-auto bg-black w-full">
            <section className="relative h-160 bg-black w-full">
                <Navbar />
                <Image
                    src="/d158006b8444563d4b5b86a6cfa0508ca05e3e50.jpg"
                    alt="Coffee Background"
                    fill
                    className=" h-100 object-cover opacity-900 w-full"
                    priority
                 />
                <div className="w-full bottom-50 items-center justify-between md:flex md:max-w-7xl mx-auto ">
                    <div className="mt-0 md:flex md:justify-between mt-100 md:items-center lg:mx-0 mx-5">
                        <h2 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">
                        ABOUT US
                            <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                        </h2>
                    </div>
                </div>
            </section>
            <section className=" py-16 bg-black h-350">
                <div className="absolute xl:left-300  lg:left-200 md:left-100 ml-20 hidden lg:block h-250 top-60 w-36 bg-[#4E2A20] rounded-lg">
                    <div className="relative h-20 mb-10">
                    <Image 
                        src="/about (2).jpg"
                        alt="about"
                        width={400}
                        height={100}
                        className="object-cover opacity-900 mb-10"
                        priority
                        />
                    </div>
                    <div className="relative h-10 mb-10 ml-t0">
                        <Image 
                        src="/about (2).jpg"
                        alt="about"
                        width={400}
                        height={100}
                        className="opacity-900 mb-10 "
                        priority
                        />
                    </div>
                    <div className="relative h-20">
                        <Image 
                        src="/about (2).jpg"
                        alt="about"
                        width={400}
                        height={100}
                        className="object-cover opacity-900 "
                        priority
                        />
                    </div>
                </div>

                <div className="w-full lg:text-left text-center h-50 md:max-w-7xl mx-auto ">               
                    <h2 className="text-white text-3xl font-bold text-center mb-10 relative mx-auto ">
                        OUR STORY
                        <span className="block mx-auto w-16 h-[2px] bg-red-600 mt-2 mb-10"></span>
                    </h2>
                    <a className="lg:absolute text-center mx-auto font-inriasans mb-6  text-gray-300 sm:max-w-full max-w-80 lg:mr-30 leading-relaxed max-w-10">
                    For nearly five decades, the AIDA Group has been a symbol of authenticity, quality, and Sri Lankan hospitality. From AIDA Gems to AIDA Ayurveda Resort, AIDA Seafood Restaurant, and AIDA Textiles, our legacy is built on trust, craftsmanship, and unforgettable experiences. The Coffee Shop is the latest addition to this family – a space that combines Italian coffee excellence with Sri Lankan warmth. Every cup we brew with Lavazza beans and every pastry baked in our kitchen reflects our mission to create the best café experience in Bentota.
                    </a>
                    <div className="lg:h-200 w-full  lg:items-center lg:justify-between lg:flex md:max-w-7xl mx-auto">
                        <div className="lg:h-100 w-full">
                            <div className="h-50 lg:mt-7 mt-0 w-full text-center  mt-10 lg:mt-0 lg:left-135 w-auto mx-auto">
                                <h2 className=" text-3xl text-white font-inriasans font-bold mb-6 text-center lg:text-left lg:ml-50">
                                    OUR VISION
                                </h2>
                                <a className="lg:text-paragraph text-center  font-inriasans mb-6 leading-relaxed text-white ">
                                To cultivate a boutique café experience that honors Sri Lanka’s rich coffee-growing heritage while creating a serene and stylish space where guests can unwind, reconnect, and savor the present moment. The Coffee Shop by AIDA envisions becoming a destination for both quality coffee and peaceful hospitality in the southern coastal region. Authentic high quality food and beverages
                                </a>
                            </div>
                            <div className="absolute mt-100 sm:mt-60 pb-10 h-100 lg:mt-40 w-auto w-full flex lg:block align-items-center justify-center">
                                <Image
                                src="/10caa26122896ca5dd4c53868248e23729604929.png"
                                alt="about"
                                width={400}
                                height={400}
                                className="max-w-full sm:max-w-[300px] lg:max-w-[400px] h-auto object-cover opacity-90 lg:block"
                                priority
                                />

                            </div>
                        </div>
                        <div className="h-200  w-full">
                            <div className="hidden lg:block absolute mt-40 left-135 w-auto">
                                <Image 
                                src="/318f472a558adf3f00de5d344af1329adf88acfa.png"
                                alt="about"
                                width={1000}
                                height={1000}
                                className="object-cover opacity-900"
                                priority
                                />
                            </div>
                            <div className="h-200 w-full lg:mt-230 mt-20 w-full text-center  mt-10 lg:mt-0 left-135 w-auto mx-auto">
                            <h2 className=" text-3xl text-white text-center font-inriasans font-bold mb-6 lg:ml-0">
                            OUR MISSION
                            </h2>
                            <a className="text-paragraph font-inriasans mb-6 leading-relaxed text-white ">
                            To cultivate a boutique café experience that honors Sri Lanka’s rich coffee-growing heritage while creating a serene and stylish space where guests can unwind, reconnect, and savor the present moment. The Coffee Shop by AIDA envisions becoming a destination for both quality coffee and peaceful hospitality in the southern coastal region. Authentic high quality food and beverages
                            </a>
                        </div>
                        </div>
                        </div>
                </div>
            </section>
            <section className="py-16 bg-black w-full">
                <div className="w-full items-center justify-between md:flex  mx-auto">
                    <Quality />
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
            