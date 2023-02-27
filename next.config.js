/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
    runtime: 'experimental-edge',
  },
  images: {
    domains: ['raw.githubusercontent.com', 'img.icons8.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
