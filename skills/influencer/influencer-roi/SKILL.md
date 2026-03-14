---
name: influencer-roi
description: Measure influencer marketing ROI and performance across campaigns. Use when evaluating influencer partnerships or justifying influencer spend.
origin: ECM
---

# Influencer ROI

## When to Activate

Use this skill when measuring the return on investment of influencer campaigns, building reporting frameworks for influencer marketing, comparing influencer performance across campaigns or creators, justifying influencer spend to stakeholders, setting performance benchmarks for influencer partnerships, optimizing the influencer mix (tiers, platforms, content types), or when someone asks "is influencer marketing working?" or "how do we measure influencer ROI?"

## First Questions

Before measuring influencer ROI, clarify:

1. **What was the campaign goal?** (awareness, engagement, traffic, leads, sales — ROI calculation depends on the goal)
2. **What tracking mechanisms are in place?** (UTM links, promo codes, landing pages, affiliate links, pixels)
3. **What data is available?** (creator analytics, platform analytics, CRM data, sales data)
4. **What is the total investment?** (creator fees, product costs, agency fees, internal time, ad spend on boosted influencer content)
5. **What is the comparison baseline?** (previous campaigns, other channels, industry benchmarks)
6. **Who needs the report?** (marketing team wants detail, executives want ROI summary, finance wants revenue attribution)

## Core Rules

1. **Define success metrics BEFORE the campaign launches.** If you don't agree on what success looks like upfront, you'll argue about it afterward.
2. **Track everything.** Every influencer link should have UTMs, a unique promo code, or a dedicated landing page. Untracked influencer marketing is a black box.
3. **Attribution is imperfect — acknowledge it.** Influencer marketing creates awareness and consideration that isn't always captured by last-click attribution. Account for this without using it as an excuse for poor performance.
4. **Compare like with like.** Don't compare a nano creator's engagement rate with a macro creator's reach. Different tiers serve different purposes.
5. **Calculate total cost, not just creator fees.** Product costs, shipping, agency fees, internal time, and boosted ad spend are all part of the investment.
6. **Look at both direct and indirect ROI.** Direct: trackable sales and leads. Indirect: content assets, social proof, SEO value, brand lift.

## Influencer Metrics Framework

### Awareness Metrics (TOFU)

| Metric | Definition | How to Get It |
|--------|-----------|---------------|
| Reach | Number of unique accounts that saw the content | Creator's analytics or platform insights |
| Impressions | Total number of times the content was displayed | Creator's analytics |
| Video Views | Number of views (platform-specific definitions vary) | Platform analytics |
| Brand Mentions | Number of times the brand was mentioned in comments and shares | Social listening tools |
| Share of Voice | Your brand mentions vs. competitor mentions during campaign period | Social listening tools |

### Engagement Metrics (MOFU)

| Metric | Definition | How to Get It |
|--------|-----------|---------------|
| Engagement Rate | (Likes + Comments + Shares + Saves) / Reach x 100 | Creator's analytics |
| Comment Sentiment | Ratio of positive, neutral, and negative comments | Manual review or sentiment analysis tool |
| Save Rate | Saves / Reach x 100 (indicates high-value content) | Creator's analytics (Instagram, TikTok) |
| Share Rate | Shares / Reach x 100 (indicates viral potential) | Creator's analytics |
| Click-Through Rate | Clicks / Impressions x 100 | UTM tracking, link shortener analytics |

### Conversion Metrics (BOFU)

| Metric | Definition | How to Get It |
|--------|-----------|---------------|
| Website Visits | Traffic from influencer links | GA4 with UTM tracking |
| Leads Generated | Form fills, signups, or downloads from influencer traffic | CRM / MAP with UTM capture |
| Promo Code Redemptions | Number of times the creator's code was used | E-commerce platform or CRM |
| Sales / Revenue | Direct revenue attributed to influencer traffic | E-commerce platform, CRM, affiliate platform |
| Conversion Rate | Conversions / Clicks x 100 | Analytics platform |
| Cost Per Acquisition | Total cost / Number of customers acquired | Manual calculation |

### Content Value Metrics

