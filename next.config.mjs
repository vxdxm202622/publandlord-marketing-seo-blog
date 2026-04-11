/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/publandlord-marketing-seo-blog",
  assetPrefix: "/publandlord-marketing-seo-blog/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
