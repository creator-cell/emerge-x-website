import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //add this redirect code for redirect .services to /servive/1
  if (request.nextUrl.pathname === "/services") {
    const url = request.nextUrl.clone();
    url.pathname = "/services/1";
    return NextResponse.redirect(url);
  }

  // Handle API forwarding for /v1 routes
  if (request.nextUrl.pathname.startsWith("/v1")) {
    const api_url =
      process.env.NODE_ENV === "production"
        ? process.env.API_URL
        : process.env.DEV_API_URL;

    const url = new URL(
      api_url + request.nextUrl.pathname + request.nextUrl.search
    );

    return NextResponse.rewrite(url.toString(), {
      headers: {
        ...request.headers,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all routes except static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Include API routes explicitly
    "/v1/:path*",
    "/sign-in",
  ],
};
