---
name: email-segmentation
description: Segment email lists for targeted, relevant messaging that improves engagement and conversion. Use when personalizing email campaigns.
origin: ECM
---

# Email Segmentation

## When to Activate

Use this skill when:
- Segmenting an email list for targeted campaigns
- Building personalization strategies beyond first-name merge tags
- Setting up behavioral segmentation based on user actions
- Implementing RFM (Recency, Frequency, Monetary) analysis
- Deciding between dynamic content and separate sends
- Collecting data for future segmentation
- Planning progressive profiling strategies

## First Questions

Before segmenting, clarify:
1. What data is currently available? (Demographics, behavior, purchase history, engagement)
2. What email platform is being used? (Segmentation capabilities vary significantly)
3. What is the total list size? (Segments must be large enough to be actionable)
4. What is the business model? (B2B, B2C, e-commerce, SaaS, services)
5. What campaigns or sequences will use these segments?
6. Is there CRM or analytics data that can be connected to email data?
7. What level of personalization is the team equipped to maintain? (More segments = more content to create)

## Core Rules

1. **Relevance is the goal, segments are the means.** The point is sending the right message to the right person, not creating complex segment logic for its own sake.
2. **Start with 3-5 segments. Not 50.** Over-segmentation creates maintenance burden and content gaps. Begin simple, refine over time.
3. **Every segment needs its own message.** If you segment but send the same email, you've wasted the effort. Different segment = different content or offer.
4. **Behavioral data > Demographic data.** What someone DOES predicts intent better than who they ARE.
5. **Segments are living, not static.** People move between segments. Set up rules for segment transitions.
6. **Minimum viable segment size: 500-1,000.** Segments smaller than this are hard to learn from and not statistically reliable for testing.
7. **Data you collect but don't use is a privacy liability.** Only collect data you will actually segment on.

## Segmentation Types

### 1. Demographic Segmentation

Based on who the subscriber IS.

| Data Point | Use Case | Example |
|-----------|----------|---------|
| Location | Localized offers, events, timezone-based sends | "Stores near you in [city]" |
| Age/generation | Tone, product recommendations, cultural references | Gen Z messaging vs Boomer messaging |
| Gender | Product lines, imagery, offers | Women's vs Men's product lines |
| Job title/role | B2B content relevance | CMO receives strategy content; manager receives tactical content |
| Company size | B2B solution positioning | Enterprise vs SMB messaging |
| Industry | Vertical-specific case studies and solutions | SaaS vs e-commerce examples |

**Limitation:** Demographics tell you who someone is but not what they want right now. Always supplement with behavioral data.

### 2. Behavioral Segmentation

Based on what the subscriber DOES. This is the most powerful segmentation type.

| Behavior | Segment Logic | Message Strategy |
|----------|--------------|------------------|
| Pages visited | Visited pricing page | Sales sequence, demo offer |
| Content consumed | Downloaded [specific lead magnet] | Nurture on that topic |
| Email engagement | Opened 5+ emails in 30 days | VIP content, early access |
| Purchase history | Bought Product A | Cross-sell Product B |
| Cart abandonment | Added to cart but didn't purchase | Abandonment recovery sequence |
| Feature usage (SaaS) | Used Feature X but not Feature Y | Feature education email |
| Event attendance | Attended webinar on [topic] | Follow-up with related content |
| Inactivity | No open in 60+ days | Re-engagement sequence |

### 3. Psychographic Segmentation

Based on what the subscriber VALUES. Harder to collect but highly effective.

| Psychographic | How to Identify | Message Angle |
|--------------|----------------|---------------|
| Price-sensitive | Clicks on discounts, waits for sales | Lead with deals and value |
| Quality-focused | Buys premium, reads reviews | Lead with quality and craftsmanship |
| Convenience-driven | Fast checkout, repeat purchases | Lead with ease and speed |
| Status-seeking | Buys new releases, trending items | Lead with exclusivity and trends |
| Values-driven | Engages with mission content | Lead with impact and purpose |

**Collection methods:** Surveys, quizzes, preference centers, behavioral inference (clicking discount emails = price-sensitive).

