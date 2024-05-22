/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "directus-production-1635.up.railway.app",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
