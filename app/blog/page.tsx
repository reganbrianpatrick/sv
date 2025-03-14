import fs from "fs"
import path from "path"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

// Type for our blog metadata
interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
}

// Function to get all blog posts
function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Remove the .mdx extension to get the slug
      const slug = filename.replace(/\.mdx$/, "")

      // Read the MDX file content
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Extract metadata from frontmatter
      const metadata = extractMetadata(fileContents)

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || new Date().toISOString(),
        excerpt: metadata.excerpt || "",
      }
    })
    // Sort posts by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// Simple function to extract metadata from frontmatter
function extractMetadata(content: string) {
  const metadataRegex = /---\s*([\s\S]*?)\s*---/
  const match = metadataRegex.exec(content)

  if (!match) return {}

  const frontmatter = match[1]
  const metadata: Record<string, string> = {}

  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":")
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(":").trim()
    }
  })

  return metadata
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{formatDate(post.date)}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Read more →</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

