import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@creantly/ui"],
  async rewrites() {
    return [
      {
        source: "/ui/:path*",
        destination: "https://creantly-ui.vercel.app/ui/:path*",
      },
    ];
  },
};

export default nextConfig;
