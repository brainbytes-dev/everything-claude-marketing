---
name: cohort-analysis
description: Perform cohort analysis to understand customer behavior, retention, and lifetime value over time. Use when analyzing retention, LTV, or user behavior patterns.
origin: ECM
---

# Cohort Analysis for Marketing

## When to Activate

- Analyzing customer retention rates and identifying drop-off points
- Estimating customer lifetime value (LTV) for budget planning
- Comparing the quality of customers acquired from different channels or campaigns
- Understanding how product changes affect user behavior over time
- Evaluating the impact of onboarding improvements
- Segmenting users by behavior to personalize marketing
- Presenting retention or LTV data to executives or investors

## First Questions

1. What type of cohort analysis do you need? (Acquisition, behavioral, segment-based)
2. What is the key event you're tracking? (Purchase, login, feature usage, subscription renewal)
3. What time granularity makes sense? (Daily, weekly, monthly cohorts)
4. How far back does your data go? (Need at least 3-6 months for meaningful patterns)
5. What tool or data source will you use? (SQL database, analytics platform, spreadsheet)
6. What action do you want to take based on the results? (Improve retention, estimate LTV, evaluate channels)

## Cohort Types

### Acquisition Cohorts
Group users by when they signed up or made their first purchase.

- **Use case:** "How do January sign-ups retain compared to February sign-ups?"
- **Best for:** Tracking retention over time, measuring impact of product/onboarding changes, LTV estimation.
- **Time basis:** Sign-up date, first purchase date, install date.

### Behavioral Cohorts
Group users by actions they took (regardless of when they signed up).

- **Use case:** "Do users who complete onboarding retain better than those who don't?"
- **Best for:** Identifying activation milestones, proving the value of specific features, informing product development.
- **Action basis:** Completed onboarding, used feature X, invited a teammate, made a second purchase.

### Segment Cohorts
Group users by shared characteristics.

- **Use case:** "Do enterprise customers retain differently from SMB customers?"
- **Best for:** Channel comparison, persona validation, pricing tier analysis.
- **Segment basis:** Acquisition channel, plan type, company size, geography, persona.

## Retention Cohort Analysis

### Building a Retention Cohort Table

**Step 1: Define the cohort.**
Group users by the period they first appeared (e.g., month of sign-up).

**Step 2: Define the retention event.**
What counts as "retained"? (Logged in, made a purchase, used a core feature, was an active subscriber)

**Step 3: Build the table.**

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 4 | Month 5 |
|--------|---------|---------|---------|---------|---------|---------|
| Jan | 1,000 | 450 (45%) | 320 (32%) | 280 (28%) | 250 (25%) | 230 (23%) |
| Feb | 1,200 | 540 (45%) | 396 (33%) | 348 (29%) | 312 (26%) | — |
| Mar | 900 | 432 (48%) | 315 (35%) | 279 (31%) | — | — |
| Apr | 1,100 | 550 (50%) | 407 (37%) | — | — | — |

**Step 4: Read the table.**
- **Rows:** Compare cohorts against each other (is retention improving over time?).
- **Columns:** Understand the drop-off curve (where is the biggest drop?).
- **Diagonal:** What is happening right now across all cohorts.

### Key Retention Metrics
- **Month 1 Retention:** The most critical drop-off point. Tells you about activation quality.
- **Retention Curve Shape:** Does it flatten (good) or keep declining (bad)?
- **Steady-State Retention:** Where the curve flattens. This is your "core retained" percentage.
- **Retention Half-Life:** How many periods until you've lost 50% of the cohort.

### Interpreting Retention Patterns

**Healthy pattern:** Steep initial drop, then curve flattens by Month 3-4. Steady-state retention of 20%+ (varies by industry).

**Unhealthy pattern:** Continuous decline without flattening. Indicates product-market fit issues or lack of habit formation.

**Improving pattern:** Newer cohorts retain better at the same time period. Indicates product/onboarding improvements are working.

**Degrading pattern:** Newer cohorts retain worse. Could indicate declining acquisition quality (scaling into worse traffic) or product issues.

