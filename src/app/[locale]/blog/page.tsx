import BlogPageClient from "./BlogPageClient";
import { client } from "@/app/[locale]/lib/sanity.config";

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const blogs = await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) {
      _id,
      title,
      excerpt,
      slug,
      mainImage
    }
  `);

  return <BlogPageClient blogs={blogs} locale={locale} />;
}
