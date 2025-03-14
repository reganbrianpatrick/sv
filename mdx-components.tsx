import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use the default components with a few customizations
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold tracking-tighter sm:text-2xl mt-8 mb-4">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
    a: ({ href, children }) => (
      <Link href={href || "#"} className="text-primary hover:underline">
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    img: (props) => (
      <Image
        src={props.src || "/placeholder.svg"}
        alt={props.alt || ""}
        width={1200}
        height={600}
        className="rounded-lg my-8 object-cover"
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
    ...components,
  }
}

