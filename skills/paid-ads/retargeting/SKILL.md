---
name: retargeting
description: Design retargeting strategies across platforms to re-engage website visitors and customers. Use when building remarketing campaigns.
origin: ECM
---

# Retargeting Strategy

## When to Activate

Use this skill when:
- Building remarketing campaigns across any ad platform
- Segmenting retargeting audiences by behavior and intent
- Designing sequential retargeting (story-based ad journeys)
- Setting up dynamic retargeting for e-commerce
- Determining frequency caps and retargeting windows
- Planning cross-platform retargeting strategies
- Recovering abandoned carts or incomplete signups

## First Questions

Before building retargeting campaigns, clarify:
1. What tracking is in place? (Pixels, CAPI, tag manager, cookie consent)
2. What is the monthly website traffic? (Determines retargeting audience size)
3. What is the conversion funnel? (What pages/actions define intent levels?)
4. What platforms will retargeting run on? (Meta, Google, LinkedIn, programmatic)
5. What is the product consideration cycle? (Hours, days, weeks, months)
6. Is this B2B or B2C? (Affects window lengths and messaging)
7. What creative assets are available for retargeting ads?
8. Is there a product catalog for dynamic retargeting?

## Core Rules

1. **Retargeting is not stalking.** Just because someone visited your site doesn't mean they want to see your ad 50 times. Respect frequency limits.
2. **Segment by intent, not just visit.** Someone who visited your pricing page has different intent than someone who read a blog post. Treat them differently.
3. **Recency matters enormously.** Someone who visited yesterday is 10x more likely to convert than someone who visited 30 days ago.
4. **Exclusions are as important as inclusions.** Always exclude people who already converted. Never waste budget retargeting customers for the product they already bought.
5. **Sequential messaging beats repetitive messaging.** Tell a story across ads instead of showing the same ad repeatedly.
6. **Retargeting amplifies what prospecting starts.** It's not a standalone strategy — it depends on traffic flowing into the funnel.
7. **Dynamic retargeting for e-commerce is table stakes.** If you sell products online and aren't using dynamic retargeting, you're leaving revenue on the table.

## Retargeting Audience Segmentation

### By Page Visited

| Audience | Definition | Intent Level | Message Strategy |
|----------|-----------|-------------|------------------|
| Homepage visitors | Visited homepage only | Low | Brand story, value proposition, content offer |
| Category/product page | Viewed specific products or categories | Medium | Product benefits, social proof, comparison content |
| Pricing page visitors | Visited pricing/plans page | High | Overcome objections, demo offer, trial extension |
| Cart abandoners | Added to cart, didn't purchase | Very High | Cart reminder, urgency, incentive |
| Checkout abandoners | Started checkout, didn't complete | Highest | Payment trust signals, support offer, small discount |
| Blog/content visitors | Read articles or resources | Low-Medium | Deeper content, lead magnet, newsletter |
| Case study/testimonial viewers | Read social proof pages | Medium-High | Related case studies, demo CTA |

### By Time on Site / Engagement Depth

| Behavior | Segment | Strategy |
|----------|---------|----------|
| Bounced (under 10 seconds) | Low intent — exclude or use awareness messaging | Brand intro or exclude from retargeting |
| 30+ seconds on site | Moderate interest | Value proposition, content offer |
| 2+ minutes on site | High interest | Product detail, social proof, demo |
| Visited 3+ pages | Active research | Comparison content, free trial |
| Returned visitor (2+ sessions) | Strong interest | Direct conversion offer |

### By Actions Taken

| Action | Segment | Strategy |
|--------|---------|----------|
| Downloaded lead magnet | Marketing qualified | Nurture sequence, case studies |
| Watched demo video | Sales interest | Book a call, free trial |
| Started free trial | Active evaluation | Feature education, success stories |
| Submitted form but didn't convert | Hot lead | Follow-up, objection handling |
| Previous purchaser | Customer | Cross-sell, upsell, loyalty |

## Retargeting Windows

The retargeting window is how long after a website visit someone remains in your audience. Shorter windows = hotter audiences. Longer windows = cooler but larger audiences.

### Window Strategy by Consideration Cycle

| Product Type | Consideration Cycle | Recommended Windows |
|-------------|-------------------|-------------------|
| Impulse purchase (B2C) | Hours to 2 days | 1, 3, 7 days |
| Moderate B2C (fashion, electronics) | 3-14 days | 3, 7, 14, 30 days |
| High-value B2C (furniture, travel) | 14-60 days | 7, 14, 30, 60 days |
| B2B SaaS (low-ticket) | 7-30 days | 7, 14, 30, 60 days |
| B2B enterprise | 30-180 days | 14, 30, 60, 90, 180 days |

### Layered Window Strategy

Create segments for each window and adjust messaging and bids:

