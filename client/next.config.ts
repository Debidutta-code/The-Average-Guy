/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  eslint: {
    // I will fix the errors manually, but disabling for quick build check if needed
    // ignoreDuringBuilds: true,
  },
};

export default nextConfig;
