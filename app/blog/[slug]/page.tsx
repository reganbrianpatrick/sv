import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Blog post type
type BlogPost = {
  title: string
  content: string
  date: string
  author: string
  slug: string
  image: string
}

// Sample blog posts with full content
const blogPosts: BlogPost[] = [
  {
    title: "The Future of Service Innovation",
    content: `
      <p>How technology is transforming service delivery across industries. We explore the latest trends and innovations that are reshaping how services are delivered and experienced.</p>
      
      <h2>The Digital Transformation of Services</h2>
      <p>The service industry is undergoing a profound transformation driven by digital technologies. From AI-powered customer service to IoT-enabled predictive maintenance, technology is enabling new service models that were previously impossible.</p>
      
      <p>Companies that embrace these technologies are finding new ways to create value for their customers while improving operational efficiency. This dual benefit is what makes service innovation so compelling for both businesses and investors.</p>
      
      <h2>Key Trends to Watch</h2>
      <p>Several trends are shaping the future of service innovation:</p>
      <ul>
        <li><strong>AI and Automation:</strong> Intelligent systems are taking over routine tasks, freeing human workers to focus on higher-value activities.</li>
        <li><strong>Personalization at Scale:</strong> Data-driven insights are enabling companies to deliver customized services to millions of customers simultaneously.</li>
        <li><strong>Subscription Models:</strong> Recurring revenue models are replacing traditional transactional approaches across many service categories.</li>
        <li><strong>Platform Ecosystems:</strong> Service marketplaces are connecting providers and consumers in new ways, creating network effects and reducing friction.</li>
      </ul>
      
      <h2>Investment Implications</h2>
      <p>For investors, these trends present significant opportunities. Companies that can leverage technology to deliver better, faster, or more personalized services are well-positioned for growth.</p>
      
      <p>At Service Ventures, we're particularly interested in startups that are using technology to transform traditional service industries or create entirely new service categories. We believe these companies have the potential to generate outsized returns while delivering meaningful benefits to customers and society.</p>
    `,
    date: "2023-11-15",
    author: "Sarah Johnson",
    slug: "future-of-service-innovation",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Fundraising Strategies for Service Startups",
    content: `
      <p>Key insights for service-oriented businesses seeking venture capital. Learn about the unique challenges and opportunities for service businesses in the fundraising landscape.</p>
      
      <h2>Understanding Investor Expectations</h2>
      <p>Service businesses often face different investor expectations compared to product-focused startups. Investors typically look for:</p>
      <ul>
        <li><strong>Scalability:</strong> How the business can grow without proportional increases in costs</li>
        <li><strong>Recurring Revenue:</strong> Predictable, subscription-based income streams</li>
        <li><strong>Technology Leverage:</strong> How technology creates competitive advantages and barriers to entry</li>
        <li><strong>Unit Economics:</strong> Clear path to profitability at the customer level</li>
      </ul>
      
      <h2>Positioning Your Service Business</h2>
      <p>When pitching to investors, it's crucial to frame your service business in terms that resonate with venture capital expectations:</p>
      
      <p>Emphasize the technology components that make your service scalable and defensible. Highlight how your approach is fundamentally different from traditional service delivery models in your industry.</p>
      
      <p>Demonstrate how you can achieve operational efficiency as you scale, potentially through automation, standardization, or network effects.</p>
      
      <h2>Fundraising Timeline and Milestones</h2>
      <p>Service businesses should align their fundraising strategy with key business milestones:</p>
      <ul>
        <li><strong>Pre-seed:</strong> Proof of concept and initial customer validation</li>
        <li><strong>Seed:</strong> Repeatable sales process and initial scaling of operations</li>
        <li><strong>Series A:</strong> Proven unit economics and clear path to scaling</li>
      </ul>
      
      <p>By clearly communicating how your service business meets these expectations and milestones, you can significantly improve your chances of securing venture funding.</p>
    `,
    date: "2023-10-28",
    author: "Michael Chen",
    slug: "fundraising-strategies-service-startups",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Building Sustainable Service Models",
    content: `
      <p>How to create service businesses that scale efficiently and sustainably. We discuss the key principles and practices that enable service businesses to grow without compromising quality.</p>
      
      <h2>The Scalability Challenge</h2>
      <p>Service businesses traditionally face scalability challenges due to their reliance on human capital. However, modern service models are overcoming these limitations through innovative approaches to service delivery.</p>
      
      <p>The key is to design your service model with scalability in mind from the beginning, rather than trying to retrofit scalability into an existing high-touch service.</p>
      
      <h2>Principles of Sustainable Service Models</h2>
      <ul>
        <li><strong>Standardization:</strong> Create repeatable processes that deliver consistent quality</li>
        <li><strong>Modularization:</strong> Break services into components that can be combined to meet different needs</li>
        <li><strong>Technology Augmentation:</strong> Use technology to enhance human capabilities rather than simply replacing people</li>
        <li><strong>Customer Self-Service:</strong> Enable customers to accomplish more on their own when appropriate</li>
        <li><strong>Data-Driven Improvement:</strong> Continuously refine your service based on performance data</li>
      </ul>
      
      <h2>Case Studies in Sustainable Service Scaling</h2>
      <p>Several companies in our portfolio have successfully scaled their service businesses by applying these principles. For example, one healthcare services company grew from serving 100 patients to over 10,000 in just 18 months by standardizing their care protocols and using technology to extend the reach of their clinical staff.</p>
      
      <p>Another example is a B2B services company that modularized their offering, allowing them to efficiently serve both small businesses and enterprise clients with the same core platform and team.</p>
      
      <h2>Measuring Service Sustainability</h2>
      <p>To ensure your service model remains sustainable as you scale, track metrics like:</p>
      <ul>
        <li>Customer satisfaction across different customer segments and service volumes</li>
        <li>Employee satisfaction and retention as the organization grows</li>
        <li>Unit economics at different scale points</li>
        <li>Quality consistency across service delivery teams</li>
      </ul>
      
      <p>By focusing on these principles and metrics, service businesses can achieve the scale and efficiency typically associated with product companies while maintaining the quality and customer relationships that are the hallmark of great services.</p>
    `,
    date: "2023-10-12",
    author: "David Rodriguez",
    slug: "building-sustainable-service-models",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "The Rise of AI in Customer Service",
    content: `
      <p>Exploring how artificial intelligence is revolutionizing customer interactions. From chatbots to predictive analytics, AI is changing how businesses engage with their customers.</p>
      
      <h2>Beyond Basic Chatbots</h2>
      <p>The first wave of AI in customer service focused on simple chatbots that could handle basic queries. Today's AI solutions are far more sophisticated, capable of understanding context, sentiment, and even detecting when a human agent should take over.</p>
      
      <p>Leading companies are using AI not just to reduce costs but to actually improve customer satisfaction by providing faster, more personalized service across multiple channels.</p>
      
      <h2>Key Applications of AI in Customer Service</h2>
      <ul>
        <li><strong>Intelligent Routing:</strong> Directing customers to the right resource based on their needs and history</li>
        <li><strong>Predictive Support:</strong> Anticipating customer issues before they occur</li>
        <li><strong>Sentiment Analysis:</strong> Understanding customer emotions to tailor responses appropriately</li>
        <li><strong>Knowledge Management:</strong> Providing agents with relevant information in real-time</li>
        <li><strong>Voice Analytics:</strong> Deriving insights from customer calls to improve service</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Companies looking to leverage AI in their customer service operations should consider a phased approach:</p>
      
      <p>Start with specific, high-volume use cases where AI can make an immediate impact. Ensure you have the right data infrastructure to support AI initiatives. Involve customer service representatives in the development process to build solutions that augment rather than replace their capabilities.</p>
      
      <h2>The Human-AI Partnership</h2>
      <p>The most successful implementations of AI in customer service don't eliminate the human element—they enhance it. By handling routine queries and providing decision support, AI frees human agents to focus on complex issues and emotional connections with customers.</p>
      
      <p>This partnership between humans and AI represents the future of customer service: more efficient, more personalized, and ultimately more satisfying for both customers and service providers.</p>
    `,
    date: "2023-09-30",
    author: "Emily Zhang",
    slug: "rise-of-ai-customer-service",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no post is found, show a message
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="text-3xl font-bold">Post not found</h1>
            <p className="mt-4">The blog post you're looking for doesn't exist.</p>
            <Button asChild className="mt-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container py-12">
          <div className="mx-auto max-w-3xl px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>

            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="mt-8 rounded-lg object-cover"
            />

            <div
              className="prose prose-lg dark:prose-invert mt-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 border-t pt-6">
              <h2 className="text-2xl font-bold">Share this post</h2>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

