import path from "node:path";

const isDevelopment = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd());
    return config;
  },
  async headers() {
    return [
      {
        source: "/fr/:path*",
        headers: [{ key: "Content-Language", value: "fr-MA" }],
      },
      {
        source: "/ar/:path*",
        headers: [{ key: "Content-Language", value: "ar-MA" }],
      },
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
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.google.com https://wa.me",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/projet",
        destination: "/fr/projets",
        permanent: true,
      },
      {
        source: "/projets",
        destination: "/fr/projets",
        permanent: true,
      },
      ...["fr", "ar"].map((lang) => ({
        source: `/${lang}/insights/seo-maroc-2025`,
        destination: `/${lang}/insights/seo-maroc-2026`,
        permanent: true,
      })),
    ]
  },
};

export default nextConfig;
