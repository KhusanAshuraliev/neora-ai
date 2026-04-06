/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Required for Three.js canvas in certain environments
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  },
}

export default nextConfig
