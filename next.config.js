/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
