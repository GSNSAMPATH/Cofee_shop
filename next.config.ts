import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // optional, can omit
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // removed extra quotes ✅
        port: '', // optional
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // optional: allows builds despite ESLint errors
  },
});

export default nextConfig;
