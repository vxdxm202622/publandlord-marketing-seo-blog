export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  date: string
  readTime: string
  featured?: boolean
}

export interface Category {
  slug: string
  title: string
  description: string
  intro: string
  postCount: number
}

export const categories: Category[] = [
  {
    slug: "pub-marketing",
    title: "Pub Marketing",
    description: "General promotion, branding, and customer retention strategies for independent pubs.",
    intro: "Running a successful pub is about more than just pulling pints. These practical marketing guides will help you attract new customers, keep regulars coming back, and build a pub brand that stands out in your local area.",
    postCount: 2,
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    description: "Google Business Profile optimization, reviews, and local search visibility.",
    intro: "When locals search for 'pubs near me', you want your pub to appear at the top. These guides cover everything from Google Business Profile optimization to getting more reviews and improving your local search rankings.",
    postCount: 1,
  },
  {
    slug: "social-media",
    title: "Social Media",
    description: "Facebook, Instagram, event posts, and content ideas that drive footfall.",
    intro: "Social media is one of the most effective ways to reach locals and promote your events. Learn practical content strategies that actually work for pubs, without spending hours creating posts.",
    postCount: 1,
  },
  {
    slug: "pub-websites",
    title: "Pub Websites",
    description: "Bookings, menus, event pages, and common website mistakes to avoid.",
    intro: "Your pub website is often the first impression potential customers get. These guides help you create a website that converts visitors into bookings and avoids the common mistakes that cost pubs customers.",
    postCount: 1,
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-get-more-local-customers-into-your-pub",
    title: "How to Get More Local Customers Into Your Pub Without Relying on Discounts",
    excerpt: "Discounts might bring people through the door once, but they rarely build loyalty. Here are proven strategies to attract and retain local customers who value what you offer.",
    content: `
Discounts are tempting. When footfall is down, it feels like the obvious solution is to slash prices or run constant promotions. But here's the problem: discount customers are often the least loyal. They'll visit once for the deal, then move on to the next pub offering a better one.

The pubs that thrive long-term are the ones that give people a reason to visit that goes beyond price. Here's how to do it.

## 1. Become the Local Hub, Not Just a Pub

The most successful independent pubs position themselves as community centres. They're the place where locals go for quiz nights, where the darts team meets, where people celebrate birthdays and watch big matches.

**Practical steps:**
- Host regular events that become part of people's weekly routine
- Partner with local groups (sports teams, book clubs, walking groups)
- Offer your space for community meetings
- Create a loyalty programme that rewards regular visits, not just spending

## 2. Get Your Google Business Profile Working Harder

When someone new to the area searches for "pubs near me," your Google Business Profile is often their first impression. Yet most pubs barely touch theirs after the initial setup.

**Quick wins:**
- Add fresh photos monthly (especially of food, events, and atmosphere)
- Post weekly updates about what's on
- Respond to every review, good or bad
- Keep your opening hours accurate, especially on bank holidays

## 3. Make Your Events Worth Talking About

Generic events don't spread by word of mouth. The pubs that get locals talking are the ones doing something a bit different.

**Event ideas that work:**
- Themed quiz nights (80s music, local history, film)
- Tasting evenings with local breweries
- Live music from genuinely good local acts
- Charity events that bring the community together

## 4. Build Relationships, Not Just Transactions

The landlords who know their regulars' names, remember their usual drinks, and ask about their families are the ones who build the kind of loyalty that no discount can buy.

**Simple relationship builders:**
- Train staff to remember regular customers
- Create a "regulars" area or perks (without making it exclusive)
- Send birthday wishes or Christmas cards to loyal customers
- Ask for feedback and actually act on it

## 5. Tell Your Story

Every independent pub has a story. Maybe it's your history, your commitment to local suppliers, your family heritage, or your unique approach to hospitality. Whatever it is, make sure people know about it.

**Where to tell your story:**
- Your website's About page
- Your Google Business Profile description
- Social media posts that show the personality behind the pub
- Local press and community newsletters

## The Bottom Line

Building a loyal local customer base takes longer than running a discount promotion, but the results last. Focus on creating genuine value, building relationships, and becoming an irreplaceable part of your community.

If you'd like hands-on help developing a marketing strategy for your pub, PubLandlord offers marketing support tailored specifically for independent pubs.
    `,
    category: "Pub Marketing",
    categorySlug: "pub-marketing",
    date: "15 March 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "pub-social-media-post-ideas",
    title: "7 Facebook and Instagram Post Ideas for Pubs That Actually Increase Footfall",
    excerpt: "Struggling to know what to post? These proven content ideas help pubs boost engagement and turn followers into visitors.",
    content: `
Most pub social media accounts fall into one of two traps: either posting nothing for weeks, or sharing the same "come visit us" message repeatedly. Neither approach builds an audience or drives footfall.

The key is creating content that people actually want to see, share, and engage with. Here are seven post types that consistently work for pubs.

## 1. Behind-the-Scenes Content

People love seeing what happens behind the bar. It makes your pub feel more personal and builds connection with your audience.

**Ideas:**
- Staff pulling the first pint of the day
- Deliveries arriving from local suppliers
- Setting up for a big event
- Kitchen prep for your Sunday roast

## 2. Event Countdowns and Recaps

Your events deserve more than a single announcement post. Build anticipation before and extend the value after.

**Before the event:**
- "3 days until quiz night - have you booked your table?"
- Behind-the-scenes preparation
- Prize reveals

**After the event:**
- Photos of winners and highlights
- "Thanks to everyone who came" posts
- "Next one is on..." teaser

## 3. Customer Spotlights (With Permission)

Nothing builds community like celebrating your regulars. Always ask permission, but most people love being featured.

**Ideas:**
- "Regular of the month" features
- Birthday celebrations at your pub
- Sports teams celebrating wins
- Before and after renovation photos with customers

## 4. Local Pride Content

Show that you're part of the local community, not just a business in it.

**Ideas:**
- Support local sports teams
- Share news about local events
- Celebrate local suppliers you work with
- Post about local landmarks or history

## 5. Food and Drink Showcases

This is obvious, but most pubs don't do it well. The key is making people hungry or thirsty.

**What works:**
- Close-up shots with good lighting
- Videos of pints being poured
- New menu items or specials
- Seasonal offerings

## 6. Interactive Posts

Posts that ask for engagement get more reach in social media algorithms.

**Ideas:**
- "What should our next guest ale be?"
- "Caption this photo" competitions
- "Would you rather" questions
- Polls about event ideas

## 7. Staff Introductions

People visit pubs where they feel welcomed. Introducing your team helps build that connection before people even walk through the door.

**Ideas:**
- New staff introductions
- "Meet the team" series
- Staff recommendations (favourite drink, dish, etc.)
- Work anniversaries or achievements

## Posting Schedule Tips

**Frequency:** 3-5 posts per week is plenty. Consistency matters more than volume.

**Timing:** Test what works for your audience, but evenings (6-9pm) often work well for pubs.

**Mix it up:** Use a combination of photos, videos, and text posts. Video tends to get more reach.

## The Most Important Rule

Post content you'd actually want to see if you weren't the one running the account. If it's boring to you, it's boring to your audience.

If you'd like help creating a social media strategy for your pub, PubLandlord offers practical support tailored for independent pubs.
    `,
    category: "Social Media",
    categorySlug: "social-media",
    date: "8 March 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "why-your-pub-website-loses-bookings",
    title: "Why Your Pub Website May Be Losing Bookings Before People Even Visit",
    excerpt: "Common website mistakes that cost pubs customers, and how to fix them without spending a fortune.",
    content: `
Your pub website might be turning away potential customers without you ever knowing. People searching for somewhere to eat, drink, or book an event often make decisions in seconds. If your website makes things difficult, they'll simply go elsewhere.

Here are the most common problems we see with pub websites, and how to fix them.

## Problem 1: No Clear Booking Option

When someone lands on your website, they should be able to book a table within seconds. Yet many pub websites bury booking options in menus or don't have them at all.

**The fix:**
- Add a prominent "Book a Table" button in your header
- Make sure it's visible on mobile without scrolling
- If you use a third-party booking system, embed it rather than just linking to it
- Include a phone number for people who prefer to call

## Problem 2: Outdated or Missing Information

Nothing frustrates potential customers more than finding opening hours that haven't been updated since last year, or a menu that no longer exists.

**What to keep current:**
- Opening hours (especially bank holidays)
- Food service times
- Current menu with accurate prices
- Event listings
- Contact information

## Problem 3: Poor Mobile Experience

More than 60% of pub website visitors are on mobile. If your site is hard to use on a phone, you're losing the majority of your potential customers.

**Check for:**
- Text that's readable without zooming
- Buttons that are easy to tap
- Pages that load quickly
- Phone numbers that are clickable

## Problem 4: Slow Loading Times

Every second your website takes to load, you lose potential customers. People won't wait, especially when there are other pubs to choose from.

**Common causes:**
- Oversized images that haven't been compressed
- Too many plugins or scripts
- Poor web hosting
- Outdated website platforms

## Problem 5: Missing Essential Pages

Some information should be on every pub website. If it's not there, people will assume the worst or simply move on.

**Essential pages:**
- Homepage with clear value proposition
- Menu (with prices)
- Opening hours
- Location with map
- Contact information
- Booking option
- What's On / Events

## Problem 6: No Photos or Bad Photos

People eat and drink with their eyes first. Dark, blurry, or amateur photos make your pub look worse than it probably is.

**Photo priorities:**
- Your best food dishes
- Drinks (especially signature or craft options)
- The atmosphere (busy but not chaotic)
- Outside area if you have one
- Any unique features

## Problem 7: Making People Work Too Hard

Every click or scroll required to find basic information is a chance for someone to give up and go elsewhere.

**Simplify by:**
- Putting the most important information on your homepage
- Reducing menu depth (fewer clicks to find things)
- Using clear, obvious navigation labels
- Avoiding jargon or clever names for sections

## The Quick Audit

Grab your phone and try to complete these tasks on your website:
1. Find your opening hours
2. Book a table
3. View your food menu
4. Find your address
5. Call you directly

If any of these take more than 10 seconds or are frustrating, your website needs work.

## The Bottom Line

Your website should make it easy for people to choose your pub. Every barrier you put in their way is a customer lost to somewhere else.

If you'd like help improving your pub website, PubLandlord offers website support designed specifically for independent pubs.
    `,
    category: "Pub Websites",
    categorySlug: "pub-websites",
    date: "1 March 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "google-business-profile-for-pubs",
    title: "How to Improve Your Pub&apos;s Google Business Profile in 30 Minutes a Week",
    excerpt: "Your Google Business Profile is often the first thing potential customers see. Here's how to make it work harder for your pub with minimal time investment.",
    content: `
When someone searches for "pubs near me" or "Sunday lunch in [your town]," Google Business Profile results often appear before any website. This free tool can be one of your most effective marketing channels, yet most pubs set it up once and never touch it again.

Here's how to spend just 30 minutes a week making your profile work harder.

## Why Google Business Profile Matters

**Visibility:** Appears prominently in local searches and Google Maps.

**Trust:** Reviews and photos help people decide whether to visit.

**Information:** Provides opening hours, contact details, and directions.

**Free:** One of the most cost-effective marketing tools available.

## Week 1: The Essential Audit (30 minutes)

Start by checking that everything is correct and complete.

**Verify these details:**
- Business name (use your actual trading name)
- Address (pin location on the map accurately)
- Phone number
- Website
- Opening hours (including bank holidays)
- Business category (Primary: Pub, Secondary: Restaurant, Bar, etc.)

**Add these if missing:**
- Business description (750 characters to describe your pub)
- Services/amenities (beer garden, live music, food service, etc.)
- Menu link
- Booking link

## Week 2: Photo Refresh (30 minutes)

Photos significantly impact whether someone chooses your pub. Google prioritises businesses with recent, high-quality images.

**Priority photos to add:**
- Exterior shot (so people can find you)
- Interior atmosphere shots
- Your best food dishes
- Drinks and bar area
- Beer garden or outdoor space
- Any unique features

**Photo tips:**
- Use natural light where possible
- Take landscape orientation for most shots
- Avoid empty, staged shots - some life is good
- Update seasonally

## Week 3: Posts and Updates (30 minutes)

Google Posts appear directly in your profile and help show that your pub is active and current.

**What to post:**
- Upcoming events
- Special offers
- New menu items
- Seasonal updates
- Bank holiday opening hours

**Post format:**
- Keep text concise (150-300 words)
- Include a photo
- Add a call-to-action button where relevant
- Post weekly for best results

## Week 4: Review Management (30 minutes)

Reviews heavily influence both Google rankings and customer decisions. Managing them well takes consistent attention.

**Responding to positive reviews:**
- Thank them specifically for what they mentioned
- Invite them back
- Keep it brief and genuine

**Responding to negative reviews:**
- Respond promptly and professionally
- Don't be defensive
- Offer to resolve the issue offline
- Show future readers you take feedback seriously

**Encouraging reviews:**
- Ask happy customers directly
- Add a QR code linking to your review page
- Train staff to mention it naturally
- Don't offer incentives (against Google's terms)

## Ongoing: 30-Minute Weekly Routine

Once you've completed the initial setup, maintain this weekly habit:

**5 minutes:** Check for and respond to new reviews

**10 minutes:** Create and publish a Google Post about what's on this week

**10 minutes:** Add 2-3 new photos (events, food, atmosphere)

**5 minutes:** Check Q&A section and update any information changes

## Measuring Success

Google Business Profile provides insights showing:
- How many people viewed your profile
- What searches you appeared in
- How many people called, visited your website, or requested directions

Check these monthly to see what's working.

## Common Mistakes to Avoid

**Don't:**
- Leave reviews unanswered
- Use stock photos
- Let opening hours get outdated
- Ignore the Q&A section
- Stop posting after initial enthusiasm

## The Bottom Line

Your Google Business Profile is often the first impression potential customers have of your pub. A well-maintained profile builds trust, appears higher in search results, and directly drives footfall.

If you'd like help optimising your pub's Google presence, PubLandlord offers local SEO support for independent pubs.
    `,
    category: "Local SEO",
    categorySlug: "local-seo",
    date: "22 February 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "seasonal-pub-marketing-ideas",
    title: "Seasonal Pub Marketing Ideas for Summer, Christmas, and Big Sporting Events",
    excerpt: "Make the most of peak trading periods with marketing ideas that bring in crowds and boost spending.",
    content: `
Every pub has peak periods when footfall naturally increases. The pubs that thrive are the ones that plan ahead and market these periods effectively. Here's how to make the most of the biggest opportunities in your calendar.

## Summer Marketing

Summer is prime time for pubs, especially those with outdoor space. Start planning your summer marketing in April.

### Beer Garden and Outdoor Space

**Maximise your space:**
- Invest in comfortable seating and shade
- Add atmosphere with lighting and plants
- Consider live music or DJs for weekend afternoons
- Create Instagram-worthy spots people want to photograph

**Promote it:**
- Share sunny photos when the weather's good
- Post "beer garden open" updates on social media
- Update your Google Business Profile with outdoor seating information
- Run "first sunny day" promotions

### Summer Events

**Ideas that work:**
- BBQ weekends
- Outdoor cinema nights
- Summer Sunday sessions with live music
- Gin garden or cocktail specials
- Family days with activities

**Marketing approach:**
- Create event series rather than one-offs
- Start promoting 2-3 weeks ahead
- Use countdown posts on social media
- Partner with local suppliers for co-promotion

### Summer Food and Drink

**Menu updates:**
- Lighter dishes and salads
- BBQ options
- Refreshing cocktails and summer drinks
- Ice cream or desserts

**Promotion:**
- Photograph everything
- Create "summer specials" menus
- Train staff to recommend seasonal options

## Christmas Marketing

December is often a pub's biggest month. Start planning in September.

### Party Bookings

**Get organised early:**
- Create Christmas party packages by early September
- Design a dedicated Christmas menu
- Set up a simple booking system
- Train staff on upselling

**Marketing approach:**
- Email previous party bookers first
- Create "Christmas at [Your Pub]" content
- Share photos from previous years
- Promote deadlines for booking

### Festive Atmosphere

**Create the experience:**
- Decorate early enough to capture the full season
- Consider a Christmas market or fair
- Play festive music (at sensible volumes)
- Offer mulled wine and seasonal drinks

**Document and share:**
- Photo and video the transformation
- Share "getting ready for Christmas" content
- Create a festive atmosphere in your social media

### Key Christmas Dates

**Plan specific marketing for:**
- Christmas party season (whole of December)
- Christmas Eve
- Christmas Day (if open)
- Boxing Day
- New Year's Eve

## Sporting Events

Major sporting events can transform your pub's footfall if marketed well.

### Six Nations Rugby

**What works:**
- Create a rugby atmosphere (flags, decorations)
- Run prediction competitions
- Offer match day deals
- Book tables for big matches

**Marketing:**
- Start promoting 2 weeks before the tournament
- Create a fixtures poster for social media
- Send reminders before each big match

### Football Tournaments

**World Cup and Euros:**
- These are huge opportunities for pubs
- Book extra staff well in advance
- Consider outdoor screens for beer gardens
- Create tournament-long promotions

**England matches:**
- These fill pubs quickly - take bookings
- Promote atmosphere, not just showing the game
- Share photos of crowds during matches
- Build anticipation between games

### Wimbledon and Other Events

**Don't forget:**
- Wimbledon (especially finals weekend)
- Grand National
- FA Cup Final
- Golf majors
- Local team fixtures

### General Sporting Event Tips

**Practical preparation:**
- Test your screens and sound before the event
- Book extra staff
- Stock up on popular drinks
- Consider food options for long sessions

**Marketing approach:**
- Create event-specific graphics
- Promote your screens and atmosphere
- Take bookings for major matches
- Live-post during events

## Bank Holidays

Bank holiday weekends often go unpromoted. Don't waste them.

**What to do:**
- Plan special events or activities
- Extend opening hours if appropriate
- Create bank holiday offers
- Update your Google opening hours
- Post reminders on social media

## The Planning Calendar

Create a simple marketing calendar:

**January:** Plan spring promotions, Six Nations

**March:** Plan summer, promote Easter

**April:** Launch summer marketing

**September:** Launch Christmas marketing

**November:** Confirm all Christmas plans, build excitement

**Throughout:** Monitor local events and sporting fixtures

## The Bottom Line

Seasonal marketing isn't about doing more - it's about planning ahead and making the most of natural opportunities. The pubs that thrive are the ones that prepare while others are caught off guard.

If you'd like help creating a seasonal marketing plan for your pub, PubLandlord offers practical marketing support for independent pubs.
    `,
    category: "Pub Marketing",
    categorySlug: "pub-marketing",
    date: "15 February 2024",
    readTime: "7 min read",
    featured: false,
  },
]

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.categorySlug === categorySlug)
}

export function getCategory(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug)
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, categorySlug: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => post.categorySlug === categorySlug)
    .slice(0, limit)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return blogPosts.slice(0, limit)
}
