import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Building2, Briefcase, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Investing in the future of service innovation
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Service Ventures partners with exceptional founders building the next generation of service-oriented
                    businesses.
                  </p>
                </div>
                <div>
                  <Link href="/portfolio">
                    <Button>
                      View Our Portfolio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Investment Philosophy</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Service Ventures, we believe in the transformative power of service-oriented businesses to create
                  lasting value and impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Building2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Early Stage Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We invest in pre-seed to Series A companies with a focus on service innovation and technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Founder Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work closely with founders, providing not just capital but strategic guidance and industry
                    connections.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Long-term Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're committed to building sustainable businesses that create lasting value for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="portfolio">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud to partner with these innovative companies that are reshaping industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioCompanies.slice(0, 3).map((company, index) => (
                <PortfolioCard key={index} company={company} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <Button variant="outline" size="lg">
                  View All Investments
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest from Our Blog</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights, trends, and perspectives from the Service Ventures team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    If you're building something innovative in the service space, we'd love to hear from you.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button>
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">San Francisco</h3>
                      <p className="text-muted-foreground">
                        123 Market Street, Suite 400
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">New York</h3>
                      <p className="text-muted-foreground">
                        456 Madison Avenue, 8th Floor
                        <br />
                        New York, NY 10022
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Portfolio company type
type PortfolioCompany = {
  name: string
  logo: string
  description: string
  category: "SaaS" | "Fintech" | "Healthcare"
  website: string
}

// Sample portfolio companies
const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "CloudService",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Enterprise SaaS platform for service management and optimization.",
    category: "SaaS",
    website: "https://cloudservice.example.com",
  },
  {
    name: "FinanceFlow",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Next-generation payment processing for service businesses.",
    category: "Fintech",
    website: "https://financeflow.example.com",
  },
  {
    name: "HealthConnect",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Telehealth platform connecting patients with healthcare providers.",
    category: "Healthcare",
    website: "https://healthconnect.example.com",
  },
  {
    name: "ServiceAI",
    logo: "/placeholder.svg?height=80&width=80",
    description: "AI-powered customer service automation platform.",
    category: "SaaS",
    website: "https://serviceai.example.com",
  },
  {
    name: "WealthTech",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Digital wealth management for service professionals.",
    category: "Fintech",
    website: "https://wealthtech.example.com",
  },
  {
    name: "MedSchedule",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Healthcare scheduling and patient management platform.",
    category: "Healthcare",
    website: "https://medschedule.example.com",
  },
]

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
    excerpt: "How technology is transforming service delivery across industries.",
    date: "2023-11-15",
    author: "Sarah Johnson",
    slug: "future-of-service-innovation",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Fundraising Strategies for Service Startups",
    excerpt: "Key insights for service-oriented businesses seeking venture capital.",
    date: "2023-10-28",
    author: "Michael Chen",
    slug: "fundraising-strategies-service-startups",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Sustainable Service Models",
    excerpt: "How to create service businesses that scale efficiently and sustainably.",
    date: "2023-10-12",
    author: "David Rodriguez",
    slug: "building-sustainable-service-models",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Rise of AI in Customer Service",
    excerpt: "Exploring how artificial intelligence is revolutionizing customer interactions.",
    date: "2023-09-30",
    author: "Emily Zhang",
    slug: "rise-of-ai-customer-service",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Portfolio Card Component
function PortfolioCard({ company }: { company: PortfolioCompany }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Image
            src={company.logo || "/placeholder.svg"}
            alt={`${company.name} logo`}
            width={40}
            height={40}
            className="rounded-md"
          />
          <CardTitle>{company.name}</CardTitle>
        </div>
        <CardDescription>{company.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{company.description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary flex items-center"
        >
          Visit Website
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

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
        <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
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

