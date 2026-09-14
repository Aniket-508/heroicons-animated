import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/:path*.md",
        destination: "/llms.md/:path*",
      },
    ];
  },
};

export default nextConfig;
