---
name: meta-ads
description: Meta (Facebook/Instagram) advertising strategy, audience targeting, creative formats, and campaign optimization. Use when running Meta ad campaigns.
origin: ECM
---

# Meta Ads Strategy

## When to Activate

Use this skill when:
- Setting up Facebook or Instagram ad campaigns
- Choosing campaign structures and objectives
- Building audiences (custom, lookalike, interest-based, broad)
- Creating ad creative (image, video, carousel, collection)
- Writing ad copy for Meta platforms
- Scaling campaigns that are performing well
- Troubleshooting underperforming Meta campaigns

## First Questions

Before building Meta campaigns, clarify:
1. What is the business objective? (Sales, leads, traffic, app installs, awareness)
2. What is the monthly ad budget? (Determines audience size and testing capacity)
3. What is the target CPA or ROAS?
4. Is the Meta Pixel and Conversions API (CAPI) properly configured?
5. Who is the target customer? (Demographics, interests, behaviors, pain points)
6. What creative assets are available? (Images, videos, UGC, testimonials)
7. What is the offer? (Product, lead magnet, free trial, discount, content)
8. Is this a new ad account or established? (Matters for audience data and pixel maturity)

## Core Rules

1. **Creative is the new targeting.** With audience targeting becoming broader, your ad creative does the targeting. Make creative for specific audiences.
2. **Pixel and CAPI first.** Accurate data = accurate optimization. Set up both server-side and browser-side tracking.
3. **Test creative, not audiences.** In the Advantage+ era, spend 80% of testing budget on creative, 20% on audience variations.
4. **Broad audiences often beat narrow ones.** Meta's AI has gotten better at finding buyers. Let it work with fewer constraints.
5. **Video outperforms static in most cases.** But test — some products and audiences prefer static image or carousel.
6. **The first 3 seconds of video are everything.** If the hook fails, the ad fails.
7. **Don't judge ads too quickly.** Allow at least 3-5 days and 50+ results per ad set before making changes.
8. **Consolidate campaigns.** Fewer campaigns with more budget each outperform many small campaigns with thin budgets.

## Campaign Structure

### CBO vs ABO
| Approach | How It Works | When to Use |
|----------|-------------|-------------|
| Campaign Budget Optimization (CBO) | Budget set at campaign level, Meta distributes across ad sets | Scaling, established campaigns, 3+ ad sets |
| Ad Set Budget Optimization (ABO) | Budget set per ad set, you control allocation | Testing, new audiences, controlled experiments |

### Recommended Structure

```
CAMPAIGN: [Objective] — [Product/Offer]
  |
  ├── Ad Set 1: [Audience A] — Broad/Lookalike
  |     ├── Ad 1: Video — Hook A
  |     ├── Ad 2: Carousel — Social proof
  |     └── Ad 3: Image — Direct offer
  |
  ├── Ad Set 2: [Audience B] — Custom Audience / Retargeting
  |     ├── Ad 1: Video — Testimonial
  |     ├── Ad 2: Image — Urgency/scarcity
  |     └── Ad 3: Carousel — Product showcase
  |
  └── Ad Set 3: [Audience C] — Advantage+ / Broad
        ├── Ad 1: UGC-style video
        ├── Ad 2: Before/after image
        └── Ad 3: Collection ad
```

### Structure Rules
- **3-6 ads per ad set.** Fewer doesn't give Meta enough to test. More splits budget too thin.
- **Don't overlap audiences.** Use audience exclusions to prevent ad sets from competing against each other.
- **Minimum $20-30/day per ad set.** Below this, Meta can't optimize effectively.
- **Separate prospecting and retargeting campaigns.** Different audiences, different messaging, different budgets.

## Advantage+ Campaigns

Advantage+ Shopping Campaigns (ASC) and Advantage+ Audience are Meta's AI-driven campaign types.

### When to Use Advantage+
- E-commerce with a product catalog
- Established pixel with 50+ purchases per week
- Strong creative library (the AI needs options)
- When manual campaigns are plateauing

### Advantage+ Best Practices
- Provide diverse creative: 10-15 ads minimum
- Include a mix of formats (video, static, carousel, UGC)
- Set a budget cap for existing customers (prevent over-spending on retargeting within ASC)
- Don't run ASC alongside manual campaigns targeting the same audience (cannibalizes)
- Allow 7+ days before evaluating performance

## Audience Types

