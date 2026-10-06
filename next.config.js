/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* gzip/br responses are handled by the server; drop the identifying header */
  poweredByHeader: false,
  compress: true,
  /* TEMP: isolated distDir so a verification build can run alongside the dev server */
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    /* Image optimization ENABLED: Vercel serves resized, WebP/AVIF-encoded
       images on the fly for both local /public images and the WordPress
       media library. This cut multi-MB photos down to a few 10s of KB. */
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400, /* 31 days */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
