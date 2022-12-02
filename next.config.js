/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ["error"],
    },
  },
  output: "standalone",
};

module.exports = nextConfig;
