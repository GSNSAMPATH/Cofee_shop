import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru", "de"], // include all your supported languages
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|ru|de)/:path*"], // ✅ prevents static files from breaking
};
