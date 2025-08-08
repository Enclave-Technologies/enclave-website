/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default", // Use the default loader instead of Next.js-optimized loader
    unoptimized: true,
    // Optionally specify domains if you have external images
    // domains: ['ghostwhite-worm-873765.hostingersite.com'],
  },
  async headers() {
      return [
        {
          // Define the source (route pattern) to apply these headers to.
          // Example: Apply to all API routes
          source: "/api/:path*", 
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // Replace with your allowed origin(s) or "*" for all
            { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
          ],
        },
        // Add more header configurations for other sources if needed
      ];
    },
};


export default nextConfig;
