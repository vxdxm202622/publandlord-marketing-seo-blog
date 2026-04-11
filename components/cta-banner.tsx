import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title?: string
  description?: string
  buttonText?: string
  variant?: "default" | "subtle"
}

export function CTABanner({ 
  title = "Need hands-on help with your pub marketing?",
  description = "PubLandlord.com offers marketing support tailored for independent pubs. From websites to social media, we help you get more bookings and more footfall.",
  buttonText = "Get help with your pub marketing",
  variant = "default"
}: CTABannerProps) {
  if (variant === "subtle") {
    return (
      <div className="rounded-lg border border-border bg-muted/50 p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}{" "}
          <a 
            href="https://publandlord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Learn more at PubLandlord.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-secondary text-secondary-foreground p-8 lg:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl lg:text-3xl font-bold text-balance">
          {title}
        </h2>
        <p className="mt-4 text-secondary-foreground/80 leading-relaxed">
          {description}
        </p>
        <Button 
          asChild 
          size="lg" 
          className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <a href="https://publandlord.com" target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </div>
    </div>
  )
}
