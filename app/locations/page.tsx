import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { regions } from "@/lib/locations-data"
import { MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pub Marketing by Location",
  description: "Find pub website design and marketing services near you. PubLandlord.com works with independent pubs across England, Scotland, Wales, and Northern Ireland.",
  alternates: {
    canonical: '/locations',
  },
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/uk-pub-map.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-accent mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">UK-Wide Coverage</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Pub Marketing Services Near You
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed">
                PubLandlord.com works with independent pubs across the United Kingdom. Find location-specific 
                services, case studies, and local expertise for your area.
              </p>
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12">
              {regions.map((region) => (
                <div key={region.slug} className="border-b border-border pb-12 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold">{region.name}</h2>
                      <p className="text-muted-foreground mt-1">{region.description}</p>
                    </div>
                    <Link
                      href={`/locations/${region.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
                    >
                      View all {region.name} locations
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {region.locations.slice(0, 8).map((location) => (
                      <a
                        key={location.slug}
                        href={location.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 hover:border-primary/30 hover:bg-muted/30 transition-all"
                      >
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {location.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                    {region.locations.length > 8 && (
                      <Link
                        href={`/locations/${region.slug}`}
                        className="flex items-center justify-center rounded-md border border-dashed border-border px-4 py-3 text-muted-foreground hover:border-primary/30 hover:text-primary transition-all"
                      >
                        +{region.locations.length - 8} more
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-xl font-bold mb-6">Helpful Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/services"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Our Services
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Website design, SEO, and more
                </p>
              </Link>
              <Link
                href="/blog"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Free Advice
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Marketing tips for pubs
                </p>
              </Link>
              <Link
                href="/category/local-seo"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Local SEO Guides
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Get found on Google
                </p>
              </Link>
              <Link
                href="/about"
                className="group rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  About Us
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Who we are and how we help
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              PubLandlord.com works with pubs across the entire UK. Get in touch to discuss 
              how we can help your pub.
            </p>
            <a
              href="https://publandlord.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
