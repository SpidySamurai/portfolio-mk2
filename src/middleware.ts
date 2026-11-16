import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const locale = request.nextUrl.pathname.startsWith('/es') ? 'es' : 'en';
  response.headers.set('x-locale', locale);
  return response;
}

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
};
