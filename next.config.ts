import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rest',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
