---
description: Design a growth experiment with hypothesis, ICE score, metrics, and success criteria. Ready to execute and measure.
---

# /growth-experiment

Design a structured growth experiment with a clear hypothesis, ICE prioritization score, defined metrics, and success criteria — ready to run and measure.

## What This Command Does

This command takes a growth idea and transforms it into a rigorous experiment framework. Instead of just launching features and hoping for the best, it structures your test with a falsifiable hypothesis, defines the minimum sample size for statistical significance, sets primary and guardrail metrics, establishes clear success criteria before the experiment begins, and creates a timeline with decision points. The output follows the scientific method applied to growth — so you learn something valuable whether the experiment succeeds or fails.

## When to Use

- Testing a new feature's impact on activation, retention, or revenue
- Evaluating a change to onboarding flow, pricing, or packaging
- Running A/B tests on landing pages, email sequences, or ad creative
- Validating a referral, loyalty, or viral growth mechanic
- Testing a new acquisition channel before committing significant budget
- Experimenting with pricing models, trial lengths, or freemium limits
- Prioritizing a backlog of growth ideas using a consistent framework
- Building a culture of experimentation within your team

## How It Works

1. **Captures the idea** — Understands what you want to test and the business context behind it
2. **Formulates the hypothesis** — Structures a falsifiable hypothesis with expected outcome and mechanism
3. **Scores with ICE** — Rates the experiment on Impact, Confidence, and Ease to help you prioritize
4. **Defines metrics** — Sets one primary metric, supporting metrics, and guardrail metrics that must not degrade
5. **Calculates sample size** — Determines how many users or events you need for statistically significant results
6. **Sets success criteria** — Defines what "winning" looks like before the experiment runs, eliminating post-hoc rationalization
7. **Plans execution** — Outlines implementation steps, required resources, and timeline
8. **Creates the decision framework** — Defines what happens if the experiment wins, loses, or is inconclusive

The command delegates to the **growth-hacker** agent, which specializes in experiment design, growth modeling, and rapid iteration frameworks.

## Example Usage

**Input:**
```
/growth-experiment we want to test adding a referral program to our onboarding flow
```

**Output:**

