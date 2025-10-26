import { client } from "@/app/[locale]/lib/sanity.config";
import BlogPageClient from "./BlogPageClient";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = "https://www.aidacoffeeshop.com";

  const meta = {
    en: {
      title: "AIDA Coffee Blog | Latest News & Updates",
      description: "Read the latest updates, coffee tips, and stories from AIDA Coffee.",
    },
    de: {
      title: "AIDA Kaffee Blog | Neuigkeiten & Updates",
      description: "Lesen Sie die neuesten Updates, Kaffeetipps und Geschichten von AIDA Kaffee.",
    },
    ru: {
      title: "Блог AIDA Кофе | Новости и обновления",
      description: "Читайте последние обновления, советы по кофе и истории от AIDA Кофе.",
    },
  } as const;

  type LocaleKey = keyof typeof meta;
  const locale: LocaleKey = ["en", "de", "ru"].includes(params.locale) ? params.locale as LocaleKey : "en";

  return {
    title: meta[locale].title,
    description: meta[locale].description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        en: `${baseUrl}/en/blog`,
        de: `${baseUrl}/de/blog`,
        ru: `${baseUrl}/ru/blog`,
      },
    },
    openGraph: {
      title: meta[locale].title,
      description: meta[locale].description,
      url: `${baseUrl}/${locale}/blog`,
      siteName: "AIDA Coffee",
      images: [
        { url: `${baseUrl}/seo/blog-og-image.jpg`, width: 1200, height: 630, alt: "AIDA Coffee Blog" },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta[locale].title,
      description: meta[locale].description,
      images: [`${baseUrl}/seo/blog-og-image.jpg`],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

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
