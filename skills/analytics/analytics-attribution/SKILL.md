---
name: analytics-attribution
description: Marketing attribution modeling to understand channel contribution and optimize spend. Use when measuring marketing effectiveness or allocating budget.
origin: ECM
---

# Marketing Attribution Modeling

## When to Activate

- Allocating or reallocating marketing budget across channels
- Evaluating which campaigns or channels drive conversions
- Building or improving marketing measurement infrastructure
- Assessing impact of iOS/privacy changes on tracking
- Setting up UTM tracking and attribution tooling
- Debating "what's working" with stakeholders who disagree
- Running incrementality tests to validate attribution data

## First Questions

1. What is your current attribution model and tooling? (GA4, platform pixels, MTA vendor, MMM?)
2. What does your conversion funnel look like? (Awareness -> consideration -> purchase -> retention)
3. How long is your typical customer journey? (Same-day impulse vs. 90-day B2B sales cycle)
4. What channels are you running? (Paid search, paid social, organic, email, direct, referral, affiliate)
5. What is your primary conversion event? (Purchase, sign-up, demo request, app install)
6. How much of your traffic is mobile vs. desktop? (Privacy impact assessment)
7. Do you have a CRM or CDP connecting touchpoints to customers?

## Core Attribution Models

### Last-Click Attribution
- **How it works:** 100% credit to the final touchpoint before conversion.
- **Best for:** Direct-response campaigns, short purchase cycles, bottom-of-funnel optimization.
- **Limitation:** Ignores all awareness and consideration touchpoints. Massively over-credits branded search and retargeting.
- **When to use:** As a baseline only. Never as your sole model.

### First-Click Attribution
- **How it works:** 100% credit to the first touchpoint in the journey.
- **Best for:** Understanding top-of-funnel channel effectiveness, awareness campaigns.
- **Limitation:** Ignores everything that happens after initial discovery.
- **When to use:** When evaluating demand generation and awareness investments.

### Linear Attribution
- **How it works:** Equal credit distributed across all touchpoints.
- **Best for:** When you genuinely believe every touchpoint matters equally.
- **Limitation:** Treats a random display impression the same as a high-intent search click.
- **When to use:** Early-stage attribution when you lack data for more sophisticated models.

### Time-Decay Attribution
- **How it works:** More credit to touchpoints closer to conversion, decaying backward.
- **Best for:** Longer sales cycles where recent interactions are more influential.
- **Limitation:** Under-credits awareness touchpoints that may have been essential.
- **When to use:** B2B with 30-90 day sales cycles. E-commerce with multi-session journeys.

### Position-Based (U-Shaped) Attribution
- **How it works:** 40% to first touch, 40% to last touch, 20% distributed across middle.
- **Best for:** Balanced view that values both discovery and closing channels.
- **Limitation:** Arbitrary weighting. Middle touches may matter more than 20%.
- **When to use:** Good default for most businesses. Balances awareness and conversion.

### Data-Driven Attribution (DDA)
- **How it works:** Uses machine learning to assign credit based on actual conversion patterns.
- **Best for:** High-volume businesses with sufficient conversion data.
- **Limitation:** Requires significant data volume (GA4 needs 600+ conversions in 28 days). Black box — hard to explain.
- **When to use:** When you have the data volume. GA4 DDA is now default and accessible.

## Model Selection Framework

| Factor | Recommended Model |
|--------|-------------------|
| Short sales cycle (<7 days) | Last-click or Position-based |
| Long sales cycle (30+ days) | Time-decay or Data-driven |
| Limited data (<500 conversions/month) | Position-based or Linear |
| High data volume (1000+ conversions/month) | Data-driven |
| Heavy brand spend | First-click alongside last-click (compare) |
| Performance marketing focus | Time-decay or Data-driven |

## Cross-Channel Attribution Challenges

### The Walled Garden Problem
- Google, Meta, TikTok, Amazon each report in their own ecosystems.
- Each platform takes credit for the same conversion.
- Sum of platform-reported conversions will exceed actual conversions by 20-60%.
- **Solution:** Use a neutral measurement layer (GA4, MTA vendor, or MMM) as source of truth.

