import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["agcplnubklunvltffwum.supabase.co"],
     remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
