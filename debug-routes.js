const fs = require("fs")
const path = require("path")

function scanDirectory(dir, basePath = "") {
  const routes = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(basePath, entry.name)

    if (entry.isDirectory()) {
      // Skip node_modules and other non-route directories
      if (
        entry.name !== "node_modules" &&
        entry.name !== ".next" &&
        entry.name !== "public" &&
        !entry.name.startsWith(".")
      ) {
        routes.push(...scanDirectory(fullPath, relativePath))
      }
    } else if (
      entry.name === "page.tsx" ||
      entry.name === "page.jsx" ||
      entry.name === "page.js" ||
      entry.name === "route.js"
    ) {
      // This is a route file
      const routePath = basePath.replace(/\\/g, "/")
      routes.push({
        file: path.join(relativePath),
        route: routePath ? `/${routePath}` : "/",
      })
    }
  }

  return routes
}

// Scan the app directory for routes
console.log("Scanning for routes...")
const appDir = path.join(__dirname, "app")
const routes = scanDirectory(appDir)

console.log("Found routes:")
routes.forEach((route) => {
  console.log(`Route: ${route.route} - File: ${route.file}`)
})

// Check if root route exists
const hasRootRoute = routes.some((route) => route.route === "/")
if (hasRootRoute) {
  console.log("\n✅ Root route (/) exists")
} else {
  console.error("\n❌ Root route (/) does not exist! This will cause 404 errors on the homepage.")
}

console.log("\nDebug complete!")

