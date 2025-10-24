import Navbar from "@/app/[locale]/Component/Nave";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity.config";
import imageUrlBuilder from "@sanity/image-url";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Blog {
  slug: { current: string };
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  mainImage?: any;
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * BlogPage component
 *
 * This component renders a page with a blog hero section, a featured blog card, and a grid of recent blog posts.
 *
 * The hero section contains a background image, a title, and a subtitle.
 * The featured blog card contains an image, a title, an excerpt, and links to social media.
 * The recent blog posts grid contains cards with an image, a title, an excerpt, and links to social media.
 *
 * @param {Object} params - An object containing the locale parameter.
 * @returns {React.ReactElement} - A React element representing the blog page.
 */
/*******  4d44cf28-8486-40df-8ce9-d6ced5c53742  *******/export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  // ✅ Await the params before using
  const { locale } = await props.params;

  const blogs: Blog[] = await client.fetch(`
    *[_type == "blog" && defined(slug.current)] | order(date desc){
      _id,
      title,
      excerpt,
      date,
      slug,
      mainImage
    }
  `);

  if (!blogs.length) {
    return <div className="text-center py-20 text-gray-500">No blogs found.</div>;
  }

  const hero = blogs[0];
  const recentPosts = blogs.slice(1, 7);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-130 md:h-[87vh]">
        <Navbar />
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1760680453/MKN05798_ov91ma.jpg"
          alt="Blog hero"
          fill
          className="h-100 object-cover opacity-900 w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">
            BLOG
          </h1>
        </div>
      </div>

      {/* ---------- Subtitle ---------- */}
      <div className="text-center py-10 px-6 max-w-2xl mx-auto">
        <p className="text-gray-300 text-lg">
          Get the latest updates and deeper coffee experience from IMAJI Coffee
        </p>
      </div>

      {/* ---------- Featured Blog Card ---------- */}
      <div className="container mx-auto px-6 mb-16 h-auto">
        <div className="flex flex-col lg:flex-row bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg md:border-20 border-[#4125224F]">
          <div className="lg:w-1/2">
            <Image
              src={urlFor(hero.mainImage).url()}
              alt="Featured blog"
              width={800}
              height={600}
              className="object-cover w-full h-[300px] lg:h-[400px] rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl inria-heading2 font-bold mb-4">{hero.title}</h2>
            <p className="text-gray-300 mb-6 inria-text-small line-clamp-4">
              {hero.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={`/${locale}/blog/${hero.slug.current}`}
                className="border border-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
              >
                See More
              </Link>
              <FaFacebookF className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaYoutube className="text-2xl hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Blog Grid ---------- */}
      <div className="container mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {recentPosts.map((blog, index) => (
          <div
            key={index}
            className="bg-[#2b1f1b] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 p-5"
            style={{
              background: "linear-gradient(180deg, #4B2E2B 43.75%, rgba(0, 0, 0, 0.25) 100%)",
            }}
          >
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title}
              width={400}
              height={250}
              className="object-cover w-full h-[250px] rounded-lg mb-4"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3 line-clamp-3">{blog.title}</h3>
              <p className="text-gray-300 mb-5 line-clamp-4">{blog.excerpt}</p>
              <div className="flex items-center gap-4 justify-center">
                <Link
                  href={`/${locale}/blog/${blog.slug.current}`}
                  className="border border-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                >
                  See More
                </Link>
                <FaFacebookF className="text-xl hover:text-blue-500 cursor-pointer" />
                <FaYoutube className="text-xl hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
