/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
    runtime: 'experimental-edge',
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
