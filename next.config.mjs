/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // needed for static export, disables image optimization API
  },
};

export default nextConfig;