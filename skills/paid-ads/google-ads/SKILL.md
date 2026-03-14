---
name: google-ads
description: Google Ads campaign strategy, structure, and optimization across Search, Display, YouTube, Shopping, and Performance Max. Use when planning or optimizing Google Ads campaigns.
origin: ECM
---

# Google Ads Strategy

## When to Activate

Use this skill when:
- Setting up a new Google Ads account or campaign
- Choosing campaign types and structures
- Writing ad copy (RSAs, headlines, descriptions)
- Optimizing keyword strategy and match types
- Setting bidding strategies and budgets
- Improving Quality Score
- Setting up Performance Max or Shopping campaigns
- Troubleshooting underperforming campaigns

## First Questions

Before building Google Ads campaigns, clarify:
1. What is the business goal? (Leads, sales, traffic, brand awareness)
2. What is the monthly budget? (Determines viable campaign types and keyword competitiveness)
3. What is the target CPA or ROAS? (Profitability benchmarks)
4. Who is the target audience? (Demographics, intent, geography)
5. What is the product/service and its unique selling proposition?
6. Is conversion tracking properly set up? (Google Tag, GA4, offline conversions)
7. What competitors are advertising on the same keywords?
8. Is this a new account or existing? (Historical data affects strategy)

## Core Rules

1. **Conversion tracking before campaigns.** Never spend money without accurate conversion tracking. This is non-negotiable.
2. **Start with Search. Expand to other types.** Search captures existing demand. Other campaign types generate demand.
3. **Match type strategy beats keyword volume.** A tight keyword strategy with the right match types outperforms thousands of broad keywords.
4. **Quality Score is a tax or a discount.** High Quality Score = lower CPC. Low Quality Score = higher CPC for the same position.
5. **Negative keywords are as important as positive keywords.** What you exclude determines ROI as much as what you target.
6. **Let smart bidding work — but set it up right.** Automated bidding needs 30+ conversions per month per campaign to optimize effectively.
7. **Test ad copy continuously.** Ad fatigue is real. Refresh creatives every 4-6 weeks.
8. **Structure determines success.** Campaign and ad group structure is the foundation everything else builds on.

## Campaign Types and When to Use Each

| Campaign Type | Best For | Minimum Budget | Key Metric |
|--------------|----------|----------------|------------|
| Search | Capturing existing demand, high-intent keywords | $1,000/mo | CPA, conversion rate |
| Performance Max | Full-funnel, e-commerce, lead gen with assets | $3,000/mo | ROAS, conversions |
| Shopping (Standard) | E-commerce product listing | $1,500/mo | ROAS, impression share |
| Display | Retargeting, brand awareness | $1,000/mo | CPM, view-through conversions |
| YouTube (Video) | Brand awareness, consideration | $2,000/mo | CPV, view rate, conversions |
| Demand Gen | Social-style discovery ads | $2,000/mo | CPA, engagement |
| App | App installs and engagement | $2,000/mo | CPI, in-app actions |

### Campaign Priority Order (Limited Budget)
1. **Brand Search** — Protect your brand terms. Cheap, high-converting.
2. **High-intent non-brand Search** — Keywords showing purchase/action intent.
3. **Shopping / Performance Max** — If e-commerce. Capture product-level demand.
4. **Retargeting (Display)** — Re-engage website visitors. High ROI.
5. **Broad non-brand Search** — Expand keyword coverage.
6. **YouTube / Demand Gen** — Upper funnel. Requires budget for testing.

## Account Structure Best Practices

### Modern Structure (Post-Smart Bidding)
```
Account
  └── Campaign 1: Brand Search
       └── Ad Group: Brand terms
  └── Campaign 2: Non-Brand Search — High Intent
       └── Ad Group: [Product/service category 1]
       └── Ad Group: [Product/service category 2]
  └── Campaign 3: Non-Brand Search — Research Intent
       └── Ad Group: [Informational queries]
  └── Campaign 4: Performance Max / Shopping
       └── Asset Groups by product category
  └── Campaign 5: Retargeting (Display)
       └── Ad Group: Website visitors
       └── Ad Group: Cart abandoners
```

### Structure Principles
- **One theme per ad group.** Keywords in an ad group should share intent and be addressable by the same ad copy.
- **Separate brand and non-brand.** Brand campaigns have fundamentally different economics.
- **Separate by intent level.** High-intent keywords get higher bids and separate budgets from research-phase keywords.
- **Don't over-segment.** With smart bidding, Google needs data volume. Too many campaigns splits data too thin.
- **15-25 keywords per ad group maximum.** If you have more, split into additional ad groups.

