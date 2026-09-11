/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.145',
    'http://192.168.1.145:3000',
    '10.104.254.105',
    'http://10.104.254.105:3000',
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
