/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.aidacoffeeshop.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*", "/thank-you"],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*", "/admin/*"] },
    ],
  },
  // Add dynamic paths manually
  additionalPaths: async (config) => {
    return [
      "/en/about",
      "/en/contact",
      "/en/gallery",
      "/en/blog",
      "/ru/about",
      "/ru/contact",
      "/ru/gallery",
      "/ru/blog",
      "/de/about",
      "/de/contact",
      "/de/gallery",
      "/de/blog",
    ];
  },
};


