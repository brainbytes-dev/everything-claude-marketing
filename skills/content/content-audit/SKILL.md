---
name: content-audit
description: Audit existing content for quality, performance, and optimization opportunities. Use when inheriting a content library or planning content strategy refreshes.
origin: ECM
---

# Content Audit

## When to Activate

- Inheriting a content library from a predecessor or acquisition
- Content program has been running for 12+ months without a review
- Organic traffic is declining or stagnating
- Planning a site redesign, migration, or rebrand that affects content
- Suspected content cannibalization (multiple pages competing for the same keyword)
- Building a content strategy that needs to account for what already exists
- Stakeholders question the ROI of content marketing

## First Questions

1. How many content pieces exist? (Blog posts, landing pages, guides, resources?)
2. What analytics access do you have? (Google Analytics, Search Console, CMS analytics?)
3. What is the primary goal of the content program? (Traffic, leads, conversions, brand?)
4. When was content last reviewed or updated systematically?
5. How many authors have contributed, and are they still with the organization?
6. Is there known content that is outdated, inaccurate, or off-brand?
7. What CMS is used, and can content be bulk-exported for analysis?

## Content Inventory Methodology

### Step 1: Export Everything

Pull a complete list of published content. For each piece, capture:

```
URL
Title
Publish date
Last modified date
Author
Content type (blog, guide, case study, landing page, etc.)
Word count
Content pillar/category
Primary keyword (if known)
```

**Sources:** CMS export, sitemap.xml (for URL list), Screaming Frog crawl (for metadata), Google Analytics (for performance data), Google Search Console (for search data).

### Step 2: Add Performance Data

For each piece, pull metrics for the trailing 12 months:

| Metric | Source | Why It Matters |
|---|---|---|
| Organic sessions | Google Analytics | Search-driven visibility |
| Total pageviews | Google Analytics | Overall reach |
| Avg. time on page | Google Analytics | Engagement depth |
| Bounce rate | Google Analytics | Content relevance |
| Conversions/goals | Google Analytics | Business impact |
| Impressions | Google Search Console | Search visibility |
| Clicks | Google Search Console | Search traffic |
| Avg. position | Google Search Console | Ranking performance |
| Top queries | Google Search Console | What the page ranks for |
| Backlinks | Ahrefs/SEMrush | Authority and link equity |
| Social shares | BuzzSumo/native analytics | Social reach |

### Step 3: Add Quality Scores

For each piece, manually assess (or sample for large libraries):

| Quality Dimension | Score (1-5) | Criteria |
|---|---|---|
| **Accuracy** | | Is the information current and correct? |
| **Relevance** | | Does this still serve a business goal and audience need? |
| **Completeness** | | Does it cover the topic thoroughly? |
| **Brand alignment** | | Does it match current voice, positioning, and visual standards? |
| **SEO optimization** | | Is it structured for search (headings, meta, internal links)? |
| **Readability** | | Is it well-written, scannable, and engaging? |
| **Visual quality** | | Are images, formatting, and media current and functional? |

## Scoring and Decision Framework

### Content Score Calculation

Combine performance and quality into a single score:

```
Content Score = (Performance Score × 0.6) + (Quality Score × 0.4)

Performance Score = weighted average of:
  - Organic traffic (30%)
  - Conversions (30%)
  - Engagement (time on page, bounce rate) (20%)
  - Backlinks (20%)

Quality Score = average of 7 quality dimensions (1-5 scale, normalized to 100)
```

Adjust weights based on your program's primary goal (traffic-focused programs weight organic higher, conversion-focused programs weight conversions higher).

### The Four Decisions

Every piece of content gets one of four decisions:

| Decision | Criteria | Action |
|---|---|---|
| **Keep** | High performance + high quality | No action needed. Monitor. |
| **Update** | High performance + declining quality, OR high potential + quality gaps | Refresh content, update data, improve SEO, add visuals. |
| **Merge** | Multiple pages covering the same topic (cannibalization) | Combine into one stronger page. Redirect the others. |
| **Archive/Delete** | Low performance + low quality + no strategic value | Remove from site (301 redirect to relevant page if it has backlinks). |

### Decision Matrix

```
                    HIGH QUALITY
                         │
         KEEP            │         UPDATE
    (monitor, promote)   │    (refresh, improve)
                         │
 ─────────────────────────────────────────── PERFORMANCE
                         │
         MERGE           │         ARCHIVE
    (consolidate)        │    (remove/redirect)
                         │
                    LOW QUALITY
```

## Content Gap Analysis

After auditing what exists, identify what is missing:

### Gap Identification Methods

