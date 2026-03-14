---
description: Run SEO analysis on content, pages, or site structure. Provides technical, on-page, and content optimization recommendations.
---

# /seo-audit

Run a comprehensive SEO analysis on your content, individual pages, or overall site structure. Get actionable recommendations across technical SEO, on-page optimization, and content strategy.

## What This Command Does

The `/seo-audit` command evaluates your content or site against current SEO best practices and produces a prioritized list of improvements. It covers three pillars: technical health, on-page optimization, and content quality. Each finding comes with a severity level, specific fix instructions, and expected impact.

The command delegates to the **seo-analyst agent**, which applies search engine guidelines, ranking factor analysis, and content optimization frameworks to produce thorough, actionable audits.

## When to Use

- You have a blog post or article and want to improve its search ranking potential
- You are publishing new content and want to optimize it before going live
- You need to audit a landing page for SEO fundamentals
- You want to evaluate your site's content structure and internal linking
- You are investigating a drop in organic traffic or rankings
- You need keyword optimization recommendations for existing content
- You want to assess content gaps relative to competitors

## How It Works

1. **Content Analysis** — Evaluates the provided content for keyword targeting, relevance, depth, and search intent alignment
2. **On-Page Assessment** — Reviews title tags, meta descriptions, headings, URL structure, image alt text, and internal links
3. **Technical Review** — Checks for crawlability issues, page speed signals, mobile-friendliness indicators, and structured data opportunities
4. **Keyword Evaluation** — Analyzes keyword usage, density, semantic variations, and related terms coverage
5. **Competitive Context** — Compares content depth and coverage against what typically ranks for target queries
6. **Recommendations** — Produces a prioritized action list with effort vs. impact ratings

## Example Usage

**Input:**

```
/seo-audit analyze our blog post about email marketing best practices
```

**Output:**

```markdown
# SEO Audit: "Email Marketing Best Practices" Blog Post

## Overall Score: 62/100

### Critical Issues (Fix Immediately)

1. **Title tag is too generic** (Impact: High)
   - Current: "Email Marketing Best Practices"
   - Recommended: "15 Email Marketing Best Practices That Boost
     Open Rates in 2026"
   - Why: Adding specificity and a number increases CTR by 20-30%
     in SERPs

2. **Missing meta description** (Impact: High)
   - Add: "Discover 15 proven email marketing best practices used
     by top brands. Learn how to improve open rates, click-through
     rates, and conversions with actionable tips."
   - Character count: Keep between 150-160 characters

3. **No internal links** (Impact: High)
   - Add 3-5 internal links to related content (email automation,
     subject line guides, list building)

### Improvements (High Value)

4. **Content depth is below ranking competitors** (Impact: High)
   - Current word count: 1,200
   - Ranking competitors average: 2,800
   - Add sections on: segmentation, personalization, A/B testing,
     deliverability, and compliance

5. **Heading structure needs work** (Impact: Medium)
   - Only 3 H2s — expand to 8-12 covering subtopics
   - Add H3s under each H2 for scanability
   - Include target keywords naturally in 2-3 headings

6. **Missing semantic keywords** (Impact: Medium)
   - Add coverage of: "email segmentation," "drip campaigns,"
     "email deliverability," "click-through rate," "email
     automation," "list hygiene"

### Quick Wins

7. **Add structured data** — FAQ or HowTo schema
8. **Optimize images** — Add descriptive alt text to all 4 images
9. **Add a table of contents** — Improves UX and can trigger
   sitelinks in search results
10. **Update publish date** — Refresh content and republish with
    current date
```

## Important Notes

- Provide the actual content (or a URL if web fetching is available) for the most accurate audit — descriptions alone limit analysis depth
- SEO recommendations are based on current best practices but search algorithms change frequently; focus on user value above all
- Content-level audits are the primary strength; full technical site audits may require crawling tools like Screaming Frog or Sitebulb for comprehensive results
- Keyword difficulty and search volume estimates are directional — validate with tools like Ahrefs, Semrush, or Google Search Console for precision
- Implement changes incrementally and monitor impact in Search Console rather than making all changes simultaneously

## Related Agents

- **seo-analyst** — Primary agent that performs the audit
- **copywriter** — Implement content recommendations and rewrites
- **analytics-interpreter** — Track ranking and traffic changes after optimization
- **content-strategist** — Plan broader content strategy based on audit findings
- **market-researcher** — Research competitor content and keyword opportunities
