---
name: seo-on-page
description: On-page SEO optimization for titles, meta descriptions, headings, content structure, and internal linking. Use when optimizing pages for search.
origin: ECM
---

# On-Page SEO

## When to Activate

Use this skill when optimizing individual pages for search engine visibility: writing or improving title tags, meta descriptions, headings, content structure, internal links, image optimization, or URL structure. Applies to blog posts, product pages, landing pages, category pages, and any page targeting organic search traffic.

## First Questions

1. **What is the target keyword (and its search intent)?**
2. **What currently ranks in the top 10 for this keyword?** (analyze the SERP)
3. **Is this a new page or an optimization of an existing one?**
4. **What page type is it?** (blog post, product page, category page, landing page)
5. **What is the content's primary goal beyond ranking?** (conversions, education, link building)

---

## Title Tag Optimization

The title tag is the single most important on-page ranking factor and the primary driver of click-through rate from SERPs.

### Rules

- **Length**: 50-60 characters (Google truncates at ~580px, roughly 60 chars)
- **Keyword placement**: Primary keyword as close to the beginning as possible
- **Unique**: Every page must have a unique title tag
- **Compelling**: The title must earn the click, not just contain the keyword
- **Brand**: Include brand name at the end for branded searches (optional for long-tail)

### Title Tag Formulas

```
[Primary Keyword]: [Benefit or Hook] | [Brand]
[Primary Keyword] — [Modifier: Guide/Tips/Examples] ([Year])
How to [Primary Keyword] in [Timeframe] ([Year])
[Number] [Primary Keyword] [Tips/Examples/Strategies] for [Year]
[Primary Keyword]: What It Is + How to [Action] ([Year])
```

### Examples

| Target Keyword | Title Tag | Chars |
|---------------|-----------|-------|
| email marketing strategy | Email Marketing Strategy: The 2026 Playbook | 46 |
| best CRM for startups | 9 Best CRMs for Startups (Tested & Ranked 2026) | 49 |
| how to write a cold email | How to Write a Cold Email That Gets Replies (2026) | 51 |
| content marketing ROI | Content Marketing ROI: How to Measure It + Benchmarks | 55 |

### Common Mistakes
- Keyword stuffing: "CRM Software | Best CRM | Top CRM Tool | CRM Reviews"
- Too long: getting truncated in SERPs
- Too short: missing the opportunity for CTR-boosting modifiers
- Duplicate titles across multiple pages
- Missing the search intent (informational title for a transactional query)

---

## Meta Description Optimization

Meta descriptions don't directly affect rankings but significantly impact CTR, which indirectly affects rankings.

### Rules

- **Length**: 120-155 characters (Google truncates at ~920px on desktop)
- **Include target keyword**: Google bolds matching terms in the SERP
- **Include a CTA**: Tell searchers what they'll get or do
- **Match search intent**: The description must deliver on what the searcher wants
- **Unique**: Every page needs a unique meta description
- **Active voice**: "Learn how to..." beats "This article discusses..."

### Meta Description Template

```
[Hook or benefit statement]. [Supporting detail with keyword]. [CTA — Learn/Discover/Get/See].
```

### Examples

| Keyword | Meta Description | Chars |
|---------|-----------------|-------|
| email open rates | Your email open rates are declining. Here are 11 proven tactics to boost opens by 30%+ in 2026. See what actually works. | 119 |
| landing page best practices | Learn the 12 landing page best practices that top-converting pages share. Includes templates, examples, and a free checklist. | 123 |
| B2B content strategy | Build a B2B content strategy that drives pipeline, not just pageviews. Step-by-step guide with templates and real examples. | 120 |

### When Google Rewrites Your Meta Description

Google rewrites meta descriptions ~70% of the time. To reduce rewrites:
- Make the description highly relevant to the target query
- Include the exact keyword phrase naturally
- Ensure the description accurately summarizes the page content
- Don't use the same description template across many pages

---

## Heading Hierarchy (H1-H6)

Headings structure your content for both readers and search engines.

### Rules

