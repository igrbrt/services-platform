/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   enableUndici: true
  // }
}

module.exports = nextConfig
