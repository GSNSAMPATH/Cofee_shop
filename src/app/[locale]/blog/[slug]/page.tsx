import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { client } from "@/app/[locale]/lib/sanity.config";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";
import { FaRegClock } from "react-icons/fa";

interface Blog {
  title: string;
  date: string;
  mainImage?: string;
  content: any[];
}

const builder = imageUrlBuilder(client);
function urlFor(source: string) {
  return builder.image(source);
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog Image"}
          width={800}
          height={500}
          quality={75}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-[poppins] text-[24px] md:text-[32px] font-bold text-white mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-[poppins] text-[20px] md:text-[28px] font-semibold text-white mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-[poppins] text-[18px] md:text-[24px] font-semibold text-white mt-6 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-[poppins] text-[16px] md:text-[20px] font-semibold text-white mt-6 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-[poppins] text-[14px] md:text-[18px] font-semibold text-white mt-6 mb-2">
        {children}
      </h5>
    ),
    normal: ({ children }) => (
      <p className="font-[poppins] text-[12px] md:text-[16px] leading-relaxed text-justify text-gray-100 mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#E3D7C5] pl-4 italic text-gray-300 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#E3D7C5]">{children}</strong>,
    em: ({ children }) => <em className="text-[#E3D7C5] italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E3D7C5] underline hover:text-[#E3D7C5]"
      >
        {children}
      </a>
    ),
  },

};

export default async function BlogPost(props: { params: Promise<{ locale: string; slug: string }> }) {
  // ✅ Await the params before destructuring
  const { slug, locale } = await props.params;

  const blog: Blog | null = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      date,
      mainImage,
      content
    }`,
    { slug }
  );

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-gray-200 px-4 sm:px-6 md:px-4">
      <section className="sm:px-6 md:px-8 lg:px-30 py-4 pb-14 md:py-16">
        <h1 className="font-[poppins] text-[24px] md:text-[40px] font-semibold mb-3 text-white mt-20">
          {blog.title}
        </h1>
        <p className="text-gray-100 mb-6 flex items-center gap-2">
          <FaRegClock />
          {new Date(blog.date).toLocaleDateString(locale, {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        {blog.mainImage && (
          <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
              width={1200}
              height={600}
              quality={75}
              className="w-full h-[45vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={blog.content} components={portableTextComponents} />
        </div>
      </section>
    </main>
  );
}
