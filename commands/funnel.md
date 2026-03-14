---
description: Design or optimize a marketing funnel from awareness through conversion. Includes channel mapping, content per stage, and conversion targets.
---

# /funnel

Design or optimize a full marketing funnel — from first touch to conversion — with channel strategy, content mapping, and measurable targets at every stage.

## What This Command Does

This command builds a complete marketing funnel tailored to your business model, audience, and growth goals. It maps each stage of the buyer journey — awareness, interest, consideration, intent, and conversion — to specific channels, content types, and conversion actions. The output includes realistic conversion benchmarks for each stage, identifies leaks in existing funnels, and provides actionable recommendations for improving throughput. Whether you are designing a funnel from scratch or diagnosing why an existing funnel underperforms, this command delivers a structured, data-informed plan.

## When to Use

- Designing a lead generation funnel for a new product or market
- Diagnosing why leads are not converting at expected rates
- Mapping a product-led growth funnel with self-serve and sales-assisted paths
- Building an e-commerce conversion funnel with retargeting strategy
- Planning a webinar, demo, or event-driven acquisition funnel
- Transitioning from outbound-only to a blended inbound/outbound approach
- Preparing funnel metrics and benchmarks for investor or board reporting

## How It Works

1. **Defines the funnel type** — Identifies the right funnel model based on your business (B2B lead gen, PLG, e-commerce, SaaS trial, etc.)
2. **Maps funnel stages** — Defines each stage with clear entry criteria, exit criteria, and conversion actions
3. **Assigns channels** — Maps the most effective channels to each funnel stage based on your audience and budget
4. **Plans content per stage** — Recommends specific content types that move prospects from one stage to the next
5. **Sets conversion targets** — Provides stage-by-stage conversion rate benchmarks calibrated to your industry
6. **Identifies friction points** — For existing funnels, pinpoints where and why prospects drop off
7. **Builds the measurement plan** — Defines KPIs, tracking requirements, and reporting cadence
8. **Recommends optimization tests** — Suggests A/B tests and experiments to improve conversion at each stage

The command delegates to the **cro-specialist** agent, which focuses on conversion rate optimization, funnel architecture, and data-driven growth.

## Example Usage

**Input:**
```
/funnel design a lead gen funnel for our B2B cybersecurity product
```

**Output:**

```
LEAD GENERATION FUNNEL: B2B CYBERSECURITY PLATFORM
Target: Security leaders and IT decision-makers at mid-market companies
(200-2,000 employees)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 1: AWARENESS
Goal: Build visibility with security leaders who don't know you yet

Channels:
- LinkedIn Ads (sponsored content targeting CISO/VP Security titles)
- Google Ads (non-branded security keywords)
- Industry publications (Dark Reading, CSO Online — contributed articles)
- Conference sponsorships (RSA, Black Hat — targeted booth + talks)
- Podcast guest appearances on security-focused shows

Content:
- "State of Endpoint Security 2026" annual report (gated)
- Threat landscape blog posts (ungated, SEO-optimized)
- Short-form video explainers on emerging attack vectors
- LinkedIn thought leadership from your CISO/founders

Conversion Action: Visits site or engages with content
Target: 50,000 monthly impressions → 5,000 site visitors (10% CTR)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 2: INTEREST
Goal: Capture contact information and begin relationship

Channels:
- Website (resource center, blog)
- Email capture (newsletter, gated content)
- Retargeting (LinkedIn, Google Display)
- Webinars and virtual events

Content:
- Gated whitepapers and benchmark reports
- Monthly "Threat Briefing" webinar series
- Security assessment checklist (interactive tool)
- Email nurture: 5-part "Modern Security Stack" series

Conversion Action: Submits email / downloads resource
Target: 5,000 visitors → 250 leads (5% conversion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 3: CONSIDERATION
Goal: Educate leads on your solution and build preference

Channels:
- Email nurture sequences
- Retargeting with case studies and demos
- Sales development outreach (SDR-assisted)
- Peer review sites (G2, Gartner Peer Insights)

Content:
- Customer case studies with quantified outcomes
- Product comparison guides (vs. CrowdStrike, SentinelOne)
- ROI calculator (interactive)
- Technical architecture documentation

Conversion Action: Requests demo or starts free assessment
Target: 250 leads → 50 MQLs (20% conversion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 4: INTENT / EVALUATION
Goal: Prove value through hands-on experience and
      address procurement requirements

Channels:
- Sales-led demos and POC environments
- Technical evaluation support
- Security questionnaire and compliance documentation
- Executive sponsor engagement

Content:
- Personalized demo environments with prospect's data
- Technical implementation guide
- Security and compliance documentation package
- Customer reference calls (matched by industry/size)

Conversion Action: Completes evaluation / enters procurement
Target: 50 MQLs → 15 SQLs (30% conversion)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 5: CONVERSION
Goal: Close the deal

Channels:
- Sales (AE-led negotiation)
- Legal/procurement support
- Executive alignment meetings

Content:
- Custom proposal and business case
- Implementation and onboarding plan
- Contract and SLA documentation

Conversion Action: Signed contract
Target: 15 SQLs → 5 closed deals (33% close rate)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FUNNEL SUMMARY:
50,000 impressions → 5,000 visitors → 250 leads → 50 MQLs →
15 SQLs → 5 customers

Overall conversion: 0.01% (impression to customer)
Lead-to-customer: 2.0%
Average deal size target: $50K-$150K ARR

MEASUREMENT PLAN:
- Weekly: Channel performance, lead volume, MQL conversion
- Monthly: Funnel velocity, stage conversion rates, CAC by channel
- Quarterly: Full funnel audit, cohort analysis, LTV:CAC ratio

RECOMMENDED TOOLS:
- CRM: HubSpot or Salesforce (pipeline tracking)
- Analytics: Google Analytics 4 + Mixpanel (behavior tracking)
- Attribution: HockeyStack or Dreamdata (multi-touch attribution)
```

## Important Notes

- **Funnel design depends on your sales motion.** A product-led growth funnel looks very different from an enterprise sales funnel. Provide context about your sales process so the agent builds the right model.
- **Benchmarks are starting points, not guarantees.** The conversion rates provided are industry-calibrated estimates. Your actual rates will vary based on product-market fit, brand awareness, and execution quality.
- **Not every funnel is linear.** The agent accounts for prospects who skip stages, re-enter at different points, or move backwards. The linear model is a framework for planning, not a rigid path.
- **Funnel optimization is ongoing.** The initial design gets you started. Plan to review stage conversion rates monthly and run optimization experiments continuously.
- **Budget allocation should follow the funnel.** If your funnel is awareness-constrained, spend more at the top. If it leaks at consideration, invest in mid-funnel content and nurture.

## Related Agents

- **cro-specialist** — Primary agent that designs funnel architecture and conversion optimization strategy
- **analytics-interpreter** — Analyzes existing funnel data to identify drop-off points and opportunities
- **content-strategist** — Plans content for each funnel stage
- **media-buyer** — Executes paid channel strategy mapped to funnel stages
