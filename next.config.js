/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cf.shopee.com.br',
      },
      {
        protocol: 'https',
        hostname: 'img.ltwebstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'p16-oec-va.ibyteimg.com',
      },
    ],
  },
};

module.exports = nextConfig;
