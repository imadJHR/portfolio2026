import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return ["fr", "ar"].map((lang) => ({
      source: `/${lang}/insights/seo-maroc-2025`,
      destination: `/${lang}/insights/seo-maroc-2026`,
      permanent: true,
    }));
  },
};

export default nextConfig;
