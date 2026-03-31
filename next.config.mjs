/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@octaverse/sdk"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
    formats: ["image/avif", "image/webp"],
    quality: 80,
  },
};

export default nextConfig;
