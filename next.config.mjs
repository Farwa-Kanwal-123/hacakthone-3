// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['cdn.sanity.io'],
//     },
//   };
  
//    export default nextConfig;
  

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
          },
],
unoptimized: true,     
  },
};