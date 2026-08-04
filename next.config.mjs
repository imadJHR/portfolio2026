import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/fr",
        permanent: true,
      },
      ...["fr", "ar"].map((lang) => ({
        source: `/${lang}/insights/seo-maroc-2025`,
        destination: `/${lang}/insights/seo-maroc-2026`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