- **One H1 per page** — Contains the primary keyword, closely mirrors the title tag
- **H2s for major sections** — 4-8 H2s for a standard blog post
- **H3s for subsections** — Under each H2 as needed
- **Never skip levels** — Don't go from H2 to H4 without an H3
- **Include keywords naturally** — Primary keyword in H1, secondary keywords in H2s and H3s
- **Use headings for structure, not styling** — Don't use H3 just because you want smaller bold text

### Example Heading Structure

```
H1: How to Build a B2B Content Strategy That Drives Revenue
  H2: What Is a B2B Content Strategy?
  H2: Why Most B2B Content Strategies Fail
    H3: Mistake 1: Creating Content Without a Funnel Map
    H3: Mistake 2: Ignoring Search Intent
    H3: Mistake 3: No Distribution Strategy
  H2: The 6-Step B2B Content Strategy Framework
    H3: Step 1: Define Your ICP and Buying Journey
    H3: Step 2: Conduct Keyword Research by Funnel Stage
    H3: Step 3: Create a Topic Cluster Map
    H3: Step 4: Build Your Editorial Calendar
    H3: Step 5: Write and Optimize Content
    H3: Step 6: Distribute and Promote
  H2: B2B Content Strategy Template (Free Download)
  H2: Measuring Content Strategy ROI
    H3: Leading Indicators
    H3: Lagging Indicators
  H2: Frequently Asked Questions
```

---

## Keyword Placement (Natural and Semantic)

### Where to Place Keywords

| Location | Primary Keyword | Secondary Keywords | Notes |
|----------|----------------|-------------------|-------|
| Title tag | Yes, front-loaded | One if space allows | Most important placement |
| Meta description | Yes | Yes | Bolded in SERP |
| H1 | Yes | No | Should match title closely |
| URL slug | Yes (simplified) | No | Short and clean |
| First 100 words | Yes, naturally | No | Signals topic to Google |
| H2 headings | Some, naturally | Yes | Cover subtopics |
| Body content | 3-5x naturally | Throughout | Never force it |
| Image alt text | Once if relevant | Yes | Describe the image first |
| Image file name | Yes if relevant | No | Use hyphens: `content-strategy-template.webp` |

### Semantic SEO (Entity Optimization)

Google understands topics, not just keywords. Optimize for topical depth:

- **Cover related entities**: If writing about "email marketing," also cover segments, automation, deliverability, open rates, CTR, A/B testing, DKIM, SPF
- **Answer related questions**: Use "People Also Ask" as a content outline
- **Use natural language variations**: "email marketing strategy," "strategy for email marketing," "marketing via email," "email campaigns"
- **Include definitions and context**: Help Google understand the semantic relationships between concepts

---

## Image Optimization for SEO

### Alt Text

Alt text serves two purposes: accessibility (screen readers) and SEO (image search ranking).

**Rules:**
- Describe what the image shows, accurately and concisely
- Include the keyword naturally if the image is relevant to the topic
- 80-125 characters
- Don't start with "Image of" or "Photo of" (screen readers already announce it as an image)

**Examples:**
- Bad: `alt="image"`
- Bad: `alt="email marketing strategy email marketing tips best email marketing"`
- Good: `alt="Bar chart showing email open rates by industry for 2026"`
- Good: `alt="Content strategy template with editorial calendar and topic clusters"`

### File Names
- Use descriptive, hyphenated names: `email-marketing-strategy-framework.webp`
- Not: `IMG_3847.jpg` or `screenshot-2026-03-01.png`

### Image Sizing and Format
- Serve images in WebP or AVIF format
- Use responsive images with `srcset`
- Compress to 80-85% quality
- Lazy load images below the fold

---

## Internal Linking Strategy

Internal links distribute PageRank, establish content hierarchy, and help Google discover pages.

### Rules

1. **Every page should link to and from at least 2-3 other relevant pages**
2. **Use descriptive anchor text** — Not "click here" but "email marketing strategy guide"
3. **Link to high-priority pages more often** — Your most important pages should have the most internal links
4. **Link contextually** — Links should appear naturally within the content where they add value
5. **Link deep** — Link to specific blog posts and pages, not just the homepage and category pages
6. **Fix orphan pages** — Every important page must be reachable through internal links

