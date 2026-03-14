---
name: microcopy-ux
description: Write effective UX microcopy for buttons, forms, error messages, tooltips, and onboarding flows. Use when improving user interface text.
origin: ECM
---

# UX Microcopy

## When to Activate

Use this skill when writing or reviewing interface text: button labels, form fields, error messages, success states, empty states, loading states, tooltips, onboarding flows, confirmation dialogs, notification copy, settings descriptions, or any text that helps users navigate and complete tasks within a product.

## First Questions

1. **What is the product and who are the users?** (technical vs. non-technical, B2B vs. B2C)
2. **What is the brand voice?** (formal, friendly, playful, minimal, technical)
3. **What action or state is the copy supporting?** (form completion, error recovery, onboarding, feature discovery)
4. **What platform?** (web app, mobile app, desktop, email notification)
5. **What's the user's emotional state at this moment?** (frustrated, excited, confused, anxious)

---

## Core Principles of UX Microcopy

### 1. Clarity Over Cleverness
The user is trying to complete a task, not admire your writing. Every word should reduce friction.
- Bad: "Oopsie-daisy! Something went sideways."
- Good: "We couldn't save your changes. Please try again."

### 2. Guide, Don't Blame
When things go wrong, help the user fix the problem. Never imply it's their fault.
- Bad: "You entered an invalid email address."
- Good: "Please enter a valid email address (e.g., name@company.com)."

### 3. Set Expectations
Tell users what will happen before, during, and after their action.
- Before: "This will take about 2 minutes"
- During: "Importing your contacts (43 of 128)..."
- After: "Your contacts have been imported. You can now create your first campaign."

### 4. Match the Emotional Moment
The tone should match how the user feels at that point in the experience.
- Payment failed: empathetic and helpful, not casual
- First success: celebratory and encouraging
- Routine task: minimal and efficient

### 5. Be Specific
Vague copy creates anxiety. Specific copy builds confidence.
- Vague: "An error occurred."
- Specific: "We couldn't process your payment. Your card was declined. Please try a different card or contact your bank."

---

## Button Labels

Buttons are the primary way users take action. Every button label should answer: "What happens when I click this?"

### Rules
- Start with an action verb
- Be specific about the outcome
- Match the button text to the preceding context
- Primary action gets the strong verb; secondary action is softer

### Examples by Context

| Context | Bad | Good |
|---------|-----|------|
| Signup form | Submit | Create My Account |
| File upload | OK | Upload File |
| Delete confirmation | Yes | Delete Project |
| Newsletter | Subscribe | Get Weekly Tips |
| Checkout | Continue | Place Order |
| Settings change | Save | Save Changes |
| Cancel subscription | Confirm | Cancel My Subscription |
| Search filter | Apply | Show Results |

### Primary vs. Secondary Button Pairs
- [Delete Project] / [Keep Project]
- [Save and Continue] / [Discard Changes]
- [Upgrade to Pro] / [Stay on Free]
- [Confirm Purchase] / [Go Back]

---

## Form Field Labels and Placeholders

### Labels
- Always use a visible label above the field (never rely solely on placeholder text)
- Be concise: "Email address" not "Please enter your email address here"
- Use sentence case: "Full name" not "Full Name" (unless brand guide dictates otherwise)
- Required fields: mark optional fields rather than required ones (if most fields are required)

### Placeholder Text
- Use for format hints: "e.g., name@company.com" / "MM/DD/YYYY"
- Never use as a replacement for the label (it disappears on focus)
- Keep it shorter than the expected input

### Helper Text (Below Field)
Use for constraints, format requirements, or reassurance:
- "Must be at least 8 characters with one number"
- "We'll never share your email with third parties"
- "This will be your public display name"

### Examples

```
Full name
[                    ]

Work email
[e.g., sarah@company.com]
We'll send your login details here.

Password
[                    ]
At least 8 characters, one uppercase, one number.

Company name (optional)
[                    ]
```

---

## Error Messages

Error messages are the most important microcopy in your product. They occur at the user's most frustrated moment.

### The Error Message Formula
**What happened + Why it happened + How to fix it**

### Examples

| Situation | Bad | Good |
|-----------|-----|------|
| Invalid email | Error: Invalid input | Please enter a valid email address (e.g., name@company.com) |
| Password too short | Password error | Your password needs at least 8 characters. You're 2 short. |
| Server error | Error 500 | Something went wrong on our end. Please try again in a few minutes. If this persists, contact support@example.com. |
| File too large | Upload failed | This file is 25MB. The maximum size is 10MB. Try compressing it or choosing a smaller file. |
| Duplicate entry | Error: Duplicate | An account with this email already exists. Try signing in or use a different email. |
| Network error | Error | You appear to be offline. Check your connection and try again. |
| Permission denied | Access denied | You don't have permission to view this page. Ask your team admin to grant you access. |
| Rate limited | Error | You've made too many requests. Please wait 30 seconds and try again. |

### Inline Validation
- Validate on blur (when the user leaves the field), not on every keystroke
- Show success states too (green checkmark for valid email)
- Error text should appear directly below the relevant field, not in a banner at the top

---

## Success Messages

Equally important as errors — success messages confirm the action and guide the next step.

### Formula
**Confirm what happened + What to expect next + [Next action]**

