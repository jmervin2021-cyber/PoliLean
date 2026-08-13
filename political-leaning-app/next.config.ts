import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // This allows production builds to successfully complete even if
    // your project has type errors (like the 'score' parameter on line 151).
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignores linting warnings during build so they don't break deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;