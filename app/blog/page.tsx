import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
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
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Load More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
      </main>
      <Footer />
    </div>
  )
}

// Blog post type
type BlogPost = {
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
  image: string
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    title: "The Future of Service Innovation",
    excerpt:
      "How technology is transforming service delivery across industries. We explore the latest trends and innovations that are reshaping how services are delivered and experienced.",
    date: "2023-11-15",
    author: "Sarah Johnson",
    slug: "future-of-service-innovation",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Fundraising Strategies for Service Startups",
    excerpt:
      "Key insights for service-oriented businesses seeking venture capital. Learn about the unique challenges and opportunities for service businesses in the fundraising landscape.",
    date: "2023-10-28",
    author: "Michael Chen",
    slug: "fundraising-strategies-service-startups",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Sustainable Service Models",
    excerpt:
      "How to create service businesses that scale efficiently and sustainably. We discuss the key principles and practices that enable service businesses to grow without compromising quality.",
    date: "2023-10-12",
    author: "David Rodriguez",
    slug: "building-sustainable-service-models",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Rise of AI in Customer Service",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing customer interactions. From chatbots to predictive analytics, AI is changing how businesses engage with their customers.",
    date: "2023-09-30",
    author: "Emily Zhang",
    slug: "rise-of-ai-customer-service",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Vertical SaaS: The Next Frontier",
    excerpt:
      "Why industry-specific software solutions are gaining traction and what it means for investors and entrepreneurs in the service technology space.",
    date: "2023-09-15",
    author: "James Wilson",
    slug: "vertical-saas-next-frontier",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "ESG Considerations in Venture Capital",
    excerpt:
      "How environmental, social, and governance factors are increasingly influencing investment decisions in the venture capital industry.",
    date: "2023-08-28",
    author: "Sophia Martinez",
    slug: "esg-considerations-venture-capital",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
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
          {post.date} • {post.author}
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

