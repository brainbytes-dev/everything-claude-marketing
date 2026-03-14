---
name: email-sequences
description: Design automated email sequences for welcome, nurture, sales, onboarding, and re-engagement. Use when building email automation flows.
origin: ECM
---

# Email Sequences

## When to Activate

Use this skill when:
- Building automated email sequences (welcome, nurture, sales, onboarding)
- Designing the architecture of email flows (triggers, delays, conditions)
- Planning email cadence and spacing
- Creating re-engagement or winback sequences
- Setting up post-purchase email flows
- Benchmarking sequence performance

## First Questions

Before designing a sequence, clarify:
1. What is the sequence type? (Welcome, nurture, sales, onboarding, re-engagement, post-purchase, winback)
2. What triggers entry into the sequence? (Form submission, purchase, tag, date, inactivity)
3. Who is the audience? (New leads, trial users, customers, lapsed users)
4. What is the desired end action? (Purchase, book a call, activate a feature, renew)
5. What is the product/service price point? (Affects sequence length and aggressiveness)
6. What email platform is being used? (Capabilities vary)
7. Are there existing sequences that could conflict?

## Core Rules

1. **Every sequence needs a single, clear objective.** If you can't state the goal in one sentence, the sequence is unfocused.
2. **Front-load value.** The first 2-3 emails should deliver value with no ask. Earn the right to sell.
3. **Respect the relationship stage.** A welcome sequence is an introduction, not a pitch meeting.
4. **Exit conditions are as important as entry conditions.** Remove people who have already converted or who are in a conflicting sequence.
5. **Test spacing before testing copy.** Wrong timing kills great copy.
6. **Every email must stand alone.** Readers may skip emails — each one should make sense independently.
7. **Behavioral triggers outperform time-based triggers.** "Visited pricing page" beats "Day 5 of sequence."

## Sequence Architecture

### The Building Blocks

```
TRIGGER (what starts the sequence)
    |
    v
DELAY (time between emails)
    |
    v
CONDITION (check before sending — is the person still qualified?)
    |
    v
EMAIL (the message)
    |
    v
BRANCH (if/then logic — what happened after the email?)
    |
    v
NEXT STEP or EXIT
```

### Common Triggers
- Form submission (lead magnet, newsletter, contact form)
- Product purchase or trial signup
- Page visit (pricing, feature, case study)
- Abandoned cart or checkout
- Inactivity (no login for X days, no email open for X days)
- Tag or segment change
- Date-based (subscription renewal, anniversary, birthday)
- Manual enrollment by sales team

### Common Conditions
- Has not purchased / Has purchased
- Has opened previous email / Has not opened
- Has clicked specific link
- Is not in another active sequence
- Lead score above/below threshold
- Has not unsubscribed

### Common Exit Conditions
- Completed desired action (purchased, booked call, activated)
- Unsubscribed
- Entered a higher-priority sequence
- Manually removed by sales
- Reached end of sequence without converting (move to long-term nurture)

## Sequence Types and Templates

### 1. Welcome Sequence (5-7 emails over 14 days)

**Goal:** Introduce the brand, deliver immediate value, set expectations, build trust.

```
Email 1 (Immediate): Welcome + deliver the promised asset
  Subject: "Here's your [lead magnet] + a quick intro"
  Content: Deliver the download, introduce yourself, set expectations for future emails.

Email 2 (Day 2): Your best content piece
  Subject: "The [topic] guide that [specific result]"
  Content: Share your single best piece of content. Establish authority.

Email 3 (Day 4): Story/origin
  Subject: "Why I started [brand/product]"
  Content: Tell the brand's origin story. Build emotional connection.

Email 4 (Day 7): Social proof
  Subject: "How [customer name] achieved [specific result]"
  Content: Customer success story or case study. Build credibility.

Email 5 (Day 10): Address the main objection
  Subject: "The #1 question we get about [topic/product]"
  Content: Tackle the biggest objection or FAQ head-on.

Email 6 (Day 12): Soft introduction to product/service
  Subject: "When you're ready for [next step]"
  Content: Introduce your offer as the natural next step. Not pushy.

Email 7 (Day 14): Direct CTA
  Subject: "[First name], here's your next step"
  Content: Clear call to action with urgency or incentive.
```

### 2. Nurture Sequence (Ongoing, weekly or biweekly)

**Goal:** Maintain relationship, deliver value, keep brand top of mind until ready to buy.

```
Pattern (repeating cycle):
  Email A: Educational content (how-to, guide, framework)
  Email B: Story or case study (social proof, relatability)
  Email C: Curated content (roundup, tools, resources)
  Email D: Engagement prompt (survey, question, reply request)
  [Repeat with new content]
```

