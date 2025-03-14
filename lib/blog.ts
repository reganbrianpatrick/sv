import fs from "fs"
import path from "path"

// Define the blog post metadata type
export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  readingTime: string
  tags?: string[]
}

const blogDirectory = path.join(process.cwd(), "content/blog")

export function getBlogPosts(): BlogPost[] {
  // Ensure the directory exists
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  // Get all MDX files
  const fileNames = fs.readdirSync(blogDirectory).filter((fileName) => fileName.endsWith(".mdx"))

  // Get the blog posts with metadata
  const posts = fileNames.map((fileName) => {
    // Remove the .mdx extension to get the slug
    const slug = fileName.replace(/\.mdx$/, "")

    // Read the MDX file content
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Extract metadata from the MDX content
    // This is a simple implementation - in a real app you might want to use a proper MDX parser
    const metadata: Partial<BlogPost> = {}

    // Extract title
    const titleMatch = fileContents.match(/title:\s*['"](.+)['"]/)
    if (titleMatch) metadata.title = titleMatch[1]

    // Extract date
    const dateMatch = fileContents.match(/date:\s*['"](.+)['"]/)
    if (dateMatch) metadata.date = dateMatch[1]

    // Extract excerpt
    const excerptMatch = fileContents.match(/excerpt:\s*['"](.+)['"]/)
    if (excerptMatch) metadata.excerpt = excerptMatch[1]

    // Extract cover image
    const coverImageMatch = fileContents.match(/coverImage:\s*['"](.+)['"]/)
    if (coverImageMatch) metadata.coverImage = coverImageMatch[1]

    // Extract reading time
    const readingTimeMatch = fileContents.match(/readingTime:\s*['"](.+)['"]/)
    if (readingTimeMatch) metadata.readingTime = readingTimeMatch[1]

    // Extract tags
    const tagsMatch = fileContents.match(/tags:\s*\[(.*)\]/)
    if (tagsMatch) {
      metadata.tags = tagsMatch[1].split(",").map((tag) => tag.trim().replace(/['"]/g, ""))
    }

    return {
      slug,
      ...metadata,
    } as BlogPost
  })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