### Custom Audiences (Retargeting)
| Source | Window | Use Case |
|--------|--------|----------|
| Website visitors | 1-180 days | Retarget engaged visitors |
| Website — specific pages | 1-180 days | Retarget pricing page visitors, cart abandoners |
| Customer list | — | Target existing customers for upsell/cross-sell |
| Video viewers | 1-365 days | Retarget people who watched 25%, 50%, 75%+ |
| Instagram/Facebook engagers | 1-365 days | Retarget social engagement |
| Lead form openers | 1-90 days | Retarget lead gen form interactions |

### Lookalike Audiences
- Based on a source audience (customer list, purchasers, high-value customers)
- 1% = closest match (most similar to source), 10% = broadest
- **Start with 1-3%.** Expand to 5-10% only if 1-3% is exhausted.
- Best source audiences: purchasers, high-LTV customers, email subscribers who've purchased
- Minimum source audience: 1,000 people (more is better)
- Update source audiences monthly

### Interest/Demographic Audiences
- Becoming less effective as Advantage+ targeting improves
- Still useful for small budgets and new accounts without pixel data
- Layer interests + demographics for refined targeting
- Use interests for prospecting in new markets or niches

### Broad Targeting
- No interest or demographic constraints — just age, gender, location
- Works best with mature pixels (1,000+ conversions) and strong creative
- Lets Meta's AI find the best audience
- Increasingly the recommended approach for scaled advertisers

## Creative Formats

### Image Ads
- **Size:** 1080x1080 (square) or 1080x1350 (portrait — more screen real estate)
- **Text overlay:** Under 20% of image area (no longer enforced but still best practice)
- **Best for:** Simple offers, clear product shots, bold statements
- **Tips:** High contrast, one focal point, readable on mobile, brand colors

### Video Ads
- **Length:** 15-30 seconds for best performance (up to 60 for complex products)
- **Format:** 9:16 (vertical) for Reels/Stories, 1:1 (square) for feed, 16:9 (landscape) for in-stream
- **Hook:** First 3 seconds must stop the scroll — text hook, visual surprise, or direct address
- **Sound:** Design for sound-off (captions required) but optimize for sound-on
- **Best for:** Storytelling, demonstrations, testimonials, UGC

### Carousel Ads
- **Slides:** 3-10 cards, each with its own image/video, headline, description, and link
- **Best for:** Multiple products, step-by-step processes, storytelling sequences, feature highlights
- **Tips:** First card is the hook. Each card should stand alone. Last card is the CTA.

### Collection Ads
- **Format:** Cover image/video + product grid from catalog
- **Opens:** Instant Experience (full-screen mobile landing page)
- **Best for:** E-commerce product discovery, lookbooks
- **Requires:** Product catalog connected to Meta

### Instant Experience (Canvas)
- **Full-screen mobile format** that loads instantly within the app
- Combine video, images, carousels, and forms in one experience
- Great for storytelling and product exploration
- Can be used as a landing page substitute (reduces friction)

## Ad Creative Best Practices

### Visual Rules
1. **Thumb-stop test:** Would this stop someone mid-scroll? If not, rethink.
2. **One clear focal point.** Cluttered images get ignored.
3. **Faces perform.** Human faces (especially making eye contact) increase engagement.
4. **Show the product in use.** Context sells better than product-on-white-background.
5. **UGC aesthetic often outperforms polished creative.** Authenticity wins on Meta.
6. **Contrast with the feed.** Stand out from organic content — but don't look like a banner ad.

### UGC-Style Creative
- Film on a phone, not a studio camera
- Creator talking directly to camera
- Real environments (home, office, outdoors)
- Genuine reactions and demonstrations
- Captions burned into the video
- "It doesn't look like an ad" is the goal

## Copy Formulas for Meta Ads

### Primary Text (Above the Image/Video)

**Problem-Agitate-Solution (PAS):**
> Tired of [problem]? You're not alone — [agitate the frustration]. That's why we built [solution]. [Benefit + CTA].

**Before-After-Bridge:**
> Before [product]: [old painful reality]. After [product]: [new desirable reality]. The bridge? [Product] — [key benefit]. [CTA]

**Social Proof Lead:**
> "I've tried everything for [problem]. [Product] is the only thing that actually worked." — [Name], verified customer. [CTA]

**Direct Offer:**
> [Benefit statement]. Get [product] for [price/offer] — [urgency element]. [CTA]

### Headline (Below the Image/Video)
- Keep it under 40 characters
- Include the core benefit or offer
- Examples: "50% Off — Today Only" / "Free Shipping Over $50" / "Try It Risk-Free"

### Copy Length
- **Short (1-3 lines):** Works for retargeting, simple offers, strong creative that does the selling
- **Medium (3-5 lines):** Works for most prospecting ads
- **Long (5-10+ lines):** Works for high-consideration products, storytelling, complex offers

