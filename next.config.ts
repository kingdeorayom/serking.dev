import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/localization/i18n/request.js");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [],
  },
  compiler: {
    removeConsole: false,
  },
};

export default withNextIntl(nextConfig);
