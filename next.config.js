/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/timbersouq',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/timbersouq',
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
