import BlogPageClient from './BlogPageClient';
import { client } from '@/app/[locale]/lib/sanity.config';

type Props = {
  params: { locale: string };
};

export default async function BlogPage({ params }: Props): Promise<JSX.Element> {
  const { locale } = params;

  // Fetch all blogs from Sanity
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
