"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Service Ventures</span>
        </Link>
        <div className="ml-auto hidden gap-6 md:flex">
          <Link href="/portfolio" className="text-sm font-medium hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="ml-auto md:hidden">
            <Button variant="outline" size="icon" aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 text-lg font-medium">
              <Link
                href="/portfolio"
                className="hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link href="/blog" className="hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

