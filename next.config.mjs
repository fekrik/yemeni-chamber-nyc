/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    if (process.env.DEFAULT_ROUTE === "shsat") {
      return [
        {
          source: "/",
          destination: "/shsat",
          permanent: false,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
