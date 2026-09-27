/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* TEMP: isolated distDir so a verification build can run alongside the dev server */
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    unoptimized: true,
    /* Allow Next <Image> to load media served by the headless WordPress backend */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.bssata.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
