const nextConfig = {
  // Simplified configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.com",
      },
    ],
    unoptimized: true,
  },
  // Disable strict mode for now to reduce potential issues
  reactStrictMode: false,
}

module.exports = nextConfig