### 4. Lifecycle Segmentation

Based on where the subscriber is in their journey.

```
Subscriber → Lead → MQL → SQL → Customer → Repeat Customer → Advocate → Churned
```

| Stage | Segment Criteria | Email Strategy |
|-------|-----------------|----------------|
| New subscriber | Joined in last 14 days | Welcome sequence |
| Engaged lead | Active but hasn't purchased | Nurture + soft sell |
| Sales-qualified | Visited pricing, demo request | Sales sequence |
| New customer | First purchase in last 30 days | Onboarding + post-purchase |
| Repeat customer | 2+ purchases | Loyalty, cross-sell, referral |
| Advocate | High NPS, referrals, reviews | Ambassador program, exclusives |
| At-risk | Activity declining | Re-engagement before churn |
| Churned | No activity in 180+ days | Winback or sunset |

### 5. RFM Segmentation

**R**ecency, **F**requency, **M**onetary — primarily for e-commerce and transactional businesses.

| Segment | R | F | M | Strategy |
|---------|---|---|---|----------|
| Champions | Recent | Frequent | High spend | Reward, exclusives, referral asks |
| Loyal | Recent | Frequent | Moderate | Upsell, loyalty program |
| Potential loyalists | Recent | Low freq | Moderate-High | Nurture to increase frequency |
| New customers | Very recent | Low | Low-Moderate | Onboard, second-purchase incentive |
| At risk | Not recent | Was frequent | Was high | Winback offer, "we miss you" |
| Hibernating | Not recent | Low | Low | Re-engage or sunset |
| Lost | Very old | Low | Low | Final winback or remove |

**Scoring:** Rate each dimension 1-5 (1=low, 5=high). Combine for composite scores. A 5-5-5 is a champion. A 1-1-1 is lost.

## Data Collection for Segmentation

### On Signup
- Keep forms short (email + 1-2 fields maximum)
- Use dropdown fields for structured data (not free text)
- Critical fields: email, name, one business-relevant qualifier (role, company size, interest area)

### Post-Signup (Progressive Profiling)
- Collect one new data point per interaction
- Use preference center emails ("Tell us what you're interested in")
- Use surveys (1-3 questions max, incentivized)
- Use quizzes (interactive, value-driven, data-collecting)
- Track implicit data (clicks, page visits, purchases) — this requires no asking

### From Behavior (Zero-Ask Data)
- Email engagement patterns (open times, click topics)
- Website behavior (pages viewed, time on site, search queries)
- Purchase history (products, frequency, average order value)
- Content consumption (which lead magnets, which blog topics)
- Support interactions (tickets, chat conversations)

## Segment-to-Message Mapping

Every segment must have a corresponding message strategy. Use this template:

```
Segment: [Name]
  Criteria: [How someone enters this segment]
  Size: [Approximate count]
  Goal: [What action do we want from this segment?]
  Message angle: [What value proposition resonates?]
  Offer type: [What incentive or CTA?]
  Tone: [How does communication style differ?]
  Frequency: [How often do we email this segment?]
  Exit criteria: [When does someone leave this segment?]
```

### Example Mapping

```
Segment: High-Intent Trial Users
  Criteria: SaaS trial user who has used 3+ features in first 7 days
  Size: ~800/month
  Goal: Convert to paid plan
  Message angle: "You're already getting value — unlock the full experience"
  Offer type: 20% first-month discount or extended trial
  Tone: Encouraging, data-driven, specific to their usage
  Frequency: Every 2-3 days during trial period
  Exit criteria: Converts to paid OR trial expires
```

## Dynamic Content vs Separate Sends

### When to Use Dynamic Content (One Email, Personalized Blocks)
- Minor variations (different product images, location-based details)
- Personalized recommendations
- Conditional text blocks (show/hide based on segment)
- When you have 5+ segments and the overall structure is the same

### When to Use Separate Sends
- Completely different messaging angles
- Different offers for different segments
- When you want to A/B test messaging per segment independently
- When the design/layout needs to change per segment
- 2-4 distinct segments with meaningfully different needs

