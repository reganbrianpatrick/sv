/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Configure image domains
  images: {
    domains: ["placeholder.com"],
    // No need for unoptimized: true on Vercel
  },
  // Disable TypeScript type checking during build for faster builds
  // You can remove this if you want type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for faster builds
  // You can remove this if you want ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

