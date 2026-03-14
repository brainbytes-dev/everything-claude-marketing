---
name: analytics-dashboards
description: Design marketing dashboards and reports for executives, teams, and campaigns. Use when building reporting systems or presenting data.
origin: ECM
---

# Marketing Dashboard Design

## When to Activate

- Building a new marketing dashboard or reporting system
- Redesigning existing dashboards that aren't driving decisions
- Preparing data visualizations for stakeholders
- Setting up automated reporting for marketing teams
- Choosing metrics to track for a campaign or channel
- Stakeholders complain they "don't know what's working"

## First Questions

1. Who is the primary audience for this dashboard? (CEO, CMO, channel manager, campaign team)
2. What decisions should this dashboard help make?
3. What is the reporting cadence? (Real-time, daily, weekly, monthly)
4. What data sources are available? (GA4, CRM, ad platforms, email platform, billing system)
5. What tool will you build this in? (Looker Studio, Tableau, Power BI, Databox, custom)
6. What are the top 3 questions this dashboard must answer?

## Dashboard Hierarchy

Dashboards should form a pyramid. Each level answers different questions for different audiences.

### Level 1: Executive Dashboard
- **Audience:** CEO, CFO, board
- **Cadence:** Monthly or quarterly
- **Purpose:** "Is marketing contributing to business growth?"
- **Metrics:** Revenue influenced, CAC, LTV, LTV:CAC ratio, pipeline value, brand awareness trends
- **Design:** Maximum 6-8 metrics. Heavy on trends, light on granularity. Always include comparison period.

### Level 2: Marketing Leadership Dashboard
- **Audience:** CMO, VP Marketing, Head of Growth
- **Cadence:** Weekly
- **Purpose:** "Which channels and programs are performing? Where should we adjust?"
- **Metrics:** Channel-level spend, CPA, ROAS, conversion volume, pipeline by source, funnel conversion rates
- **Design:** 10-15 metrics. Channel comparison views. Pacing against goals.

### Level 3: Channel Dashboards
- **Audience:** Channel managers (paid, organic, email, content)
- **Cadence:** Daily to weekly
- **Purpose:** "How is my channel performing and where do I optimize?"
- **Metrics:** Channel-specific KPIs (CTR, CPC, impression share, open rate, domain authority, etc.)
- **Design:** Detailed, filterable, actionable. Campaign-level drill-down.

### Level 4: Campaign/Tactical Dashboards
- **Audience:** Campaign managers, individual contributors
- **Cadence:** Daily or real-time
- **Purpose:** "What is happening right now and what do I do about it?"
- **Metrics:** Campaign-specific metrics, A/B test results, landing page performance, creative performance
- **Design:** Granular, real-time where possible. Alert thresholds.

## Metric Selection by Audience

### Rule: The higher the audience, the closer the metric should be to revenue.

| Audience | Good Metrics | Bad Metrics |
|----------|-------------|-------------|
| CEO/Board | Revenue, CAC, LTV, market share | Impressions, clicks, followers |
| CMO | Pipeline, ROAS, channel CPA, conversion rate | Individual ad CTR, keyword rankings |
| Channel Manager | Channel CPA, CTR, CVR, ROAS, quality score | Raw traffic without context |
| Campaign IC | Creative CTR, landing page CVR, bid metrics | Only vanity metrics (likes, shares) |

### Metric Pairing Principle
Never show a metric alone. Always pair it with context:
- **Volume + Efficiency:** Conversions + CPA (not just conversions)
- **Current + Trend:** This month CPA + CPA trend over 6 months
- **Actual + Goal:** Pipeline generated vs. pipeline target
- **Metric + Benchmark:** Your CTR vs. industry average CTR

## Visualization Best Practices

### Chart Type Selection Guide

| Data Type | Best Chart | Why |
|-----------|-----------|-----|
| Trend over time | Line chart | Shows direction and rate of change |
| Comparison across categories | Horizontal bar chart | Easy to compare and read labels |
| Part of a whole | Stacked bar or 100% stacked bar | Shows composition. Avoid pie charts with >4 segments. |
| Single KPI value | Scorecard / Big number | Immediate comprehension |
| KPI vs. target | Bullet chart or gauge | Shows progress toward goal |
| Correlation between two metrics | Scatter plot | Reveals relationships |
| Distribution | Histogram | Shows spread and outliers |
| Geographic data | Map / Choropleth | Spatial patterns |
| Funnel progression | Funnel chart | Drop-off visualization |

### Charts to Avoid
- **Pie charts** with more than 4 segments (use horizontal bar instead).
- **3D charts** of any kind (distort perception).
- **Dual-axis charts** unless absolutely necessary (confusing, easy to mislead).
- **Stacked area charts** with many categories (unreadable middle layers).

### Color and Design Rules
- Use a consistent color palette. One primary color, one accent for highlights.
- Red = bad / declining. Green = good / improving. Use sparingly and consistently.
- Gray for context data, color for focal data.
- Left-align text. Right-align numbers.
- Remove chart junk: gridlines, borders, legends when not needed.
- Every chart needs a clear title that states the insight, not just the topic.
  - Bad: "Monthly Revenue"
  - Good: "Revenue grew 12% MoM, driven by paid search"

## Dashboard Layout Principles

### The Z-Pattern
Eyes scan dashboards in a Z pattern: top-left -> top-right -> bottom-left -> bottom-right.
- **Top-left:** Most important KPI or headline metric.
- **Top row:** Summary scorecards (3-5 key metrics).
- **Middle:** Trend charts and comparisons.
- **Bottom:** Detailed tables and drill-down data.