```
Window 1: 1-3 days (hottest)
  Bid: Highest
  Message: Direct conversion CTA, cart reminder, urgency
  Frequency: Higher tolerance (4-5 impressions/day)

Window 2: 4-7 days
  Bid: High
  Message: Social proof, objection handling
  Frequency: Moderate (2-3 impressions/day)

Window 3: 8-14 days
  Bid: Medium
  Message: Value reinforcement, new angle
  Frequency: Moderate (1-2 impressions/day)

Window 4: 15-30 days
  Bid: Lower
  Message: Re-engagement, new content, special offer
  Frequency: Low (1 impression/day)

Window 5: 31-90 days
  Bid: Lowest
  Message: Brand reminder, major offer, new product
  Frequency: Very low (3-5 impressions/week)
```

**Exclude shorter windows from longer ones.** Someone in the 1-3 day window should NOT also be in the 4-7 day audience. This prevents overlap and allows differentiated messaging.

## Frequency Capping

### Why Frequency Capping Matters
- Without caps, your most engaged visitors see your ads hundreds of times
- Ad fatigue drives negative brand sentiment — not just wasted spend
- Diminishing returns kick in after 3-7 impressions for most retargeting

### Recommended Frequency Caps

| Audience Temperature | Daily Cap | Weekly Cap |
|---------------------|-----------|------------|
| Cart/checkout abandoners | 3-5 | 15-20 |
| Pricing page visitors | 2-3 | 10-15 |
| Product page visitors | 1-2 | 7-10 |
| Blog/content visitors | 1 | 5-7 |
| General site visitors | 1 | 4-5 |

### Platform-Specific Frequency Settings
- **Google Display:** Set frequency caps at ad group or campaign level
- **Meta:** No direct frequency cap — control via budget and audience size
- **LinkedIn:** Campaign-level frequency cap available
- **Programmatic (DV360, The Trade Desk):** Granular frequency controls available

## Sequential Retargeting (Story-Based)

Instead of showing the same ad repeatedly, tell a story across multiple ad exposures.

### Sequential Retargeting Framework

```
VISIT: Person visits website
        |
        v
AD 1 (Day 1-3): THE REMINDER
  Message: "Still thinking about [product/topic]?"
  Creative: Product image/benefit + soft CTA
  Goal: Bring them back to the site
        |
        v
AD 2 (Day 4-7): THE PROOF
  Message: "See how [customer] achieved [result] with [product]"
  Creative: Testimonial, case study, or review
  Goal: Build trust and credibility
        |
        v
AD 3 (Day 8-14): THE OBJECTION HANDLER
  Message: "Worried about [common objection]? Here's why..."
  Creative: FAQ, guarantee, comparison
  Goal: Remove barriers to purchase
        |
        v
AD 4 (Day 15-21): THE OFFER
  Message: "Special offer: [discount/bonus/trial] — expires [date]"
  Creative: Clear offer with urgency
  Goal: Convert with incentive
        |
        v
AD 5 (Day 22-30): THE LAST CHANCE
  Message: "Last chance: [offer summary]"
  Creative: Final push with strongest CTA
  Goal: Final conversion attempt
        |
        v
EXIT: Move to long-term nurture or suppress
```

### Sequential Retargeting Rules
- Each step should only show AFTER the previous step has been seen (or after a time delay)
- If someone converts at any stage, immediately exclude from remaining sequence
- The sequence should progress from soft to hard sell
- Not all platforms support true sequential delivery — time-based windows are the closest approximation

## Cross-Platform Retargeting

### Strategy
Run retargeting across multiple platforms to maintain visibility without exhausting any single platform's audience.

```
Platform Mix Example:
  Meta (Facebook/Instagram): Primary retargeting — broadest reach, best dynamic ads
  Google Display: Secondary retargeting — reach across millions of websites
  YouTube: Video retargeting for consideration phase
  LinkedIn: B2B decision-maker retargeting
  Email: Direct retargeting via behavioral triggers (cart abandonment, browse abandonment)
```

### Cross-Platform Rules
- **Coordinate frequency across platforms.** Total impressions across all platforms matter.
- **Differentiate creative by platform.** The same ad on Facebook, Google, and LinkedIn feels like stalking. Adapt creative to each platform's native format.
- **Unified measurement.** Use a central analytics tool (GA4, multi-touch attribution) to measure cross-platform impact.
- **Budget allocation:** Put more retargeting budget on platforms where your audience spends more time.

## Dynamic Retargeting for E-Commerce

Dynamic retargeting shows each person ads featuring the specific products they viewed on your website.

### Setup Requirements
1. **Product catalog/feed** connected to the ad platform
2. **Pixel/tracking** that captures product view events with product IDs
3. **Creative template** that dynamically pulls product images, names, and prices

### Dynamic Retargeting Best Practices
- **Show the specific products viewed** — not random catalog items
- **Add social proof:** "Bestseller" badges, star ratings, review counts
- **Show price and any discount** — clarity drives clicks
- **Include "You might also like"** recommendations alongside viewed products
- **Carousel format works best** — show 3-5 products per ad
- **Update the catalog daily** — out-of-stock products in ads destroy trust
- **Exclude purchased products** — do not retarget someone with a product they already bought

