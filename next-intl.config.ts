import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // ✅ Fallback locale if undefined
  const currentLocale = locale || 'en';

  const messages = (await import(`./src/messages/${currentLocale}.json`)).default;

  return {
    locale: currentLocale,
    messages,
  };
});
