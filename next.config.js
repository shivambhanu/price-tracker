/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',  // This allows all paths from the domain
      },
    ],
  },
}
  
module.exports = nextConfig