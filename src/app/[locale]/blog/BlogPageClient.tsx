"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: { current: string };
  mainImage?: any;
}

export default function BlogPageClient({
  blogs,
  locale,
}: {
  blogs: Blog[];
  locale: string;
}) {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        {locale === "en" ? "Our Blog" : "අපේ බ්ලොග්"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#2C2C2C] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {blog.mainImage && (
              <Image
                src={blog.mainImage.asset?.url || "/default.jpg"}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <button
                onClick={() => router.push(`/${locale}/blog/${blog.slug.current}`)}
                className="border border-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
