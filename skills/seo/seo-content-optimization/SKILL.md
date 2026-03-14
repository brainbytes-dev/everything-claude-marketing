---
name: seo-content-optimization
description: Optimize existing content for better search performance using NLP, entity coverage, and content gap analysis. Use when updating or improving existing content.
origin: ECM
---

# SEO Content Optimization

## When to Activate

Use this skill when updating existing content to improve search rankings, diagnosing why a page isn't ranking as expected, refreshing decaying content, merging thin pages, optimizing for featured snippets and SERP features, or performing a content audit to identify optimization opportunities.

## First Questions

1. **Which pages need optimization?** (declining traffic, stuck on page 2, underperforming expectations)
2. **What are the target keywords and current rankings?**
3. **What does the SERP look like for these keywords?** (who ranks, what format, what SERP features)
4. **When was the content last updated?**
5. **What's the page's current backlink profile?** (are ranking issues content-related or authority-related?)
6. **Is there keyword cannibalization?** (multiple pages competing for the same keyword)

---

## Content Refresh Strategy

Content decay is inevitable. Pages that once ranked well lose traffic over time as information becomes outdated, competitors publish better content, and Google refreshes its understanding of quality.

### When to Refresh Content

- **Traffic declining**: Page has lost 20%+ organic traffic over 3-6 months
- **Rankings slipping**: Dropped from page 1 to page 2, or from top 3 to positions 5-10
- **Outdated information**: Statistics, dates, tools, or processes have changed
- **Competitive gap**: Competitors have published more comprehensive content
- **SERP changes**: Google now shows different content formats (video, listicle vs. guide)
- **Age**: Content over 12-18 months old should be evaluated for refresh

### Content Refresh Process

1. **Audit current performance**: Pull Search Console data for the past 12 months — track impressions, clicks, CTR, and average position over time
2. **Analyze the SERP**: Google the target keyword. What do top-ranking pages include that yours doesn't?
3. **Identify gaps**: Compare your content against the top 5 ranking pages — what topics, subtopics, entities, or media do they cover that you miss?
4. **Update the content**:
   - Refresh statistics and dates
   - Add missing subtopics and entities
   - Improve the introduction (the first 100 words matter most)
   - Update the title tag and meta description for better CTR
   - Add or update images, charts, and multimedia
   - Improve internal linking
   - Add structured data if missing
5. **Update the published date**: Change to the current date (this signals freshness to Google)
6. **Resubmit for indexing**: Request indexing in Search Console
7. **Monitor**: Track rankings and traffic for 4-8 weeks after the update

### What NOT to Change During a Refresh
- Don't change the URL (unless absolutely necessary, with a 301 redirect)
- Don't remove sections that are ranking for valuable secondary keywords
- Don't change the core search intent of the page

---

## NLP Entity Optimization

Google uses Natural Language Processing (NLP) to understand content through entities — people, places, things, concepts, and their relationships. Optimizing for entity coverage helps Google understand your content's depth and relevance.

### What Are Entities?

Entities are specific, well-defined concepts that Google can identify and connect. For a page about "email marketing":

**Expected entities**: email list, open rate, click-through rate, subject line, email automation, segmentation, A/B testing, deliverability, unsubscribe rate, ESP (email service provider), GDPR, CAN-SPAM, drip campaign, nurture sequence

### How to Identify Missing Entities

1. **Analyze top-ranking pages**: Extract the key concepts, terms, and topics they cover
2. **Use NLP tools**: Clearscope, Surfer SEO, MarketMuse, or Frase analyze top-ranking content and identify entities your page should cover
3. **Google's "People Also Ask"**: Each PAA question represents an entity or subtopic Google associates with the query
4. **Related searches**: At the bottom of the SERP — these are semantically connected topics
5. **Wikipedia**: The Wikipedia article for your topic lists related entities in its sections, links, and "See also"

### Entity Optimization Process

1. List the entities that top-ranking pages cover
2. Check which entities your content is missing
3. Add coverage of missing entities naturally within the content
4. Don't force entities — they should fit within the content's narrative
5. Use entities in headings, body text, image alt text, and structured data

### Example: Optimizing a Page About "Content Marketing"

**Missing entities identified:**
- Content distribution (mentioned by 8/10 top results, missing from your page)
- Content calendar (mentioned by 7/10)
- Content brief (mentioned by 5/10)
- Content ROI measurement (mentioned by 6/10)
- Content repurposing (mentioned by 5/10)

