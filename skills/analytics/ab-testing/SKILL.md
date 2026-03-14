---
name: ab-testing
description: Design, execute, and analyze A/B tests across marketing channels. Use when running experiments on landing pages, emails, ads, or features.
origin: ECM
---

# A/B Testing for Marketing

## When to Activate

- Testing landing page variations to improve conversion rate
- Optimizing email subject lines, copy, or design
- Comparing ad creatives, headlines, or CTAs
- Evaluating pricing page layouts or offers
- Running feature experiments for product-led growth
- Resolving internal debates about what works with data instead of opinions
- Building a systematic testing program

## First Questions

1. What are you testing? (Landing page, email, ad, pricing, feature)
2. What is your primary conversion metric? (Sign-up, purchase, click, engagement)
3. What is your current conversion rate for this metric?
4. How much traffic or volume do you have? (Monthly visitors, email list size, daily ad impressions)
5. What is the minimum improvement that would be meaningful to the business?
6. What testing tool are you using? (Google Optimize successor, VWO, Optimizely, LaunchDarkly, in-house)
7. Have you run tests before? What has your win rate been?

## Hypothesis Formation

### The If/Then/Because Format
Every test must start with a hypothesis. No hypothesis = no learning regardless of outcome.

**Template:**
> **If** we [change this specific thing],
> **then** [this metric] will [increase/decrease] by [estimated amount],
> **because** [reason based on data, research, or user insight].

**Examples:**
- "If we shorten the sign-up form from 6 fields to 3, then sign-up completion rate will increase by 15%, because our funnel analysis shows 40% drop-off at the form step and user research indicates friction from too many fields."
- "If we add social proof (customer count) above the fold on pricing, then trial sign-ups will increase by 10%, because our exit surveys show 'trust' as the #2 concern for prospects."

### What Makes a Good Hypothesis
- Based on data or user insight, not a hunch.
- Specific about what changes and what metric is affected.
- Includes a directional estimate (forces you to think about magnitude).
- Falsifiable — you can clearly prove it wrong.

## Sample Size Calculation

### The Formula (Simplified)
You need enough data to detect a real difference. The key inputs:

1. **Baseline conversion rate** — your current rate.
2. **Minimum detectable effect (MDE)** — the smallest improvement worth detecting.
3. **Statistical significance level** — typically 95% (p < 0.05).
4. **Statistical power** — typically 80% (probability of detecting a real effect).

### Quick Reference Table

| Baseline CVR | MDE (Relative) | Sample Size Per Variant |
|-------------|----------------|------------------------|
| 2% | 20% (2.0% → 2.4%) | ~25,000 |
| 5% | 10% (5.0% → 5.5%) | ~30,000 |
| 5% | 20% (5.0% → 6.0%) | ~8,000 |
| 10% | 10% (10% → 11%) | ~15,000 |
| 10% | 20% (10% → 12%) | ~4,000 |
| 20% | 10% (20% → 22%) | ~7,500 |
| 20% | 20% (20% → 24%) | ~2,000 |

