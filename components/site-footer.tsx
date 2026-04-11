import Link from "next/link"

const footerNavigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
    { name: "Get Help", href: "/get-help" },
  ],
  categories: [
    { name: "Pub Marketing", href: "/category/pub-marketing" },
    { name: "Local SEO", href: "/category/local-seo" },
    { name: "Social Media", href: "/category/social-media" },
    { name: "Pub Websites", href: "/category/pub-websites" },
  ],
  external: [
    { name: "PubLandlord.com", href: "https://publandlord.com" },
    { name: "Free Audit", href: "https://publandlord.com/free-audit" },
    { name: "Case Studies", href: "https://publandlord.com/case-studies" },
    { name: "Contact", href: "https://publandlord.com/contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl font-bold">
              Pub Landlord Blog
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              Practical marketing tips for independent UK pub landlords. Get more bookings, more footfall, and better local visibility.
            </p>
            <p className="mt-4 text-sm text-secondary-foreground/80">
              A resource by{" "}
              <a 
                href="https://publandlord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-secondary-foreground transition-colors"
              >
                PubLandlord.com
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Topics
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.categories.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              PubLandlord.com
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.external.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Pub Landlord Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
