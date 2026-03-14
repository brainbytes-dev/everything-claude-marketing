---
description: Plan and allocate marketing budget across channels, campaigns, and funnel stages. Includes ROI projections and optimization triggers.
---

# /budget

Plan and allocate your marketing budget across channels, campaigns, and funnel stages with ROI projections and clear optimization triggers.

## What This Command Does

This command creates a structured marketing budget plan that distributes your spend across channels and campaigns based on your goals, audience, and growth stage. It goes beyond a simple spreadsheet allocation — it models expected returns by channel, sets minimum viable spend thresholds, defines optimization triggers that tell you when to shift budget, and builds in contingency for testing new channels. The output includes a monthly allocation plan, projected CAC and ROAS by channel, a measurement framework, and rules for reallocating budget based on performance data.

## When to Use

- Planning annual or quarterly marketing budgets from scratch
- Reallocating budget after a strategy shift or pivot
- Scaling spend and need to know where the next dollar should go
- Justifying marketing investment to leadership, finance, or investors
- Optimizing a budget that is not delivering target returns
- Launching into a new channel and need to carve out test budget
- Transitioning from founder-led sales to a marketing-driven pipeline
- Preparing for a board meeting with budget and ROI projections

## How It Works

1. **Understands the context** — Asks about total budget, business model, growth targets, current channel performance, and constraints
2. **Audits current spend** — Reviews what is working, what is not, and where there are gaps or waste
3. **Models channel economics** — Estimates CAC, ROAS, and payback period for each channel based on your inputs and industry benchmarks
4. **Allocates the budget** — Distributes spend across channels with clear rationale for each allocation
5. **Sets thresholds** — Defines minimum spend levels for each channel to reach statistical significance
6. **Creates optimization rules** — Builds if/then triggers for reallocating budget based on performance
7. **Plans contingency** — Reserves budget for testing, opportunistic spending, and seasonal adjustments
8. **Builds the reporting framework** — Defines what to measure weekly, monthly, and quarterly

The command delegates to the **strategist** and **analytics-interpreter** agents, combining strategic planning with data-driven financial modeling.

## Example Usage

**Input:**
```
/budget allocate $50K/month across channels for our e-commerce brand — goal is 4x ROAS
```

**Output:**

