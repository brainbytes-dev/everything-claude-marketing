---
description: Create ad copy and creative briefs for Google, Meta, LinkedIn, or TikTok campaigns. Includes copy variants, targeting suggestions, and creative direction.
---

# /ad-creative

Create ad copy variants and creative briefs for paid advertising campaigns across Google, Meta, LinkedIn, TikTok, and other platforms. Get ready-to-test copy paired with targeting recommendations and visual direction.

## What This Command Does

The `/ad-creative` command produces a complete ad creative package: multiple copy variants, headline options, creative direction briefs, audience targeting suggestions, and platform-specific formatting. It accounts for each platform's ad specs, character limits, and performance patterns to deliver ads that are ready to load into your ad manager.

The command delegates to the **paid-ads-optimizer** and **copywriter** agents working together. The paid-ads-optimizer handles platform strategy, targeting, and format selection while the copywriter produces the actual ad copy and creative concepts.

## When to Use

- You are launching a new paid campaign and need ad copy variants to test
- You want to refresh existing ad creative that is fatiguing
- You are expanding to a new advertising platform and need platform-native formats
- You need creative briefs to hand off to designers or video editors
- You want to test new angles, hooks, or value propositions in your ads
- You are running seasonal promotions or limited-time offers
- You need both top-of-funnel awareness ads and bottom-of-funnel conversion ads

## How It Works

1. **Platform & Format Selection** — Identifies the right ad formats for your goals and platforms (single image, carousel, video, search, etc.)
2. **Angle Development** — Creates multiple messaging angles based on different value propositions, pain points, or audience motivations
3. **Copy Production** — Writes headline, primary text, description, and CTA variants for each angle, respecting platform character limits
4. **Creative Direction** — Provides visual or video direction briefs that complement the copy
5. **Targeting Recommendations** — Suggests audience segments, interests, lookalikes, and exclusions
6. **Testing Framework** — Organizes variants into a structured testing plan

## Example Usage

**Input:**

```
/ad-creative create Meta ad variants for our spring sale — 30% off all plans
```

**Output:**

```markdown
# Meta Ad Creative Package: Spring Sale — 30% Off

## Campaign Structure
- **Objective:** Conversions (purchases)
- **Formats:** Single image + carousel
- **Funnel stage:** Bottom-of-funnel (retargeting) +
  Mid-funnel (prospecting)

---

## Angle 1: Direct Offer (Best for retargeting)

**Primary text:**
Our biggest sale of the year is here.
Get 30% off any [Product] plan through March 31.
No code needed — discount applied at checkout.
Whether you're on Starter or Pro, this is the lowest price
we've offered all year.

**Headlines:**
- A: Spring Sale — 30% Off All Plans
- B: Our Lowest Prices of 2026
- C: Save 30% on [Product] This Week Only

**Description:** Annual plans from $X/mo. Cancel anytime.
**CTA button:** Get Offer

---

## Angle 2: FOMO / Urgency (Best for warm audiences)

**Primary text:**
This only happens once a year.
30% off every [Product] plan — Starter, Growth, and Pro.
2,400+ teams switched this quarter. Sale ends March 31.

**Headlines:**
- A: Ends March 31 — Don't Miss 30% Off
- B: Once-a-Year Pricing on [Product]
- C: 30% Off — 6 Days Left

**Description:** Join 2,400+ teams using [Product].
**CTA button:** Shop Now

---

## Angle 3: Value Stack (Best for prospecting)

**Primary text:**
What you get with [Product] Pro at 30% off:
- [Feature 1] that saves 5+ hrs/week
- [Feature 2] for your entire team
- [Feature 3] with unlimited usage
- Priority support included

All of that for $X/mo instead of $Y/mo.
Spring sale ends March 31.

**Headlines:**
- A: Everything You Need — Now 30% Off
- B: Pro Features, Spring Pricing
- C: Save 30% on the Plan Teams Love

**Description:** Full access. No limits. 30% off today.
**CTA button:** Start Saving

---

## Creative Direction

**Single Image:**
- Clean, bold typography with "30% OFF" as focal point
- Brand colors with spring-inspired accent (fresh green, soft coral)
- Product screenshot or UI element in background at 40% opacity
- Avoid stock photography — use product-forward visuals

**Carousel (3-4 cards):**
- Card 1: Bold offer (30% off all plans)
- Card 2: Feature highlight + price comparison
- Card 3: Social proof (customer count or testimonial)
- Card 4: CTA card with urgency (sale end date)

## Targeting Recommendations

**Retargeting (Angle 1 & 2):**
- Website visitors, last 30 days
- Free trial users who didn't convert
- Email list (non-customers)

**Prospecting (Angle 3):**
- Lookalike: top 5% customers by LTV
- Interest-based: [relevant SaaS tools, industry publications]
- Exclude: existing customers, recent converters

## Testing Plan
- Test angles 1 vs. 2 for retargeting audiences first
- Run angle 3 for prospecting with lookalike audiences
- Test headlines within winning angle after 500+ impressions each
- Budget split: 60% retargeting, 40% prospecting
```

## Important Notes

- Include specific offer details, product names, pricing, and deadlines — the agents cannot invent these facts
- Copy variants are designed for A/B testing; run them simultaneously with sufficient budget for statistical significance
- Character limits are respected per platform, but always verify in the actual ad manager before publishing
- Creative direction briefs describe visual concepts — a designer or design tool is needed for final asset production
- Meta's ad policies restrict certain claims (income, health, identity); the agent avoids flagged language but review before submission
- For Google Search ads, use this command for responsive search ad copy; for display, it provides banner copy and visual direction

## Related Agents

- **paid-ads-optimizer** — Primary agent for platform strategy, targeting, and budget allocation
- **copywriter** — Primary agent for ad copy creation
- **analytics-interpreter** — Analyze ad performance and recommend optimizations
- **cro-specialist** — Optimize landing pages that ads point to
- **brand-guardian** — Ensure ad copy aligns with brand guidelines
