import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { regions, getRegion } from "@/lib/locations-data"
import { MapPin, ArrowRight, ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ region: string }>
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    region: region.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug)
  
  if (!region) {
    return {
      title: "Region Not Found",
    }
  }

  return {
    title: `Pub Marketing in ${region.name}`,
    description: region.description,
    alternates: {
      canonical: `/locations/${regionSlug}`,
    },
  }
}

export default async function RegionPage({ params }: Props) {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug)
  
  if (!region) {
    notFound()
  }

  // Sort locations by priority (highest first)
  const sortedLocations = [...region.locations].sort((a, b) => b.priority - a.priority)
  const featuredLocations = sortedLocations.filter((l) => l.priority >= 0.8)
  const otherLocations = sortedLocations.filter((l) => l.priority < 0.8)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/locations" className="text-muted-foreground hover:text-foreground transition-colors">
                Locations
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{region.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-accent mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">{region.name}</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Pub Marketing in {region.name}
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed">
                {region.description}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Locations */}
        {featuredLocations.length > 0 && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="font-serif text-xl lg:text-2xl font-bold mb-6">Major Cities &amp; Towns</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featuredLocations.map((location) => (
                  <a
                    key={location.slug}
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pub website design &amp; marketing
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Locations */}
        {otherLocations.length > 0 && (
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="font-serif text-xl lg:text-2xl font-bold mb-6">More Locations in {region.name}</h2>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {otherLocations.map((location) => (
                  <a
                    key={location.slug}
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 hover:border-primary/30 transition-all"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {location.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services CTA */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-lg bg-card border border-border p-8 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
                  What We Offer in {region.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  PubLandlord.com provides comprehensive marketing services for pubs across {region.name}:
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 mb-8">
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Pub website design
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Local SEO
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Google Business Profile
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Social media management
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Online booking setup
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    Review management
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://publandlord.com/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://publandlord.com/free-audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-medium hover:bg-muted transition-colors"
                  >
                    Get a Free Audit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-xl font-bold mb-6">Helpful Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/blog/how-to-get-more-local-customers-into-your-pub"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-accent">Article</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                  How to Get More Local Customers
                </h3>
              </Link>
              <Link
                href="/services"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-accent">Services</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  View All Services
                </h3>
              </Link>
              <Link
                href="/blog"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-accent">Blog</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  Marketing Tips &amp; Advice
                </h3>
              </Link>
              <Link
                href="/category/local-seo"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-medium text-accent">Category</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  Local SEO Guides
                </h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all locations
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
