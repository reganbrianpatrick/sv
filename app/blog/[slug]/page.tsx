import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { formatDate } from "@/lib/utils"

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
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div className="text-muted-foreground mb-8">{formatDate(post.date)}</div>
        <MDXRemote source={contentWithoutFrontmatter} />
      </article>
    </div>
  )
}