```
MARKETING BUDGET PLAN
Monthly Budget: $50,000 | Target: 4x ROAS ($200K revenue/month)
Business: E-commerce (DTC) | AOV: $85 | Target CAC: $21.25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CHANNEL ALLOCATION

1. META ADS (Facebook + Instagram)          $20,000 (40%)
   ─────────────────────────────────────────────────
   Rationale: Highest volume channel for DTC; strong
   for prospecting and retargeting at your AOV
   Expected ROAS: 3.5-4.5x
   Campaign split:
   - Prospecting (broad + lookalike): $12,000
   - Retargeting (site visitors, cart abandoners): $5,000
   - DPA (Dynamic Product Ads): $3,000
   Minimum viable spend: $10,000/month
   Target CAC: $18-22

2. GOOGLE ADS (Search + Shopping)           $15,000 (30%)
   ─────────────────────────────────────────────────
   Rationale: High-intent capture; Shopping drives
   strong ROAS for e-commerce when product feed is optimized
   Expected ROAS: 5-7x
   Campaign split:
   - Branded search: $3,000
   - Non-branded search: $5,000
   - Shopping / Performance Max: $7,000
   Minimum viable spend: $8,000/month
   Target CAC: $12-18

3. EMAIL & SMS                              $5,000 (10%)
   ─────────────────────────────────────────────────
   Rationale: Highest ROI channel for retention and
   repeat purchase; low cost but requires investment
   in content and automation
   Expected ROAS: 10-15x
   Spend breakdown:
   - Klaviyo / platform costs: $1,500
   - Email design and content: $2,000
   - SMS campaigns: $1,500
   Target: 25% of revenue from email/SMS within 6 months

4. TIKTOK ADS                              $5,000 (10%)
   ─────────────────────────────────────────────────
   Rationale: Growth channel for DTC discovery; lower
   CPMs than Meta, still building optimization history
   Expected ROAS: 2-3x (scaling phase)
   Campaign split:
   - Spark Ads (boosting organic/UGC): $3,000
   - In-feed prospecting: $2,000
   Minimum viable spend: $3,000/month
   Target CAC: $25-35 (expect higher while learning)

5. INFLUENCER / UGC                         $3,000 (6%)
   ─────────────────────────────────────────────────
   Rationale: Fuels creative for paid channels and
   builds social proof; micro-influencers at this budget
   Spend breakdown:
   - 6-8 micro-influencer partnerships/month: $2,000
   - UGC creator content for ad creative: $1,000
   Expected impact: Improves paid ad performance by
   15-25% through better creative

6. TEST BUDGET                              $2,000 (4%)
   ─────────────────────────────────────────────────
   Rationale: Reserved for testing new channels,
   creative concepts, or seasonal opportunities
   Current test priorities:
   - Pinterest Ads (visual product discovery)
   - YouTube Shorts ads
   - Affiliate program pilot
   Rule: Test for 30 days minimum before evaluating

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECTED P&L

Monthly ad spend:                    $50,000
Projected revenue (blended 4x):     $200,000
Projected orders:                    2,353 (at $85 AOV)
Blended CAC:                        $21.25
Blended ROAS:                       4.0x

Revenue by channel (projected):
- Meta Ads:    $80,000  (4.0x)
- Google Ads:  $82,500  (5.5x)
- Email/SMS:   $50,000  (10.0x)
- TikTok:      $12,500  (2.5x)
- Influencer:  Indirect (improves paid performance)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTIMIZATION TRIGGERS

Scale up (increase budget 20%):
- Channel maintains target ROAS for 14+ consecutive days
- CAC is 20%+ below target with stable volume
- Creative fatigue metrics remain healthy (frequency < 3)

Scale down (reduce budget 30%):
- ROAS drops below 2.5x for 7+ consecutive days
- CAC exceeds target by 25%+ despite creative refresh
- CPM inflation exceeds 40% without revenue increase

Kill (pause and reallocate):
- ROAS below 1.5x for 14+ days after optimization attempts
- Channel delivers fewer than 10 conversions/week
  (insufficient data for optimization)

Reactivate test budget:
- When a core channel hits diminishing returns
  (CAC increases 15%+ at same spend level)
- New platform reaches critical mass for your demographic
- Seasonal opportunity (BFCM, back-to-school, etc.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MEASUREMENT CADENCE

Weekly:
- ROAS and CAC by channel
- Spend pacing vs. plan
- Creative performance (CTR, hook rate, conversion rate)

Monthly:
- Full P&L review against projections
- Channel-level cohort analysis (do acquired customers repeat?)
- Budget reallocation decisions based on optimization triggers

Quarterly:
- Full funnel audit and attribution review
- LTV:CAC analysis by acquisition channel
- Next quarter budget plan and test roadmap
```

## Important Notes

- **Minimum viable spend matters.** Each channel requires a minimum budget to generate enough data for optimization. Spreading budget too thin across too many channels is a common mistake. The agent enforces minimum thresholds.
- **ROAS targets vary by channel.** Top-of-funnel channels (TikTok, display) will always have lower ROAS than bottom-of-funnel channels (branded search, email). Evaluate each channel against its stage-appropriate benchmark.
- **Budget allocation is not set-and-forget.** The optimization triggers are designed to be followed. Review performance weekly and make adjustments based on real data.
- **Account for creative costs.** Paid media performance depends heavily on creative quality. The budget should include creative production, not just media spend.
- **LTV changes the math.** If your customers have strong repeat purchase behavior, you can afford a higher initial CAC. Provide LTV data so the agent can model payback period accurately.
- **Seasonal planning is critical.** E-commerce and many B2B businesses have seasonal patterns. The agent will flag key periods and recommend budget adjustments.

## Related Agents

- **strategist** — Co-leads budget planning with strategic allocation and growth modeling
- **analytics-interpreter** — Provides data analysis for channel performance and optimization decisions
- **media-buyer** — Executes the paid media plan and provides real-time performance data
- **cro-specialist** — Optimizes conversion rates that directly impact ROAS and CAC
