import BlogPageClient from "./BlogPageClient";
import { client } from "@/app/[locale]/lib/sanity.config";

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Fetch blogs on server
  const blogs = await client.fetch(`
    *[_type == "blog" && defined(slug.current)] | order(date desc){
      _id, title, excerpt, date, slug, mainImage
    }
  `);

  return <BlogPageClient blogs={blogs} locale={locale} />;
}
