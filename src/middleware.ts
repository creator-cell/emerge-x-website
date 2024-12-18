import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  // Handle API forwarding for /v1 routes
  if (request.nextUrl.pathname.startsWith('/v1')) {
    const api_url =
      process.env.NODE_ENV === 'production'
        ? process.env.API_URL
        : process.env.DEV_API_URL;

    const url = new URL(api_url + request.nextUrl.pathname + request.nextUrl.search);

    console.log('-> (m)forwarding-url /api:', url.toString());
    return NextResponse.rewrite(url.toString(), {
      headers: {
        ...request.headers,
      },
    });
  }

  console.log('-> (m)token exists, allowing request to proceed');
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all routes except static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Include API routes explicitly
    '/v1/:path*',
    '/sign-in',
  ],
};
