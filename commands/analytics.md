---
description: Interpret marketing data, build reports, or design measurement frameworks. Provides insights with actionable recommendations.
---

# /analytics

Interpret marketing data, diagnose performance changes, build reporting frameworks, and turn numbers into actionable insights that drive decisions.

## What This Command Does

The `/analytics` command helps you make sense of marketing data. Whether you are investigating a sudden metric change, building a reporting dashboard, or designing a measurement framework from scratch, this command translates raw data into clear insights and concrete next steps. It goes beyond describing what happened to explain why it likely happened and what to do about it.

The command delegates to the **analytics-interpreter agent**, which applies statistical thinking, marketing attribution models, and diagnostic frameworks to analyze your data and produce actionable recommendations.

## When to Use

- A key metric changed significantly and you need to diagnose why
- You want to build a marketing dashboard or reporting framework
- You need to interpret campaign performance data and make optimization decisions
- You are setting up tracking, attribution, or measurement for a new initiative
- You want to calculate ROI, LTV, CAC, or other marketing economics metrics
- You need to present marketing performance to leadership with clear narratives
- You want to design experiments with proper measurement methodology

## How It Works

1. **Data Assessment** — Reviews the data you provide, identifies what is available and what is missing
2. **Diagnostic Analysis** — Applies structured diagnostic frameworks to identify root causes of performance changes
3. **Contextual Interpretation** — Considers external factors (seasonality, market changes, algorithm updates) alongside internal factors
4. **Insight Extraction** — Identifies the most significant findings and their business implications
5. **Recommendation Development** — Produces specific, prioritized actions based on the analysis
6. **Framework Design** — When requested, builds measurement frameworks, KPI hierarchies, or reporting templates

## Example Usage

**Input:**

```
/analytics our email open rates dropped 15% this month — what should we investigate?
```

**Output:**

```markdown
# Diagnostic Analysis: Email Open Rate Decline (15%)

## Initial Assessment
A 15% drop in open rates is significant and typically has one of
three root causes: deliverability issues, audience quality changes,
or content/timing shifts. Here's a structured investigation plan.

## Priority 1: Deliverability Check (Most Likely Cause)

Investigate these first — they explain 60%+ of sudden open rate drops:

1. **Check domain reputation**
   - Review Google Postmaster Tools for domain reputation changes
   - Check if your IP was added to any blacklists (use MXToolbox)
   - Look for bounce rate spikes — hard bounces above 2% signal
     list quality issues

2. **Review authentication records**
   - Verify SPF, DKIM, and DMARC records haven't changed
   - Check if any DNS changes were made this month
   - Confirm your sending domain matches authentication records

3. **Examine inbox placement**
   - If possible, run an inbox placement test (GlockApps, Litmus)
   - Check if Gmail, Outlook, or Yahoo specifically are affected
   - Look at open rates by email provider — if one dropped
     sharply, it's a provider-specific issue

## Priority 2: Audience & List Changes

4. **List growth source audit**
   - Did you add a new lead source or import a list this month?
   - New subscribers from low-quality sources dilute open rates
   - Check open rates for new vs. existing subscribers separately

5. **Segment analysis**
   - Break open rates by segment: new vs. existing, active vs.
     dormant, source/channel
   - If only one segment declined, the cause is segment-specific

## Priority 3: Content & Timing Factors

6. **Subject line performance**
   - Compare this month's subject lines to previous months
   - Check average subject line length, personalization usage,
     and tone
   - Did you change your subject line approach?

7. **Send time and frequency**
   - Did you change send times or increase frequency?
   - Check if sends landed on holidays or atypical days
   - Higher frequency can cause fatigue and lower opens

## Priority 4: External Factors

8. **Apple MPP impact**
   - If your audience is iOS-heavy, Mail Privacy Protection
     can inflate or deflate open rates unpredictably
   - Check the ratio of "machine opens" vs. real opens

9. **Seasonality baseline**
   - Compare to the same month last year, not just last month
   - Some industries see natural open rate dips in certain months

## Recommended Action Plan

| Step | Action                        | Timeline  |
|------|-------------------------------|-----------|
| 1    | Check Postmaster Tools        | Today     |
| 2    | Run blacklist check           | Today     |
| 3    | Segment open rates by cohort  | This week |
| 4    | Audit new list sources        | This week |
| 5    | Test inbox placement          | This week |
| 6    | Review send frequency changes | This week |

## What to Report
Once you've gathered this data, share the findings and I can
help interpret the results and build a recovery plan.
```

## Important Notes

- Share actual data whenever possible — specific numbers, time periods, segments, and context produce far better analysis than vague descriptions
- The agent interprets data you provide but does not have access to your analytics platforms; export relevant data or describe the numbers
- Correlation is not causation — the agent will flag likely causes but recommend validation before making major strategic changes
- For proper A/B test analysis, include sample sizes, confidence levels, and test duration alongside results
- Marketing attribution is inherently imperfect; the agent will note limitations and recommend multi-touch attribution approaches when appropriate
- Privacy regulations (GDPR, CCPA) affect data availability; the agent accounts for these constraints in measurement framework design

## Related Agents

- **analytics-interpreter** — Primary agent for data analysis and reporting
- **cro-specialist** — Conversion rate analysis and optimization
- **paid-ads-optimizer** — Paid channel performance analysis
- **seo-analyst** — Organic search performance analysis
- **strategist** — Connect analytics insights to broader marketing strategy
