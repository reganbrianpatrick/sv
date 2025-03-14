import type { ReactNode } from "react"

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* This layout inherits the main layout with the navigation bar */}
      {children}
    </>
  )
}

