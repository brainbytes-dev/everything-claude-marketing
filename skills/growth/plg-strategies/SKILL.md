---
name: plg-strategies
description: Product-led growth strategies for SaaS and digital products. Use when building self-serve acquisition, activation, and expansion motions.
origin: ECM
---

# Product-Led Growth (PLG) Strategies

## When to Activate

- Building a self-serve acquisition motion for a SaaS product
- Designing freemium or free trial experiences
- Optimizing user activation and time-to-value
- Building in-product upsell and expansion triggers
- Defining product-qualified leads (PQLs) for sales handoff
- Evaluating PLG vs. sales-led vs. hybrid go-to-market approach
- Diagnosing poor trial-to-paid conversion rates

## First Questions

1. What is your current GTM motion? (Sales-led, PLG, hybrid, channel)
2. Can users experience core product value without talking to sales?
3. What is your product's natural time-to-value? (Minutes, hours, days, weeks)
4. Who is the end user vs. the buyer? (Same person, or user adopts then buyer approves?)
5. What is your pricing model? (Per seat, usage-based, flat rate, tiered)
6. What does your current trial/freemium experience look like?
7. What is your trial-to-paid conversion rate? (Benchmark: 2-5% freemium, 15-25% free trial)

## PLG Fundamentals

### What PLG Is
Product-led growth means the product itself is the primary driver of acquisition, activation, retention, and expansion. Users discover, try, adopt, and pay for the product through self-serve experiences.

### What PLG Is Not
- Not "no sales team." Most successful PLG companies have sales (PLG + sales-assist).
- Not "make it free and they will come." Freemium without a conversion strategy is just free.
- Not only for simple products. Complex products can be PLG with the right onboarding design.

### PLG Prerequisites
Your product should have most of these characteristics:
- Users can experience value without human assistance.
- The product solves a problem users actively search for solutions to.
- Individual users can adopt without organization-wide approval.
- Usage naturally expands to more users or more features over time.
- The product can be tried in a low-commitment way (free tier, trial, sandbox).

## PLG Models

### Free Trial
Users get full (or near-full) product access for a limited time (7, 14, or 30 days).

**Pros:** Users experience full value. Urgency from expiration drives conversion. Higher conversion rates than freemium (15-25%).
**Cons:** Short window to demonstrate value. Users who don't activate during trial are lost. No ongoing organic acquisition from free users.

**Best for:** Products with clear, demonstrable value that can be experienced quickly. Products targeting buyers (not just users).

**Trial length guidelines:**
- 7 days: Simple tools with fast time-to-value (design tools, writing tools).
- 14 days: Standard SaaS with moderate setup (project management, CRM).
- 30 days: Complex products requiring integration or team onboarding (analytics, infrastructure).

### Freemium
Users get a permanently free tier with limited features, usage, or capacity.

**Pros:** Large free user base for viral/word-of-mouth growth. Users can stay on free tier indefinitely, creating ongoing organic distribution. Lower barrier to entry.
**Cons:** Lower conversion rates (2-5%). Free users consume resources. Finding the right free/paid line is difficult.

**Best for:** Products with near-zero marginal cost per user. Products where free users generate value for paid users (network effects, content). Products targeting a large end-user market.

**Freemium line design:**
- Free tier should deliver genuine, ongoing value (not a crippled experience).
- The upgrade trigger should be a natural milestone, not an arbitrary wall.
- Examples of good limits: Slack (searchable message history), Zoom (40-min group meetings), Canva (limited templates/brand kits).

### Reverse Trial
Users start with full premium features, then downgrade to free tier after trial period.

**Pros:** Users experience premium value first (loss aversion drives conversion). Combines freemium's ongoing free base with trial's full product experience. Growing in popularity.
**Cons:** More complex to implement. Users may feel cheated when features are removed.

**Best for:** Products where premium features are significantly better and hard to appreciate until experienced. Products with clear free/paid differentiation.

**Examples:** Airtable, Loom, many modern SaaS tools.

## Activation Metric Definition

### What is Activation?
The moment a user first experiences meaningful product value. This is the single most important metric in PLG.

### How to Find Your Activation Metric
1. **List candidate actions:** What are 5-10 things a user could do in their first session/week?
2. **Correlate with retention:** For each action, compare 30-day retention of users who did it vs. didn't.
3. **The action with the biggest retention gap is your activation metric.**

**Examples of activation metrics:**
- Slack: Sent 2,000+ messages as a team (this was their actual finding)
- Dropbox: Uploaded first file
- HubSpot: Created first form or landing page
- Zoom: Hosted first meeting
- Notion: Created first page with content

