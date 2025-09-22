import Navbar from '@/Component/Nave';
import Image from 'next/image';


export default function Home() {
  return (
    <section className=" h-200 ">
      
    <section className="relative w-full h-160">
    <Navbar />
      <Image
        src="/Background.png"
        alt="Coffee Background"
        fill
        className="object-cover opacity-70 w-full "
        priority
        />
      
        <div className="relative z-10 flex md:items-center justify-between h-full px-10 md:px-20 ">
      <div className="max-w-md mt-40 block md:hidden ">
  <h1 className="text-5xl text-white font-bold mb-6">Bentota’s Newest Coffee</h1>
  <p className="text-lg text-white leading-relaxed mb-8">
    Bentota’s Newest Coffee Experience – Lavazza Coffee, Fresh Pastries & More..
  </p>
  <a
    href="/menu"
    className="inline-flex items-center px-6 py-2 border border-red-500 rounded-full text-white font-medium 
               hover:bg-[#5D2E0F] transition duration-300 ease-in-out hover:scale-105"
  >
    View Menu →
  </a>
</div>

        </div>
      
      

      </section>

      

      <section className="absolute  z-10 w-full top-40 h-150  hidden md:block">
        <div className="max-w-md  md:mt-30 md:mx-29 mt-40">
          <h1 className="text-5xl md:mt-10 text-white font-bold mb-6">Bentota’s Newest Coffee</h1>
          <p className="text-lg text-white leading-relaxed mb-8">
            Bentota’s Newest Coffee Experience – Lavazza Coffee, Fresh Pastries & More..
          </p>
          <a
          href="/menu"
          className="inline-flex items-center px-6 py-2 border border-red-500 rounded-full text-white font-medium hover:bg-[#5D2E0F] transition duration-300 ease-in-out mouseover:bg-[#5D2E0F] "
          >
          View Menu → 
          </a>
        </div>
        <div className="relative bottom-20  z-10 flex items-center  h-full">
              {/* Left Side (Button) */}

      
              {/* Right Side (Coffee Cups with Connectors) */}
              <div className="relative flex-1 flex justify-center items-center  bottom-35">
                {/* Big Front Cup */}
                <div className="absolute Bottom-1 mb-50 right-50 w-[580px] h-[780px] z-30 ">
                  <Image
                    src="/cofeecup.png"
                    alt="Front Coffee Cup"
                    fill
                    className="object-contain drop-shadow-xl rotate-[-10deg]"
                    
                  />
                  {/* Connector Line */}
                  <div className="relative top-60 -right-8 mr-40 w-44 h-[2px] bg-white"></div>
                  <div className="absolute top-74 -right-12 mr-80 w-33 h-[2px] bg-white rotate-60"></div>
                </div>
      
                {/* Medium Cup */}
                <div className="absolute bottom-40 right-30 w-[400px] h-[400px] z-20 ">
                  <Image
                    src="/cofeecup.png"
                    alt="Middle Coffee Cup"
                    fill
                    className="object-contain drop-shadow-lg rotate-[-10deg]"
                  />
                  <div className="absolute top-28 -right-0 mr-66 w-30 h-[2px] bg-white"></div>
                  <div className="absolute top-38 -right-0 mr-48 w-24 h-[2px] bg-white rotate-60"></div>

                </div>
      
                {/* Small Cup */}
                <div className="absolute bottom-94 right-10 w-[200px] h-[200px] z-10">
                  <Image
                    src="/cofeecup.png"
                    alt="Back Coffee Cup"
                    fill
                    className="object-contain drop-shadow-md rotate-[-10deg]"
                  />
                  <div className="absolute mt-1 top-8 -right-1 mr-35 w-20 h-[2px] bg-white"></div>
                  <div className="absolute top-18 -right-1 mr-20 w-20 h-[2px] bg-white rotate-60"></div>
                </div>
              </div>
            </div>
      </section>
      <section className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-[#8B4513]">Us</span>
          </h2>
          <p className="mb-6 leading-relaxed text-gray-200">
            Welcome to The Coffee Shop by AIDA Group, the newest and trendiest coffee shop in Bentota, Sri Lanka. 
            We serve authentic Lavazza coffee, brewed to perfection on our professional LaCimbali espresso machine, 
            paired with a wide selection of freshly baked pastries, signature cakes, fresh juices, and smoothies.
          </p>
          <p className="leading-relaxed text-gray-300">
            Our café is designed as a work-friendly, relaxing, and aesthetic space, perfect for travelers, locals, and 
            digital nomads looking for a cozy spot with WiFi. As part of the trusted AIDA Group, known for over 50 years 
            in hospitality, we bring you not just coffee—but a full lifestyle experience in the heart of Bentota.
          </p>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center items-center">
          {/* Vertical brown bar */}
          <div className="hidden md:block absolute h-200 mt-80 w-36 bg-[#4E2A20] rounded-lg"></div>

          {/* Top image */}
          <div className="relative z-10 ml-10">
            <Image
              src="/about (1).jpg"
              alt="Coffee & Pastries"
              width={250}
              height={300}
              className="rounded-lg shadow-lg mt-40 mb-6 ml-50"
            />

            {/* Bottom image */}
            <Image
              src="/about (2).jpg"
              alt="Coffee Latte"
              width={250}
              height={300}
              className="absolute top-100 rounded-lg shadow-lg mr-40 "
            />
            <Image
              src="/about (1).png"
              alt="Coffee & Pastries"
              width={400}
              height={300}
              className="absolute top-20 rounded-lg shadow-lg mb-6 ml-10"
            />
          </div>
        </div>
      </div>

      {/* Numbers */}
<div className="mt-1 ml-40 grid grid-cols-2 max-w-xl mx-auto text-center border-t border-l border-gray-600">
  {[
    { value: "10+", label: "EXPERIENCE" },
    { value: "50+", label: "CUSTOMERS" },
    { value: "20+", label: "PRODUCTS" },
    { value: "15+", label: "AWARDS" },
  ].map((item, i) => (
    <div
      key={i}
      className="p-8 border-gray-600 border-r border-b  "
    >
      <h3 className="text-4xl font-bold">{item.value}</h3>
      <p className="text-sm tracking-wide">{item.label}</p>
    </div>
  ))}
</div>


    </section>
    </section>

  );
}