## Pixel and CAPI Setup

### Meta Pixel (Browser-Side)
- Install via Google Tag Manager or directly on the site
- Fire standard events: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase
- Include event parameters: value, currency, content_id, content_type
- Test with Meta Pixel Helper browser extension

### Conversions API (Server-Side)
- Sends conversion data directly from server to Meta (bypasses browser restrictions)
- Complements pixel (does not replace it) — deduplication required
- Set up via partner integration (Shopify, WordPress plugins) or custom implementation
- Critical for iOS 14.5+ accuracy

### Event Priority (iOS 14.5+)
- Configure Aggregated Event Measurement in Events Manager
- Prioritize up to 8 events per domain
- Purchase should be #1 priority in most cases
- Order: Purchase > InitiateCheckout > AddToCart > ViewContent > Lead > PageView

## Attribution Settings

| Attribution Window | What It Means | Best For |
|-------------------|---------------|----------|
| 7-day click | Conversions within 7 days of ad click | Default, most accurate for direct response |
| 1-day click | Conversions within 1 day of ad click | Short consideration cycles, impulse buys |
| 7-day click, 1-day view | Click + view-through attribution | Better picture of full impact |
| 28-day click (legacy) | No longer available as default | — |

**Rules:**
- Start with 7-day click for most campaigns
- Use 1-day click for low-cost impulse products
- Include 1-day view to understand awareness impact (but don't optimize for it)
- Compare Meta-reported conversions with GA4 — they will never match exactly

## Scaling Strategies

### Horizontal Scaling
- Duplicate winning ad sets with new audiences
- Test winning creative in new campaigns/objectives
- Expand to new geographic markets
- Add new creative variations to winning ad sets
- Launch Advantage+ campaigns with proven creative

### Vertical Scaling
- Increase budget on winning campaigns/ad sets
- **Rule:** Increase budget by no more than 20-30% every 3 days
- Large budget jumps (50%+) reset the learning phase and can destabilize performance
- Monitor CPA closely during scaling — expect slight CPA increase (10-20%) as you scale

### When to Scale
- Ad set has exited learning phase (50+ conversions in 7 days)
- CPA is at or below target consistently for 5+ days
- Creative fatigue has not set in (frequency below 3)
- There is room in the target audience

## Creative Testing Framework

### Phase 1: Concept Test
- Test 3-5 completely different creative concepts (different angles, formats, messaging)
- Budget: equal across all concepts
- Duration: 5-7 days
- Goal: identify which CONCEPT resonates

### Phase 2: Iteration Test
- Take the winning concept and create 3-5 variations
- Vary: hook, CTA, headline, visual treatment
- Duration: 5-7 days
- Goal: find the strongest execution of the winning concept

### Phase 3: Scale
- Take the winning variation and scale budget
- Continue testing new concepts in a separate campaign (never stop testing)
- Replace fatigued creative before performance drops

### Creative Fatigue Indicators
- Frequency above 3 (average person has seen the ad 3+ times)
- CTR declining week over week
- CPA increasing without audience changes
- Ad relevance score dropping

## Campaign Optimization Playbook

### Daily
- Check for ads in learning phase (don't make changes)
- Monitor spend pacing
- Check for delivery issues or ad rejections

### Every 3-5 Days
- Review ad-level performance (pause underperformers, no new changes to winners)
- Check frequency (above 3 = creative fatigue approaching)
- Evaluate CPA/ROAS against targets

### Weekly
- Analyze audience performance (demographics, placements)
- Review creative performance across formats
- Budget reallocation from underperforming to overperforming ad sets
- Add new creative to testing campaigns

### Monthly
- Full campaign review and strategy assessment
- Creative refresh (new concepts, not just iterations)
- Audience strategy review (lookalike sources, exclusions)
- Attribution and conversion path analysis

## Quality Gate

Before launching a Meta campaign, verify:
- [ ] Is the Meta Pixel firing correctly on all key events?
- [ ] Is CAPI configured and deduplicating with pixel events?
- [ ] Is the campaign objective aligned with the actual business goal?
- [ ] Are audiences properly defined with exclusions to prevent overlap?
- [ ] Does each ad set have 3-6 creative variations?
- [ ] Is video creative captioned for sound-off viewing?
- [ ] Is the daily budget at least $20-30 per ad set?
- [ ] Is the landing page mobile-optimized and fast-loading?
- [ ] Are UTM parameters set for all ads?
- [ ] Is there a creative testing plan for the next 4 weeks?
- [ ] Has the campaign been reviewed in Preview mode across placements?