### Activation Rate Calculation
`Activation Rate = Users who complete activation action / Total sign-ups × 100`

**Benchmarks:**
- Good: 20-40% of sign-ups activate within first week.
- Great: 40-60%.
- If below 20%, your onboarding has significant friction.

## Time-to-Value (TTV) Optimization

### The TTV Principle
The faster a user reaches their "aha moment," the more likely they are to convert. Every extra step, every extra minute, is a leak in the funnel.

### Strategies to Reduce TTV

**1. Remove sign-up friction**
- Minimize form fields (email + password or SSO only).
- Delay profile completion until after value delivery.
- Allow product exploration before requiring an account.

**2. Guided first experience**
- Don't dump users into an empty dashboard.
- Provide a clear first task: "Create your first [thing]."
- Use templates, sample data, or quickstart wizards.
- Product tours: Short (3-5 steps), contextual, skippable.

**3. Eliminate setup barriers**
- Pre-populate with sample data so the product looks alive, not empty.
- Offer one-click integrations instead of manual configuration.
- Provide import tools for data from competing products.

**4. Personalize the onboarding path**
- Ask 1-2 questions during sign-up to determine use case.
- Route users to the most relevant first experience based on answers.
- "What's your goal?" → Show the fastest path to that specific goal.

### TTV Measurement
Track the time between sign-up and activation event.
- Median TTV is more useful than average (outliers skew average).
- Segment TTV by source, plan, and persona — different users have different paths.
- Set a TTV target and optimize toward it.

## Self-Serve Onboarding

### Onboarding Checklist Design
The "setup progress" pattern is proven and effective.

**Best practices:**
- 3-5 steps maximum (fewer is better).
- Show progress (2 of 5 complete).
- Each step delivers incremental value (not just setup for future value).
- Celebrate completion of each step.
- Make the final step the activation action.
- Allow skipping without penalty (but track what gets skipped).

