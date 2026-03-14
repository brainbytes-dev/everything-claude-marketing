---
name: martech-stack
description: Evaluate, select, and manage marketing technology stacks. Use when auditing tools, selecting new platforms, or optimizing marketing infrastructure.
origin: ECM
---

# Martech Stack

## When to Activate

Use this skill when evaluating or selecting marketing technology tools, auditing an existing martech stack for redundancy or gaps, planning a martech migration, building a marketing ops infrastructure from scratch, deciding between building custom solutions or buying off-the-shelf, budgeting for marketing technology, or when someone asks to "recommend tools," "audit our stack," or "evaluate marketing platforms." Also activate when data is siloed across tools or when the team is frustrated by tool complexity.

## First Questions

Before evaluating or recommending martech, clarify:

1. **What is the current stack?** (list every tool the marketing team uses, including free and unofficial ones)
2. **What is the company stage and size?** (startup, scaleup, enterprise — determines complexity tolerance)
3. **What is the marketing ops maturity?** (ad hoc, defined processes, optimized, or data-driven)
4. **What problems are you trying to solve?** (don't start with tools — start with pain points)
5. **What is the budget?** (monthly/annual spend on martech — include hidden costs like implementation and training)
6. **Who will manage these tools?** (dedicated ops person, shared responsibility, agency — determines complexity ceiling)
7. **What does the tech stack outside marketing look like?** (CRM owned by sales? Analytics by product? Data warehouse? — integration matters)

## Core Rules

1. **Problems first, tools second.** Never recommend a tool without first understanding the workflow it needs to support. A tool without a process is shelfware.
2. **Integration beats features.** A tool that connects to your existing stack is worth more than a best-in-class tool that creates a data silo.
3. **The best tool is the one that gets used.** Adoption matters more than capability. A simple tool used daily beats a powerful tool used quarterly.
4. **Every tool has a total cost of ownership.** License fee is 30-50% of the real cost. Add implementation, training, maintenance, data migration, and opportunity cost of switching.
5. **Stack complexity should match team maturity.** A 3-person marketing team does not need a CDP, ABM platform, and marketing attribution tool. They need a CRM, email tool, and analytics.
6. **Audit before adding.** Before buying a new tool, check if an existing tool can do the job. Most marketing teams use only 30-40% of their tools' capabilities.

## Martech Categories

### Core Stack (every marketing team needs these)

| Category | Purpose | Example Tools |
|----------|---------|---------------|
| CRM | Customer data, pipeline, relationships | HubSpot, Salesforce, Pipedrive |
| Marketing Automation (MAP) | Email sequences, lead nurturing, scoring | HubSpot, ActiveCampaign, Mailchimp, Marketo |
| Analytics | Website and campaign performance | GA4, Mixpanel, Amplitude, Plausible |
| Social Media Management | Scheduling, publishing, monitoring | Buffer, Hootsuite, Sprout Social, Later |
| Content Management (CMS) | Website and blog | WordPress, Webflow, Next.js, Ghost |

### Growth Stack (add as you scale)

| Category | Purpose | Example Tools |
|----------|---------|---------------|
| SEO | Keyword research, rank tracking, audits | Ahrefs, Semrush, Moz, Screaming Frog |
| Paid Media | Ad management and optimization | Google Ads, Meta Ads Manager, LinkedIn Campaign Manager |
| Landing Pages | Conversion-focused pages | Unbounce, Instapage, Leadpages |
| Heatmaps / Session Recording | User behavior analysis | Hotjar, Microsoft Clarity, FullStory |
| A/B Testing | Conversion optimization experiments | VWO, Optimizely, AB Tasty |
| Design | Creative production | Figma, Canva, Adobe Creative Suite |
| Video | Video hosting and creation | Wistia, Loom, Vidyard |

### Enterprise Stack (add with dedicated ops)

| Category | Purpose | Example Tools |
|----------|---------|---------------|
| Customer Data Platform (CDP) | Unified customer profiles across sources | Segment, mParticle, Rudderstack |
| Account-Based Marketing (ABM) | Target and personalize for key accounts | Demandbase, 6sense, Terminus |
| Marketing Attribution | Multi-touch attribution modeling | HockeyStack, Dreamdata, Triple Whale |
| Data Warehouse | Centralized data for analysis | Snowflake, BigQuery, Redshift |
| BI / Reporting | Dashboards and reporting | Looker, Tableau, Power BI, Metabase |
| Conversational Marketing | Chatbots, live chat, messaging | Drift, Intercom, HubSpot |
| Personalization | Dynamic content and experiences | Mutiny, Dynamic Yield, Optimizely |
| Product Analytics | User behavior within the product | Amplitude, Mixpanel, Heap |

## Stack Evaluation Framework

### FITS Model

Evaluate every tool against four dimensions:

**F — Functionality**
- Does it solve the specific problem you've defined?
- Which must-have features does it cover?
- Which nice-to-have features does it include?
- What gaps remain that require workarounds?

**I — Integration**
- Does it connect natively to your existing stack?
- Is there an API for custom integration?
- What data flows between this tool and others?
- Who builds and maintains integrations?

**T — Total Cost of Ownership**
- License fee (per user, per contact, flat rate?)
- Implementation cost (time and money)
- Training cost (how long until the team is proficient?)
- Ongoing maintenance (admin time, updates, troubleshooting)
- Data migration cost (getting data in and out)
- Switching cost (what happens if you need to leave?)

**S — Support and Scalability**
- Quality of documentation and knowledge base
- Support responsiveness and channels (chat, email, phone, dedicated CSM)
- Does the tool scale with your growth? (pricing tiers, feature gates, contact limits)
- Vendor stability (funding, customer base, product roadmap)

## Build vs. Buy Decision Framework

### When to Buy
- The problem is well-defined and mature (email, CRM, analytics)
- Multiple proven vendors exist
- You need it now (not in 6 months)
- Your team doesn't have engineering resources to build and maintain
- The tool integrates with your existing stack

### When to Build
- Your workflow is genuinely unique (not "we're special" — actually unique)
- No existing tool fits without heavy customization
- The tool is a competitive advantage (core to your differentiation)
- You have engineering capacity and willingness to maintain it long-term
- Data sensitivity or compliance requires full control

### When to Build on Top (buy + customize)
- A tool covers 70-80% of your needs
- The remaining 20% can be solved with API integrations or custom code
- Example: Buy HubSpot for CRM, build a custom integration to sync with your proprietary data source

## Integration Architecture Patterns

### Hub and Spoke
One central platform (usually CRM or CDP) connects to all other tools. Data flows through the hub.
- **Pros:** Single source of truth, simplified data governance.
- **Cons:** Hub becomes a bottleneck. If the hub is limited, everything is limited.
- **Best for:** Small to mid-size teams with a strong CRM (HubSpot, Salesforce).

### Point-to-Point
Tools connect directly to each other as needed.
- **Pros:** Simple for 2-3 integrations. No middleware cost.
- **Cons:** Becomes unmanageable at scale. N tools = N(N-1)/2 potential connections. Data inconsistencies.
- **Best for:** Very early-stage teams with 3-5 tools.

### Integration Layer (iPaaS)
A middleware platform (Zapier, Make, Workato, Tray.io) manages connections between tools.
- **Pros:** Flexible, no-code/low-code, can connect any combination of tools.
- **Cons:** Adds cost and another tool to manage. Complex logic can be fragile.
- **Best for:** Teams with 5-15 tools and no dedicated engineering support.

### Data Warehouse + Reverse ETL
All tools feed data into a warehouse (Snowflake, BigQuery). Reverse ETL pushes enriched data back to tools.
- **Pros:** Single source of truth. Advanced analytics. Full control over data.
- **Cons:** Requires data engineering. Higher cost and complexity.
- **Best for:** Data-driven organizations with 10+ tools and a data team.

## Data Flow Mapping

Before adding or changing tools, map your data flows:

```
[Traffic Sources] → [Analytics (GA4)] → [Reporting Dashboard]
       ↓
[Landing Pages] → [Form Submission] → [CRM / MAP]
                                          ↓
                                    [Lead Scoring]
                                          ↓
                              [Email Nurture Sequence]
                                          ↓
                               [Sales Notification]
                                          ↓
                                   [Deal Pipeline]
                                          ↓
                               [Customer Onboarding]
                                          ↓
                              [Product Analytics] → [CS Alerts]
```

For each connection, document:
- What data moves (contacts, events, properties)
- Direction (one-way or bi-directional sync)
- Frequency (real-time, hourly, daily)
- Owner (who troubleshoots when it breaks)

## Vendor Evaluation Scorecard Template

Score each vendor 1-5 on these criteria:

| Criterion | Weight | Vendor A | Vendor B | Vendor C |
|-----------|--------|----------|----------|----------|
| Core feature coverage | 5x | _/5 | _/5 | _/5 |
| Integration with existing stack | 4x | _/5 | _/5 | _/5 |
| Ease of use / adoption likelihood | 4x | _/5 | _/5 | _/5 |
| Total cost of ownership (3-year) | 3x | _/5 | _/5 | _/5 |
| Support and documentation | 2x | _/5 | _/5 | _/5 |
| Scalability | 2x | _/5 | _/5 | _/5 |
| Vendor stability / reputation | 2x | _/5 | _/5 | _/5 |
| Data portability / exit strategy | 1x | _/5 | _/5 | _/5 |
| **Weighted Total** | | **___** | **___** | **___** |

## Common Stack Architectures by Company Size

### Startup (1-10 people, <$500/mo martech budget)
- **CRM + MAP**: HubSpot Free/Starter (combined)
- **Analytics**: GA4 + Plausible
- **Social**: Buffer (free tier)
- **CMS**: Webflow or WordPress
- **Design**: Canva
- **Integration**: Zapier (free tier)
- **Total**: $0-300/mo

### Scaleup (10-50 people, $2,000-10,000/mo)
- **CRM + MAP**: HubSpot Professional or ActiveCampaign + Salesforce
- **Analytics**: GA4 + Mixpanel
- **SEO**: Ahrefs or Semrush
- **Social**: Sprout Social
- **CMS**: Webflow or headless CMS
- **Landing Pages**: Unbounce or Webflow
- **Heatmaps**: Hotjar or Microsoft Clarity (free)
- **Design**: Figma + Canva
- **Integration**: Zapier or Make
- **Total**: $2,000-8,000/mo

### Enterprise (50+ marketing team, $20,000+/mo)
- **CRM**: Salesforce
- **MAP**: Marketo, HubSpot Enterprise, or Pardot
- **CDP**: Segment or mParticle
- **Analytics**: GA4 + Amplitude
- **Attribution**: HockeyStack or Dreamdata
- **ABM**: Demandbase or 6sense
- **SEO**: Semrush or Ahrefs (team plans)
- **Social**: Sprout Social (enterprise)
- **CMS**: Contentful or headless + Next.js
- **A/B Testing**: Optimizely
- **BI**: Looker or Tableau
- **Data Warehouse**: Snowflake or BigQuery
- **Integration**: Workato or Tray.io
- **Total**: $20,000-100,000+/mo

## Consolidation vs. Best-of-Breed Strategy

### Consolidation (all-in-one platforms)
- **Pros**: Simpler stack, native integrations, lower total cost, easier training, single vendor relationship.
- **Cons**: Feature depth sacrificed for breadth, vendor lock-in, may not serve power users in any category.
- **Best for**: Teams with limited ops resources, early-stage companies, teams that value simplicity.
- **Example**: HubSpot as CRM + MAP + CMS + Social + Landing Pages.

### Best-of-Breed (specialized tools)
- **Pros**: Best capabilities in each category, flexibility to swap tools, tailored to specific workflows.
- **Cons**: Integration complexity, higher total cost, more vendor management, data fragmentation risk.
- **Best for**: Teams with dedicated marketing ops, mature organizations, teams with specific advanced needs.
- **Example**: Salesforce (CRM) + Marketo (MAP) + Webflow (CMS) + Sprout Social (social) + Unbounce (landing pages).

### Decision Heuristic
- If you have a dedicated marketing ops person: best-of-breed is viable.
- If marketing owns its own tools (no engineering support): lean toward consolidation.
- If you're growing fast and needs are changing: start consolidated, break out tools when a specific need demands it.

## Martech Budget Planning

### Budget Allocation Rules of Thumb
- Martech should be 15-25% of total marketing budget (industry average is ~25%).
- Core stack (CRM, MAP, analytics): 40-50% of martech budget.
- Growth tools (SEO, paid, testing): 25-35%.
- Emerging / experimental: 10-15%.
- Reserve 10-15% for unexpected needs and price increases.

### Annual Review Process
1. Audit utilization: Which tools are actually being used? Pull login data and usage reports.
2. Identify overlap: Are multiple tools doing the same thing?
3. Assess ROI: For each tool, estimate the value it creates vs. its total cost.
4. Rationalize: Cut underused tools. Consolidate overlapping tools. Renegotiate contracts.
5. Plan additions: What gaps exist? What new capabilities are needed for next year's goals?

## Stack Audit Checklist

- [ ] All marketing tools are inventoried (including free tools, browser extensions, and shadow IT)
- [ ] Each tool has an owner who is responsible for it
- [ ] Utilization data has been pulled (monthly active users, feature usage)
- [ ] Integration health is verified (data is flowing correctly between tools)
- [ ] Redundant tools are identified (multiple tools solving the same problem)
- [ ] Total cost of ownership is calculated for each tool (not just license fees)
- [ ] Data governance is assessed (where does customer data live? who has access?)
- [ ] Security and compliance are checked (SOC 2, GDPR compliance, data processing agreements)
- [ ] Contract renewal dates are documented (avoid auto-renewals at unfavorable terms)
- [ ] The stack supports the marketing strategy for the next 12 months

## Quality Gate

Before delivering a martech recommendation or stack audit:

- [ ] The recommendation starts with problems and workflows, not tools
- [ ] Integration requirements have been mapped and verified
- [ ] Total cost of ownership is calculated (not just sticker price)
- [ ] The recommended stack complexity matches the team's maturity and resources
- [ ] A build vs. buy analysis has been conducted for any custom requirements
- [ ] Data flow between tools has been mapped and documented
- [ ] Adoption risk has been assessed (will the team actually use this?)
- [ ] A migration plan exists if replacing existing tools
- [ ] Vendor evaluation uses a structured scorecard, not gut feel
- [ ] The recommendation includes a timeline and implementation sequence
