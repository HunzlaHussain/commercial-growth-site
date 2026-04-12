/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Hide the bottom-left dev toolbar (“building…”, issue count, etc.) in development */
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig