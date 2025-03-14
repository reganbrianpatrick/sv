const fs = require("fs")
const path = require("path")

// Function to delete a directory recursively
function deleteDirectory(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for directories
        deleteDirectory(curPath)
      } else {
        // Delete file
        fs.unlinkSync(curPath)
        console.log(`Deleted file: ${curPath}`)
      }
    })
    fs.rmdirSync(directoryPath)
    console.log(`Deleted directory: ${directoryPath}`)
  } else {
    console.log(`Directory does not exist: ${directoryPath}`)
  }
}

// Delete the pages directory
const pagesDir = path.join(__dirname, "pages")
deleteDirectory(pagesDir)
console.log("Cleanup complete!")