### Internal Linking Patterns

**Hub and Spoke (Topic Clusters):**
- Pillar page (hub) links to all related cluster pages (spokes)
- Each spoke links back to the hub
- Spokes link to each other where relevant

**Contextual Links:**
- Mention a concept? Link to the page where you cover it in depth
- "As we discussed in our [guide to email deliverability]..."

**Navigation Links:**
- Breadcrumbs, sidebar, footer, related posts sections
- These provide structural context but carry less weight than in-body contextual links

### Anchor Text Best Practices

| Type | Example | When to Use |
|------|---------|-------------|
| Exact match | "email marketing strategy" | Sparingly — once or twice per cluster |
| Partial match | "our guide to email marketing" | Primary approach — natural and effective |
| Branded | "learn more on the HubSpot blog" | When referencing your brand contextually |
| Generic | "click here," "read more" | Avoid — wastes anchor text opportunity |
| Natural phrase | "improving your email open rates" | Best for user experience and SEO |

---

## URL Structure

### Rules
- Short and descriptive: `/email-marketing-strategy/` not `/blog/2026/03/14/the-complete-guide-to-email-marketing-strategy-for-beginners/`
- Use hyphens, not underscores: `/email-marketing/` not `/email_marketing/`
- Lowercase only
- Include the primary keyword
- No stop words unless needed for readability: `/how-to-write-cold-emails/` is fine, `/a-guide-to-the-best-of-email/` is not
- No dates in URLs (makes content appear dated when you refresh it)
- Use logical hierarchy: `/blog/email-marketing/` or `/products/crm/`
- Never change URLs without implementing 301 redirects

---

## Content Readability

### Readability Rules for SEO Content
- **Short paragraphs**: 2-4 sentences maximum
- **Subheadings every 200-300 words**: Breaks up walls of text, adds keyword opportunities
- **Bullet points and numbered lists**: For scannable information
- **Bold key phrases**: Helps skimmers find important information
- **Table of contents**: For posts over 1,500 words (also helps win sitelinks in SERPs)
- **Reading level**: Aim for 7th-9th grade reading level (Hemingway Editor or Flesch-Kincaid)
- **Active voice**: "We analyzed 1,000 landing pages" not "1,000 landing pages were analyzed"
- **Multimedia**: Include images, charts, or videos every 300-500 words

---

## On-Page SEO Checklist

### Before Publishing
- [ ] Title tag: 50-60 chars, keyword front-loaded, compelling, unique
- [ ] Meta description: 120-155 chars, keyword included, CTA present, unique
- [ ] H1: Contains primary keyword, closely matches title tag, only one per page
- [ ] URL: Short, descriptive, keyword included, hyphens, lowercase
- [ ] First 100 words: Primary keyword appears naturally
- [ ] Headings: Logical H2/H3 hierarchy with secondary keywords
- [ ] Internal links: 3-5+ relevant internal links with descriptive anchor text
- [ ] External links: 2-3 links to authoritative, relevant sources
- [ ] Images: Alt text on all images, descriptive file names, WebP format, lazy loaded
- [ ] Content length: Matches or exceeds what's ranking in the top 10 for this keyword
- [ ] Search intent match: Content format matches what Google rewards for this query
- [ ] Schema markup: Appropriate structured data (Article, FAQ, HowTo, etc.)

### After Publishing
- [ ] Submit URL to Google Search Console for indexing
- [ ] Verify no indexing issues in URL Inspection tool
- [ ] Add internal links from existing related pages to the new page
- [ ] Monitor rankings and impressions in Search Console over 4-8 weeks

---

## Quality Gate

- [ ] Title tag and meta description are within character limits and include the target keyword
- [ ] Content fully satisfies the search intent behind the target keyword
- [ ] Heading hierarchy is logical and includes keyword variations naturally
- [ ] At least 3 internal links point to and from the page
- [ ] All images have descriptive alt text and are optimized for performance
- [ ] URL is clean, short, and keyword-inclusive
- [ ] Content readability is appropriate for the target audience
- [ ] Page is indexed and rendering correctly in Search Console
