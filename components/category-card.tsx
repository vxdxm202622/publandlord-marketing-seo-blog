import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Megaphone, MapPin, Share2, Globe } from "lucide-react"

const iconMap = {
  "pub-marketing": Megaphone,
  "local-seo": MapPin,
  "social-media": Share2,
  "pub-websites": Globe,
}

interface CategoryCardProps {
  title: string
  description: string
  slug: string
  postCount: number
}

export function CategoryCard({ title, description, slug, postCount }: CategoryCardProps) {
  const Icon = iconMap[slug as keyof typeof iconMap] || Megaphone

  return (
    <Link href={`/category/${slug}`}>
      <Card className="h-full bg-card hover:shadow-lg hover:border-primary/30 transition-all group">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                {postCount} {postCount === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