**Action:** Add a section or paragraph covering each missing entity, naturally integrated into the existing content structure.

---

## Topical Coverage Analysis

Beyond individual entities, Google evaluates how thoroughly you cover a topic across your entire site (topical authority).

### Assessment Method

1. **Map your existing content** to your target topic cluster
2. **Identify gaps**: What subtopics does your site not cover that competitors do?
3. **Check depth**: Is each page deep enough to serve as a definitive resource on its subtopic?
4. **Evaluate internal linking**: Are cluster pages properly interconnected?

### Topical Coverage Audit Template

| Subtopic | Competitor A | Competitor B | Your Site | Gap? | Priority |
|----------|-------------|-------------|-----------|------|----------|
| Email segmentation | Comprehensive guide | Blog post | Nothing | Yes | High |
| Email automation | Pillar page | How-to guide | Short blog post | Depth gap | High |
| Email deliverability | Technical guide | FAQ page | Comprehensive guide | No | - |
| Email A/B testing | Tutorial + examples | Blog post | Nothing | Yes | Medium |

---

## Content Gap Identification

### Page-Level Content Gaps

Compare your page against the top 5 ranking pages:

1. **Heading analysis**: Extract all H2/H3 headings from top-ranking pages. Which sections do they have that you don't?
2. **Word count comparison**: Not about hitting a number, but about coverage depth. If top pages average 3,000 words and yours is 800, you likely have coverage gaps.
3. **Media comparison**: Do top pages include videos, infographics, tables, or interactive elements that you lack?
4. **Freshness comparison**: Are top pages more recently updated than yours?
5. **SERP feature analysis**: Are top pages formatted to win featured snippets, PAA, or other features?

### Site-Level Content Gaps

1. **Competitor content audit**: Export all indexed pages from 3 competitors. What topics do they cover that you don't?
2. **Keyword gap analysis**: Use Ahrefs/Semrush to find keywords competitors rank for that you don't
3. **Search Console query analysis**: Find queries where your pages appear but don't get clicks (impressions without clicks = opportunity)

---

## SERP Feature Optimization

### Featured Snippets

Featured snippets appear above position 1 (position 0). Types:

**Paragraph snippets** (most common):
- Trigger: "What is," "Why does," "How to" queries
- Format: 40-60 word direct answer immediately following the question in an H2/H3
- Tip: Start with a direct definition or answer, then elaborate

**List snippets** (ordered and unordered):
- Trigger: "How to," "Steps to," "Best," "Top" queries
- Format: H2 heading as the question, followed by H3 subheadings or bullet points
- Tip: Use a clear numbered or bulleted list under a descriptive heading

**Table snippets**:
- Trigger: Comparison queries, data queries, "vs" queries
- Format: HTML `<table>` with clear headers
- Tip: Use tables for any structured data comparison

### Optimization Template for Featured Snippets

```html
<h2>What Is [Keyword]?</h2>
<p>[Keyword] is [direct 40-60 word definition/answer that starts
with the keyword and directly answers the question].</p>

<h2>How to [Action] (Step by Step)</h2>
<ol>
  <li><h3>Step 1: [Action]</h3><p>[Description]</p></li>
  <li><h3>Step 2: [Action]</h3><p>[Description]</p></li>
  <li><h3>Step 3: [Action]</h3><p>[Description]</p></li>
</ol>
```

### People Also Ask (PAA)

PAA boxes contain questions related to the main query. Answering these within your content:
- Increases relevance signals
- Can win PAA placements (driving additional clicks)
- Provides natural H2/H3 headings with question-based subheads

**Process:**
1. Search your target keyword
2. Record all PAA questions (click each to expand more)
3. Add the most relevant as H2 or H3 headings in your content
4. Answer each concisely (40-60 words) immediately after the heading, then elaborate

### Knowledge Panels

For brand or entity queries, Google may show a knowledge panel. Influence it by:
- Having a complete Google Business Profile
- Maintaining a comprehensive Wikipedia article (if notable enough)
- Consistent entity information across your website, social profiles, and Wikidata
- Using Organization or Person schema markup

---

## Content Consolidation (Merging Thin Content)

When multiple pages compete for the same keyword (cannibalization) or when you have many thin pages on related topics, consolidating them into one authoritative page often improves rankings.

