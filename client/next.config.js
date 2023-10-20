/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
      },
      {
        protocol: "https",
        hostname: "q-xx.bstatic.com",
      },
      {
        protocol: "https",
        hostname: "r-xx.bstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
