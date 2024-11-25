import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl; // Get the pathname from the request

  // Check if the route starts with `/admin` but is not `/admin/login`
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = req.cookies.get('admin_session'); // Replace with your actual auth token logic

    if (!token) {
      // If not authenticated, redirect to the login page
      const loginUrl = new URL('/admin/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all /admin routes
};
