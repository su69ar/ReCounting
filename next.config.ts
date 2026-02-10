import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure sitemap.xml is properly generated and served
  trailingSlash: true,

  // Optimize compilation
  swcMinify: true,

  // Reduce bundle size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