### iOS Privacy Impact (ATT / SKAdNetwork)
- iOS 14.5+ reduced Meta tracking by 30-50% for many advertisers.
- Modeled conversions fill gaps but add uncertainty.
- SKAdNetwork provides aggregated, delayed attribution for iOS app installs.
- **Mitigation strategies:**
  - Implement Conversions API (CAPI) for server-side tracking.
  - Use UTM parameters as a fallback signal.
  - Invest in Marketing Mix Modeling (MMM) for channel-level insights.
  - Run incrementality tests to validate platform-reported ROAS.

### Cookie Deprecation and Privacy Regulations
- Third-party cookies declining (Safari/Firefox already block, Chrome evolving).
- GDPR/CCPA consent requirements reduce trackable population.
- First-party data strategy is now essential, not optional.

## UTM Tracking Setup

### UTM Parameter Standards
```
utm_source    = Platform or publisher (google, facebook, newsletter)
utm_medium    = Marketing medium (cpc, organic, email, social, referral)
utm_campaign  = Campaign name (spring-sale-2026, product-launch-q1)
utm_term      = Paid keyword (optional, mainly for search)
utm_content   = Ad variant or creative (banner-a, cta-red, video-30s)
```

### UTM Naming Conventions (enforce these strictly)
- All lowercase, no spaces (use hyphens).
- Consistent source naming: `facebook` not `Facebook`, `fb`, or `FB`.
- Campaign naming format: `[objective]-[descriptor]-[date]` e.g., `awareness-spring-campaign-2026q1`.
- Document conventions in a shared UTM guide and use a UTM builder tool.

### UTM Governance
- Create a centralized UTM builder (Google Sheet or dedicated tool like UTM.io).
- Audit UTMs monthly — look for misspellings, inconsistencies, missing parameters.
- Never change UTM conventions mid-campaign.

## Attribution Tools and Platforms

| Tool | Type | Best For |
|------|------|----------|
| Google Analytics 4 | Free MTA | Default for most businesses. DDA included. |
| Triple Whale | MTA / MMM | D2C e-commerce, Shopify-native |
| Northbeam | MTA | E-commerce, multi-channel |
| Rockerbox | MTA | Mid-market multi-channel |
| Measured | Incrementality | Validating attribution with experiments |
| Meta Robyn / Google Meridian | Open-source MMM | Channel-level budget allocation |
| HubSpot / Salesforce | CRM Attribution | B2B multi-touch revenue attribution |

## Attribution Reporting Template

### Monthly Attribution Report Structure
1. **Executive Summary:** Top-line conversion numbers, cost, ROAS by model.
2. **Model Comparison Table:** Show same data under 2-3 models side by side.
3. **Channel Performance:** Each channel's attributed conversions, cost, CPA, ROAS.
4. **Path Analysis:** Most common conversion paths, average touchpoints, average journey length.
5. **Anomalies and Insights:** Channels gaining or losing credit across models.
6. **Budget Recommendations:** Where to increase, decrease, or test based on attribution data.
7. **Data Quality Notes:** Known tracking gaps, consent rates, modeled conversion percentages.

## Incrementality Testing as Complement

Attribution models tell you what correlates with conversions. Incrementality testing tells you what causes them. Always complement attribution with incrementality.

### How to Run an Incrementality Test
1. **Define the question:** "What is the true incremental impact of [channel/campaign]?"
2. **Design the experiment:** Geographic holdout (run ads in test markets, not in control) or audience holdout (exposed vs. ghost ads).
3. **Set duration:** Minimum 2-4 weeks. Longer for longer sales cycles.
4. **Measure lift:** Compare conversion rates between test and control groups.
5. **Calculate iROAS:** Incremental revenue / Incremental cost.

### When to Run Incrementality Tests
- When attribution says a channel is great but you're not sure.
- Before making large budget shifts (>20% of channel spend).
- When entering a new channel and need to validate early results.
- Quarterly on your top 2-3 spend channels.

## Quality Gate

Before finalizing attribution analysis or recommendations:
- [ ] Have you compared at least two attribution models side by side?
- [ ] Have you accounted for cross-device and cross-platform journeys?
- [ ] Have you noted known tracking gaps (consent rates, iOS impact, ad blockers)?
- [ ] Are UTM parameters consistent and properly deployed?
- [ ] Have you checked for duplicate conversion counting across platforms?
- [ ] Have you complemented or planned to complement with incrementality testing?
- [ ] Are budget recommendations presented as directional, not falsely precise?
- [ ] Have you documented model assumptions and limitations for stakeholders?
