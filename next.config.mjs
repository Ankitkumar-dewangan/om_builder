/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.145',
    'http://192.168.1.145:3000',
    '192.168.1.159',
    '192.168.1.159:3000',
    'localhost',
    'localhost:3000',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
