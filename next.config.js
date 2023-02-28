/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