## Revenue Cohort Analysis

### Revenue Retention Table
Same structure as user retention, but tracking cumulative or periodic revenue per cohort.

| Cohort | Month 0 | Month 1 | Month 2 | Month 3 |
|--------|---------|---------|---------|---------|
| Jan (100 customers) | $5,000 | $4,200 | $4,500 | $4,800 |
| Feb (120 customers) | $6,000 | $5,100 | $5,400 | — |

### Net Revenue Retention (NRR)
- **NRR > 100%:** Revenue from a cohort grows over time (expansion exceeds churn). This is the gold standard for SaaS.
- **NRR = 100%:** Revenue stays flat (churn exactly equals expansion).
- **NRR < 100%:** Revenue shrinks over time. Must acquire new customers just to maintain revenue.

### Revenue Expansion Signals
- Users upgrading plans (upsell).
- Users adding seats or usage (expansion).
- Users purchasing add-ons (cross-sell).
- Track these separately from base retention to understand growth levers.

## Cohort Visualization

### Retention Heatmap
The most powerful cohort visualization. Color-code retention percentages.

```
               Period 0  Period 1  Period 2  Period 3  Period 4
Jan 2026       ██████    ████      ███       ███       ██
               100%      45%       32%       28%       25%

Feb 2026       ██████    ████      ███       ███
               100%      45%       33%       29%

Mar 2026       ██████    █████     ████
               100%      48%       35%

Apr 2026       ██████    █████
               100%      50%
```

**Color coding:**
- Dark green: >50% retention
- Medium green: 30-50%
- Yellow: 20-30%
- Orange: 10-20%
- Red: <10%

### Retention Curve Chart
- X-axis: Time period since first event (Month 0, 1, 2, 3...)
- Y-axis: Retention percentage (0-100%)
- Each line is a cohort.
- **What to look for:** Lines converging (flattening), newer lines above older lines (improving).

### Cumulative Revenue Per Cohort
- X-axis: Time since acquisition
- Y-axis: Cumulative revenue per user
- Slope of the line = revenue velocity
- Where lines are at Month 12 = your 1-year LTV

## LTV Estimation from Cohorts

### Method 1: Simple Cohort LTV
1. Take your oldest cohort with enough data (12+ months).
2. Sum cumulative revenue per customer over the observed period.
3. If retention has flattened, project forward using the steady-state rate.

**Formula for projection:**
`Projected LTV = Observed cumulative revenue + (Monthly revenue at steady state × Remaining months / (1 + monthly discount rate))`

### Method 2: Retention-Based LTV
1. Average revenue per active user per period (ARPU).
2. Retention rate per period from cohort data.
3. `LTV = ARPU × (1 / churn rate)` for flat retention.
4. For curved retention, sum: `LTV = Σ (ARPU × retention rate at period n)` for n periods.

### Method 3: Cohort LTV by Channel
Build separate LTV tables for each acquisition channel.

| Channel | Month 1 ARPU | Month 6 Retention | 12-Month LTV | CAC | LTV:CAC |
|---------|-------------|-------------------|---------------|-----|---------|
| Organic Search | $50 | 35% | $420 | $30 | 14:1 |
| Paid Social | $45 | 22% | $280 | $85 | 3.3:1 |
| Referral | $55 | 40% | $510 | $25 | 20:1 |

This is where cohort analysis becomes incredibly powerful for budget allocation.

## Identifying Behavioral Patterns

### Activation Analysis
1. Define 3-5 candidate activation actions (completed profile, used core feature, invited team, connected integration).
2. Build behavioral cohorts: users who did each action in their first 7 days vs. those who didn't.
3. Compare 30-day and 90-day retention between groups.
4. The action with the biggest retention gap is likely your activation metric.

**Example finding:** "Users who create their first project within 48 hours have 3x higher 90-day retention (45% vs. 15%)."

