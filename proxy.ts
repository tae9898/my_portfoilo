import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 100 // max requests per window
const BLOCKED_PATTERNS = [
  /\/index\.php/i,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/\.env/i,
  /\/config\./i,
  /\/phpmyadmin/i,
  /\/admin\.php/i,
  /\/xmlrpc\.php/i,
]

// In-memory store (for production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  return "unknown"
}

function isSuspiciousRequest(request: NextRequest): boolean {
  const url = request.nextUrl.pathname
  
  // Check for known malicious patterns
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(url)) {
      return true
    }
  }
  
  // Check for suspicious query strings
  const searchParams = request.nextUrl.searchParams
  const suspiciousParams = ["cmd", "exec", "shell", "passthru", "system"]
  for (const param of suspiciousParams) {
    if (searchParams.has(param)) {
      return true
    }
  }
  
  return false
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)
  
  if (!record) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }
  
  if (now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }
  
  record.count++
  return record.count > RATE_LIMIT_MAX
}

// Cleanup old entries periodically
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    for (const [ip, record] of requestCounts.entries()) {
      if (now > record.resetTime) {
        requestCounts.delete(ip)
      }
    }
  }, 60 * 1000)
}

export function proxy(request: NextRequest) {
  const ip = getClientIP(request)
  
  // Block suspicious requests
  if (isSuspiciousRequest(request)) {
    console.log(`[BLOCKED] Suspicious request from ${ip}: ${request.nextUrl.pathname}`)
    return new NextResponse("Not Found", { status: 404 })
  }
  
  // Rate limiting
  if (isRateLimited(ip)) {
    console.log(`[RATE LIMITED] ${ip} exceeded rate limit`)
    return new NextResponse("Too Many Requests", { status: 429 })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}
