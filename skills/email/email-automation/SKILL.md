---
name: email-automation
description: Design marketing automation workflows with triggers, conditions, and multi-channel touchpoints. Use when building automation programs.
origin: ECM
---

# Email Automation

## When to Activate

Use this skill when:
- Building marketing automation workflows
- Designing trigger-based email flows
- Integrating email with SMS, push, or other channels
- Setting up lead scoring systems
- Evaluating automation platforms
- Documenting and testing complex workflows
- Optimizing existing automation for performance

## First Questions

Before building automation, clarify:
1. What is the business goal of this automation? (Convert leads, onboard users, retain customers, recover revenue)
2. What triggers should start the workflow? (Form submit, purchase, behavior, date)
3. What channels are available? (Email, SMS, push notifications, in-app messages, direct mail)
4. What data is available to personalize and branch logic?
5. What platform is being used? (HubSpot, Klaviyo, ActiveCampaign, Mailchimp, Customer.io, etc.)
6. Who owns and maintains the workflow after launch?
7. Are there existing workflows that could conflict?

## Core Rules

1. **Start with the outcome, work backwards.** Define the desired end action first, then map the path to get there.
2. **Simple workflows that run > complex workflows that break.** Start with linear flows. Add branching only when data proves it's needed.
3. **Every workflow needs an owner.** Someone must be responsible for monitoring, optimizing, and updating.
4. **Test in isolation before connecting.** Test each workflow independently before linking it to other workflows.
5. **Document everything.** Workflow logic that lives only in the platform interface is unmaintainable. Create external documentation.
6. **Set review dates.** Every workflow should be reviewed quarterly. Stale automations send irrelevant emails.
7. **Respect channel preferences.** Just because you CAN send SMS doesn't mean the subscriber wants SMS. Always honor opt-in by channel.

## Automation Triggers

### Event-Based Triggers
| Trigger | Use Case | Example Workflow |
|---------|----------|-----------------|
| Form submission | Lead magnet delivery, contact form follow-up | Welcome sequence + lead magnet delivery |
| Product purchase | Post-purchase experience | Thank you, onboarding, cross-sell |
| Cart abandonment | Revenue recovery | 3-email abandoned cart sequence |
| Trial signup | User activation | Onboarding sequence with feature education |
| Webinar registration | Event nurture | Pre-event reminders, post-event follow-up |
| Support ticket closed | Customer satisfaction | Feedback survey, knowledge base recommendation |
| Subscription cancellation | Churn recovery | Exit survey + winback offer |

### Behavior-Based Triggers
| Trigger | Use Case | Example Workflow |
|---------|----------|-----------------|
| Page visit (pricing page) | Sales intent signal | Notify sales, send case study |
| Feature used for first time | Activation milestone | Congratulate, suggest next feature |
| Inactivity (no login X days) | Churn prevention | Re-engagement campaign |
| Email link clicked | Interest signal | Send related content or offer |
| High engagement score | Lead qualification | Move to sales sequence or hand off to sales team |
| Video watched | Content engagement | Follow up with related resource |

### Date-Based Triggers
| Trigger | Use Case | Example Workflow |
|---------|----------|-----------------|
| Subscription renewal date | Retention | Renewal reminders at 30, 14, 7, 1 day |
| Customer anniversary | Relationship building | Anniversary thank you + loyalty offer |
| Birthday | Personalization | Birthday discount or greeting |
| X days since signup | Lifecycle progression | Day 7, 14, 30 milestone emails |
| Seasonal date | Campaigns | Holiday promotions, annual events |

## Workflow Logic

### Core Logic Elements

