---
description: Design A/B tests with clear hypotheses, success metrics, sample size requirements, and duration estimates.
---

# /ab-test

Design rigorous A/B tests with structured hypotheses, defined success metrics, calculated sample size requirements, estimated test durations, and analysis plans.

## What This Command Does

The `/ab-test` command takes your testing idea and transforms it into a methodologically sound experiment design. It ensures your test has a clear hypothesis, measurable outcomes, sufficient statistical power, and a defined analysis plan before you invest development and traffic resources. The output is a complete test brief that your engineering, design, and analytics teams can execute against.

The command delegates to the **cro-specialist agent**, which applies conversion rate optimization expertise and statistical testing methodology to design experiments that produce reliable, actionable results.

## When to Use

- You want to test a new page design, layout, or content variation against the current version
- You are optimizing conversion rates on landing pages, signup flows, or checkout processes
- You need to validate a hypothesis about user behavior before committing to a full redesign
- You want to test pricing page layouts, CTA copy, or value proposition framing
- You are running email subject line tests and need proper methodology
- You want to test changes to onboarding flows or feature adoption prompts
- You need to justify a proposed change to stakeholders with data

## How It Works

1. **Hypothesis Formulation** — Structures your test idea into a formal hypothesis with independent variable, dependent variable, and expected outcome
2. **Metric Definition** — Defines primary and secondary success metrics with clear measurement methods
3. **Variant Design** — Specifies exactly what changes between control and treatment, and why those changes are expected to impact the metric
4. **Sample Size Calculation** — Determines how many visitors or users you need for statistically significant results at your desired confidence level
5. **Duration Estimation** — Estimates how long the test needs to run based on your traffic volume and required sample size
6. **Segmentation Plan** — Identifies audience segments to analyze separately for heterogeneous treatment effects
7. **Analysis Plan** — Defines how results will be evaluated, including what constitutes a winner and when to stop the test

## Example Usage

**Input:**

```
/ab-test we want to test a new pricing page layout against the current one
```

**Output:**

```markdown
# A/B Test Design: Pricing Page Layout

## Test Overview
- **Test name:** PRICE-2026-Q1-Layout
- **Test type:** A/B (two variants)
- **Page:** /pricing
- **Traffic allocation:** 50/50

---

## Hypothesis

**If** we restructure the pricing page to lead with the most
popular plan (highlighted, centered) and simplify the feature
comparison table to show only differentiated features,

**Then** we expect the plan selection rate to increase by at
least 10% (relative),

**Because** current analytics show 68% of visitors scroll past
all three plans without clicking, suggesting decision paralysis
from equal visual weight and an overwhelming feature matrix.

---

## Variants

### Control (A): Current Pricing Page
- Three plans displayed with equal visual weight, left to right
- Full feature comparison table (42 rows)
- "Start free trial" CTA on each plan

### Treatment (B): Redesigned Pricing Page
- Most popular plan (Growth) visually highlighted and centered
- "Most Popular" badge added
- Feature comparison reduced to 12 differentiated features only
- "See all features" expandable section for full comparison
- Same CTAs and pricing — only layout and information hierarchy
  changes

### What stays the same (controls):
- Pricing amounts
- Plan names
- CTA text and button color
- Page header and footer
- No other page changes during test period

---

## Metrics

### Primary Metric
**Plan selection rate** — Percentage of pricing page visitors
who click any "Start free trial" button.
- Current baseline: 8.2%
- Minimum detectable effect: 10% relative lift (8.2% to 9.0%)

### Secondary Metrics
- **Plan mix distribution** — Does the redesign shift which
  plan visitors choose?
- **Time on page** — Does the simpler layout reduce decision
  time?
- **Scroll depth** — Do more visitors reach the CTA area?
- **Downstream conversion** — Do visitors from Treatment B
  complete trial signup at the same or higher rate?

### Guardrail Metrics (must not degrade)
- Trial signup completion rate (post-pricing page)
- Support ticket volume related to pricing questions
- Bounce rate should not increase by more than 5% relative

---

## Sample Size & Duration

### Calculation Parameters
- Baseline conversion rate: 8.2%
- Minimum detectable effect: 10% relative (0.82 percentage points)
- Statistical significance level: 95% (alpha = 0.05)
- Statistical power: 80% (beta = 0.20)
- Test type: Two-tailed

### Required Sample Size
- **Per variant:** 22,400 visitors
- **Total:** 44,800 visitors

### Estimated Duration
- Current daily pricing page traffic: ~1,600 visitors/day
- Estimated test duration: **28 days** (4 weeks)
- Run for full weeks to account for day-of-week variation

---

## Segmentation Plan

Analyze results separately for:
1. **New vs. returning visitors** — returning visitors may
   prefer familiar layout
2. **Traffic source** — paid vs. organic visitors may respond
   differently
3. **Device type** — layout changes affect mobile and desktop
   differently
4. **Geography** — if you serve multiple markets

---

## Analysis Plan

### Decision Framework
| Outcome                         | Action                        |
|---------------------------------|-------------------------------|
| Treatment wins at 95% sig.      | Implement Treatment B         |
| No significant difference       | Keep Control, test new variant|
| Treatment loses at 95% sig.     | Keep Control, investigate why |
| Guardrail metric degraded       | Stop test, investigate        |

### When to Call the Test
- **Do not** peek at results before day 14 (minimum)
- Evaluate at day 28 (target duration)
- If clearly winning/losing by day 21 with sufficient sample,
  may call early with statistician review
- **Never** stop a test early because it "looks like it's winning"
  without sufficient sample size

### Post-Test Actions
- Document results in experiment log regardless of outcome
- If Treatment wins: implement and monitor for 2 weeks post-launch
- Run a follow-up test on the next highest-impact element
- Share learnings with broader team
```

## Important Notes

- Provide your current conversion rate and daily traffic volume if known — this dramatically improves sample size and duration estimates
- Test one change at a time when possible; multivariate tests require significantly more traffic and are harder to interpret
- The minimum detectable effect should be practically meaningful, not just statistically detectable — a 0.1% lift may be significant but not worth the engineering effort
- Always run tests for full weeks to avoid day-of-week bias, even if you reach sample size mid-week
- Avoid peeking at results before the planned evaluation point; repeated significance testing inflates false positive rates
- Server-side testing is preferred over client-side for pricing and checkout tests to avoid layout flicker and ensure accurate measurement
- Consider the opportunity cost of testing — pages with very low traffic may take months to reach significance, making testing impractical

## Related Agents

- **cro-specialist** — Primary agent that designs the experiment methodology
- **analytics-interpreter** — Analyze test results and statistical significance
- **copywriter** — Create copy variants for content-focused tests
- **paid-ads-optimizer** — Design ad creative tests with proper methodology
- **strategist** — Prioritize which tests to run based on expected business impact
