"use client";
import Image from "next/image";

export default function Quality() {
  const feedbacks = [
    {
      name: "Customer",
      text: " We proudly serve Lavazza, one of the world’s finest coffee brands, to ensure every cup meets international standards —while our setting, hospitality, and atmosphere reflect the warm soul of Sri Lanka.",
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
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {feedbacks.map((item, i) => (
            <div
              key={i}
              className="bg-[#6a5d55] text-white p-6 rounded-xl shadow-lg "
            >
              {/* Top part */}
              <div className="flex items-center mb-4">
                <Image
                  src="/405a13dc41782b46aad8026d211eadca804f85a3.png"
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">

              </div>

              {/* Text */}
     
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
