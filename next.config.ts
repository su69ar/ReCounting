import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure sitemap.xml is properly generated and served
  trailingSlash: true,

  // Optimize compilation
  swcMinify: true,

  // Production optimizations
  compress: true,

  // Modern browser targets (reduces polyfills)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
