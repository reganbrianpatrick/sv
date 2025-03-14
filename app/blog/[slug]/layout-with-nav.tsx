import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation" // Fixed import to use named export

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  )
}