| Metric | Definition | How to Get It |
|--------|-----------|---------------|
| Content Assets Created | Number of usable content pieces (photos, videos, testimonials) | Manual inventory |
| Earned Media Value (EMV) | Estimated value of the organic exposure received | EMV calculation (see below) |
| Content Lifespan | How long the content continues to generate engagement | Analytics tracked over 30, 60, 90 days |
| Content Repurpose Rate | % of influencer content reused in other channels (ads, website, email) | Internal tracking |

## Tracking Methods

### UTM Links

Every influencer gets a unique UTM-tagged URL:

```
https://brand.com/product?utm_source=creator-name&utm_medium=influencer&utm_campaign=campaign-name&utm_content=platform-content-type
```

- **Pros:** Free, integrates with GA4, enables full journey tracking.
- **Cons:** Requires link-in-bio or swipe-up. Doesn't capture view-through. Can be overridden by subsequent traffic source.

### Promo Codes

Each creator gets a unique discount code (e.g., SARAH20):

- **Pros:** Works across platforms including those without clickable links. Easy to track in e-commerce platforms. High recall for audiences.
- **Cons:** Codes get shared beyond the creator's audience (deal sites, friends). Only works when there's a discount involved. Some customers forget to use the code.

### Dedicated Landing Pages

Each creator gets a unique URL (brand.com/sarah):

- **Pros:** Clean attribution. Custom messaging per creator. No UTM complexity for the creator.
- **Cons:** Requires page creation and maintenance for each partner. More work to set up.

### Affiliate Links

Creator-specific affiliate tracking links (via Impact, ShareASale, Refersion, etc.):

- **Pros:** Automated tracking and payouts. Cookie-based attribution captures delayed purchases. Scalable for many creators.
- **Cons:** Requires affiliate platform setup. Cookie windows vary (7-30 days). Privacy changes reducing cookie reliability.

### Brand Lift Studies

Pre/post surveys measuring changes in brand awareness, consideration, and preference:

- **Pros:** Captures upper-funnel impact that tracking links miss. Gold standard for awareness campaigns.
- **Cons:** Expensive. Requires sufficient sample size. Hard to isolate influencer impact from other marketing.

### Pixel-Based Tracking

Platform pixels (Meta, TikTok) on your site to track influencer-driven conversions:

- **Pros:** Captures view-through conversions (saw the content, visited directly later). Platform-native attribution.
- **Cons:** Requires pixel setup. Cross-platform limitations. Privacy regulations reducing effectiveness.

## ROI Calculation Framework

### Basic ROI Formula

**ROI = (Revenue Generated - Total Investment) / Total Investment x 100**

### Total Investment Calculation

| Cost Component | Include? | Notes |
|---------------|----------|-------|
| Creator fees | Yes | Cash payments to influencers |
| Product/gifting costs | Yes | Cost of goods + shipping |
| Agency fees | Yes | If using an influencer agency |
| Platform/tool fees | Yes | Influencer management platforms |
| Internal team time | Yes | Estimate hours x loaded hourly rate |
| Paid amplification | Yes | Ad spend on boosting influencer content |
| Content production support | Yes | Photography, editing, props if provided |

### Revenue Attribution

**Direct attribution (tracked):**
- Revenue from UTM-tagged traffic
- Revenue from promo code redemptions
- Revenue from affiliate link conversions
- Revenue from dedicated landing page conversions

**Assisted attribution (estimated):**
- Multi-touch attribution models that include influencer touchpoints
- Post-view conversions (saw content, purchased through another channel)
- Brand search lift during and after campaign (increased branded search)

**Indirect value (calculated):**
- Content assets: Estimate production cost if you had created equivalent content in-house
- Social proof: Testimonials and endorsements used on website, ads, or sales collateral
- SEO value: Backlinks from blog or YouTube content (estimate link value)
- Earned media: Organic shares, reposts, and coverage generated by the campaign

### ROI Calculation Example

