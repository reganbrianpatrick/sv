import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud to partner with these innovative companies that are reshaping industries through service
                  innovation.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioCompanies.map((company, index) => (
                <PortfolioCard key={index} company={company} />
              ))}
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
  {
    name: "DataService",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Data analytics platform for service optimization.",
    category: "SaaS",
    website: "https://dataservice.example.com",
  },
  {
    name: "InsureTech",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Digital insurance platform for service businesses.",
    category: "Fintech",
    website: "https://insuretech.example.com",
  },
  {
    name: "CareConnect",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Remote patient monitoring and care coordination platform.",
    category: "Healthcare",
    website: "https://careconnect.example.com",
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