1. **Keyword gap.** Compare your keyword rankings to competitors. What do they rank for that you do not? (Use Ahrefs Content Gap or SEMrush Keyword Gap.)
2. **Topic gap.** Map your content to your content pillars. Which pillars are underserved?
3. **Funnel gap.** Map content to buyer journey stages (awareness → consideration → decision). Is one stage underfed?
4. **Format gap.** Do you only have blog posts? Missing video, interactive tools, templates, or downloadable resources?
5. **Audience gap.** Map content to audience segments. Is one persona getting all the content while another gets none?
6. **Question gap.** Review "People Also Ask," customer support tickets, and sales call notes. What questions are unanswered by your content?

### Gap Prioritization

For each identified gap, score:

| Factor | Score (1-5) |
|---|---|
| Business impact (tied to revenue or key goal) | |
| Audience demand (search volume, question frequency) | |
| Competitive opportunity (competitors are weak here) | |
| Feasibility (can you create this with available resources) | |

Prioritize gaps with the highest combined score.

## Audit Spreadsheet Template

```
| URL | Title | Type | Pillar | Publish Date | Last Updated | Word Count | Author |
|-----|-------|------|--------|-------------|-------------|------------|--------|

| Organic Sessions (12mo) | Conversions (12mo) | Avg Position | Top Query | Backlinks |
|--------------------------|---------------------|-------------|-----------|-----------|

| Accuracy (1-5) | Relevance (1-5) | Completeness (1-5) | Brand Alignment (1-5) |
|-----------------|------------------|---------------------|----------------------|

| SEO (1-5) | Readability (1-5) | Visual Quality (1-5) | Overall Score | Decision |
|------------|--------------------|-----------------------|---------------|----------|

| Action Items | Priority | Owner | Deadline |
|-------------|----------|-------|----------|
```

### Recommended Tabs

1. **Inventory** — Full content list with metadata
2. **Performance** — Analytics data
3. **Quality Assessment** — Manual scores
4. **Decisions** — Keep/Update/Merge/Archive with action items
5. **Gaps** — Identified content gaps with prioritization
6. **Dashboard** — Summary statistics and charts

## Prioritization Framework for Updates

When the audit reveals dozens of pieces needing updates, prioritize with this framework:

### Quick Wins (Do First)
- Pages ranking positions 5-15 for valuable keywords (close to page 1 — small improvements yield big results)
- High-traffic pages with outdated information (risk of losing rankings)
- Pages with high impressions but low CTR (meta title/description optimization)

### Medium Effort (Do Next)
- Pages with good backlinks but weak content (the authority is there, content needs to catch up)
- Content cannibalization situations (merging pages)
- Pages targeting valuable keywords but ranking 15-30 (need significant content improvement)

### Strategic Investments (Plan for Later)
- Major content gaps identified in gap analysis
- New pillar pages or topic clusters to build
- Content format expansions (first video, first interactive tool)

## Audit Cadence

| Audit Type | Frequency | Scope |
|---|---|---|
| **Full audit** | Annually | Every piece of content |
| **Performance review** | Quarterly | Top 50 pages + bottom 20 pages |
| **Freshness check** | Monthly | Content published 12+ months ago in high-priority pillars |
| **New content review** | 30 days post-publish | Every new piece (is it performing to expectations?) |

## Common Pitfalls

1. **Auditing without a goal.** An audit should answer a specific question: What should we update? What should we cut? Where are the gaps? Without a question, it is just data collection.
2. **Only looking at traffic.** A page with low traffic but high conversion rate may be more valuable than a viral blog post that converts nobody.
3. **Deleting without redirecting.** Removing content without 301 redirects to relevant pages wastes accumulated link equity and creates dead ends.
4. **Auditing but not acting.** The audit is worthless without an action plan with owners and deadlines.
5. **One-time exercise.** Content audits should be recurring, not a one-time project.
6. **Ignoring content outside the blog.** Landing pages, help docs, product pages, and email templates are content too.

## Quality Gate

Before considering a content audit complete:

- [ ] Full content inventory is compiled with metadata for every published piece
- [ ] Performance data covers at least 12 months of analytics
- [ ] Quality scoring is applied consistently (same criteria, same scale)
- [ ] Every piece has a decision: Keep, Update, Merge, or Archive
- [ ] Content gaps are identified with prioritization scores
- [ ] Update priorities are ranked (quick wins, medium effort, strategic)
- [ ] Action items have owners and deadlines
- [ ] Redirect plan exists for any content being archived or merged
- [ ] Findings are summarized for stakeholders (not just a raw spreadsheet)
- [ ] Next audit date is scheduled
