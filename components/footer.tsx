import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold">
            Service Ventures
          </Link>
          <p className="text-sm text-muted-foreground">Investing in the future of service innovation.</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:underline">
                Portfolio
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="mailto:info@serviceventures.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Service Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

