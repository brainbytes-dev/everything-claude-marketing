---
name: seo-technical
description: Technical SEO best practices for site architecture, crawlability, Core Web Vitals, and structured data. Use when auditing or improving technical SEO.
origin: ECM
---

# Technical SEO

## When to Activate

Use this skill when auditing a website's technical SEO health, diagnosing crawl or indexing issues, optimizing Core Web Vitals, implementing structured data, or planning site architecture. Also use when migrating a site, launching a new domain, or troubleshooting ranking drops that aren't content-related.

## First Questions

1. **What CMS/framework is the site built on?** (WordPress, Next.js, Shopify, custom — each has different technical SEO considerations)
2. **What's the current state?** (new site, established site with issues, migration in progress)
3. **What triggered this audit?** (ranking drop, new site launch, performance issues, indexing problems)
4. **Do you have access to Google Search Console and server logs?**
5. **What's the site size?** (100 pages vs. 100,000 pages — crawl budget matters at scale)

---

## Crawlability and Indexing

### Robots.txt

The robots.txt file controls which crawlers can access which parts of your site.

**Best practices:**
- Place at domain root: `https://example.com/robots.txt`
- Never block CSS or JavaScript files (Googlebot needs them to render pages)
- Block admin pages, staging environments, internal search results, and duplicate parameter URLs
- Reference your XML sitemap: `Sitemap: https://example.com/sitemap.xml`

