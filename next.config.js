const nextConfig = {
  // Use static export for GitHub Pages
  output: "export",
  // Disable image optimization to avoid issues
  images: {
    unoptimized: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable source maps
  productionBrowserSourceMaps: false,
  // Use trailing slash for consistency
  trailingSlash: true,
  // Disable strict mode
  reactStrictMode: false,
  // Use SWC minify
  swcMinify: true,
  // Set base path for GitHub Pages (if deploying to a subfolder)
  // basePath: '/service-ventures', // Uncomment and adjust if needed
  // Disable asset prefix for now
  assetPrefix: "./",
  // Explicitly set the build directory
  distDir: "out",
  // Disable webpack5 for simpler builds
  webpack5: false,
}

module.exports = nextConfig

