import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [],
  },
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;
