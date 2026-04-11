import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { CategoryCard } from "@/components/category-card"
import { CTABanner } from "@/components/cta-banner"
import { getFeaturedPosts, getRecentPosts, categories } from "@/lib/blog-data"
import { AlertTriangle, Clock, Users, Search } from "lucide-react"

const struggles = [
  {
    icon: Users,
    title: "Footfall is down",
    description: "Locals don't know what's on, and passing trade has dried up. You need more ways to reach potential customers.",
  },
  {
    icon: Clock,
    title: "No time for marketing",
    description: "Between running the bar, managing staff, and handling suppliers, marketing always falls to the bottom of the list.",
  },
  {
    icon: Search,
    title: "Not showing up on Google",
    description: "When people search for 'pubs near me', your competitors appear first. You're invisible to new customers.",
  },
  {
    icon: AlertTriangle,
    title: "Website isn't working",
    description: "Your website is outdated, hard to update, or doesn't help people book tables or find your opening hours.",
  },
]

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getRecentPosts(4)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Practical marketing tips for independent pub landlords
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl">
                Get more bookings, more footfall, and better local visibility. 
                No jargon, no fluff — just advice that works for busy pub operators.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="/blog" 
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
                >
                  Browse All Articles
                </a>
                <a 
                  href="https://publandlord.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-secondary-foreground/30 px-6 py-3 font-medium hover:bg-secondary-foreground/10 transition-colors"
                >
                  Get Marketing Help
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold">Latest Advice</h2>
              <a 
                href="/blog" 
                className="text-sm font-medium text-primary hover:underline"
              >
                View all articles
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <BlogCard 
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  categorySlug={post.categorySlug}
                  date={post.date}
                  slug={post.slug}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">Popular Topics</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard 
                  key={category.slug}
                  title={category.title}
                  description={category.description}
                  slug={category.slug}
                  postCount={category.postCount}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Struggles Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-balance">
                What Pub Landlords Struggle With
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Running an independent pub is hard enough without having to become a marketing expert. 
                These are the challenges we hear about most.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {struggles.map((item) => (
                <div key={item.title} className="text-center p-6">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">More From the Blog</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recentPosts.map((post) => (
                <BlogCard 
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  categorySlug={post.categorySlug}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CTABanner />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