### Onboarding Email Sequence
- **Day 0:** Welcome + single CTA to complete the first setup step.
- **Day 1:** Value reminder + CTA for step 2 if not completed.
- **Day 3:** Social proof (how others use the product) + nudge toward activation.
- **Day 5:** Feature highlight (show a capability they haven't tried).
- **Day 7:** Urgency if on trial ("7 days left — here's what you might be missing").
- **Day 10+:** Re-engagement if inactive. Different approach needed — value isn't landing.

## In-Product Upsell Triggers

### Principle: Upsell at the Moment of Need, Not Randomly
Show upgrade prompts when the user hits a limit they care about, not when it's convenient for you.

### Effective Trigger Points
- **Usage limit reached:** "You've used 90% of your free storage. Upgrade for unlimited."
- **Premium feature attempted:** User clicks a premium feature. Show what it does + upgrade CTA.
- **Team growth:** "You've invited 5 team members. Upgrade to add unlimited collaborators."
- **Value milestone:** "You've saved 40 hours this month. Unlock advanced automations to save even more."
- **Export/integration need:** User tries to export or integrate, hits free-tier limit.

### Upsell UX Best Practices
- Show the value of the upgrade, not just the price.
- Use progressive disclosure: Don't paywall aggressively on day 1. Let users experience value first.
- Offer a single-click upgrade path (no lengthy checkout flow).
- Show social proof near upgrade CTAs ("Join 10,000+ teams on the Pro plan").
- Allow monthly billing for trial-to-paid conversion. Offer annual for retention.

## Product-Qualified Lead (PQL) Definition

### What is a PQL?
A user or account that has demonstrated buying intent through product usage, not just marketing engagement. PQLs are the PLG equivalent of MQLs.

### PQL Criteria Design
PQLs are typically defined by a combination of:

**Usage signals:**
- Reached activation milestone.
- Used product X times in Y days.
- Used a premium feature (on free tier or trial).
- Invited teammates.

**Firmographic signals:**
- Company size > threshold (suggests enterprise need).
- Work email domain (vs. Gmail/Yahoo).
- Industry match.

**Behavioral signals:**
- Visited pricing page.
- Compared plans.
- Started but didn't complete checkout.
- Downloaded a report or export.

### PQL Scoring Example
| Signal | Points |
|--------|--------|
| Activated (completed key action) | +30 |
| Used product 5+ days in first week | +20 |
| Invited 2+ teammates | +15 |
| Visited pricing page | +10 |
| Company size > 50 (from enrichment) | +10 |
| Used premium feature on free tier | +15 |
| **PQL threshold** | **60+** |

### PQL Handoff to Sales
- Notify sales immediately when an account hits PQL threshold.
- Provide sales with full usage context (what they've done, how active, team size).
- Sales outreach should reference the user's specific product usage: "I noticed your team has been using [feature]. Companies like yours often benefit from [premium capability]..."
- Time from PQL to first sales touch: < 24 hours for best conversion rates.

## PLG + Sales-Assist Hybrid

### Why Hybrid Wins
- Pure PLG leaves enterprise revenue on the table (large deals need human touch).
- Pure sales-led ignores self-serve demand (users want to try before they buy).
- Hybrid captures both: self-serve for SMB/individual, sales-assist for mid-market/enterprise.

### Hybrid Model Design
```
Individual Users → Self-serve sign-up → Free/Trial → Self-serve upgrade → $10-100/mo
↓ (if team grows)
Small Teams → Self-serve sign-up → Free/Trial → Self-serve upgrade → $100-1,000/mo
↓ (if account qualifies as PQL)
Mid-Market → PQL triggers sales outreach → Sales-assisted deal → $1,000-10,000/mo
↓ (if enterprise signals)
Enterprise → Sales-led or PQL → Demo/POC → Custom deal → $10,000+/mo
```

### When to Add Sales to PLG
Add sales-assist when you see:
- Accounts self-serve to $500+/month (willingness to pay exists).
- Users asking for features that require custom or enterprise pricing.
- Multiple users from the same company on individual accounts.
- Organic enterprise sign-ups that don't convert self-serve.

## PLG Metrics

### Core PLG Dashboard
| Metric | Definition | Benchmark |
|--------|-----------|-----------|
| Sign-up Rate | Visitors → Sign-ups | 2-10% (depends on intent of traffic) |
| Activation Rate | Sign-ups → Activated users | 20-40% |
| Trial-to-Paid CVR | Trial users → Paying customers | Free trial: 15-25%, Freemium: 2-5% |
| Time-to-Value (TTV) | Median time from sign-up to activation | < 1 day ideal |
| Expansion Revenue % | Revenue from existing customers upgrading | 20-40% of new revenue |
| Natural Rate of Growth (NRG) | % of ARR from organic/product-led channels | > 50% = strong PLG |
| PQL-to-Customer CVR | PQLs → Paying customers | 20-40% |

### Natural Rate of Growth (NRG)
`NRG = 100 × Annual Growth Rate × % Organic Sign-ups × % ARR from Products (self-serve)`

NRG measures how much of your growth comes from the product itself vs. sales/marketing effort.
- NRG > 50%: Strong PLG engine.
- NRG 20-50%: PLG contributing but not dominant.
- NRG < 20%: Sales-led with PLG aspirations.

## PLG Playbook Template

### Phase 1: Foundation (Month 1-2)
- [ ] Define activation metric based on retention correlation analysis.
- [ ] Implement self-serve sign-up flow (SSO, minimal friction).
- [ ] Build basic onboarding (3-5 step checklist, welcome email sequence).
- [ ] Set up product analytics (sign-up → activation → retention → conversion tracking).
- [ ] Define free tier or trial parameters.

### Phase 2: Optimization (Month 3-4)
- [ ] Measure and optimize activation rate (target: 30%+).
- [ ] Reduce TTV through onboarding improvements.
- [ ] Implement in-product upgrade prompts at natural trigger points.
- [ ] Build PQL scoring model.
- [ ] A/B test onboarding flows, trial lengths, and upgrade prompts.

### Phase 3: Scale (Month 5-6)
- [ ] Add sales-assist for PQL follow-up.
- [ ] Implement usage-based expansion triggers.
- [ ] Build team/workspace sharing features for viral distribution.
- [ ] Launch self-serve annual plan option.
- [ ] Optimize pricing page for self-serve conversion.

### Phase 4: Mature (Ongoing)
- [ ] Track NRG and aim for > 50%.
- [ ] Build expansion playbook (upsell, cross-sell, seat expansion).
- [ ] Segment onboarding by persona/use case.
- [ ] Implement reverse trial if on freemium model.
- [ ] Continuously test and optimize every step of the self-serve funnel.

## Quality Gate

Before launching or evaluating a PLG motion:
- [ ] Is your activation metric defined and validated with retention data?
- [ ] Can a user reach the activation moment without human assistance?
- [ ] Is time-to-value measured and under continuous optimization?
- [ ] Are upgrade prompts triggered by user need, not arbitrary timing?
- [ ] Have you defined PQL criteria and a process for sales handoff?
- [ ] Is your free tier delivering genuine value (not a crippled experience)?
- [ ] Are you tracking the full PLG funnel (sign-up → activate → convert → expand)?
- [ ] Is NRG or organic acquisition share being measured?
- [ ] Do you have an onboarding email sequence complementing in-product onboarding?
