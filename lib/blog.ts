import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// Define the blog post type
export type BlogPost = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image: string
  content: string
}

// Path to the blog posts directory
const postsDirectory = (() => {
  try {
    return path.join(process.cwd(), "content/blog")
  } catch (error) {
    console.error("Error resolving blog directory:", error)
    return ""
  }
})()

// Get all blog posts
export function getAllPosts(): BlogPost[] {
  // Ensure the directory exists and is accessible
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Blog posts directory does not exist:", postsDirectory)
      return []
    }

    // Get all markdown files
    const fileNames = fs.readdirSync(postsDirectory)
    const mdFiles = fileNames.filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))

    // Get data from each file
    const posts = mdFiles
      .map((fileName) => {
        try {
          // Remove the file extension to get the slug
          const slug = fileName.replace(/\.(md|mdx)$/, "")

          // Read the markdown file
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")

          // Extract frontmatter and content
          const { data, content } = matter(fileContents)

          // Return the blog post data
          return {
            slug,
            title: data.title || "Untitled",
            date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
            author: data.author || "Anonymous",
            excerpt: data.excerpt || "",
            image: data.image || "/placeholder.svg?height=600&width=1200",
            content,
          }
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error)
          return null
        }
      })
      .filter(Boolean) // Remove any null entries

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error getting all posts:", error)
    return []
  }
}

// Get a specific blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Blog posts directory does not exist:", postsDirectory)
    return null
  }

  // Check for both .md and .mdx extensions
  let fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
  }

  // Read the markdown file
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Extract frontmatter and content
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  // Return the blog post data
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    author: data.author || "Anonymous",
    excerpt: data.excerpt || "",
    image: data.image || "/placeholder.svg?height=600&width=1200",
    content: contentHtml,
  }
}

