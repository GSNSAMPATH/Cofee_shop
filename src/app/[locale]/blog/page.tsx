import BlogPageClient from './BlogPageClient';
import { client } from '@/app/[locale]/lib/sanity.config';

interface PageParams {
  params: { locale: string };
}

export default async function BlogPage({ params }: PageParams) {
  const { locale } = params;

  const blogs = await client.fetch(`
    *[_type == "blog" && defined(slug.current)] | order(date desc){
      _id,
      title,
      excerpt,
      date,
      slug,
      mainImage
    }
  `);

  return <BlogPageClient blogs={blogs} locale={locale} />;
}
