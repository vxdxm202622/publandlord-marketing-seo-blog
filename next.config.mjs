/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/publandlord-marketing-seo-blog",
  assetPrefix: "/publandlord-marketing-seo-blog/",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