### Power User Identification
1. Define usage tiers (light: 1-2 sessions/week, moderate: 3-5, heavy: 6+).
2. Build cohorts by usage tier.
3. Track how users move between tiers over time.
4. Identify what behaviors predict movement from light to heavy.

### Churn Prediction Signals
1. Track engagement metrics for churned users in the 30 days before churn.
2. Common pre-churn signals: declining login frequency, reduced feature usage, support ticket spikes, failed payment not resolved.
3. Build an early warning system based on these signals.

## Cohort Comparison Framework

### Channel Quality Comparison
| Metric | Organic | Paid Search | Paid Social | Referral |
|--------|---------|------------|-------------|----------|
| Volume (Monthly) | 500 | 800 | 1,200 | 200 |
| Month 1 Retention | 52% | 40% | 30% | 58% |
| Month 6 Retention | 35% | 25% | 15% | 42% |
| 6-Month LTV | $380 | $300 | $200 | $450 |
| CAC | $30 | $65 | $45 | $20 |
| 6-Month LTV:CAC | 12.7x | 4.6x | 4.4x | 22.5x |

**Insight pattern:** Paid social brings volume but lower-quality users. Referral brings highest-quality but limited scale. Budget optimization: invest in scaling referral before scaling paid social.

### Onboarding Improvement Tracking
Compare cohorts before and after an onboarding change:
- Pre-change cohorts (3 months): Average Month 1 retention = 35%
- Post-change cohorts (3 months): Average Month 1 retention = 42%
- Improvement: +7 percentage points = +20% relative improvement
- Statistical test: Is this within normal variation or a real improvement?

## Cohort Analysis Template

### Setup Checklist
1. [ ] Define cohort grouping (acquisition date, action, segment)
2. [ ] Define retention/success event
3. [ ] Choose time granularity (daily, weekly, monthly)
4. [ ] Pull data for at least 6 months of cohorts
5. [ ] Build the cohort table (raw numbers and percentages)
6. [ ] Create heatmap visualization
7. [ ] Create retention curve overlay chart
8. [ ] Calculate key metrics (steady-state retention, half-life, LTV)

### Analysis Framework
1. **Overall trend:** Is retention improving, declining, or stable across cohorts?
2. **Critical drop-off:** Where is the biggest percentage drop? (Usually Month 0 → Month 1)
3. **Stabilization point:** At what period does retention flatten?
4. **Segment differences:** Do different channels, plans, or personas retain differently?
5. **Behavioral drivers:** What actions correlate with higher retention?
6. **Revenue impact:** What does the retention pattern mean for LTV and payback period?

## Actionable Insights from Cohort Data

### If Month 1 retention is below 40% (for most SaaS)
- Focus on activation, not acquisition. You're losing users before they get value.
- Audit the onboarding experience. Reduce time-to-value.
- Implement triggered re-engagement for users who haven't completed key actions.

### If retention never flattens
- Product-market fit concern. Users try it but don't form a habit.
- Interview churned users. Understand why they leave.
- Look for a subset of users who DO retain — what's different about them?

### If newer cohorts retain worse than older ones
- Check acquisition channel mix. Are you scaling into lower-quality channels?
- Check for product changes that may have degraded the experience.
- Evaluate market saturation — are you moving beyond early adopters?

### If one channel's cohorts dramatically outperform others
- Double down on scaling that channel.
- Study what's different about those users. Can you find similar users elsewhere?
- Adjust your CAC targets per channel based on LTV differences.

## Quality Gate

Before presenting cohort analysis:
- [ ] Have you used absolute numbers alongside percentages? (Small cohorts can show misleading percentages)
- [ ] Have you accounted for cohort size differences?
- [ ] Is the time period long enough for meaningful patterns? (Minimum 3-6 months of data)
- [ ] Have you defined what "retained" means clearly and consistently?
- [ ] Have you checked for data quality issues? (Duplicate users, bot traffic, test accounts)
- [ ] Are your visualizations readable and properly labeled?
- [ ] Have you translated findings into specific, actionable recommendations?
- [ ] Have you noted confidence levels — which patterns are strong vs. tentative?