**Wait/Delay**
- Time-based: Wait 2 days, wait until next Tuesday
- Event-based: Wait until email is opened, wait until page is visited
- Best practice: Use business-hours-aware delays for B2B (don't send at 2 AM)

**If/Then/Else (Branching)**
```
IF [condition is true]
  THEN [action A]
ELSE
  [action B]
```

Common conditions:
- Has opened previous email (yes/no)
- Has visited specific page (yes/no)
- Lead score above/below threshold
- Belongs to specific segment
- Has purchased (yes/no)
- Tag present (yes/no)

**Split (A/B Testing)**
- Split traffic into 2+ paths
- Test different subject lines, send times, content, or offers
- Requires minimum sample size per path (200+ per variant)
- Let the test run for statistical significance before choosing a winner

**Goal**
- Define the desired outcome of the workflow
- When a contact achieves the goal, they exit the workflow
- Examples: Made a purchase, booked a demo, activated a feature

**Exit Conditions**
- Purchased the product (no need to keep selling)
- Unsubscribed
- Entered a higher-priority workflow
- Achieved the workflow goal
- Manually removed by sales or support

## Multi-Channel Automation

### Channel Selection Matrix

| Channel | Best For | Timing | Opt-In Required |
|---------|----------|--------|-----------------|
| Email | Detailed content, nurture, education | Not time-sensitive | Yes (CAN-SPAM, GDPR) |
| SMS | Urgent alerts, reminders, short offers | Time-sensitive | Yes (TCPA, explicit consent) |
| Push notification | App engagement, real-time alerts | Immediate | Yes (device permission) |
| In-app message | Feature adoption, contextual help | When user is active | No (user is in the app) |
| Direct mail | High-value prospects, reactivation | Long-lead | Mailing address required |
| Retargeting ads | Awareness, reminders | Ongoing | Cookie/pixel consent |

### Multi-Channel Workflow Example: Abandoned Cart

```
TRIGGER: Cart abandoned (product added, checkout not completed within 1 hour)

Hour 1: [Email] Browse abandonment email with product image and link
         WAIT 4 hours
         IF cart recovered → EXIT

Hour 5: [Push notification] "You left something behind! Complete your order"
         WAIT 20 hours
         IF cart recovered → EXIT

Day 1:  [Email] Second email with social proof (reviews, popularity)
         WAIT 24 hours
         IF cart recovered → EXIT

Day 2:  [SMS] "Your cart is waiting! [short link] — items may sell out"
         WAIT 48 hours
         IF cart recovered → EXIT

Day 4:  [Email] Final email with discount incentive
         IF cart recovered → EXIT
         ELSE → Move to retargeting audience for 14 days
```

### Multi-Channel Rules
- **Respect channel opt-in separately.** Email consent does not equal SMS consent.
- **Don't send the same message on every channel simultaneously.** Stagger and differentiate.
- **Use SMS sparingly.** It's the most intrusive channel — reserve for high-value, time-sensitive messages.
- **Consolidate messaging.** Don't send an email AND SMS AND push about the same thing on the same day.
- **Track cross-channel engagement.** Attribute conversions to the actual touchpoint, not just the last one.

## Lead Scoring Integration

### What Is Lead Scoring
Lead scoring assigns numerical values to contacts based on their attributes and behaviors. When a score reaches a threshold, it triggers an action (sales handoff, sequence change, offer).

### Scoring Model

**Demographic/Firmographic Scoring (Fit)**
| Attribute | Score |
|-----------|-------|
| Target job title (VP, Director, C-level) | +15 |
| Target company size | +10 |
| Target industry | +10 |
| Non-target role (student, intern) | -20 |
| Personal email (gmail, yahoo) for B2B | -10 |

**Behavioral Scoring (Intent)**
| Behavior | Score |
|----------|-------|
| Opened email | +1 |
| Clicked email link | +3 |
| Visited pricing page | +15 |
| Downloaded case study | +10 |
| Requested demo | +25 |
| Attended webinar | +10 |
| Multiple page visits in one session | +5 |
| Inactive for 30+ days | -10 |
| Unsubscribed from emails | -50 |

### Score Thresholds and Actions
| Score Range | Label | Action |
|-------------|-------|--------|
| 0-20 | Cold | Nurture sequence |
| 21-50 | Warm | Targeted content, increase frequency |
| 51-80 | Hot | Sales sequence, notify sales team |
| 81+ | Sales-ready | Immediate sales handoff, demo offer |

### Lead Scoring Rules
- Review and recalibrate scoring monthly
- Implement score decay (reduce score for inactivity over time)
- Separate fit score from intent score (high fit + high intent = best leads)
- Don't make thresholds too low (premature sales outreach wastes everyone's time)

## Automation Testing and QA

### Pre-Launch Testing Checklist
1. **Send test emails** for every email in the workflow
2. **Walk through every branch** with a test contact
3. **Verify triggers fire correctly** (submit the form, create the event, etc.)
4. **Check delays and timing** — are emails sending at the right intervals?
5. **Test exit conditions** — does the contact properly exit when the condition is met?
6. **Verify suppression** — are contacts excluded from conflicting workflows?
7. **Check personalization** — do merge tags work? What happens when data is missing?
8. **Test on multiple email clients** — Gmail, Outlook, Apple Mail, mobile
9. **Verify tracking** — are UTM parameters and conversion tracking in place?
10. **Test edge cases** — what happens if a contact enters the workflow twice?

