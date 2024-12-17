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
      {
        protocol: 'https',
        hostname: 'emerge-x-web.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },

    ],
  },
};

export default nextConfig;