```
Campaign: Product Launch with 10 Micro-Influencers

Investment:
- Creator fees: 10 x $2,000 = $20,000
- Product costs: 10 x $150 = $1,500
- Agency fee: $5,000
- Internal time: 40 hours x $75 = $3,000
- Paid boost: $5,000
Total Investment: $34,500

Direct Revenue:
- UTM-tracked sales: $28,000
- Promo code sales: $15,000
- Estimated overlap (people who clicked UTM AND used code): -$5,000
Total Direct Revenue: $38,000

Additional Value:
- 30 content assets (est. production value: $15,000)
- 3 testimonials used on website (est. value: $3,000)
- Brand search volume increase: 25% (est. revenue impact: $8,000)

Direct ROI: ($38,000 - $34,500) / $34,500 x 100 = 10.1%
Total Estimated ROI: ($64,000 - $34,500) / $34,500 x 100 = 85.5%
```

## CPE Benchmarks by Platform and Tier

### Cost Per Engagement (CPE) = Total Cost / Total Engagements

| Platform | Nano (1K-10K) | Micro (10K-100K) | Mid (100K-500K) | Macro (500K-1M) |
|----------|--------------|------------------|-----------------|-----------------|
| Instagram Post | $0.05-0.15 | $0.10-0.30 | $0.25-0.75 | $0.50-1.50 |
| Instagram Reel | $0.03-0.10 | $0.08-0.25 | $0.20-0.60 | $0.40-1.20 |
| TikTok | $0.02-0.08 | $0.05-0.15 | $0.10-0.40 | $0.25-0.80 |
| YouTube | $0.05-0.20 | $0.15-0.50 | $0.30-1.00 | $0.50-2.00 |
| LinkedIn | $0.20-0.50 | $0.50-1.50 | $1.00-3.00 | $2.00-5.00 |
| Twitter/X | $0.05-0.15 | $0.10-0.30 | $0.20-0.60 | $0.40-1.00 |

**Note:** These are directional benchmarks. Actual CPE varies significantly by industry, content quality, audience fit, and campaign type. Use as reference points, not absolutes.

### Cost Per Click (CPC) Benchmarks

| Platform | Typical CPC from Influencer Content |
|----------|-------------------------------------|
| Instagram | $0.50-2.00 |
| TikTok | $0.30-1.50 |
| YouTube | $0.80-3.00 |
| LinkedIn | $2.00-8.00 |

### Cost Per Acquisition (CPA) Benchmarks

Highly variable by industry and product price point:
- E-commerce (low ticket, $20-50 product): $15-50 CPA
- SaaS (free trial): $30-100 CPA
- SaaS (paid): $100-500 CPA
- Services (lead gen): $50-200 CPA

## Attribution Challenges with Influencer Marketing

### The Dark Funnel Problem
Much of influencer marketing's impact is invisible to tracking:
- Someone sees a TikTok, remembers the brand, and Googles it days later (attributed to organic search)
- Someone sees a recommendation, tells a friend, and the friend signs up (attributed to direct)
- Someone sees multiple creator recommendations over months, building trust until they're ready to buy (attributed to the last touch)

### How to Account for It
1. **Multi-touch attribution**: Use a model that gives credit to influencer touchpoints, not just last click.
2. **Brand search lift**: Monitor branded search volume during and after campaigns. A spike in "[brand name]" searches during an influencer campaign is a signal.
3. **Post-purchase surveys**: Ask new customers "How did you hear about us?" Include influencer/creator as an option.
4. **Incrementality testing**: Run influencer campaigns in specific geographic regions and compare conversion rates vs. control regions.
5. **Correlation analysis**: Plot influencer campaign activity against overall conversion trends. Look for lifts that align with campaign timing.

### What NOT to Do
- Don't attribute zero value to influencer campaigns just because last-click attribution shows low direct conversions.
- Don't inflate ROI with dubious Earned Media Value (EMV) calculations to make numbers look good.
- Do present both tracked and estimated value separately, with clear methodology notes.

## Reporting Template

### Campaign Summary Report

**Campaign Overview:**
- Campaign name and dates
- Campaign goal and success criteria
- Number of creators involved (by tier)
- Total investment

**Performance Summary:**

| Metric | Target | Actual | vs. Target |
|--------|--------|--------|-----------|
| Reach | ___ | ___ | ___% |
| Impressions | ___ | ___ | ___% |
| Engagement Rate | ___% | ___% | ___% |
| Clicks | ___ | ___ | ___% |
| Conversions | ___ | ___ | ___% |
| Revenue | $___ | $___ | ___% |
| ROI | ___% | ___% | ___% |

