import fs from "fs"
import path from "path"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

// Type for our blog metadata
interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author?: string
  authorImage?: string
  coverImage?: string
  readTime?: string
  tags?: string[]
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
        author: metadata.author || "Service Ventures Team",
        authorImage: metadata.authorImage || "/placeholder.svg?height=40&width=40",
        coverImage: metadata.coverImage || "/placeholder.svg?height=400&width=600",
        readTime: metadata.readTime || "5 min read",
        tags: metadata.tags ? metadata.tags.split(",").map((tag: string) => tag.trim()) : [],
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Service Ventures Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, strategies, and success stories to help service-based businesses thrive.
        </p>
      </div>

      {/* Featured Post */}
      {posts.length > 0 && (
        <div className="mb-16">
          <Link href={`/blog/${posts[0].slug}`}>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src={posts[0].coverImage || "/placeholder.svg"}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={posts[0].authorImage || "/placeholder.svg"}
                      alt={posts[0].author}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{posts[0].author}</p>
                    <p className="text-xs opacity-80">
                      {formatDate(posts[0].date)} · {posts[0].readTime}
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2 group-hover:underline">{posts[0].title}</h2>
                <p className="text-sm md:text-base opacity-90 max-w-3xl">{posts[0].excerpt}</p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Rest of the posts */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(post.date)} · {post.readTime}
                    </p>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

