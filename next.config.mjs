/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "easytickets-cms.up.railway.app",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
