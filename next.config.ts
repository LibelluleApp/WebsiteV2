import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/screens/:path*", // S'applique aux images dans le dossier `/screens`
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache long terme
          },
        ],
      },
    ];
  },
};

export default nextConfig;
