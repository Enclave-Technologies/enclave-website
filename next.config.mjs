/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "default", // Use the default loader instead of Next.js-optimized loader
    // Optionally specify domains if you have external images
    // domains: ['ghostwhite-worm-873765.hostingersite.com'],
  },
};

export default nextConfig;
