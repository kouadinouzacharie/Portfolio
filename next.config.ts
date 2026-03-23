import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig