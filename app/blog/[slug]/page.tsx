import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"

// Function to get a specific blog post by slug
async function getBlogPost(slug: string) {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.mdx`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const metadata = extractMetadata(fileContents)

    return {
      slug,
      content: fileContents,
      title: metadata.title || slug,
      date: metadata.date || new Date().toISOString(),
      excerpt: metadata.excerpt || "",
      author: metadata.author || "Service Ventures Team",
      authorImage: metadata.authorImage || "/placeholder.svg?height=80&width=80",
      coverImage: metadata.coverImage || "/placeholder.svg?height=600&width=1200",
      readTime: metadata.readTime || "5 min read",
      tags: metadata.tags ? metadata.tags.split(",").map((tag: string) => tag.trim()) : [],
    }
  } catch (error) {
    return null
  }
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

// Function to get all blog post slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  const filenames = fs.readdirSync(postsDirectory)

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Remove frontmatter from content
  const contentWithoutFrontmatter = post.content.replace(/---\s*[\s\S]*?\s*---/, "")

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={contentWithoutFrontmatter} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Written by {post.author}</h3>
              <p className="text-muted-foreground">Service Ventures contributor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