**Efficiency Metrics:**

| Metric | Value |
|--------|-------|
| CPM (Cost per 1,000 impressions) | $___ |
| CPE (Cost per engagement) | $___ |
| CPC (Cost per click) | $___ |
| CPA (Cost per acquisition) | $___ |

**Top Performing Creators:**

| Creator | Tier | Content Type | Reach | Engagement Rate | Conversions | ROI |
|---------|------|-------------|-------|----------------|-------------|-----|
| [Name] | [Tier] | [Type] | ___ | ___% | ___ | ___% |

**Content Performance:**
- Best performing content type (Reel, TikTok, YouTube, static post)
- Best performing platform
- Best performing message or theme
- Content assets generated and repurpose plan

**Learnings and Recommendations:**
1. What worked and should be repeated
2. What didn't work and should be changed
3. Recommended influencer mix for next campaign
4. Budget recommendation for next campaign

## Campaign Performance Comparison Framework

When comparing multiple influencer campaigns or influencers against each other, normalize the data:

### Normalize by Investment
- **Revenue per $1,000 invested**: Enables comparison across different budget sizes.
- **Engagements per $1,000 invested**: Compares efficiency across tiers and platforms.

### Normalize by Reach
- **Conversion rate per 1,000 reached**: Compares quality of engagement across audiences.
- **Revenue per 1,000 impressions (RPM)**: Industry-standard ad metric applied to influencer.

### Comparison Table Template

| Creator / Campaign | Investment | Reach | Eng. Rate | Clicks | Conv. | Revenue | Rev/$1K Invested | CPE | CPA |
|-------------------|-----------|-------|-----------|--------|-------|---------|-----------------|-----|-----|
| Creator A | $2,000 | 45K | 4.2% | 890 | 23 | $3,400 | $1,700 | $1.06 | $87 |
| Creator B | $3,500 | 120K | 2.1% | 1,200 | 18 | $2,700 | $771 | $1.39 | $194 |
| Creator C | $1,500 | 22K | 5.8% | 440 | 31 | $4,600 | $3,067 | $1.17 | $48 |

**Insight from this example:** Creator C delivers the best ROI despite the lowest reach. Creator A is the best balance. Creator B has reach but poor conversion — possible audience mismatch.

## Optimizing Influencer Mix

Based on performance data, optimize your influencer strategy:

### By Tier
- If nano/micro consistently outperform macro on CPE and CPA: shift budget down-tier and increase quantity.
- If macro drives measurable brand search lift: maintain macro for awareness, use micro for conversion.
- Common optimal mix: 60% micro, 25% mid-tier, 15% macro (by budget).

### By Platform
- Compare CPE and CPA across platforms. Reallocate to highest-performing platforms.
- Consider platform role: TikTok for discovery, YouTube for depth, Instagram for lifestyle, LinkedIn for B2B.

### By Content Type
- Compare performance of reviews vs. tutorials vs. unboxings vs. lifestyle integrations.
- Double down on content formats that drive the highest engagement and conversion.

### By Campaign Timing
- Analyze performance by day of week, time of year, and campaign duration.
- Identify optimal launch windows and campaign lengths.

## Quality Gate

Before delivering an influencer ROI report or measurement framework:

- [ ] Campaign goals and success metrics were defined before the campaign launched
- [ ] All creators had tracking mechanisms in place (UTMs, promo codes, affiliate links, or dedicated landing pages)
- [ ] Total investment includes all costs (creator fees, product, agency, internal time, paid amplification)
- [ ] Both direct (tracked) and indirect (estimated) value are reported — clearly separated
- [ ] CPE, CPC, and CPA are calculated and compared against benchmarks
- [ ] Top-performing and underperforming creators are identified with analysis of why
- [ ] Attribution limitations are acknowledged (dark funnel, multi-touch, view-through)
- [ ] The report includes actionable recommendations for future campaigns
- [ ] Comparisons are normalized (per $1K invested, per 1K reached) for fair comparison
- [ ] Content assets and indirect value are inventoried and valued