### When to Consolidate

- Two or more pages target the same primary keyword
- Multiple thin pages (under 500 words) on related subtopics
- Pages with similar content that split ranking signals
- Pages with minimal traffic and few backlinks

### Consolidation Process

1. **Identify candidates**: Find pages with overlapping keywords using Search Console (check which URLs appear for the same queries)
2. **Choose the winner**: The page with the most backlinks, best rankings, or highest traffic becomes the canonical version
3. **Merge content**: Take the best elements from all candidate pages and combine into the winner
4. **Redirect**: 301 redirect all deprecated URLs to the consolidated page
5. **Update internal links**: Point all internal links to the new consolidated URL
6. **Monitor**: Track rankings for 4-8 weeks after consolidation

### Example

Before:
- `/blog/email-open-rates/` (300 words, 2 backlinks)
- `/blog/improve-email-opens/` (500 words, 0 backlinks)
- `/blog/email-subject-line-tips/` (400 words, 1 backlink)

After:
- `/blog/email-open-rates/` (2,000 words — comprehensive guide covering all subtopics, 3 backlinks via 301 redirects)

---

## Historical Optimization Process

A systematic approach to optimizing your entire existing content library.

### Monthly Content Optimization Workflow

1. **Pull data**: Export Search Console data for all pages — clicks, impressions, CTR, average position (last 3 months vs. previous 3 months)
2. **Identify opportunities** using these filters:

| Opportunity Type | Filter Criteria | Action |
|-----------------|-----------------|--------|
| Quick wins | Position 5-15, high impressions | Optimize on-page SEO, improve title/meta for CTR |
| Declining pages | Traffic down 20%+ vs. previous period | Content refresh (update info, add entities, improve depth) |
| Low CTR | Position 1-5, CTR below 3% | Rewrite title tag and meta description |
| Thin content | Under 500 words, low traffic | Expand or consolidate with related pages |
| Cannibalization | Multiple URLs ranking for same query | Consolidate into one authoritative page |
| Featured snippet opportunity | Position 1-5 for question queries | Add snippet-formatted answer (paragraph, list, or table) |

3. **Prioritize**: Score each opportunity on effort vs. impact
4. **Execute**: Optimize 5-10 pages per month
5. **Track**: Monitor each optimized page for 4-8 weeks
6. **Document**: Record what you changed and the result for future reference

---

## Content Decay Detection

### Signals of Content Decay

- Gradual decline in organic traffic over 3+ months (not a sudden drop, which indicates an algorithm update or technical issue)
- Declining average position for target keywords
- Decreasing impressions even without position changes (search volume may be shifting)
- Competitors publishing newer, more comprehensive content on the same topic
- Outdated statistics, tools, or references in the content

### Setting Up Decay Monitoring

1. **Create a content inventory** with publish date, last update date, target keyword, and current traffic
2. **Set traffic alerts** in Google Analytics for pages dropping below a threshold
3. **Monthly review**: Compare month-over-month and year-over-year traffic for top 50 pages
4. **Quarterly deep dive**: Full content audit comparing current performance to peak performance
5. **Flag pages for refresh** when they've lost 20%+ traffic from their peak

### Decay Prevention

- Schedule content refreshes every 6-12 months for high-value pages
- Use evergreen data sources when possible (percentages over absolute numbers, frameworks over tool-specific instructions)
- Build content that improves with age: add new examples, update statistics, respond to comments
- Monitor competitor content: when a competitor publishes on your topic, evaluate whether you need to update

---

## Quality Gate

- [ ] Content gaps have been identified by comparing against top-ranking competitors
- [ ] Missing entities and subtopics have been added naturally to the content
- [ ] Title tag and meta description have been optimized for both rankings and CTR
- [ ] Featured snippet opportunities are addressed with properly formatted answers
- [ ] PAA questions are incorporated as headings with concise answers
- [ ] Keyword cannibalization has been checked and resolved (consolidation or differentiation)
- [ ] Thin content has been expanded or consolidated with related pages
- [ ] Published date has been updated to reflect the refresh
- [ ] Internal links to and from the page have been reviewed and improved
- [ ] URL has been resubmitted for indexing in Search Console
- [ ] A monitoring plan is in place to track performance over the next 4-8 weeks
- [ ] Content decay monitoring is set up for ongoing maintenance
