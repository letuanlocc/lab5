import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 16: Partial Prerendering được bật bằng cacheComponents
  // (thay cho experimental.ppr: 'incremental' trong bản cũ).
  cacheComponents: true,
};

export default nextConfig;
