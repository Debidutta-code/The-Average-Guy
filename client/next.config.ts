import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 this enables static export (creates /out)

  images: {
    unoptimized: true, // 👈 required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
};

export default nextConfig;