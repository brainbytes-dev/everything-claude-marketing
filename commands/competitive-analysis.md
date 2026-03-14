---
description: Analyze competitors — positioning, messaging, features, pricing, and marketing strategy. Outputs battlecards or competitive landscape maps.
---

# /competitive-analysis

Analyze your competitive landscape across positioning, messaging, features, pricing, and marketing strategy. Get structured output as battlecards, comparison matrices, or strategic landscape maps.

## What This Command Does

The `/competitive-analysis` command produces a thorough competitive assessment that helps you understand where you stand relative to competitors and how to differentiate. It evaluates competitors across multiple dimensions — how they position themselves, what they charge, how they market, and where their strengths and weaknesses lie. The output is structured for direct use in sales enablement, strategy planning, or investor communications.

The command delegates to the **market-researcher** and **product-marketer** agents. The market-researcher gathers and structures competitive intelligence while the product-marketer translates findings into positioning and messaging recommendations.

## When to Use

- You are entering a new market and need to understand the competitive landscape
- Sales is losing deals to specific competitors and needs battlecards
- You are repositioning your product and need to map competitor positioning
- You want to identify market gaps and differentiation opportunities
- You are preparing investor materials and need competitive landscape context
- You are planning a product launch and need competitive messaging
- You want to audit competitor marketing tactics and channels

## How It Works

1. **Competitor Profiling** — Builds structured profiles covering company overview, target market, product capabilities, and market position
2. **Positioning Analysis** — Maps how each competitor positions themselves — their core narrative, taglines, and claimed differentiators
3. **Feature Comparison** — Creates a feature matrix comparing capabilities across competitors
4. **Pricing Analysis** — Documents pricing models, tiers, and strategies
5. **Marketing Strategy Review** — Evaluates competitor channels, content strategy, messaging themes, and campaign approaches
6. **SWOT Synthesis** — Identifies strengths, weaknesses, opportunities, and threats for each competitor relative to you
7. **Battlecard Creation** — Produces sales-ready battlecards with objection handling and win/loss talking points

## Example Usage

**Input:**

```
/competitive-analysis compare us against Notion, Monday.com, and Asana for project management
```

**Output:**

```markdown
# Competitive Analysis: Project Management Space

## Landscape Overview

| Dimension     | Your Product | Notion        | Monday.com    | Asana          |
|---------------|-------------|---------------|---------------|----------------|
| Core position | [TBD]       | All-in-one    | Work OS       | Work management|
| Primary buyer | [TBD]       | Teams & ICs   | Ops leaders   | Project leads  |
| Market tier   | [TBD]       | SMB to Mid    | SMB to Ent    | Mid to Ent     |
| Pricing start | [TBD]       | Free/$10/seat | Free/$9/seat  | Free/$11/seat  |

---

## Competitor 1: Notion

**Positioning:** "One workspace. Every team." — Positions as the
all-in-one workspace replacing docs, wikis, and project tools.

**Strengths:**
- Extremely flexible — users can build custom workflows
- Strong organic/community-driven growth
- Docs + projects in one tool reduces app switching
- Beloved by individual contributors and small teams

**Weaknesses:**
- Flexibility creates complexity — steep learning curve
- Performance issues at scale (large workspaces)
- Project management is a secondary use case, not primary
- Limited time tracking, resource management, and reporting

**Marketing approach:** Community-led, template marketplace,
creator partnerships, strong SEO content machine.

**How to win against Notion:**
- Emphasize purpose-built PM features they lack
- Show time-to-value advantage (structured vs. build-it-yourself)
- Target teams that outgrew Notion's PM capabilities
- Key message: "You need a project management tool, not a
  blank canvas"

---

## Competitor 2: Monday.com

**Positioning:** "A platform built for a new way of working" —
Positions as a flexible work OS that goes beyond project management.

**Strengths:**
- Highly visual, intuitive interface
- Strong enterprise sales motion and brand awareness
- Extensive integrations ecosystem
- Multiple products (CRM, Dev, etc.) for cross-sell

**Weaknesses:**
- Can become expensive at scale with add-ons
- Customization creates sprawl without governance
- Heavy sales-led motion can slow down evaluation
- Feature breadth over depth in some areas

**Marketing approach:** Heavy paid media spend, TV advertising,
Google Ads dominance, event sponsorships, outbound sales.

**How to win against Monday.com:**
- Compete on total cost of ownership (their add-on pricing)
- Highlight depth of PM-specific features they lack
- Win on speed of deployment and time-to-value
- Key message: "Enterprise-grade PM without the enterprise price"

---

## Competitor 3: Asana

**Positioning:** "Manage your team's work, projects, and tasks
online" — Positions as the structured work management platform.

**Strengths:**
- Mature, well-established PM feature set
- Strong workflow automation (Rules engine)
- Good portfolio and program management capabilities
- Trusted by enterprise customers

**Weaknesses:**
- Interface feels dated compared to newer entrants
- Less flexible than Notion or Monday for non-PM use cases
- Premium features (goals, portfolios) locked behind expensive tiers
- Slower innovation pace in recent years

**Marketing approach:** Content marketing, SEO, enterprise sales,
partnership channels, thought leadership on "work management."

**How to win against Asana:**
- Differentiate on modern UX and speed
- Compete on pricing for mid-market buyers
- Highlight newer capabilities (AI, real-time collaboration)
- Key message: "Modern project management, built for how
  teams work today"

---

## Positioning Recommendations

Based on this analysis, your strongest differentiation
opportunities are:
1. **[Unique capability]** — None of the three competitors
   offer this natively
2. **Price-to-value ratio** — Position between free and
   enterprise pricing
3. **Time-to-value** — Faster setup than Notion, simpler
   than Monday.com
```

## Important Notes

- Provide as much context about your own product as possible — positioning recommendations depend on understanding your actual strengths and differentiators
- Competitive intelligence is based on publicly available information (websites, pricing pages, marketing materials, review sites); internal competitor data is not accessible
- Pricing and features change frequently — validate current details against competitor websites before using in sales materials
- Battlecards should be updated quarterly at minimum; competitive landscapes shift quickly in technology markets
- Avoid directly disparaging competitors in customer-facing materials; focus on your strengths and differentiated value
- For deeper analysis of a single competitor, run the command focused on one company rather than a broad comparison

## Related Agents

- **market-researcher** — Primary agent for competitive intelligence gathering and analysis
- **product-marketer** — Primary agent for positioning and messaging recommendations
- **strategist** — Connect competitive insights to broader marketing strategy
- **copywriter** — Write competitive positioning copy and sales enablement content
- **brand-guardian** — Ensure competitive messaging aligns with brand standards
