import Link from "next/link"
import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/blog"
import Image from "next/image"

// Import the MDX components
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateStaticParams() {
  const blogDirectory = path.join(process.cwd(), "content/blog")

  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory).filter((fileName) => fileName.endsWith(".mdx"))

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Read the MDX file content
  const blogDirectory = path.join(process.cwd(), "content/blog")
  const fullPath = path.join(blogDirectory, `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Remove the frontmatter to get just the content
  const content = fileContents.replace(/---[\s\S]*?---/, "")

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="mx-auto max-w-3xl">
        <div className="space-y-6">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            ← Back to Blog
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-2 text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>

          {post.coverImage && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          )}

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <MDXRemote source={content} />
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

