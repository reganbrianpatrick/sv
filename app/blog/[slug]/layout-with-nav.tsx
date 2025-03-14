import type { ReactNode } from "react"
import Navigation from "@/components/navigation" // Update this path to match your actual navigation component

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

