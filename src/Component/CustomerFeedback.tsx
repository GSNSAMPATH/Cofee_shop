"use client";
import Image from "next/image";

export default function CustomerFeedback() {
  const feedbacks = [
    {
      name: "Customer",
      position: "Position",
      image: "/9abbe7b302816291cf6ff286092702df2db92c25.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum amet, consectetur adipisicing elit.",
    },
    {
      name: "Customer",
      position: "Position",
      image: "/9abbe7b302816291cf6ff286092702df2db92c25.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum amet, consectetur adipisicing elit.",
    },
    {
      name: "Customer",
      position: "Position",
      image: "/9abbe7b302816291cf6ff286092702df2db92c25.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="">
      <div className="max-w-auto  mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-white text-3xl font-bold mb-12">
          OUR CUSTOMERS FEEDBACK
          <span className="block w-16 h-[2px] bg-red-600 mx-auto  mt-2"></span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, i) => (
            <div
              key={i}
              className="bg-[#6a5d55] text-white p-6 rounded-xl shadow-lg "
            >
              {/* Top part */}
              <div className="flex items-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm opacity-80">{item.position}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
