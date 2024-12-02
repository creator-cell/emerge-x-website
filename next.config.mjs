/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'softbankrobotics.com',
            port: '',
            pathname: '/html/**',
          },
        
        ],
      },
};

export default nextConfig;
