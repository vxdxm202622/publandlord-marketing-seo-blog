import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { CTABanner } from "@/components/cta-banner"
import { getCategory, getPostsByCategory, categories } from "@/lib/blog-data"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  
  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/category/${slug}`,
    },
  }
}

const ctaMessages: Record<string, { title: string; description: string }> = {
  "pub-marketing": {
    title: "Need help with your pub marketing strategy?",
    description: "PubLandlord.com offers complete marketing support for independent pubs. From strategy to execution, we help you get more customers through the door.",
  },
  "local-seo": {
    title: "Want to improve your pub's local search visibility?",
    description: "PubLandlord.com offers local SEO services designed specifically for pubs. Get found when locals search for 'pubs near me'.",
  },
  "social-media": {
    title: "Need help with your pub's social media?",
    description: "PubLandlord.com can help you create engaging social content that actually drives footfall. No more struggling for post ideas.",
  },
  "pub-websites": {
    title: "Need a better website for your pub?",
    description: "PubLandlord.com builds professional pub websites that help you get more bookings. Mobile-friendly, easy to update, and designed for pubs.",
  },
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = getCategory(slug)
  
  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(slug)
  const ctaMessage = ctaMessages[slug] || ctaMessages["pub-marketing"]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16 lg:px-8">
            <nav className="mb-4">
              <Link 
                href="/blog" 
                className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground"
              >
                Blog
              </Link>
              <span className="mx-2 text-secondary-foreground/50">/</span>
              <span className="text-sm text-secondary-foreground">{category.title}</span>
            </nav>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold">
              {category.title}
            </h1>
            <p className="mt-4 text-secondary-foreground/80 max-w-2xl leading-relaxed">
              {category.intro}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 lg:mx-0 lg:px-0">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-muted transition-colors"
              >
                All Posts
              </Link>
              {categories.map((cat) => (
                <Link 
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    cat.slug === slug 
                      ? 'bg-primary text-primary-foreground' 
                      : 'border border-border bg-card hover:bg-muted'
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {posts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles in this category yet.</p>
                <Link 
                  href="/blog"
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  View all articles
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-xl font-bold mb-6">Explore More</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/services"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Professional Services
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Done-for-you marketing support
                </p>
              </Link>
              <Link
                href="/locations"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Find Help Near You
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Location-specific services
                </p>
              </Link>
              <Link
                href="/blog"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  All Articles
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Browse our full archive
                </p>
              </Link>
              <Link
                href="/get-help"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Get Help
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ways we can support you
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CTABanner 
              title={ctaMessage.title}
              description={ctaMessage.description}
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
