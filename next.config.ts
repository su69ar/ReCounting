import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure sitemap.xml is properly generated and served
  trailingSlash: true,
};

export default nextConfig;
