import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Next.js 16: middleware.ts đã đổi tên thành proxy.ts
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\.png$).*)'],
};