## Keyword Match Types Strategy

### Match Type Definitions
| Match Type | Syntax | What It Matches | Use Case |
|-----------|--------|----------------|----------|
| Exact | [running shoes] | Close variants of the exact term | High-intent, controlled targeting |
| Phrase | "running shoes" | Queries containing the phrase meaning | Moderate control with discovery |
| Broad | running shoes | Related queries, synonyms, implied intent | Discovery with smart bidding |

### Match Type Strategy
- **Start with Exact + Phrase** for new accounts (more control, less waste)
- **Add Broad match** only when using smart bidding with 30+ conversions/month
- **Layer negative keywords aggressively** with Broad match
- **Review search terms report weekly** for the first month, then biweekly
- **Graduate keywords:** Start exact → prove performance → test as phrase → test as broad

### Negative Keyword Strategy
- Build a negative keyword list BEFORE launching
- Common negatives: free, cheap, jobs, salary, DIY, how to (unless relevant), reviews (if selling, not reviewing)
- Create shared negative keyword lists for account-wide exclusions
- Review search terms weekly and add negatives from irrelevant queries
- Use negative keyword match types: exact negative for precision, phrase negative for broader exclusion

## RSA (Responsive Search Ads) Strategy

Google requires RSAs (no more expanded text ads). Make them work with disciplined headline and description writing.

### Headline Strategy (Up to 15 Headlines)
| Headline Type | Count | Purpose | Example |
|--------------|-------|---------|---------|
| Keyword-focused | 3-4 | Relevance / Quality Score | "Premium Running Shoes" |
| Benefit-focused | 3-4 | Value proposition | "Free Shipping on All Orders" |
| CTA-focused | 2-3 | Drive action | "Shop Now — 20% Off Today" |
| Social proof | 2 | Trust | "Rated 4.9/5 by 10,000+ Customers" |
| Differentiator | 2 | Stand out | "Same-Day Delivery Available" |
| Pinned headlines | 2-3 | Control | Pin your best headline to Position 1 |

### Description Strategy (Up to 4 Descriptions)
- Description 1: Core value proposition + primary keyword
- Description 2: Secondary benefits + CTA
- Description 3: Social proof or guarantee
- Description 4: Urgency or unique differentiator

