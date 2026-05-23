import { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Pub Landlord Blog and our mission to help independent UK pub landlords with practical marketing advice.",
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/about-pub.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-12 lg:py-16 lg:px-8">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold">
              About This Blog
            </h1>
            <p className="mt-4 text-secondary-foreground/80 max-w-2xl">
              Practical marketing advice for independent pub landlords who want more bookings, 
              more footfall, and better local visibility.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-bold mb-4">Why We Started This Blog</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Independent pubs are the heart of communities across the UK. They&apos;re where locals meet, 
                where celebrations happen, and where communities come together. But running one has never been harder.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Between rising costs, changing habits, and increasing competition, pub landlords are expected 
                to be experts in everything — hospitality, HR, finance, and now marketing too. Most don&apos;t have 
                the time or budget to hire agencies or wade through generic marketing advice that doesn&apos;t 
                apply to their situation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                That&apos;s why we created this blog. Every article is written specifically for independent UK pub 
                landlords, with practical advice you can actually use. No jargon, no fluff, no theory that 
                doesn&apos;t work in the real world.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">What We Cover</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our articles focus on four main areas:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Pub Marketing</span>
                  <span className="text-muted-foreground">— General promotion, branding, and customer retention</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Local SEO</span>
                  <span className="text-muted-foreground">— Google Business Profile, reviews, and local search visibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Social Media</span>
                  <span className="text-muted-foreground">— Facebook, Instagram, and content ideas that drive footfall</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">Pub Websites</span>
                  <span className="text-muted-foreground">— Bookings, menus, and common mistakes to avoid</span>
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mb-4">Who&apos;s Behind This</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This blog is a resource from{" "}
                <a 
                  href="https://publandlord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  PubLandlord.com
                </a>
                , a UK-based service that helps independent pubs with websites, SEO, social media, and marketing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We&apos;ve worked with dozens of independent pubs across England, Scotland, and Wales — from 
                village locals to city centre gastro pubs. We understand the unique challenges of the UK pub 
                trade: the licensing requirements, the seasonal patterns, the competition from chains, and 
                the importance of being part of your local community.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This blog shares what we&apos;ve learned so that even pubs who can&apos;t afford professional 
                help can improve their marketing. Everything here is based on real results from real pubs.
              </p>

              <h2 className="font-serif text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Everything we write follows a few simple principles:
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Practical over theoretical</strong> — We only recommend things you can actually do
                </li>
                <li>
                  <strong className="text-foreground">Time-conscious</strong> — We know you&apos;re busy, so we focus on high-impact activities
                </li>
                <li>
                  <strong className="text-foreground">Pub-specific</strong> — Generic marketing advice doesn&apos;t cut it. Everything is tailored for pubs
                </li>
                <li>
                  <strong className="text-foreground">Honest</strong> — We&apos;ll tell you what works and what doesn&apos;t, even if it&apos;s not what you want to hear
                </li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Have a question or suggestion for an article? We&apos;d love to hear from you. 
                Visit our{" "}
                <Link href="/get-help" className="text-primary hover:underline font-medium">
                  Get Help page
                </Link>
                {" "}to get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CTABanner 
              title="Want hands-on help with your pub marketing?"
              description="If you'd rather have someone handle your marketing for you, PubLandlord.com offers practical support tailored for independent pubs."
              buttonText="Visit PubLandlord.com"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