### Practical Guidance
- Use an online calculator (Evan Miller's is the standard: evanmiller.org/ab-testing/sample-size.html).
- If your required sample size is more traffic than you get in 4 weeks, either increase MDE (accept you can only detect bigger effects) or find a higher-traffic test location.
- Never run a test you don't have the traffic for. You'll get inconclusive results and waste time.

## Test Duration Planning

### Minimum Duration Rules
- **Minimum 1 full business cycle** (usually 7 days) to capture day-of-week variation.
- **Minimum 2 weeks** for most marketing tests.
- **Maximum 8 weeks** — beyond this, external factors contaminate results.
- Always run for full weeks (end on the same day you started).

### Duration Calculation
`Duration = Required sample size per variant × Number of variants / Daily eligible traffic`

Example: Need 8,000 per variant, 2 variants, 1,000 daily visitors = 16 days minimum. Round up to 3 full weeks (21 days).

### Seasonal Considerations
- Avoid running tests across major holidays or events (Black Friday, product launches) unless you're specifically testing holiday performance.
- If you must test during unusual periods, note it in your analysis and consider re-running.

## Statistical Significance

### P-Value Explained Simply
The p-value answers: "If there were truly no difference between A and B, what is the probability of seeing results this extreme by chance?"

- **p < 0.05 (95% confidence):** Standard threshold. 5% chance of a false positive.
- **p < 0.01 (99% confidence):** Use for high-stakes decisions (pricing, major redesigns).
- **p < 0.10 (90% confidence):** Acceptable for low-risk, fast-iteration tests (email subject lines).

### Confidence Intervals
- More informative than p-values alone.
- A result of "+8% conversion rate, 95% CI [+2%, +14%]" tells you more than "p = 0.03."
- If the confidence interval includes zero, the result is not statistically significant.
- Width of the CI tells you precision — narrow is better.

### Practical Significance vs. Statistical Significance
A result can be statistically significant but practically meaningless.
- Example: +0.1% conversion lift, p = 0.04. Statistically significant, but is 0.1% worth the implementation effort?
- Always define your MDE before the test. If the observed lift is below MDE, consider it a "no meaningful difference" even if significant.

## Common Testing Mistakes

### 1. Peeking at Results Early
- **The problem:** Checking results daily and stopping when you see significance inflates false positive rates dramatically (up to 30%+).
- **The fix:** Set your sample size and duration in advance. Do not check results until the planned end date. If you must monitor, use sequential testing methods (see below).

### 2. Stopping Early When You See Significance
- **The problem:** Same as peeking. Early significance often regresses to the mean.
- **The fix:** Commit to the full test duration. The only exception: stop if a variant is clearly harmful (e.g., conversion rate drops 50%+ — this is a guardrail, not optimization).

### 3. Too Many Variants
- **The problem:** Testing 5 variants splits your traffic 5 ways, requiring 5x the sample size and duration.
- **The fix:** Limit to 2-3 variants for most tests. Use multivariate testing only with very high traffic.

### 4. Testing Too Many Things at Once
- **The problem:** Changing headline, image, CTA, and layout simultaneously means you can't attribute the effect.
- **The fix:** Isolate variables. Change one thing per test, or use structured multivariate testing.

### 5. No Hypothesis
- **The problem:** Testing random ideas without learning intent. Even winning tests don't generate insight.
- **The fix:** Always write the hypothesis before building the test.

### 6. Ignoring Segment Effects
- **The problem:** Overall results hide that mobile users responded differently from desktop, or new visitors from returning.
- **The fix:** Pre-define segments for sub-analysis. But don't go fishing — correct for multiple comparisons.

### 7. Survivorship Bias in Email Tests
- **The problem:** Testing send time or subject line on only people who open, ignoring those who don't.
- **The fix:** Measure against the full send population, not just openers.

## Multi-Armed Bandit vs. Fixed-Horizon Testing

### Fixed-Horizon (Traditional A/B Test)
- Pre-set sample size and duration.
- Traffic split evenly between variants.
- Analyze only at the end.
- **Best for:** Learning and understanding causal effects. Making permanent decisions.

### Multi-Armed Bandit
- Dynamically shifts traffic toward the winning variant during the test.
- Maximizes conversions during the test period.
- Slower to reach statistical certainty.
- **Best for:** Short-lived campaigns (limited-time offers), when opportunity cost of showing a losing variant is high, when learning is less important than immediate performance.

### When to Use Which
- Use fixed-horizon for strategic decisions (permanent page changes, pricing).
- Use bandit for tactical optimization (email subject lines for a one-time send, short promotional campaigns).

## Test Documentation Template

### Pre-Test Document
```
Test Name: [Descriptive name]
Test ID: [Tracking ID]
Date: [Start date — End date]
Owner: [Name]

HYPOTHESIS:
If [change], then [metric] will [direction] by [amount],
because [evidence/reasoning].

TEST DESIGN:
- Primary metric: [Metric name and definition]
- Secondary metrics: [List]
- Guardrail metrics: [Metrics that must NOT degrade]
- Variants:
  - Control (A): [Description]
  - Treatment (B): [Description]
- Traffic allocation: [50/50, 70/30, etc.]
- Targeting: [All visitors, segment, new only, etc.]
- Required sample size: [Per variant]
- Expected duration: [Days/weeks]
- Significance threshold: [95%, 99%]

IMPLEMENTATION:
- Tool: [Testing platform]
- QA checklist: [Verified on mobile, desktop, key browsers]
```

### Post-Test Document
```
RESULTS:
- Duration: [Actual days run]
- Total sample: [Control: N, Treatment: N]
- Primary metric:
  - Control: [Rate]
  - Treatment: [Rate]
  - Relative lift: [%]
  - Confidence: [%]
  - p-value: [value]
  - 95% CI: [lower, upper]
- Secondary metrics: [Same format]
- Guardrail metrics: [Any degradation?]

SEGMENT ANALYSIS:
- Mobile vs Desktop: [Findings]
- New vs Returning: [Findings]
- [Other relevant segments]

DECISION: [Ship treatment / Keep control / Iterate and retest]
LEARNINGS: [What did we learn? How does this inform future tests?]
NEXT STEPS: [Implementation plan or follow-up test]
```

## Testing Program Management

### Building a Testing Culture
1. **Maintain a test backlog.** Prioritize by expected impact × ease of implementation (ICE or PIE framework).
2. **Set a testing velocity goal.** 2-4 tests per month is a good starting target for most teams.
3. **Share results broadly.** Monthly testing review with key stakeholders. Celebrate learnings, not just wins.
4. **Build a test knowledge base.** Archive all test documents. Tag by channel, page, hypothesis type. Future tests should build on past learnings.
5. **Track win rate.** Industry average is ~20-30% of tests produce a significant winner. If your win rate is much higher, your hypotheses might be too safe. If much lower, improve hypothesis quality.

### Prioritization Framework (ICE Score)
- **Impact:** How big is the potential improvement? (1-10)
- **Confidence:** How confident are you in the hypothesis? (1-10)
- **Ease:** How easy is it to implement and run? (1-10)
- Score = (Impact + Confidence + Ease) / 3
- Run highest-scoring tests first.

## Quality Gate

Before launching a test:
- [ ] Is there a written hypothesis in if/then/because format?
- [ ] Have you calculated the required sample size and planned duration?
- [ ] Do you have enough traffic to reach significance within 4-6 weeks?
- [ ] Is only one variable being changed (or is it a structured multivariate test)?
- [ ] Are primary, secondary, and guardrail metrics defined?
- [ ] Has the variant been QA'd on mobile, desktop, and major browsers?
- [ ] Is the test document completed and shared?
- [ ] Have you committed to not peeking before the planned end date?

Before calling a test:
- [ ] Did the test run for the full planned duration?
- [ ] Did both variants reach the required sample size?
- [ ] Is the result statistically significant at your pre-defined threshold?
- [ ] Is the result practically significant (above your MDE)?
- [ ] Have you checked guardrail metrics for degradation?
- [ ] Have you documented learnings regardless of outcome?
