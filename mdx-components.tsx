import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom components for MDX elements
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    a: ({ href, children }) => (
      <Link href={href || "#"} className="text-primary hover:underline">
        {children}
      </Link>
    ),
    img: (props) => (
      <div className="my-6">
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          width={800}
          height={400}
          alt={props.alt || ""}
          className="rounded-lg"
          {...props}
        />
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
    code: ({ children }) => <code className="bg-secondary px-1 py-0.5 rounded text-sm">{children}</code>,
    // Add any other custom components
    ...components,
  }
}

