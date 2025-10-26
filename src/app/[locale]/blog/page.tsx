import { client } from "@/app/[locale]/lib/sanity.config";
import BlogPageClient from "./BlogPageClient";


export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // ✅ Await params — Next 15 expects this
  const { locale } = await params;

  const blogs = await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) {
      title,
      slug,
      excerpt,
      mainImage
    }
  `);

  return <BlogPageClient blogs={blogs} locale={locale} />;
}