### Dynamic Retargeting by Funnel Stage

| Stage | Products Shown | Message | Window |
|-------|---------------|---------|--------|
| Product page viewers | Exact products viewed | "Still looking at these?" | 1-14 days |
| Category browsers | Category bestsellers | "Popular in [category]" | 3-14 days |
| Cart abandoners | Cart contents | "Complete your order" + urgency | 1-7 days |
| Past purchasers | Complementary products | "Goes great with your [purchase]" | 7-60 days |

## Exclusion Audiences

### Must-Exclude Audiences
1. **Converted users** — People who completed the target action (purchase, signup, demo)
2. **Current customers** (from retargeting campaigns aimed at prospects)
3. **Employees** of your own company
4. **Bounced visitors** (under 5-10 seconds on site — likely accidental clicks)
5. **Users who've already seen the sequential ad series completion** (don't restart)

### Smart Exclusions
- Exclude people who visited the "thank you" or "order confirmation" page
- Exclude existing subscribers from lead magnet retargeting
- For sequential campaigns: exclude people who've progressed past each stage
- Exclude support/FAQ page visitors from sales retargeting (they may be existing customers with issues)

## Burn Pixels

A burn pixel fires when someone completes the desired action (conversion). It's used to immediately remove them from retargeting audiences.

### How Burn Pixels Work
1. Place a tracking pixel on the conversion confirmation page (thank you page, order confirmation)
2. When the pixel fires, the user is added to a "converted" audience
3. All retargeting campaigns exclude the "converted" audience
4. Result: no more ads for products they already bought

### Burn Pixel Best Practices
- Set burn pixels on EVERY conversion endpoint
- For multi-product businesses: burn by product, not just globally (you still want to cross-sell)
- Update burn audiences in real time where possible
- Test burn pixels regularly — a broken burn pixel wastes budget fast

## Retargeting Creative Strategy

### Creative by Funnel Position

| Funnel Position | Creative Focus | Examples |
|----------------|----------------|---------|
| Awareness visitors | Brand story, value prop | "Here's what we do and why it matters" |
| Consideration visitors | Social proof, education | Testimonials, how-it-works, comparisons |
| Intent visitors | Conversion drivers | Offers, urgency, guarantees, demos |
| Cart abandoners | Recovery | Product images, "forgot something?", free shipping |
| Past customers | Retention/upsell | New arrivals, loyalty rewards, cross-sell |

### Creative Refresh Cadence
- Refresh retargeting creative every 2-4 weeks
- Monitor frequency — when frequency exceeds 5-7, creative fatigue is likely
- Rotate 3-5 creative variations at all times
- Test new angles, not just new images

## Retargeting Funnel Design

### Full-Funnel Retargeting Architecture

```
PROSPECTING (Top of Funnel)
  Platforms: Meta, Google Search, YouTube, LinkedIn
  Goal: Drive qualified traffic to website
  Budget: 60-70% of total ad spend
        |
        v
RETARGETING — Awareness Level (Middle of Funnel)
  Audience: All site visitors (exclude bouncers and converters)
  Window: 1-30 days
  Platforms: Meta, Google Display
  Message: Brand value, educational content, social proof
  Budget: 10-15% of total ad spend
        |
        v
RETARGETING — Intent Level (Bottom of Funnel)
  Audience: Pricing/product page visitors, cart abandoners
  Window: 1-14 days
  Platforms: Meta, Google Display, Email
  Message: Direct offers, urgency, objection handling
  Budget: 10-15% of total ad spend
        |
        v
RETARGETING — Customer Level (Post-Purchase)
  Audience: Existing customers
  Window: 14-90 days post-purchase
  Platforms: Meta, Email
  Message: Cross-sell, upsell, loyalty, reviews
  Budget: 5-10% of total ad spend
```

## Quality Gate

Before launching retargeting campaigns, verify:
- [ ] Are tracking pixels installed and firing correctly on all key pages?
- [ ] Are burn/exclusion pixels set on conversion pages?
- [ ] Are retargeting audiences segmented by intent level (not just "all visitors")?
- [ ] Are converted users excluded from all prospecting and retargeting campaigns?
- [ ] Are frequency caps set to prevent ad fatigue?
- [ ] Is the retargeting window appropriate for the product's consideration cycle?
- [ ] Is creative differentiated from prospecting ads (not the same ad shown again)?
- [ ] For dynamic retargeting: is the product catalog connected and up to date?
- [ ] Is there a sequential messaging plan (not just the same ad on repeat)?
- [ ] Are retargeting audiences large enough to deliver? (Minimum ~1,000 users per segment)
- [ ] Is cross-platform frequency being considered in the overall plan?
