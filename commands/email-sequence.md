---
description: Design an email automation sequence — welcome, nurture, sales, re-engagement, or post-purchase. Includes subject lines, timing, and content outlines.
---

# /email-sequence

Design complete email automation sequences with strategic timing, compelling subject lines, and structured content outlines for every email in the flow.

## What This Command Does

The `/email-sequence` command creates a fully planned email sequence ready for implementation in your email platform. It covers the strategic architecture (goals, triggers, timing, exit conditions) and the tactical content (subject lines, preview text, body outlines, CTAs) for each email in the sequence. The output gives your team everything needed to build and launch the automation.

The command delegates to the **email-marketer agent**, which specializes in email strategy, deliverability best practices, and conversion-optimized email design patterns.

## When to Use

- You are onboarding new users or customers and need a welcome sequence
- You want to nurture leads from awareness to purchase decision
- You are building a sales sequence for a product launch or promotion
- You need to re-engage inactive users or subscribers
- You are designing a post-purchase sequence (upsell, review request, loyalty)
- You want to create an event-based sequence (webinar follow-up, trial expiration, cart abandonment)
- You need to plan drip campaigns for content delivery or education

## How It Works

1. **Sequence Strategy** — Defines the sequence type, trigger events, goals, and target audience segment
2. **Flow Architecture** — Maps the email sequence with timing intervals, branching logic, and exit conditions
3. **Subject Line Creation** — Writes primary and variant subject lines for each email, optimized for open rates
4. **Content Outlining** — Structures each email's body with key sections, messaging focus, and tone guidance
5. **CTA Strategy** — Defines the primary and secondary calls to action for each email
6. **Timing Optimization** — Sets send delays based on best practices for the sequence type
7. **Performance Framework** — Establishes expected benchmarks and optimization triggers

## Example Usage

**Input:**

```
/email-sequence design a 5-email welcome series for new SaaS trial signups
```

**Output:**

```markdown
# Welcome Sequence: SaaS Trial Signups

## Sequence Overview
- **Trigger:** New trial signup (immediately after email confirmation)
- **Goal:** Activate users to core value within 7 days, convert to paid
- **Exit condition:** User converts to paid plan
- **Audience:** New trial users, all segments

---

## Email 1: Immediate Welcome (Send: Instant)

**Subject:** Welcome to [Product] — start here
**Preview text:** Your account is ready. Here's the fastest path
to value.

**Content outline:**
- Warm, brief welcome (2 sentences max)
- "Here's what to do first" — single most important action
  with screenshot/GIF
- Link to 2-minute quickstart video
- Set expectations: "Over the next 7 days, I'll send you
  tips to get the most from your trial"

**CTA:** Complete your first [core action]

---

## Email 2: Quick Win (Send: Day 1, +24 hours)

**Subject:** The one feature our users can't live without
**Preview text:** Takes 3 minutes to set up. Saves hours
every week.

**Content outline:**
- Lead with the outcome, not the feature
- Step-by-step to set up the highest-value feature
- Brief customer quote or proof point
- "Most users who do this in day 1 are 3x more likely to
  see results"

**CTA:** Set up [feature name] now

---

## Email 3: Social Proof (Send: Day 3)

**Subject:** How [Company] cut their [metric] by 40%
**Preview text:** A real story from a team like yours.

**Content outline:**
- Short customer story (problem, solution, result)
- Connect their use case to the reader's likely situation
- Highlight 2-3 features used in the story
- "You can do the same — here's how"

**CTA:** Try this in your account

---

## Email 4: Overcome Objections (Send: Day 5)

**Subject:** Stuck? Here's what usually helps
**Preview text:** Quick answers to the most common questions.

**Content outline:**
- Acknowledge that learning new tools takes effort
- Address top 3 objections or confusion points (FAQ style)
- Offer help: link to docs, community, or reply to email
- Mention a feature they likely haven't discovered yet

**CTA:** Reply to this email with any questions
**Secondary CTA:** Book a 15-min walkthrough

---

## Email 5: Trial Expiration (Send: Day 7)

**Subject:** Your trial ends in 3 days — here's what you'll lose
**Preview text:** Keep everything you've built so far.

**Content outline:**
- Remind them of what they've accomplished (personalize
  with usage data if available)
- Clear comparison: free vs. paid (what they keep, what
  they lose)
- Simple, transparent pricing reminder
- Urgency without pressure — "no hard sell, just don't
  want you to lose your work"

**CTA:** Upgrade now
**Secondary CTA:** Need more time? Extend your trial

---

## Benchmarks
| Metric         | Target    |
|----------------|-----------|
| Open rate      | 55-65%    |
| Click rate     | 12-18%    |
| Trial to paid  | 15-20%    |
| Unsubscribe    | < 0.5%   |
```

## Important Notes

- Specify the sequence type and audience clearly — a welcome series for B2B SaaS users differs significantly from one for an e-commerce store
- Subject line variants are provided for A/B testing; test one element at a time (length, personalization, emoji, question vs. statement)
- Timing recommendations are starting points — adjust based on your sales cycle length and user behavior data
- The sequence outlines content structure, not final copy; use `/copy` to write full email body copy from these outlines
- Always include an unsubscribe option and comply with CAN-SPAM, GDPR, and other applicable email regulations
- Branching logic (e.g., different paths based on email engagement or in-app behavior) can be requested for more sophisticated sequences

## Related Agents

- **email-marketer** — Primary agent that designs the sequence strategy and structure
- **copywriter** — Write full email copy from the outlines
- **cro-specialist** — Optimize conversion points within the sequence
- **analytics-interpreter** — Analyze sequence performance and identify improvements
- **brand-guardian** — Ensure email content aligns with brand voice
