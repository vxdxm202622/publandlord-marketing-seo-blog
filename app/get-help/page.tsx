import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Search, Share2, Megaphone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Help",
  description: "Get professional marketing help for your independent pub. Websites, SEO, social media, and more from PubLandlord.com.",
  alternates: {
    canonical: '/get-help',
  },
}

const services = [
  {
    icon: Globe,
    title: "Pub Websites",
    description: "Professional websites that help you get more bookings. Mobile-friendly, easy to update, and designed specifically for pubs.",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Get found when locals search for 'pubs near me'. Google Business Profile optimization and local search visibility.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content that actually drives footfall. We help you create posts that engage locals and promote your events.",
  },
  {
    icon: Megaphone,
    title: "Pub Marketing",
    description: "Complete marketing support for independent pubs. Strategy, execution, and ongoing help to grow your business.",
  },
]

const benefits = [
  "Designed specifically for independent pubs",
  "Practical, results-focused approach",
  "No long-term contracts required",
  "Affordable pricing for pub budgets",
  "Real people who understand hospitality",
  "Proven track record with UK pubs",
]

export default function GetHelpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-balance">
                Get Professional Help With Your Pub Marketing
              </h1>
              <p className="mt-4 text-secondary-foreground/80 text-lg leading-relaxed">
                Don&apos;t have time to handle marketing yourself? PubLandlord.com offers practical 
                marketing support designed specifically for independent pubs.
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="https://publandlord.com" target="_blank" rel="noopener noreferrer">
                    Visit PubLandlord.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8 text-center">
              How We Help Independent Pubs
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 lg:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 text-balance">
                  Why Choose PubLandlord?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Generic marketing agencies don&apos;t understand pubs. We do. Everything we offer is 
                  designed specifically for independent pub landlords who need practical help without 
                  the big agency price tag.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Visit PubLandlord.com to learn more about our services and get in touch. 
                  We&apos;ll have a chat about your pub and how we can help.
                </p>
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="https://publandlord.com" target="_blank" rel="noopener noreferrer">
                    Get Help With Your Pub Marketing
                  </a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  No obligation. Just a friendly conversation about your pub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How much does it cost?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our pricing is designed for pub budgets, not big corporate marketing budgets. 
                  Visit PubLandlord.com for current pricing, or get in touch for a quote.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I need a long-term contract?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. We offer flexible arrangements because we understand that pub finances can be 
                  unpredictable. You can work with us on one-off projects or ongoing support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What if I just want one thing done?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  That&apos;s fine. Many pubs come to us for just a website, or just help with their 
                  Google Business Profile. You choose what you need.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do I get started?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Just visit{" "}
                  <a 
                    href="https://publandlord.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    PubLandlord.com
                  </a>
                  {" "}and get in touch. We&apos;ll have a chat about your pub and what you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
