/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/timbersouq',
  assetPrefix: '/timbersouq/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
