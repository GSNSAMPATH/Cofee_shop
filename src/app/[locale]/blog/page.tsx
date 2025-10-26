import BlogPageClient from './BlogPageClient';
import { client } from '@/app/[locale]/lib/sanity.config';

// Define only what we need
interface PageProps {
  params: {
    locale: string;
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = params;

  // Fetch blogs from Sanity
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

  // Pass to client component
  return <BlogPageClient blogs={blogs} locale={locale} />;
}