**Nurture rules:**
- Never more than 1 email per week (unless they're highly engaged)
- Mix content types to prevent fatigue
- Segment by interest based on click behavior
- Include a soft CTA in every email (but don't push)
- Re-qualify subscribers every 90 days (re-engagement check)

### 3. Sales Sequence (5-8 emails over 7-14 days)

**Goal:** Convert a qualified lead into a customer.

```
Email 1 (Day 0): The problem + your solution
  Subject: "The [problem] costing you [specific loss]"
  Content: Agitate the problem. Introduce your solution as the answer.

Email 2 (Day 2): Social proof deep dive
  Subject: "How [customer] went from [before] to [after]"
  Content: Detailed case study with specific numbers.

Email 3 (Day 4): Objection handling
  Subject: "Is [common objection] holding you back?"
  Content: Address 2-3 common objections with evidence.

Email 4 (Day 6): Product walkthrough
  Subject: "Here's exactly what you get with [product]"
  Content: Feature breakdown tied to benefits. Demo or video.

Email 5 (Day 8): Comparison/alternative
  Subject: "Why [your approach] vs [alternative approach]"
  Content: Honest comparison. Position your differentiator.

Email 6 (Day 10): Urgency trigger
  Subject: "[Deadline/scarcity element] — decision time"
  Content: Legitimate urgency (price increase, cohort close, bonus expiring).

Email 7 (Day 12): Final push
  Subject: "Last chance: [offer summary]"
  Content: Final CTA with everything summarized. Make it easy.

Email 8 (Day 14): Breakup email
  Subject: "Should I stop sending these?"
  Content: Acknowledge they haven't acted. Offer to stay in touch or unsubscribe.
```

### 4. Onboarding Sequence (7-10 emails over 14-30 days)

**Goal:** Activate new users/customers and drive them to the "aha moment."

```
Email 1 (Immediate): Welcome + first step
  Subject: "Welcome! Here's your first step"
  Content: One clear action to take right now. Link to getting started.

Email 2 (Day 1): Quick win
  Subject: "Get your first [result] in 5 minutes"
  Content: Guide them to the fastest possible win with the product.

Email 3 (Day 3): Key feature introduction
  Subject: "Have you tried [feature]?"
  Content: Introduce the feature most correlated with retention.

Email 4 (Day 5): Social proof from new users
  Subject: "[Customer] got [result] in their first week"
  Content: New user success story to build momentum.

Email 5 (Day 7): Progress check
  Subject: "How's your first week going?"
  Content: Check in. Offer help. Link to support/FAQ.

Email 6 (Day 10): Advanced feature
  Subject: "Ready for the next level? Try [feature]"
  Content: Introduce a more advanced capability.

Email 7 (Day 14): Milestone celebration
  Subject: "You've done [milestone]! Here's what's next"
  Content: Celebrate progress. Show what's possible next.

[If trial]: Email 8 (Day 20): Trial ending reminder
  Subject: "Your trial ends in [X] days"
  Content: Summarize what they've accomplished. CTA to upgrade.
```

### 5. Re-Engagement Sequence (3-5 emails over 14-21 days)

**Goal:** Reactivate subscribers who have stopped engaging.

```
Email 1 (Day 0): We miss you
  Subject: "It's been a while, [first name]"
  Content: Acknowledge absence. Offer your best recent content.

Email 2 (Day 5): Value bomb
  Subject: "[Biggest value piece] — no strings attached"
  Content: Deliver exceptional value. No ask.

Email 3 (Day 10): Feedback request
  Subject: "Quick question — what would make these emails better?"
  Content: 1-question survey. Shows you care about their experience.

Email 4 (Day 15): Last chance
  Subject: "Should we part ways?"
  Content: Direct — "If you want to keep hearing from us, click here."

Email 5 (Day 21): Sunset
  Subject: "We're removing you from our list (unless...)"
  Content: Final notice. If no action, remove from active list.
```

### 6. Post-Purchase Sequence (5-7 emails over 30 days)

**Goal:** Confirm, onboard, delight, and encourage repeat purchase or referral.

```
Email 1 (Immediate): Order confirmation + what's next
Email 2 (Day 2): Tips for getting the most out of your purchase
Email 3 (Day 7): Check-in — how's it going?
Email 4 (Day 14): Related product/resource suggestion
Email 5 (Day 21): Request for review or testimonial
Email 6 (Day 30): Loyalty/referral offer
```

### 7. Winback Sequence (3-4 emails over 21 days)

**Goal:** Re-acquire churned customers.

```
Email 1 (Day 0): We want you back + what's new
Email 2 (Day 7): Here's what you're missing (specific features/updates)
Email 3 (Day 14): Special offer to return
Email 4 (Day 21): Last outreach — door is always open
```

## Email Spacing and Cadence

| Sequence Type | Spacing Between Emails | Total Duration |
|--------------|----------------------|----------------|
| Welcome | 2-3 days | 14-21 days |
| Nurture | 5-7 days | Ongoing |
| Sales | 1-3 days | 7-14 days |
| Onboarding | 1-3 days | 14-30 days |
| Re-engagement | 5-7 days | 14-21 days |
| Post-purchase | 3-7 days | 30 days |
| Winback | 5-7 days | 21-30 days |

**Spacing principles:**
- Shorter spacing for time-sensitive sequences (sales, onboarding)
- Longer spacing for relationship-building sequences (nurture)
- Reduce frequency if open rates drop below 15%
- Increase frequency if engagement is high (above 30% open, 5%+ click)

## Performance Benchmarks

| Metric | Welcome | Nurture | Sales | Onboarding |
|--------|---------|---------|-------|------------|
| Open rate | 50-60% | 20-30% | 25-35% | 40-60% |
| Click rate | 10-15% | 2-5% | 3-8% | 10-20% |
| Conversion | 3-5% | 0.5-2% | 2-10% | 30-60% activation |
| Unsubscribe | <0.5% | <0.3% | <1% | <0.3% |

## Quality Gate

Before launching a sequence, verify:
- [ ] Is the sequence goal stated in one clear sentence?
- [ ] Is the entry trigger defined and tested?
- [ ] Are exit conditions set (converted, unsubscribed, entered another sequence)?
- [ ] Does the first email deliver immediate value?
- [ ] Can each email stand alone if previous ones are missed?
- [ ] Is spacing appropriate for the sequence type?
- [ ] Are there conditions preventing overlap with other active sequences?
- [ ] Has the sequence been tested end-to-end with a test contact?
- [ ] Are UTM parameters set for tracking?
- [ ] Is there a plan to review performance after 30 days?