### Post-Launch Monitoring
- Monitor first 48 hours closely for errors
- Check delivery rates, open rates, and any bounce spikes
- Verify contacts are flowing through branches correctly
- Confirm exit conditions are working
- Review within 7 days, then 30 days, then quarterly

## Workflow Documentation

Every workflow should have external documentation (not just the platform interface):

### Workflow Documentation Template

```
WORKFLOW NAME: [Name]
OWNER: [Person responsible]
CREATED: [Date]
LAST REVIEWED: [Date]

PURPOSE:
[One sentence — what does this workflow accomplish?]

TRIGGER:
[What starts the workflow]

AUDIENCE:
[Who enters this workflow — segment or criteria]

EXCLUSIONS:
[Who should NOT enter — suppression rules]

FLOW:
  Step 1: [Action] — Delay: [time] — Condition: [if applicable]
  Step 2: [Action] — Delay: [time] — Condition: [if applicable]
  [Continue for all steps]

EXIT CONDITIONS:
  - [Condition 1]
  - [Condition 2]

CONNECTIONS TO OTHER WORKFLOWS:
  - [Workflow name] — [How they connect]

KPIS:
  - [Metric 1]: Target [value]
  - [Metric 2]: Target [value]

REVIEW SCHEDULE: [Monthly / Quarterly]
```

## Workflow Examples

### Example 1: SaaS Free Trial Onboarding

```
TRIGGER: Trial signup

Day 0:  [Email] Welcome + first step
Day 1:  [In-app] Feature tooltip for key action
Day 2:  [Email] Quick win tutorial
        IF completed first action → Path A
        ELSE → Path B

Path A (Activated):
  Day 5:  [Email] Advanced feature introduction
  Day 9:  [Email] Customer success story
  Day 12: [Email] Trial ending in 2 days + upgrade CTA
  Day 14: [Email] Trial ended + final upgrade offer

Path B (Not Activated):
  Day 4:  [Email] "Need help getting started?"
  Day 6:  [Push] "Your trial is waiting — try [feature]"
  Day 8:  [Email] Video walkthrough
  Day 11: [Email] 1-on-1 help offer
  Day 13: [Email] Trial ending + support CTA
  Day 14: [Email] Trial ended + extended trial offer

EXIT: Upgraded to paid plan at any point
```

### Example 2: E-Commerce Post-Purchase

```
TRIGGER: Order confirmed

Hour 0:  [Email] Order confirmation + tracking
Day 2:   [SMS] Shipping notification (if opted in)
Day 5:   [Email] Product tips / how to get the most from your purchase
Day 14:  [Email] "How are you liking [product]?" + review request
Day 30:  [Email] Cross-sell recommendation based on purchase
Day 45:  [Email] Replenishment reminder (if consumable) OR loyalty offer
Day 60:  IF no second purchase → [Email] Win-back with incentive
         IF second purchase → Move to VIP segment

EXIT: Unsubscribed or entered a returns/support workflow
```

## Automation Platform Evaluation

### Key Capabilities to Evaluate
| Capability | Must-Have | Nice-to-Have |
|-----------|-----------|--------------|
| Email automation | Yes | — |
| Behavioral triggers | Yes | — |
| Branching logic (if/then) | Yes | — |
| A/B testing in workflows | — | Yes |
| Lead scoring | Yes (B2B) | — |
| SMS integration | — | Yes |
| CRM integration | Yes (B2B) | — |
| E-commerce integration | Yes (B2C) | — |
| Visual workflow builder | Yes | — |
| Reporting per workflow | Yes | — |
| API access | — | Yes |
| Multi-channel (push, in-app) | — | Yes |

## Quality Gate

Before launching any automation workflow, verify:
- [ ] Is the workflow goal defined in one sentence?
- [ ] Is the trigger correctly configured and tested?
- [ ] Are exit conditions set and verified?
- [ ] Have all emails been proofread and tested on multiple clients?
- [ ] Has the full workflow been tested with a test contact through every branch?
- [ ] Are there suppression rules preventing conflicts with other workflows?
- [ ] Is the workflow documented outside the platform?
- [ ] Is there an owner assigned for ongoing monitoring?
- [ ] Are UTM parameters and tracking in place?
- [ ] Is there a 30-day review date on the calendar?
- [ ] Have edge cases been considered? (duplicate entries, missing data, rapid re-triggers)
