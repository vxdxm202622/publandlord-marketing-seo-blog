import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Globe, MapPin, Star, Calendar, Share2, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Pub Marketing Services",
  description: "Professional marketing services for independent UK pubs. Websites, local SEO, Google Business Profile management, social media, and more from PubLandlord.com.",
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    title: "Pub Website Design",
    description: "Mobile-friendly, fast-loading websites built specifically for pubs. Showcase your menu, events, and atmosphere to turn visitors into customers.",
    href: "https://publandlord.com/services/pub-website-design",
    icon: Globe,
    features: ["Mobile-optimised", "Online booking integration", "Menu display", "Events calendar"],
  },
  {
    title: "Local SEO for Pubs",
    description: "Get found when locals search for pubs near them. We optimise your online presence so you show up in Google searches and maps.",
    href: "https://publandlord.com/services/local-seo-for-pubs",
    icon: MapPin,
    features: ["Google ranking improvement", "Local citations", "Review management", "Competitor analysis"],
  },
  {
    title: "Google Business Profile",
    description: "Your Google Business Profile is often the first thing customers see. We set it up properly and keep it updated to maximise visibility.",
    href: "https://publandlord.com/services/google-business-profile",
    icon: Star,
    features: ["Profile optimisation", "Photo management", "Post scheduling", "Review responses"],
  },
  {
    title: "Online Booking for Pubs",
    description: "Make it easy for customers to book tables online. Reduce phone calls and never miss a reservation.",
    href: "https://publandlord.com/online-booking-for-pubs",
    icon: Calendar,
    features: ["24/7 booking", "Automated confirmations", "Table management", "No-show reduction"],
  },
  {
    title: "Social Media Management",
    description: "Keep your pub&apos;s social media active and engaging without spending hours on your phone.",
    href: "https://publandlord.com/social-media-management-for-pubs",
    icon: Share2,
    features: ["Content creation", "Regular posting", "Community engagement", "Event promotion"],
  },
  {
    title: "Google Reviews for Pubs",
    description: "Build a strong reputation with more positive reviews. We help you get more reviews and respond professionally.",
    href: "https://publandlord.com/google-reviews-for-pubs",
    icon: MessageSquare,
    features: ["Review generation", "Response management", "Reputation monitoring", "Feedback insights"],
  },
]

const additionalResources = [
  { title: "How Much Does a Pub Website Cost?", href: "https://publandlord.com/how-much-does-a-pub-website-cost" },
  { title: "Pub Marketing Agency UK", href: "https://publandlord.com/pub-marketing-agency-uk" },
  { title: "Online Menu for Pubs", href: "https://publandlord.com/online-menu-for-pubs" },
  { title: "Free Pub Marketing Audit", href: "https://publandlord.com/free-audit" },
  { title: "Case Studies", href: "https://publandlord.com/case-studies" },
]

const relatedArticles = [
  { 
    title: "How to Get More Local Customers Into Your Pub", 
    href: "/blog/how-to-get-more-local-customers-into-your-pub",
    category: "Pub Marketing"
  },
  { 
    title: "7 Social Media Post Ideas for Pubs", 
    href: "/blog/pub-social-media-post-ideas",
    category: "Social Media"
  },
  { 
    title: "Why Your Pub Needs a Google Business Profile", 
    href: "/blog/why-your-pub-needs-google-business-profile",
    category: "Local SEO"
  },
  { 
    title: "Common Pub Website Mistakes to Avoid", 
    href: "/blog/common-pub-website-mistakes",
    category: "Pub Websites"
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Marketing Services for Independent Pubs
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed">
                PubLandlord.com offers done-for-you marketing services designed specifically for 
                independent UK pubs. From websites to local SEO, we handle the digital side so 
                you can focus on running your pub.
              </p>
              <div className="mt-8">
                <a
                  href="https://publandlord.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
                >
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">More Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {additionalResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md border border-border bg-card px-4 py-3 hover:border-primary/30 transition-colors"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8">Free Advice From Our Blog</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-lg border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-accent">{article.category}</span>
                  <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">
                    Read article
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all articles
              </Link>
            </div>
          </div>
        </section>

        {/* Find Local Help */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Find Help Near You</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              PubLandlord.com works with pubs across the UK. Find location-specific services and 
              case studies from pubs in your area.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-md bg-secondary text-secondary-foreground px-6 py-3 font-medium hover:bg-secondary/90 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Browse Locations
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Get a free marketing audit of your pub&apos;s online presence. We&apos;ll show you exactly 
              what&apos;s working, what&apos;s not, and what to do next.
            </p>
            <a
              href="https://publandlord.com/free-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
            >
              Get Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
