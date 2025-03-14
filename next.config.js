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
  // Use trailing slash for consistency
  trailingSlash: true,
  // Disable strict mode
  reactStrictMode: false,
  // Use SWC minify
  swcMinify: true,
  // Explicitly set the build directory
  distDir: "out",
  // Remove webpack5 setting as it's not needed and can cause issues
  // webpack5: false,

  // IMPORTANT: Remove assetPrefix and basePath for now as they can cause issues
  // assetPrefix: './',

  // Disable experimental features
  experimental: {
    // Disable any experimental features
    appDir: false,
  },
}

module.exports = nextConfig

