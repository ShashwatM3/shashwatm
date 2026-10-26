import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/blogs/computer-use-tasks/",
        destination: "/blogs/computer-use-tasks/index.html",
      },
    ];
  },
};

export default nextConfig;
