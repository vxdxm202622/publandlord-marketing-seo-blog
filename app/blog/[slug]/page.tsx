import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { CTABanner } from "@/components/cta-banner"
import { getPost, getRelatedPosts, blogPosts } from "@/lib/blog-data"
import { Clock, Calendar, ArrowLeft } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  
  if (!post) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ['PubLandlord'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function generateTableOfContents(content: string) {
  const headings: { id: string; text: string; level: number }[] = []
  const lines = content.split('\n')
  
  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2]
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      headings.push({ id, text, level })
    }
  })
  
  return headings
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let inBold = false
  
  const processText = (text: string) => {
    // Process bold text
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }
  
  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const ListTag = listType
      elements.push(
        <ListTag key={elements.length} className={`my-4 space-y-2 ${listType === 'ul' ? 'list-disc' : 'list-decimal'} pl-6`}>
          {currentList.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed">{processText(item)}</li>
          ))}
        </ListTag>
      )
      currentList = []
      listType = null
    }
  }
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim()
    
    // Skip empty lines
    if (!trimmedLine) {
      flushList()
      return
    }
    
    // Headers
    if (trimmedLine.startsWith('## ')) {
      flushList()
      const text = trimmedLine.slice(3)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      elements.push(
        <h2 key={index} id={id} className="font-serif text-2xl font-bold mt-10 mb-4 scroll-mt-24">
          {text}
        </h2>
      )
      return
    }
    
    if (trimmedLine.startsWith('### ')) {
      flushList()
      const text = trimmedLine.slice(4)
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      elements.push(
        <h3 key={index} id={id} className="font-serif text-xl font-semibold mt-8 mb-3 scroll-mt-24">
          {text}
        </h3>
      )
      return
    }
    
    // List items
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      currentList.push(trimmedLine.slice(2))
      return
    }
    
    if (/^\d+\.\s/.test(trimmedLine)) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      currentList.push(trimmedLine.replace(/^\d+\.\s/, ''))
      return
    }
    
    // Regular paragraph
    flushList()
    elements.push(
      <p key={index} className="text-muted-foreground leading-relaxed my-4">
        {processText(trimmedLine)}
      </p>
    )
  })
  
  flushList()
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, post.categorySlug)
  const allRelatedPosts = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter(p => p.slug !== slug).slice(0, 3)
  const toc = generateTableOfContents(post.content)

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-4xl px-4 py-12 lg:py-16 lg:px-8">
            <nav className="mb-4">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-secondary-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </nav>
            <div className="flex items-center gap-3 text-sm mb-4">
              <Link 
                href={`/category/${post.categorySlug}`}
                className="text-accent hover:underline font-medium"
              >
                {post.category}
              </Link>
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold leading-tight text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-secondary-foreground/70">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_250px]">
              {/* Main Content */}
              <article className="max-w-none">
                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div className="mb-10 p-6 bg-muted rounded-lg border border-border">
                    <h2 className="font-semibold mb-4">In This Article</h2>
                    <nav>
                      <ul className="space-y-2">
                        {toc.map((heading) => (
                          <li 
                            key={heading.id} 
                            className={heading.level === 3 ? 'ml-4' : ''}
                          >
                            <a 
                              href={`#${heading.id}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                {/* Article Content */}
                <div className="prose-custom">
                  {renderContent(post.content)}
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <CTABanner variant="subtle" />
                </div>
              </article>

              {/* Sidebar - Hidden on mobile */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <div className="p-6 bg-muted rounded-lg border border-border">
                    <h3 className="font-semibold mb-4 text-sm">Quick Navigation</h3>
                    <nav>
                      <ul className="space-y-2">
                        {toc.slice(0, 6).map((heading) => (
                          <li key={heading.id}>
                            <a 
                              href={`#${heading.id}`}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors line-clamp-2"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  
                  {/* Internal Links */}
                  <div className="p-6 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold mb-4 text-sm">Explore More</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href="/services"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          Professional Services
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/locations"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          Find Help Near You
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/category/${post.categorySlug}`}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          More {post.category} Articles
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/blog"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          All Articles
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {allRelatedPosts.length > 0 && (
          <section className="py-12 lg:py-16 bg-muted">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="font-serif text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {allRelatedPosts.map((relatedPost) => (
                  <BlogCard 
                    key={relatedPost.slug}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    category={relatedPost.category}
                    categorySlug={relatedPost.categorySlug}
                    date={relatedPost.date}
                    slug={relatedPost.slug}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
