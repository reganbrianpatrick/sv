import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Log the requested URL for debugging
  console.log("Middleware - Requested URL:", request.nextUrl.pathname)

  // Continue with the request
  return NextResponse.next()
}

