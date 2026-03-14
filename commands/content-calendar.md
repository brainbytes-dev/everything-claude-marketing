---
description: Plan an editorial content calendar with topics, formats, channels, and publishing schedule. Aligns content with business goals and audience needs.
---

# /content-calendar

Plan a strategic editorial content calendar that maps topics, formats, and publishing cadence to your business objectives.

## What This Command Does

This command creates a comprehensive content calendar that goes beyond a simple list of topics and dates. It starts by understanding your business goals, audience segments, and key themes, then builds a structured publishing plan that balances thought leadership, demand generation, SEO, and community content. The calendar includes topic ideas with working titles, recommended formats (blog, video, podcast, social, newsletter), distribution channels, ownership assignments, and a realistic publishing cadence. It also maps content to funnel stages and identifies content gaps.

## When to Use

- Planning quarterly or monthly editorial strategy from scratch
- Revamping an underperforming content program
- Launching a new blog, newsletter, podcast, or video series
- Preparing content around a product launch, event, or campaign
- Aligning content across multiple teams or contributors
- Building a content engine for SEO and organic growth
- Coordinating content across formats and channels

## How It Works

1. **Understands objectives** — Asks about business goals, target audience, key themes, and existing content assets
2. **Audits the landscape** — Considers your competitive positioning, seasonal trends, and industry events
3. **Defines content pillars** — Establishes 3-5 thematic pillars that align with your expertise and audience needs
4. **Maps the funnel** — Ensures content exists for awareness, consideration, and decision stages
5. **Builds the calendar** — Creates a week-by-week or day-by-day schedule with topics, formats, channels, and owners
6. **Sets the cadence** — Recommends a sustainable publishing frequency based on your resources
7. **Plans distribution** — Maps each piece to primary and secondary distribution channels
8. **Identifies dependencies** — Flags content that needs design assets, subject matter experts, or customer participation

The command delegates to the **content-strategist** agent, which specializes in editorial planning, content-market fit, and sustainable content operations.

## Example Usage

**Input:**
```
/content-calendar plan Q2 content for our developer tools blog — focus on AI and automation
```

**Output:**

```
CONTENT CALENDAR: Q2 2026
Developer Tools Blog — AI & Automation Focus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTENT PILLARS:
1. AI-Assisted Development — How AI changes the way developers write,
   test, and ship code
2. Automation Playbooks — Practical guides to automating DevOps,
   testing, and workflows
3. Builder Stories — Interviews and case studies from teams using
   AI tools in production
4. Industry Perspective — Commentary on trends, tooling shifts, and
   what's coming next

PUBLISHING CADENCE: 3x/week (Tue, Wed, Thu)
- Tuesday: Deep-dive technical content (1,500-2,500 words)
- Wednesday: Practical tutorial or playbook (1,000-1,500 words)
- Thursday: Industry commentary or interview (800-1,200 words)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APRIL 2026

Week 1 (Apr 6-10)
  Tue | "The Real Productivity Gains from AI Coding Assistants:
        What the Data Shows" [Pillar 1]
        Format: Data-driven blog post | Channel: Blog + LinkedIn +
        Hacker News | Funnel: Awareness
  Wed | "Automate Your PR Review Workflow in 30 Minutes" [Pillar 2]
        Format: Step-by-step tutorial | Channel: Blog + Dev.to +
        Twitter | Funnel: Consideration
  Thu | "How Vercel's Platform Team Ships 3x Faster with AI Testing"
        [Pillar 3]
        Format: Q&A interview | Channel: Blog + Newsletter |
        Funnel: Decision

Week 2 (Apr 13-17)
  Tue | "Beyond Autocomplete: Building Custom AI Agents for Your
        Codebase" [Pillar 1]
        Format: Technical deep-dive | Channel: Blog + Reddit +
        Hacker News | Funnel: Awareness
  Wed | "5 GitHub Actions Workflows Every Team Should Steal"
        [Pillar 2]
        Format: Listicle with code snippets | Channel: Blog +
        Dev.to + Twitter | Funnel: Awareness
  Thu | "The Unbundling of the IDE: Where Developer Tools Are
        Heading" [Pillar 4]
        Format: Opinion piece | Channel: Blog + LinkedIn +
        Newsletter | Funnel: Awareness

[... continues for full quarter with 36 total pieces ...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MONTHLY NEWSLETTER THEMES:
- April: "The State of AI-Assisted Development"
- May: "Automation That Actually Saves Time"
- June: "Mid-Year Developer Tooling Report"

KEY DATES TO BUILD AROUND:
- Google I/O (mid-May) — Prepare reactive commentary pieces
- GitHub Universe announcements — Plan response content
- Q2 product launch (your roadmap) — 3-piece launch content bundle

CONTENT MIX BY FUNNEL STAGE:
- Awareness: 50% (thought leadership, SEO, social-first)
- Consideration: 35% (tutorials, comparisons, use cases)
- Decision: 15% (case studies, integration guides, ROI content)

RESOURCE REQUIREMENTS:
- 1 technical writer (2 pieces/week)
- 1 content strategist (1 piece/week + editorial oversight)
- Design support: 2-3 custom illustrations per week
- SME interviews: 4 per month (schedule 2 weeks ahead)
```

## Important Notes

- **Start with a sustainable cadence.** The agent will push back if your planned frequency exceeds your team's capacity. Publishing consistently at a lower frequency beats burning out at a higher one.
- **Content pillars are not rigid categories.** They are thematic guardrails that ensure variety while maintaining focus. Individual pieces can span multiple pillars.
- **SEO integration is built in.** The agent considers search intent and keyword opportunities when suggesting topics, but does not sacrifice editorial quality for keyword stuffing.
- **The calendar is a living document.** Plan to revisit and adjust monthly based on what performs well, what resonates with your audience, and what changes in your market.
- **Distribution is half the work.** Each piece comes with channel recommendations because even great content fails without deliberate distribution.
- **Repurposing is encouraged.** The agent will identify opportunities to turn one piece into multiple formats (blog to social thread, tutorial to video, interview to podcast clip).

## Related Agents

- **content-strategist** — Primary agent that builds the editorial calendar and content strategy
- **seo-specialist** — Provides keyword research and search intent data to inform topic selection
- **copywriter** — Assists with headline generation and content briefs for individual pieces
- **social-media-manager** — Plans social distribution and repurposing for each calendar entry
