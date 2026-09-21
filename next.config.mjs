/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // next/image is used for every image on the site. Remote placeholders are
    // served from placehold.co, which must be allow-listed here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    // Placeholder images are PNGs rendered from a remote service, so the
    // optimizer needs a slightly larger cache window.
    minimumCacheTTL: 60 * 60 * 24,
  },
};

export default nextConfig;
