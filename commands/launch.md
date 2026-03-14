---
description: Plan a product or feature launch end-to-end — GTM strategy, timeline, channels, messaging, and cross-functional coordination.
---

# /launch

Plan a complete product or feature launch from strategy through execution, covering GTM approach, messaging, channel plans, timeline, and cross-functional coordination.

## What This Command Does

The `/launch` command produces a comprehensive launch plan that aligns marketing, product, sales, and customer success around a coordinated go-to-market effort. It goes beyond marketing tactics to address the full launch lifecycle: pre-launch preparation, launch day execution, and post-launch optimization. The output is a plan your team can immediately begin executing against.

The command delegates primarily to the **product-marketer agent**, which orchestrates the GTM strategy. For execution-level details, it draws on the **strategist**, **copywriter**, and **pr-specialist** agents as needed.

## When to Use

- You are launching a new product and need a full GTM plan
- You are shipping a major feature and want a coordinated launch effort
- You are entering a new market or segment with an existing product
- You need to coordinate a launch across multiple teams (marketing, sales, product, CS)
- You are planning a rebrand, pricing change, or other significant market-facing event
- You want a tiered launch plan (beta, soft launch, general availability)

## How It Works

1. **Launch Assessment** — Evaluates the launch scope, audience impact, and strategic importance to determine the right launch tier
2. **Messaging Development** — Creates the core positioning, value proposition, and messaging hierarchy for the launch
3. **Channel Strategy** — Selects and prioritizes marketing channels based on audience, budget, and launch tier
4. **Timeline Construction** — Builds a phased timeline with pre-launch, launch day, and post-launch milestones
5. **Asset Planning** — Lists all required assets (landing pages, emails, blog posts, sales collateral, etc.) with owners and deadlines
6. **Cross-Functional Coordination** — Defines what each team needs to do and when
7. **Success Metrics** — Establishes KPIs and a measurement plan for evaluating launch impact

## Example Usage

**Input:**

```
/launch plan the launch of our new AI assistant feature, targeting enterprise customers
```

**Output:**

```markdown
# Launch Plan: AI Assistant Feature

## Launch Tier: Major (Tier 1)
This is a flagship feature targeting a high-value segment. Full
marketing push with cross-functional coordination required.

## Core Messaging

**Positioning statement:**
[Product]'s AI Assistant is the first [category] tool that
[unique capability], helping enterprise teams [key outcome]
without [common pain point].

**Key messages:**
1. Reduce [task] time by X% with AI that understands your
   workflow context
2. Enterprise-grade security and compliance — your data never
   leaves your environment
3. Works with your existing tools — integrates with [platforms]

**Proof points:**
- Beta results: X% improvement in [metric] across 15 enterprise
  beta customers
- SOC 2 Type II certified, GDPR compliant
- [Notable beta customer] quote

---

## Timeline

### Pre-Launch (T-minus 4 weeks)

**Week 1 — Foundation:**
- [ ] Finalize feature positioning and messaging (Product Marketing)
- [ ] Brief sales team on feature, objection handling, and ideal
      customer profile (Sales Enablement)
- [ ] Create launch landing page wireframe (Marketing)
- [ ] Draft press release and media pitch (PR)
- [ ] Identify and brief 5-10 beta customers for testimonials (CS)

**Week 2 — Asset Creation:**
- [ ] Build launch landing page (Marketing + Design)
- [ ] Write announcement blog post (Content)
- [ ] Create demo video — 2-minute product walkthrough (Product)
- [ ] Design email announcement sequence (Email)
- [ ] Prepare sales one-pager and battlecard (Product Marketing)

**Week 3 — Enablement & Prep:**
- [ ] Sales training session (Product Marketing + Sales)
- [ ] CS team briefing and FAQ document (Product + CS)
- [ ] Load email sequences and test (Email)
- [ ] Social media content scheduled (Social)
- [ ] Media embargoed briefings begin (PR)

**Week 4 — Final Checks:**
- [ ] Landing page live (behind feature flag)
- [ ] All assets reviewed and approved
- [ ] Launch day runbook finalized
- [ ] Monitoring dashboards configured
- [ ] Dry run of launch sequence

### Launch Day (T-zero)

| Time     | Action                              | Owner          |
|----------|-------------------------------------|----------------|
| 8:00 AM  | Feature flag enabled                | Engineering    |
| 8:15 AM  | Landing page goes live              | Marketing      |
| 8:30 AM  | Press release distributed           | PR             |
| 9:00 AM  | Email blast to customers            | Email          |
| 9:00 AM  | Blog post published                 | Content        |
| 9:30 AM  | Social posts go live (all channels) | Social         |
| 10:00 AM | CEO LinkedIn post                   | Executive      |
| 10:00 AM | Outbound sales sequence activated   | Sales          |
| All day  | Monitor social, support, analytics  | All teams      |
| 5:00 PM  | Day 1 metrics snapshot              | Analytics      |

### Post-Launch (T-plus 1-4 weeks)

- **Week 1:** Monitor adoption metrics, support tickets, and
  sentiment. Address any issues quickly.
- **Week 2:** Publish customer case study. Launch retargeting
  campaigns for landing page visitors.
- **Week 3:** Sales pipeline review — are enterprise deals
  progressing? Adjust messaging if needed.
- **Week 4:** Launch retrospective. Full metrics report.
  Decide on sustained marketing investment.

---

## Channel Plan

| Channel           | Tactic                          | Audience       |
|--------------------|---------------------------------|----------------|
| Email              | Segmented announcement + series | Existing users |
| Blog               | Feature deep-dive post          | All audiences  |
| PR                 | Press release + media outreach  | Industry/press |
| LinkedIn           | Executive post + company post   | Enterprise     |
| X                  | Thread + announcement           | Tech community |
| Webinar            | Live demo (week 2)              | Prospects      |
| Paid (LinkedIn)    | Sponsored content               | Enterprise ICP |
| Sales outreach     | Personalized sequences          | Target accounts|

## Success Metrics

| Metric                    | Target        | Timeline   |
|---------------------------|---------------|------------|
| Feature adoption rate     | 20% of users  | 30 days    |
| Enterprise demo requests  | 50            | 30 days    |
| Landing page conversions  | 500 signups   | 30 days    |
| Press coverage            | 5+ articles   | 14 days    |
| Sales pipeline influenced | $500K         | 60 days    |
```

## Important Notes

- Launch tier matters — not every feature needs a Tier 1 launch; the agent will recommend the appropriate level of effort based on strategic importance and audience impact
- The plan assumes you have a cross-functional team; adjust ownership and timelines based on your actual team structure and capacity
- Enterprise launches typically require longer pre-launch periods for sales enablement and analyst briefings; consumer launches may compress the timeline
- Individual assets (copy, emails, ads) referenced in the plan should be created using their respective commands (`/copy`, `/email-sequence`, `/ad-creative`)
- Post-launch is where most launches fail — commit to the 4-week post-launch plan for sustained impact rather than treating launch day as the finish line
- Include product and engineering stakeholders early; feature readiness and marketing timing must be synchronized

## Related Agents

- **product-marketer** — Primary agent that builds the GTM strategy and launch plan
- **strategist** — Broader marketing strategy alignment
- **copywriter** — Create launch copy assets (landing pages, announcements, emails)
- **pr-specialist** — Media relations, press releases, and analyst briefings
- **social-media-manager** — Launch day social media execution
- **email-marketer** — Launch email sequences and customer communications