### RSA Best Practices
- Pin your strongest headline to Position 1 and a CTA headline to Position 3
- Make each headline distinct (don't write 5 variations of the same point)
- Include the primary keyword in at least 3 headlines
- Use all 15 headline slots and all 4 description slots
- Test regularly — pause underperforming assets (check "Combinations" report)
- Use ad strength as a guide but don't optimize solely for "Excellent" — performance matters more

## Quality Score Optimization

Quality Score (1-10) is calculated per keyword and affects both ad rank and CPC.

### Components
1. **Expected CTR** — How likely your ad is to be clicked (historical performance)
2. **Ad Relevance** — How closely your ad matches the keyword intent
3. **Landing Page Experience** — Speed, relevance, mobile-friendliness, original content

### Improving Quality Score

**Expected CTR:**
- Write compelling headlines with the keyword included
- Use emotional or benefit-driven language
- Test multiple RSA variations
- Add ad extensions/assets (improve visual footprint = more clicks)

**Ad Relevance:**
- Group tightly themed keywords into ad groups
- Include the exact keyword in at least 2 headlines
- Match ad copy language to the search intent

**Landing Page Experience:**
- Page loads in under 3 seconds
- Content matches the ad promise and keyword intent
- Clear CTA above the fold
- Mobile-responsive design
- Original, useful content (not just a form)
- HTTPS required

### Quality Score Impact on CPC
| Quality Score | CPC Impact |
|--------------|------------|
| 10 | ~50% discount |
| 7 | Baseline (neutral) |
| 5 | ~25% premium |
| 3 | ~67% premium |
| 1 | ~400% premium |

## Bidding Strategies

| Strategy | When to Use | Minimum Data Needed |
|----------|------------|-------------------|
| Manual CPC | New accounts, learning phase, tight control | None |
| Enhanced CPC | Transitioning from manual to automated | 15+ conversions/month |
| Maximize Clicks | Traffic-focused goals, budget constrained | None |
| Maximize Conversions | Lead gen, enough conversion volume | 30+ conversions/month |
| Target CPA | Mature campaigns with consistent CPA | 30+ conversions/month, 30+ day history |
| Target ROAS | E-commerce with revenue tracking | 50+ conversions/month |
| Maximize Conv. Value | E-commerce, varying product values | 30+ conversions/month |

### Bidding Rules
- Start with Manual or Maximize Clicks to gather data
- Switch to smart bidding only after 30+ conversions per month per campaign
- Set realistic target CPA/ROAS — start at your actual CPA/ROAS, then tighten gradually
- Don't change bidding strategies more than once every 2-3 weeks (learning period)
- If performance drops after switching, give it 2-3 weeks before reverting

## Ad Extensions/Assets

Extensions increase ad real estate, CTR, and Quality Score. Use all that apply.

| Extension | Purpose | Priority |
|-----------|---------|----------|
| Sitelinks | Link to specific pages (product, pricing, about) | Must-have |
| Callouts | Highlight key benefits ("Free Shipping", "24/7 Support") | Must-have |
| Structured Snippets | List features, types, or categories | Must-have |
| Call | Phone number for mobile clicks | High (if phone calls matter) |
| Location | Show business address | High (for local businesses) |
| Price | Show pricing for products/services | High (e-commerce/services) |
| Image | Visual alongside text ad | High (improves CTR) |
| Lead Form | Capture leads directly in the ad | Medium (B2B lead gen) |
| Promotion | Highlight sales or offers | Medium (seasonal) |

## Performance Max Setup

Performance Max campaigns run across all Google inventory (Search, Display, YouTube, Gmail, Discover, Maps).

### When to Use PMax
- E-commerce with a product feed
- Lead gen with strong conversion tracking (including offline conversion imports)
- When you have strong creative assets (images, video, copy)
- When you have enough budget for Google to test across channels ($100+/day)

### PMax Best Practices
- Create 3-5 asset groups organized by product category or audience
- Provide maximum creative assets: 20 images, 5 videos, 5 headlines, 5 descriptions, 5 long headlines
- Use audience signals (not targeting — signals) to guide Google's AI
- Exclude brand terms if you have a separate brand Search campaign (use account-level negative keywords)
- Monitor search term insights (limited but available)
- Allow 4-6 weeks for the learning phase before judging results

## Google Shopping Feed Optimization

For e-commerce, your product feed is the foundation of Shopping and PMax campaigns.

### Feed Optimization Priorities
1. **Product title:** Include brand, product type, key attributes (color, size, material). Front-load the most important keywords.
2. **Product description:** Detailed, keyword-rich, 500-1000 characters.
3. **Product images:** High-quality, white background, multiple angles.
4. **Price competitiveness:** Google factors price into showing your ads.
5. **GTIN/MPN:** Always include when available — required for known products.
6. **Product categories:** Use Google's product taxonomy accurately.
7. **Custom labels:** Tag products by margin, bestseller status, seasonality for campaign segmentation.

## Campaign Optimization Checklist

### Weekly
- [ ] Review search terms and add negative keywords
- [ ] Check campaign budget utilization (underspending or hitting cap too early?)
- [ ] Monitor conversion tracking (any drops or anomalies?)
- [ ] Review ad strength and asset performance
- [ ] Check device performance (mobile vs desktop — adjust if needed)

### Biweekly
- [ ] Review Quality Score trends
- [ ] Analyze ad group performance (pause underperformers, increase investment in winners)
- [ ] Check audience performance (demographics, in-market segments)
- [ ] Review geographic performance
- [ ] Test new ad copy variations

### Monthly
- [ ] Review bidding strategy performance (is target CPA/ROAS being met?)
- [ ] Analyze conversion path and attribution
- [ ] Competitor analysis (Auction Insights report)
- [ ] Budget reallocation based on campaign performance
- [ ] Test new keyword opportunities

## Quality Gate

Before launching a Google Ads campaign, verify:
- [ ] Is conversion tracking set up and verified with test conversions?
- [ ] Is the account structure logical? (Brand separated, themes grouped)
- [ ] Are negative keywords in place before the first click?
- [ ] Does every ad group have at least one RSA with 15 headlines and 4 descriptions?
- [ ] Are all relevant ad extensions/assets configured?
- [ ] Is the bidding strategy appropriate for the data volume?
- [ ] Is the landing page fast, relevant, and mobile-friendly?
- [ ] Is the daily budget set to sustain at least 10-20 clicks per day per campaign?
- [ ] Is there a plan for weekly search term reviews?
- [ ] Are geographic and language targeting set correctly?
