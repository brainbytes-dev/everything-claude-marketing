---
description: Review content for brand consistency — voice, tone, messaging alignment, and visual guidelines compliance. Returns a scored assessment.
---

# /brand-review

Review any content for brand consistency, covering voice, tone, messaging alignment, terminology, and visual guidelines compliance. Receive a scored assessment with specific fixes.

## What This Command Does

The `/brand-review` command acts as your brand quality gate. It evaluates content against your brand standards and returns a structured assessment with an overall consistency score, specific findings organized by severity, and concrete revision recommendations. It catches the subtle inconsistencies that erode brand trust — off-tone language, unapproved terminology, messaging that contradicts your positioning, and guideline violations.

The command delegates to the **brand-guardian agent**, which maintains awareness of brand voice attributes, messaging frameworks, and content standards to perform systematic evaluations.

## When to Use

- You are publishing content and want a brand consistency check before it goes live
- You have new team members or external agencies producing content that needs review
- You want to audit existing content (website pages, emails, sales decks) for brand alignment
- You are rolling out updated brand guidelines and need to assess current content
- You are reviewing translated or localized content for brand consistency
- Multiple teams produce content and you want to ensure a unified voice
- You want to establish a baseline brand consistency score for your content library

## How It Works

1. **Content Ingestion** — Reads and analyzes the provided content in full
2. **Voice Assessment** — Evaluates whether the content matches your brand voice attributes (e.g., professional but approachable, confident but not arrogant)
3. **Tone Calibration** — Checks if the tone is appropriate for the content type, audience, and context
4. **Messaging Alignment** — Verifies that claims, value propositions, and positioning statements align with approved messaging frameworks
5. **Terminology Audit** — Flags unapproved terms, inconsistent product names, or competitor language patterns
6. **Style & Format Check** — Reviews against style guidelines (capitalization, punctuation, formatting conventions)
7. **Scoring & Recommendations** — Produces an overall score with prioritized, specific revision suggestions

## Example Usage

**Input:**

```
/brand-review check this landing page copy for brand consistency
```

*User provides landing page copy for review.*

**Output:**

```markdown
# Brand Consistency Review

## Overall Score: 72/100

| Category              | Score  | Status       |
|-----------------------|--------|--------------|
| Voice consistency     | 78/100 | Needs work   |
| Tone appropriateness  | 85/100 | Good         |
| Messaging alignment   | 65/100 | Needs work   |
| Terminology accuracy  | 60/100 | Poor         |
| Style compliance      | 75/100 | Needs work   |

---

## Critical Issues (Must Fix)

### 1. Product name inconsistency
**Location:** Hero section, paragraph 2
**Finding:** Product referred to as "SmartFlow" in the hero and
"Smart Flow" (two words) in the features section. Three different
capitalizations found across the page.
**Fix:** Use "SmartFlow" (one word, camel case) consistently —
this is the approved product name per brand guidelines.

### 2. Messaging contradicts core positioning
**Location:** Benefits section, bullet 3
**Finding:** Copy states "the most affordable solution on the
market." Brand positioning is premium/value-based, not
price-competitive. This undermines our positioning and invites
price comparisons.
**Fix:** Replace with value-focused language: "Enterprise
capabilities without enterprise complexity" or similar
approved messaging.

### 3. Unapproved competitor mention
**Location:** Comparison section
**Finding:** Direct competitor name used: "Unlike [Competitor],
we..." Brand guidelines prohibit direct competitor mentions in
customer-facing content.
**Fix:** Reframe as category contrast: "Unlike traditional
tools..." or "Where other solutions fall short..."

---

## Improvements (Should Fix)

### 4. Voice shifts to overly casual
**Location:** FAQ section
**Finding:** FAQ answers use "gonna," "totally," and "you guys"
— inconsistent with the brand's professional-but-approachable
voice. Rest of page maintains appropriate register.
**Fix:** Revise to conversational-professional: "you'll" instead
of "gonna," "absolutely" instead of "totally," "your team"
instead of "you guys."

### 5. CTA language inconsistency
**Location:** Multiple CTAs across page
**Finding:** Three different CTA styles used: "Start Free Trial,"
"Try It Now," and "Get Started Free." Brand standard is
"Start your free trial."
**Fix:** Standardize all CTAs to approved format: "Start your
free trial" (sentence case, includes "your").

### 6. Missing brand proof points
**Location:** Social proof section
**Finding:** Customer count is stated as "thousands of teams" —
brand guidelines specify using exact numbers when above 1,000.
**Fix:** Update to current verified count: "2,400+ teams" or
whatever the current approved figure is.

---

## Minor Issues (Nice to Fix)

7. **Headline capitalization** — H2s mix title case and sentence
   case. Brand standard is sentence case for all subheadings.
8. **Oxford comma** — Inconsistent usage. Brand style guide
   requires Oxford commas.
9. **Ampersands** — Used in two headings. Brand standard is
   to spell out "and" in all copy.

---

## Summary
The page communicates strong product value but has consistency
gaps that weaken brand credibility. The three critical issues
should be fixed before publishing. Voice and tone are mostly
on-brand with a few sections that drift casual. Recommend a
terminology pass across the full page.
```

## Important Notes

- Share your brand guidelines, voice attributes, or style guide if available — the more context provided, the more precise the review
- If no brand guidelines exist, the agent evaluates against general best practices for consistency and flags areas where the content contradicts itself
- The scoring system is relative to your stated brand standards; a perfect score means full compliance, not that the copy is "good" in an absolute sense
- This command reviews brand consistency, not copy quality or conversion potential — use `/copy` for rewrites or `/ab-test` for conversion optimization
- Review one piece of content at a time for the most detailed assessment; bulk reviews are possible but produce higher-level findings
- The brand-guardian agent does not have access to visual assets; describe any visual elements you want reviewed or focus on written content

## Related Agents

- **brand-guardian** — Primary agent that performs the brand consistency review
- **copywriter** — Revise content based on review findings
- **product-marketer** — Verify messaging alignment with positioning strategy
- **social-media-manager** — Apply brand standards to social content
- **strategist** — Align brand guidelines with overall marketing strategy
