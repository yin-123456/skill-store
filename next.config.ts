import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/skill-store",
  images: { unoptimized: true },
};

export default nextConfig;
