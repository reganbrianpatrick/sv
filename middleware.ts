import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This middleware is empty but can be used to debug routing issues
  // You can add logging or redirects here if needed
  return NextResponse.next()
}

