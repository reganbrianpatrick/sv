import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* This layout inherits the main layout with the navigation bar */}
      {/* You can add blog-specific layout elements here if needed */}
      {children}
    </>
  )
}

