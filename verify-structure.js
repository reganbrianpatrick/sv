const fs = require("fs")
const path = require("path")

// Function to check if a directory exists
function directoryExists(directoryPath) {
  return fs.existsSync(directoryPath) && fs.lstatSync(directoryPath).isDirectory()
}

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()
}

// Check project structure
console.log("Verifying project structure...")

// Check if pages directory exists (it should not)
const pagesDir = path.join(__dirname, "pages")
if (directoryExists(pagesDir)) {
  console.error("❌ pages directory still exists. This will cause conflicts with the app directory.")
  console.log("Files in pages directory:")
  fs.readdirSync(pagesDir, { recursive: true }).forEach((file) => {
    console.log(`  - ${file}`)
  })
} else {
  console.log("✅ pages directory does not exist (good)")
}

// Check if app directory exists (it should)
const appDir = path.join(__dirname, "app")
if (directoryExists(appDir)) {
  console.log("✅ app directory exists")
} else {
  console.error("❌ app directory does not exist. This is required for the App Router.")
}

// Check for key files
const keyFiles = [
  { path: "app/layout.tsx", name: "Root layout" },
  { path: "app/page.tsx", name: "Home page" },
  { path: "next.config.mjs", name: "Next.js config" },
  { path: "package.json", name: "Package config" },
]

keyFiles.forEach((file) => {
  if (fileExists(path.join(__dirname, file.path))) {
    console.log(`✅ ${file.name} exists`)
  } else {
    console.error(`❌ ${file.name} does not exist at ${file.path}`)
  }
})

console.log("Verification complete!")