**Template:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /staging/
Disallow: /search?
Disallow: /*?sort=
Disallow: /*?filter=

Sitemap: https://example.com/sitemap.xml
```

**Common mistakes:**
- Accidentally blocking the entire site (`Disallow: /`) after a staging-to-production migration
- Blocking JavaScript/CSS files that Googlebot needs for rendering
- Not updating robots.txt after URL structure changes

### XML Sitemaps

Sitemaps tell search engines which pages exist and which are most important.

**Best practices:**
- Include only indexable, canonical pages (200 status, no noindex)
- Maximum 50,000 URLs per sitemap file; use sitemap index for larger sites
- Include `<lastmod>` with accurate dates (not today's date on every page)
- Submit sitemap in Google Search Console
- Auto-generate sitemaps (don't maintain manually)
- Separate sitemaps by content type for large sites: `sitemap-blog.xml`, `sitemap-products.xml`

**Don't include in sitemaps:**
- Pages with `noindex` tags
- Non-canonical URLs
- Redirecting URLs
- Pages returning 4xx or 5xx errors
- Thin content or duplicate pages

### Canonical Tags

Canonical tags tell search engines which version of a page is the "original" when duplicates exist.

**When to use:**
- URL parameter variations: `?sort=price`, `?color=blue`
- HTTP vs. HTTPS versions
- www vs. non-www versions
- Paginated content (canonical to page 1 or self-referencing)
- Syndicated content (canonical to the original)
- Mobile vs. desktop URLs (if separate)

**Rules:**
- Every page should have a self-referencing canonical tag
- Canonical URL must return a 200 status code
- Canonical should point to the exact URL (including protocol and trailing slash)
- Don't canonical across different domains unless you intend to consolidate ranking signals

### Hreflang (International SEO)

For sites targeting multiple languages or regions:

```html
<link rel="alternate" hreflang="en-us" href="https://example.com/page" />
<link rel="alternate" hreflang="en-gb" href="https://example.co.uk/page" />
<link rel="alternate" hreflang="de" href="https://example.de/seite" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page" />
```

**Rules:**
- Every hreflang set must include `x-default` (fallback)
- Hreflang must be reciprocal (Page A points to Page B, and Page B points back to Page A)
- Use ISO 639-1 language codes and ISO 3166-1 Alpha 2 country codes
- Can be implemented in HTML head, HTTP headers, or XML sitemap

---

## Core Web Vitals

Google's page experience signals. Directly affect rankings, especially on mobile.

### LCP (Largest Contentful Paint) — Target: < 2.5 seconds
Measures when the largest visible element finishes loading.

**Common causes of poor LCP:**
- Large, unoptimized hero images
- Slow server response time (TTFB)
- Render-blocking CSS/JavaScript
- Web fonts causing layout shifts

**Fixes:**
- Serve images in WebP/AVIF format with proper sizing
- Implement server-side caching and CDN
- Preload the LCP image: `<link rel="preload" as="image" href="hero.webp">`
- Inline critical CSS, defer non-critical CSS
- Use `font-display: swap` for web fonts

### INP (Interaction to Next Paint) — Target: < 200ms
Replaced FID in 2024. Measures responsiveness to all user interactions throughout the page lifecycle.

**Common causes of poor INP:**
- Long JavaScript tasks blocking the main thread
- Heavy event handlers (click, scroll, keypress)
- Third-party scripts (analytics, chat widgets, ads)

**Fixes:**
- Break long tasks into smaller chunks using `requestIdleCallback` or `setTimeout`
- Use `requestAnimationFrame` for visual updates
- Defer non-essential third-party scripts
- Use web workers for heavy computation
- Implement `content-visibility: auto` for off-screen content

### CLS (Cumulative Layout Shift) — Target: < 0.1
Measures visual stability — how much the page layout shifts during loading.

**Common causes of poor CLS:**
- Images without width/height attributes
- Ads, embeds, or iframes without reserved space
- Dynamically injected content above the fold
- Web fonts causing text reflow (FOIT/FOUT)

**Fixes:**
- Always set `width` and `height` attributes on images and videos
- Reserve space for ads and dynamic content with CSS `aspect-ratio` or `min-height`
- Use `font-display: optional` to prevent layout shift from font loading
- Avoid inserting content above existing content after page load

---

## Structured Data (Schema Markup)

Structured data helps search engines understand your content and can trigger rich results.

### Priority Schema Types

**Article** — Blog posts, news articles
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Improve Your Technical SEO",
  "author": {"@type": "Person", "name": "Sarah Chen"},
  "datePublished": "2026-01-15",
  "dateModified": "2026-03-10",
  "image": "https://example.com/images/technical-seo.webp"
}
```

**FAQ** — Frequently asked questions (can trigger FAQ rich results)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is technical SEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Technical SEO involves optimizing..."
    }
  }]
}
```

**Product** — eCommerce product pages
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Running Shoes",
  "image": "https://example.com/shoes.webp",
  "offers": {
    "@type": "Offer",
    "price": "129.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "2341"
  }
}
```

**HowTo** — Step-by-step guides
**LocalBusiness** — Local business pages
**BreadcrumbList** — Navigation breadcrumbs
**Organization** — Company information

### Validation
- Test with Google's Rich Results Test: https://search.google.com/test/rich-results
- Monitor in Search Console under "Enhancements"
- Use JSON-LD format (Google's preferred implementation)
- Place in the `<head>` or `<body>` of the page

---

## Site Speed Optimization

### Server-Side
- Use a CDN (Cloudflare, Fastly, AWS CloudFront)
- Enable server-side caching (Redis, Varnish)
- Use HTTP/2 or HTTP/3
- Compress responses with Brotli (preferred) or Gzip
- Optimize TTFB to under 200ms

### Front-End
- Minify HTML, CSS, and JavaScript
- Lazy load images and videos below the fold: `loading="lazy"`
- Preload critical resources: fonts, hero images, above-the-fold CSS
- Use responsive images with `srcset` and `sizes` attributes
- Remove unused CSS and JavaScript
- Self-host fonts instead of loading from Google Fonts

### Image Optimization
- WebP for photos, SVG for icons and illustrations, AVIF for maximum compression
- Serve appropriate sizes (don't load a 2000px image in a 400px container)
- Use `<picture>` element for format fallbacks
- Compress to 80-85% quality (imperceptible to humans)

---

## Mobile-First Indexing

Google indexes the mobile version of your site first. Ensure:

- Mobile and desktop content are identical (no hiding content on mobile)
- Structured data is present on the mobile version
- Meta robots, canonical, and hreflang tags are on the mobile version
- Mobile pages load fast (especially on 3G connections)
- Touch targets are at least 48x48px with 8px spacing
- Text is readable without zooming (16px minimum base font)

---

## JavaScript Rendering and SEO

For JavaScript-heavy sites (React, Next.js, Vue, Angular):

### Server-Side Rendering (SSR)
Best for SEO. Pages are fully rendered on the server before being sent to the browser.
- Next.js: `getServerSideProps` or App Router with server components
- Nuxt.js: Universal mode

### Static Site Generation (SSG)
Pre-builds pages at build time. Best for content that doesn't change frequently.
- Next.js: `getStaticProps` + `getStaticPaths`
- Ideal for blog posts, documentation, landing pages

### Client-Side Rendering (CSR)
Worst for SEO. Google can render JavaScript, but it's slower and less reliable.
- Avoid for any page that needs to rank in search
- If unavoidable, implement dynamic rendering as a fallback

### Testing JavaScript SEO
- Use "URL Inspection" in Google Search Console to see how Googlebot renders the page
- Compare the rendered HTML with the source HTML
- Check that metadata, headings, and body content are present in the rendered version

---

## Technical SEO Audit Checklist

### Crawlability
- [ ] Robots.txt allows access to all important pages and resources
- [ ] XML sitemap is submitted to Search Console and contains only indexable URLs
- [ ] No orphan pages (every important page is linked from at least one other page)
- [ ] Redirect chains are under 3 hops (ideally 1)
- [ ] No redirect loops
- [ ] 404 pages return proper 404 status codes (not soft 404s)

### Indexing
- [ ] Important pages are indexed (check Search Console Coverage report)
- [ ] No unintentional `noindex` tags on important pages
- [ ] Canonical tags are correct and consistent
- [ ] Duplicate content is resolved via canonicals, redirects, or consolidation
- [ ] Parameter URLs are handled (robots.txt block, canonical, or Search Console parameter tool)

### Performance
- [ ] LCP < 2.5s on mobile
- [ ] INP < 200ms on mobile
- [ ] CLS < 0.1 on mobile
- [ ] TTFB < 200ms
- [ ] Page size < 3MB (ideally < 1.5MB)

### Structured Data
- [ ] Schema markup is valid (tested with Rich Results Test)
- [ ] Article, Product, FAQ, or other relevant schema types are implemented
- [ ] BreadcrumbList schema matches the visual breadcrumbs
- [ ] No structured data errors or warnings in Search Console

### Security and Protocols
- [ ] HTTPS is enforced (HTTP redirects to HTTPS)
- [ ] SSL certificate is valid and not expiring soon
- [ ] Mixed content warnings are resolved
- [ ] HTTP/2 or HTTP/3 is enabled

### Mobile
- [ ] Mobile-friendly test passes
- [ ] Content parity between mobile and desktop
- [ ] Touch targets meet size requirements (48x48px)
- [ ] No horizontal scrolling on mobile

---

## Quality Gate

- [ ] All critical crawl and index issues are identified and prioritized
- [ ] Core Web Vitals are measured with real user data (CrUX), not just lab data
- [ ] Structured data is validated and error-free
- [ ] Recommendations are prioritized by impact (crawlability > indexing > performance > schema)
- [ ] Changes are documented with expected impact and measurement plan
