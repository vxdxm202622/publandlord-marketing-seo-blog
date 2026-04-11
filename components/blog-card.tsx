import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  categorySlug: string
  date: string
  slug: string
  featured?: boolean
}

export function BlogCard({ 
  title, 
  excerpt, 
  category, 
  categorySlug, 
  date, 
  slug,
  featured = false 
}: BlogCardProps) {
  return (
    <Card className={`h-full flex flex-col bg-card hover:shadow-lg transition-shadow ${featured ? 'border-primary/30' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 text-sm">
          <Link 
            href={`/category/${categorySlug}`}
            className="text-primary font-medium hover:underline"
          >
            {category}
          </Link>
          <span className="text-muted-foreground">{date}</span>
        </div>
        <Link href={`/blog/${slug}`} className="group">
          <h3 className={`font-serif font-semibold leading-tight group-hover:text-primary transition-colors text-balance ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {excerpt}
        </p>
        <Link 
          href={`/blog/${slug}`}
          className="mt-4 text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
        >
          Read more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
}
