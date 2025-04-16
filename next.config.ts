import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "https://storage.googleapis.com/instant-shard-437919-n5-static-site",
  basePath: "",
  images: {
    unoptimized: true,
    domains: ["storage.googleapis.com"]
  },
  trailingSlash: true,
  // Ensure all assets are properly prefixed
  webpack: (config) => {
    return config;
  },
  // Configure headers to prevent caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
