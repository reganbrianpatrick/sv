import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

