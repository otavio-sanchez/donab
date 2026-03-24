import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@octaverse/sdk"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**",
      },
    ],
  },
};

export default nextConfig;
