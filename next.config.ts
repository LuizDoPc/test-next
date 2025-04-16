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
  webpack: (config) => {
    return config;
  },
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
