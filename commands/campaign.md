---
description: Plan a marketing campaign end-to-end — objectives, audience, channels, budget, timeline, and KPIs. Invokes the strategist agent.
---

# /campaign

Plan a complete marketing campaign from strategy through execution, covering every critical dimension: objectives, target audience, channel mix, budget allocation, timeline, and measurable KPIs.

## What This Command Does

The `/campaign` command takes your campaign idea or business goal and produces a comprehensive campaign plan ready for execution. It analyzes your target market, selects the right channels, builds a realistic timeline, and defines success metrics — all tailored to your specific product, audience, and budget constraints.

The command delegates to the **strategist agent**, which applies structured marketing frameworks (SOSTAC, RACE, or similar) to ensure nothing is missed.

## When to Use

- You are launching a new product or feature and need a go-to-market campaign
- You want to drive awareness, signups, or revenue for an existing offering
- You need to plan a seasonal or event-based campaign
- You want a structured plan to present to leadership or stakeholders
- You are entering a new market segment and need a targeted campaign

## How It Works

1. **Objective Definition** — Clarifies your primary and secondary campaign goals (awareness, acquisition, activation, revenue, retention)
2. **Audience Analysis** — Defines target segments with demographics, psychographics, pain points, and buying triggers
3. **Channel Strategy** — Selects and prioritizes channels based on audience behavior and budget (paid, organic, email, social, content, PR, partnerships)
4. **Messaging Framework** — Develops core messaging pillars, value propositions, and positioning statements
5. **Budget Allocation** — Distributes budget across channels with expected ROI ranges
6. **Timeline & Milestones** — Builds a phased timeline with key milestones and dependencies
7. **KPI Framework** — Defines primary and secondary KPIs with targets and measurement methods

## Example Usage

**Input:**

```
/campaign launch our new project management feature to mid-market SaaS companies
```

**Output:**

```markdown
# Campaign Plan: Project Management Feature Launch

## Campaign Objective
Drive 500 qualified trial signups within 60 days of launch, targeting
mid-market SaaS companies (50-500 employees) who currently use
spreadsheets or basic tools for project tracking.

## Target Audience
**Primary:** Operations managers and team leads at SaaS companies
with 50-500 employees, currently experiencing project visibility gaps.

**Secondary:** CTOs and VPs of Engineering at the same companies,
who approve tool purchases.

## Channel Mix
| Channel          | Role               | Budget Share |
|------------------|---------------------|-------------|
| LinkedIn Ads     | Demand generation   | 35%         |
| Google Search    | Intent capture      | 25%         |
| Content/SEO      | Organic discovery   | 15%         |
| Email nurture    | Lead conversion     | 10%         |
| Webinar/demo     | Deep engagement     | 10%         |
| Retargeting      | Re-engagement       | 5%          |

## Timeline
- **Week 1-2:** Pre-launch content, landing pages, ad creative
- **Week 3:** Soft launch to existing customers + email list
- **Week 4:** Full paid campaign launch
- **Week 5-6:** Optimize based on initial data
- **Week 7-8:** Scale winning channels, cut underperformers

## KPIs
- Primary: 500 qualified trial signups (60-day target)
- Secondary: $45 cost per trial signup, 12% trial-to-paid conversion
- Leading indicators: CTR > 2.5%, landing page conversion > 8%
```

## Important Notes

- Provide as much context as possible — product details, existing audience data, budget range, and competitive landscape improve output quality significantly
- The campaign plan is a strategic framework; individual assets (copy, ads, emails) should be created using dedicated commands like `/copy`, `/ad-creative`, or `/email-sequence`
- Budget percentages are recommendations based on channel effectiveness for your segment — adjust based on historical performance data if available
- The strategist agent will ask clarifying questions if critical information is missing rather than making assumptions about budget or timeline

## Related Agents

- **strategist** — Primary agent that builds the campaign plan
- **copywriter** — Create campaign messaging and copy assets
- **paid-ads-optimizer** — Detailed paid channel strategy and optimization
- **analytics-interpreter** — Define measurement frameworks and tracking plans
- **product-marketer** — Align campaign with product positioning
