import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample blog posts for static rendering
const sampleBlogPosts = [
  {
    slug: "future-of-service-innovation",
    title: "The Future of Service Innovation",
    date: "2023-11-15T00:00:00.000Z",
    author: "Sarah Johnson",
    excerpt: "How technology is transforming service delivery across industries.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    slug: "fundraising-strategies-service-startups",
    title: "Fundraising Strategies for Service Startups",
    date: "2023-10-28T00:00:00.000Z",
    author: "Michael Chen",
    excerpt: "Key insights for service-oriented businesses seeking venture capital.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    slug: "building-sustainable-service-models",
    title: "Building Sustainable Service Models",
    date: "2023-10-12T00:00:00.000Z",
    author: "David Rodriguez",
    excerpt: "How to create service businesses that scale efficiently and sustainably.",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export default function BlogPage() {
  // Use sample blog posts instead of trying to read from filesystem
  const blogPosts = sampleBlogPosts

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Service Ventures Blog</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, trends, and perspectives from the Service Ventures team.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest insights and updates from Service Ventures delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Blog Card Component
function BlogCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={300}
        height={200}
        className="w-full object-cover h-48"
      />
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1">{post.title}</CardTitle>
        <CardDescription>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {post.author}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="text-sm text-primary flex items-center">
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

