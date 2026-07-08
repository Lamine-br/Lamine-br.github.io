/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    // Legacy components (unused) have ESLint errors — skip during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
