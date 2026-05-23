import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { CTABanner } from "@/components/cta-banner"
import { blogPosts, getFeaturedPosts, categories } from "@/lib/blog-data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "All Articles",
  description: "Practical marketing articles for independent UK pub landlords. Tips on local SEO, social media, pub websites, and getting more customers through the door.",
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts()
  const allPosts = blogPosts

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16 lg:px-8">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold">
              All Articles
            </h1>
            <p className="mt-4 text-secondary-foreground/80 max-w-2xl">
              Practical marketing advice for independent pub landlords. 
              Browse by topic or scroll through our latest posts.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 lg:mx-0 lg:px-0">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-muted transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPosts.length > 0 && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="font-serif text-xl font-semibold mb-6 text-muted-foreground">
                Featured Article
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <BlogCard 
                  title={featuredPosts[0].title}
                  excerpt={featuredPosts[0].excerpt}
                  category={featuredPosts[0].category}
                  categorySlug={featuredPosts[0].categorySlug}
                  date={featuredPosts[0].date}
                  slug={featuredPosts[0].slug}
                  image={featuredPosts[0].image}
                  featured={true}
                />
                {featuredPosts[1] && (
                  <BlogCard 
                    title={featuredPosts[1].title}
                    excerpt={featuredPosts[1].excerpt}
                    category={featuredPosts[1].category}
                    categorySlug={featuredPosts[1].categorySlug}
                    date={featuredPosts[1].date}
                    slug={featuredPosts[1].slug}
                    image={featuredPosts[1].image}
                    featured={true}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-xl font-semibold mb-6 text-muted-foreground">
              All Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post) => (
                <BlogCard 
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  categorySlug={post.categorySlug}
                  date={post.date}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CTABanner variant="subtle" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
