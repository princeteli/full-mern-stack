/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: { 
    remotePatterns:[
      {hostname:"www.google.com"},
      {hostname:"images.pexels.com"},
      {hostname:"cdn.pixabay.com"},
    ]
  },
};

export default nextConfig;