### Dynamic Content Best Practices
- Default fallback for every dynamic block (what if the data is missing?)
- Test each variant — not just the default
- Document what each segment sees
- Keep dynamic logic simple — complex nesting creates QA nightmares

## Progressive Profiling

Progressive profiling collects data gradually, over multiple interactions, instead of asking for everything upfront.

### Implementation Plan

**Interaction 1 (Signup):** Email + first name only.

**Interaction 2 (Welcome email click):** Track which link they click = interest area. No asking required.

**Interaction 3 (Preference center email, Day 7):** "What topics interest you most?" — 3-5 checkboxes.

**Interaction 4 (Survey, Day 30):** "Quick question: what's your biggest challenge with [topic]?" — single question.

**Interaction 5 (Content quiz, Day 60):** Interactive quiz that provides personalized results + captures data.

**After Interaction 5:** You have enough data for rich segmentation without ever asking for a long form.

### Progressive Profiling Rules
- Never ask for information you can infer from behavior
- Every ask must provide value to the subscriber (quiz results, personalized recommendations)
- Make every form/survey optional — never gate essential content behind data collection
- Store and update data centrally (CRM or ESP)
- Use preference centers — let subscribers self-segment

## Segment Size Considerations

| Segment Size | Viability | Action |
|-------------|-----------|--------|
| Under 100 | Too small for email | Combine with adjacent segment |
| 100-500 | Marginal | Use for high-value segments only (enterprise leads) |
| 500-2,000 | Viable | Good for targeted campaigns |
| 2,000-10,000 | Ideal | Large enough for testing and reliable metrics |
| 10,000+ | Very strong | Can sub-segment further |

**If a segment is too small:** Broaden the criteria or merge with a related segment. Maintaining a tiny segment that requires unique content is rarely worth the effort.

## Personalization Beyond First Name

| Level | What It Looks Like | Data Needed |
|-------|-------------------|-------------|
| Level 0 | Same email to everyone | Email address |
| Level 1 | "Hi [First Name]" | First name |
| Level 2 | Segment-based messaging | Segment data (role, interest, lifecycle) |
| Level 3 | Behavioral triggers | Website/app behavior data |
| Level 4 | Dynamic content blocks | Multiple data points per subscriber |
| Level 5 | Predictive/AI-driven | Full behavioral + demographic data + ML model |

**The sweet spot for most teams is Level 2-3.** Levels 4-5 require significant data infrastructure and content production capacity.

## Segmentation Strategy Template

Use this template to document your segmentation strategy:

```
SEGMENTATION STRATEGY — [Brand/Product Name]

1. Primary Segmentation Axis: [Lifecycle / Behavioral / Demographic]
2. Number of Active Segments: [3-7 recommended]

SEGMENT 1: [Name]
  Criteria: [Entry rules]
  Size: [Count]
  Email strategy: [Sequences and campaigns this segment receives]
  Personalization: [What is customized for this segment]
  KPIs: [How success is measured for this segment]

SEGMENT 2: [Name]
  [Same fields]

[Continue for each segment]

DATA COLLECTION PLAN:
  Signup fields: [What's collected at signup]
  Progressive profiling: [What's collected over time and how]
  Behavioral tracking: [What actions are tracked]

REVIEW CADENCE:
  [Monthly / Quarterly review of segment performance and criteria]
```

## Quality Gate

Before launching segmented campaigns, verify:
- [ ] Does every segment have a distinct message strategy? (If not, don't segment)
- [ ] Are segments large enough to be actionable? (500+ for most, 100+ for high-value)
- [ ] Is the data powering segments accurate and up to date?
- [ ] Are dynamic content fallbacks set for missing data?
- [ ] Have all segment/content combinations been tested visually?
- [ ] Are segment transition rules defined? (How does someone move between segments)
- [ ] Is there a documented segmentation strategy accessible to the team?
- [ ] Are segments reviewed and refreshed at least quarterly?
- [ ] Does the personalization feel helpful, not creepy? (Don't surface data that feels invasive)
- [ ] Is there a clear connection between segment and business outcome?