### Information Density
- Executive dashboards: Low density, high white space. One screen, no scrolling.
- Operational dashboards: Higher density is acceptable. Scrolling is fine.
- Every element must earn its space. If nobody acts on a metric, remove it.

### Interactivity
- Date range selector (always).
- Filters for segment, channel, campaign, geography.
- Drill-down capability from summary to detail.
- Tooltips for metric definitions.

## Executive Dashboard Template

### Structure (Single Page)
```
┌─────────────────────────────────────────────────┐
│  MARKETING PERFORMANCE — [Month/Quarter Year]   │
├────────┬────────┬────────┬────────┬─────────────┤
│Revenue │  CAC   │  LTV   │LTV:CAC │  Pipeline   │
│ $X.XM  │ $XXX   │$X,XXX  │  X.Xx  │   $X.XM     │
│ +12% ▲ │ -5% ▲  │ +8% ▲  │ +14% ▲ │   +22% ▲    │
├────────┴────────┴────────┴────────┴─────────────┤
│  Revenue Trend (12-month line chart with goal)   │
├─────────────────────┬───────────────────────────┤
│  Channel ROAS       │  Pipeline by Source        │
│  (horizontal bar)   │  (horizontal bar)          │
├─────────────────────┴───────────────────────────┤
│  Key Insights & Recommended Actions (3 bullets)  │
└─────────────────────────────────────────────────┘
```

### Key Metrics Definitions for Executive Dashboard
- **Marketing-Sourced Revenue:** Revenue from deals where first touch was marketing.
- **CAC (Customer Acquisition Cost):** Total marketing + sales cost / New customers acquired.
- **LTV (Lifetime Value):** Average revenue per customer over their lifetime.
- **LTV:CAC Ratio:** Target 3:1 or higher. Below 1:1 is unsustainable.
- **Pipeline Generated:** Dollar value of qualified opportunities created by marketing.

## Channel-Specific Dashboard Templates

### Paid Media Dashboard
- Spend, impressions, clicks, CTR, CPC, conversions, CPA, ROAS
- Breakdown by platform, campaign, ad group, creative
- Pacing: Spend vs. budget (daily and monthly)
- Quality metrics: Quality Score (Google), Relevance Score (Meta)

### SEO Dashboard
- Organic sessions, organic conversions, keyword rankings (top 20)
- Page-level performance (top landing pages by traffic and conversions)
- Technical health: Core Web Vitals, crawl errors, index coverage
- Backlink metrics: New referring domains, domain authority trend

### Email Dashboard
- Sends, deliverability rate, open rate, click rate, CTOR, unsubscribe rate
- Revenue per email, conversion rate
- List growth rate, list health (engagement segments)
- Automated flow performance vs. campaign performance

### Content Dashboard
- Page views, unique visitors, time on page, scroll depth
- Content-attributed conversions (first-touch and multi-touch)
- SEO performance of content (rankings, organic traffic)
- Content production velocity (published vs. planned)

## Automated Reporting Setup

### Weekly Automated Report (Email/Slack)
1. Pull data from sources via API or native integrations.
2. Calculate WoW changes for top 5 metrics.
3. Flag anomalies (>20% deviation from trailing 4-week average).
4. Include a direct link to the live dashboard for drill-down.
5. Send Monday morning before the weekly marketing standup.

### Tools for Automation
- **Looker Studio + Scheduled Email:** Free, good for Google-ecosystem data.
- **Databox:** Good for multi-source automated scorecards.
- **Supermetrics:** Pulls data from 100+ sources into sheets/dashboards.
- **dbt + BI tool:** For mature data teams wanting a single source of truth.

## Storytelling with Data

### The Narrative Arc for Dashboard Presentations
1. **Context:** "Here's what we set out to do this month."
2. **Results:** "Here's what happened." (Lead with the headline number.)
3. **Why:** "Here's why it happened." (Root cause, not just correlation.)
4. **So What:** "Here's what it means for the business."
5. **Now What:** "Here's what we're going to do about it."

### Annotation Best Practices
- Annotate charts with key events (product launch, algorithm change, seasonality, outage).
- Use callout boxes for the single most important insight on each page.
- Bold the number, explain the context in plain text.

## Common Dashboard Mistakes

1. **Too many metrics.** If everything is highlighted, nothing is. Limit executive dashboards to 6-8 KPIs.
2. **No comparison period.** A number without context is meaningless. Always show vs. prior period or vs. goal.
3. **Vanity metrics without business metrics.** Impressions without conversions. Followers without revenue.
4. **No defined metric definitions.** People argue about numbers because they define metrics differently. Document definitions.
5. **Dashboard abandonment.** Building it once and never iterating. Review dashboard usage quarterly — remove what's not used.
6. **Missing "so what."** Data without insight. Every dashboard view should suggest an action.
7. **Too many colors.** Visual noise kills comprehension. Limit to 3-5 colors max.
8. **Wrong chart type.** Pie chart with 12 slices. Line chart for categorical data. Match chart to data type.

## Quality Gate

Before shipping a dashboard:
- [ ] Can the audience answer their top 3 questions within 10 seconds of looking at it?
- [ ] Does every metric have a comparison (vs. goal, vs. prior period, vs. benchmark)?
- [ ] Are metric definitions documented and accessible (tooltip or appendix)?
- [ ] Is the dashboard filterable by relevant dimensions (date, channel, segment)?
- [ ] Have you removed every metric that doesn't drive a decision?
- [ ] Does the layout follow the Z-pattern with the most important metric top-left?
- [ ] Have you tested the dashboard with an actual user from the target audience?
- [ ] Is the data refreshing on the correct cadence (not stale)?
- [ ] Are anomaly thresholds set so unusual changes get flagged automatically?