```
GROWTH EXPERIMENT: ONBOARDING REFERRAL PROGRAM
Experiment ID: GE-2026-037
Status: Ready for implementation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HYPOTHESIS

If we add a referral prompt at the end of the onboarding flow
(after the user completes their first key action), then we will
see a 10-15% referral rate among new users, because the moment
of highest satisfaction and engagement is immediately after
experiencing first value — and users are most likely to share
when the product is fresh and exciting.

Null hypothesis: Adding a referral prompt during onboarding has
no significant effect on referral rate or new user acquisition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ICE SCORE: 7.7 / 10

Impact: 8/10
- Referral is a compounding growth lever — each referred user
  can refer more users
- Referred users typically have 25-30% higher LTV than paid
  acquisition
- Could meaningfully reduce blended CAC over time

Confidence: 7/10
- Well-documented pattern: Dropbox, Uber, and Notion all saw
  strong results from onboarding referrals
- Your product has high NPS (62), suggesting users would
  recommend when prompted
- Timing after first value moment is supported by behavioral
  research
- Uncertainty: Your audience (B2B mid-market) may behave
  differently than consumer benchmarks

Ease: 8/10
- Referral prompt UI is a single screen addition
- Unique referral link generation is straightforward
- Reward fulfillment needs to be built but is scoped
- Estimated engineering effort: 1-2 weeks
- No third-party dependencies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIMENT DESIGN

Type: A/B test (50/50 split)
- Control: Standard onboarding flow (no referral prompt)
- Variant: Onboarding flow + referral prompt after first
  key action completion

Referral mechanic:
- Prompt: "Know someone who'd love [Product]? Give them a
  month free — and get one yourself."
- Incentive: Double-sided — referrer gets 1 month free,
  referred user gets 1 month free
- Sharing options: Unique link, email invite, Slack share
- Placement: Post-onboarding success screen, before
  dashboard redirect

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

METRICS

Primary metric:
- Referral send rate: % of new users who share at least
  one referral during onboarding
  Baseline: 0% (no current referral prompt)
  Target: 10-15%

Secondary metrics:
- Referral conversion rate: % of shared referrals that
  convert to signups
  Target: 20-30%
- K-factor contribution: Additional users generated per
  100 new signups
  Target: 5-10 additional users per 100

Guardrail metrics (must not degrade):
- Onboarding completion rate
  Current: 73% — must stay above 70%
- Time to first key action
  Current: 4.2 minutes — must not increase by more than 10%
- Day 7 retention rate
  Current: 41% — must stay above 38%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SAMPLE SIZE & DURATION

Minimum detectable effect: 8% referral rate (conservative)
Statistical significance: 95% confidence level
Statistical power: 80%
Required sample per variant: 450 users
Total sample needed: 900 users

At current signup rate (60 users/day):
- Minimum run time: 15 days
- Recommended run time: 21 days (accounts for weekend and
  day-of-week variation)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUCCESS CRITERIA (defined before launch)

SHIP IT (clear win):
- Referral send rate >= 10% AND
- Guardrail metrics within acceptable range AND
- Statistical significance >= 95%

ITERATE (promising but needs work):
- Referral send rate 5-10% AND
- Guardrail metrics within acceptable range
- Action: Test alternative incentives, timing, or copy

KILL IT (not working):
- Referral send rate < 5% OR
- Any guardrail metric degrades beyond threshold
- Action: Archive learnings, move to next experiment

INCONCLUSIVE:
- Insufficient sample size or runtime
- Action: Extend experiment for one additional cycle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IMPLEMENTATION PLAN

Week 1: Build
- [ ] Design referral prompt UI (designer: 2 days)
- [ ] Build referral link generation system (backend: 2 days)
- [ ] Implement A/B test split and tracking (frontend: 2 days)
- [ ] Set up analytics events and dashboard (data: 1 day)
- [ ] QA referral flow end-to-end

Week 2: Launch
- [ ] Internal team testing (2 days)
- [ ] Launch to 10% traffic for 48 hours (sanity check)
- [ ] Ramp to 50/50 split
- [ ] Daily metric monitoring begins

Week 3-4: Run
- [ ] Monitor guardrail metrics daily
- [ ] Check for sample ratio mismatch at day 7
- [ ] No peeking at primary metric before minimum sample reached
- [ ] Document qualitative feedback from support/sales

Week 5: Decide
- [ ] Analyze results against success criteria
- [ ] Document learnings regardless of outcome
- [ ] Make ship/iterate/kill decision
- [ ] Plan next experiment based on learnings
```

## Important Notes

- **Define success criteria before launching.** The most common experimentation mistake is deciding what "good" looks like after seeing the data. The agent locks in criteria upfront to prevent post-hoc rationalization.
- **Guardrail metrics are as important as the primary metric.** A referral program that boosts sharing but tanks onboarding completion is a net loss. The agent always includes guardrails.
- **Do not peek at results early.** Checking results before reaching minimum sample size leads to false positives. The experiment design includes clear checkpoints.
- **Learn from failures.** An experiment that disproves a hypothesis is just as valuable as one that confirms it. The agent structures documentation to capture learnings either way.
- **ICE scores enable prioritization.** When you have multiple experiment ideas, the ICE framework helps you run the highest-leverage tests first.
- **One variable at a time.** The agent designs experiments that isolate a single variable so you can attribute results with confidence.

## Related Agents

- **growth-hacker** — Primary agent that designs experiment frameworks and growth mechanics
- **analytics-interpreter** — Assists with sample size calculations, statistical analysis, and results interpretation
- **cro-specialist** — Provides conversion optimization expertise for experiments involving user flows
- **copywriter** — Helps craft experiment copy (prompts, CTAs, email variations)