### Examples
- "Your account has been created. Check your email to verify your address."
- "Payment successful. You'll receive a receipt at sarah@example.com."
- "Project deleted. Undo (available for 10 seconds)."
- "Settings saved. Changes will take effect immediately."
- "Invitation sent to 3 team members. They'll receive an email within 5 minutes."

---

## Empty States

Empty states appear when there's no content to display. They're an opportunity to guide the user, not a dead end.

### Formula
**Acknowledge the emptiness + Explain the value + Provide a clear action**

### Examples

**No projects yet:**
> You don't have any projects yet.
> Projects help you organize your work and collaborate with your team.
> [Create Your First Project]

**No search results:**
> No results for "marketing automation"
> Try a different search term or [browse all integrations].

**Empty inbox:**
> You're all caught up.
> When you receive new messages, they'll appear here.

**No data yet:**
> No data to display yet.
> Once your campaign has been running for 24 hours, you'll start seeing performance metrics here.

### Rules
- Never leave an empty state without guidance
- Use illustrations sparingly — they should add clarity, not just decoration
- Always include a CTA or next step
- Empty states for first-time users are different from empty states for returning users

---

## Loading States

### Rules
- If load time < 1 second: no loading indicator needed
- If 1-3 seconds: use a spinner or skeleton screen
- If 3-10 seconds: show progress and explain what's happening
- If 10+ seconds: show progress, explain what's happening, and set a time expectation

### Copy Examples
- "Loading your dashboard..."
- "Analyzing 2,340 keywords — this takes about 30 seconds"
- "Importing your contacts (43 of 128)..."
- "Generating your report. This usually takes 1-2 minutes."
- "Almost there — crunching the numbers..."

---

## Onboarding Copy

### Principles
- Break onboarding into small, numbered steps (progress builds momentum)
- Explain the "why" behind each step, not just the "what"
- Celebrate completion of each step
- Let users skip non-essential steps

### Welcome Screen Template
```
Welcome to [Product], [Name].

Let's get you set up in 3 quick steps:

1. Connect your [data source]
2. Set your [key preferences]
3. Invite your team

This takes about 5 minutes.

[Let's Go]                    [I'll do this later]
```

### Feature Tooltip Template
```
[Feature Name]
[One sentence explaining what it does and why you'd use it]
[Optional: "Try it now" link]

Example:
Smart Scheduling
Automatically find the best time to send emails based on when
your contacts are most active.
[Set up Smart Scheduling]
```

---

## Confirmation Dialogs

Confirmation dialogs protect users from destructive actions. They must be clear about consequences.

### Rules
- Only use confirmation dialogs for destructive or irreversible actions
- State the consequence explicitly
- Button labels should describe the action, not just "OK"/"Cancel"
- The destructive option should be visually de-emphasized (not the default)

### Examples

**Delete confirmation:**
> **Delete "Q4 Marketing Campaign"?**
> This will permanently delete the campaign and all associated assets. This action cannot be undone.
> [Cancel] [Delete Campaign]

**Unsaved changes:**
> **You have unsaved changes**
> If you leave this page, your changes will be lost.
> [Discard Changes] [Save and Leave] [Stay on Page]

**Subscription cancellation:**
> **Cancel your Pro subscription?**
> Your subscription will remain active until March 31, 2026. After that, you'll lose access to advanced analytics, custom reports, and priority support.
> [Keep My Subscription] [Cancel Subscription]

---

## Notification Copy

### Push Notifications
- Front-load the most important information (first 40 characters)
- Include enough context to be actionable without opening the app
- Bad: "You have a new notification"
- Good: "Sarah Chen commented on your Q4 report"

### In-App Notifications
- Be specific: who did what, on which item
- Include a direct link to the relevant content
- Allow dismissal

### Email Notification Subject Lines
- "[Product] Sarah commented on your project"
- "Your weekly performance report is ready"
- "Action needed: Team invitation expires in 24 hours"

---

## Voice Consistency

All microcopy in a product should feel like it comes from the same person. Create a microcopy style guide:

### Define Your Voice With a Spectrum

| Dimension | Our Position | Example |
|-----------|-------------|---------|
| Formal ←→ Casual | Slightly casual | "Got it!" not "Acknowledged." |
| Serious ←→ Playful | Mostly serious | Light touch in celebrations, serious in errors |
| Technical ←→ Simple | Simple first | "Your file is too large" not "413 Payload Too Large" |
| Detailed ←→ Minimal | Minimal with escape hatches | Short text + "Learn more" links for details |

### Words to Use / Words to Avoid

| Use | Avoid |
|-----|-------|
| "Please try again" | "Error" (alone) |
| "Something went wrong" | "Fatal exception" |
| "We couldn't..." | "Failed to..." |
| "Learn more" | "Click here" |
| "Got it" | "OK" / "Dismiss" |
| "Undo" | "Revert changes" |

---

## Quality Gate

- [ ] Every button starts with an action verb and describes the outcome
- [ ] Error messages explain what happened AND how to fix it
- [ ] No blame language — the system takes responsibility for failures
- [ ] Empty states include guidance and a clear next action
- [ ] Loading states set expectations for anything over 3 seconds
- [ ] Confirmation dialogs clearly state consequences of destructive actions
- [ ] Form labels are visible (not only in placeholders)
- [ ] Tone matches the user's emotional state at each interaction point
- [ ] Microcopy is consistent in voice, terminology, and formatting across the product
- [ ] All text has been reviewed for clarity by reading it aloud
