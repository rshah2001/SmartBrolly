import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add artificial delay for loading states
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NextResponse.next());
    }, 1000);
  });
}

export const config = {
  matcher: [
    '/map/:path*',
    '/about/:path*',
    '/pricing/:path*',
    '/signin/:path*',
  ],
};