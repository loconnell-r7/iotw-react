/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/iotw-react",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
