import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // بررسی کوکی زبان
  const locale = request.cookies.get('CYRUS_NEXT_LOCALE')?.value || 'en';
  
  // تنظیم header برای next-intl
  const response = NextResponse.next();
  response.headers.set('x-next-locale', locale);
  
  return response;
}

export const config = {
  // مسیرهایی که middleware روی آنها اعمال می‌شود
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 