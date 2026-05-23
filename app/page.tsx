import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { CategoryCard } from "@/components/category-card"
import { CTABanner } from "@/components/cta-banner"
import { getFeaturedPosts, getRecentPosts, categories } from "@/lib/blog-data"
import { AlertTriangle, Clock, Users, Search } from "lucide-react"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'Pub Landlord Blog | Marketing Tips for Independent UK Pubs',
    description: 'Practical marketing advice for independent UK pub landlords. Get more bookings, more footfall, and better local visibility for your pub.',
  },
}

const struggles = [
  {
    icon: Users,
    title: "Footfall is down",
    description: "Locals don't know what's on, and passing trade has dried up. You need more ways to reach potential customers.",
    link: "/blog/how-to-get-more-local-customers-into-your-pub",
    linkText: "How to attract more locals",
  },
  {
    icon: Clock,
    title: "No time for marketing",
    description: "Between running the bar, managing staff, and handling suppliers, marketing always falls to the bottom of the list.",
    link: "/services",
    linkText: "Done-for-you services",
  },
  {
    icon: Search,
    title: "Not showing up on Google",
    description: "When people search for 'pubs near me', your competitors appear first. You're invisible to new customers.",
    link: "/category/local-seo",
    linkText: "Local SEO guides",
  },
  {
    icon: AlertTriangle,
    title: "Website isn't working",
    description: "Your website is outdated, hard to update, or doesn't help people book tables or find your opening hours.",
    link: "/blog/common-pub-website-mistakes",
    linkText: "Common website mistakes",
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
        <section className="bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hero-pub.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
                For Independent UK Pub Landlords
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance">
                More bookings. More footfall. Better local visibility.
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl">
                Free, practical marketing advice written specifically for independent pub landlords. 
                No jargon, no theory — just proven tactics you can use this week.
              </p>
              <p className="mt-4 text-secondary-foreground/60 text-sm">
                Need hands-on help?{" "}
                <a 
                  href="https://publandlord.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  PubLandlord.com
                </a>
                {" "}offers done-for-you marketing support.
              </p>
              <div className="mt-8">
                <a 
                  href="#latest-advice" 
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-4 text-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Read the Latest Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section id="latest-advice" className="py-16 lg:py-20 scroll-mt-8">
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
                  image={post.image}
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <a 
                    href={item.link}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {item.linkText} &rarr;
                  </a>
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
                  image={post.image}
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
