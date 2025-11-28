/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config, { isServer }) => {
    // Three.js 관련 모듈 해결
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three'),
    }
    
    // ESM 모듈 처리
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    }
    
    return config
  },
}

module.exports = nextConfig

