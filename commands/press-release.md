---
description: Write a press release with proper structure — headline, lead, body, quotes, and boilerplate. Includes distribution guidance.
---

# /press-release

Write a professional press release with proper journalistic structure, compelling quotes, and distribution strategy.

## What This Command Does

This command generates a complete, publish-ready press release following the standard inverted-pyramid structure that journalists and editors expect. It crafts a compelling headline, a strong lead paragraph that covers the essential who/what/when/where/why, supporting body paragraphs with context and data, executive quotes that add perspective rather than restating facts, and a company boilerplate. Beyond the press release itself, it provides distribution guidance including wire service recommendations, targeted media outreach suggestions, and timing advice.

## When to Use

- Announcing a funding round, acquisition, or major partnership
- Launching a new product, feature, or service
- Sharing significant company milestones (revenue targets, user growth, awards)
- Announcing executive hires or leadership changes
- Releasing research findings or industry reports
- Responding to industry events where your company has a relevant angle
- Entering a new market or expanding geographically

## How It Works

1. **Gathers context** — Asks about the announcement type, key facts, target audience, and any embargo requirements
2. **Structures the release** — Builds the press release using AP style and standard PR format conventions
3. **Crafts the headline** — Writes a clear, newsworthy headline (and optional subhead) that avoids hype and focuses on impact
4. **Writes the lead** — Packs the most important information into the first paragraph
5. **Develops the body** — Adds supporting details, market context, and data points that strengthen the story
6. **Creates quotes** — Writes quotable, natural-sounding executive quotes that add perspective
7. **Adds boilerplate** — Includes or refines the company description paragraph
8. **Recommends distribution** — Suggests wire services, journalist targets, and optimal timing

The command delegates to the **pr-specialist** agent, which understands media conventions, AP style, and what makes a release newsworthy versus ignored.

## Example Usage

**Input:**
```
/press-release announce our $5M seed round led by Sequoia
```

**Output:**

```
FOR IMMEDIATE RELEASE

Media Contact:
[Name], [Title]
[Email] | [Phone]

---

DATAFLOW RAISES $5M SEED ROUND LED BY SEQUOIA CAPITAL
TO MAKE REAL-TIME DATA PIPELINES ACCESSIBLE TO EVERY ENGINEERING TEAM

Funding will accelerate product development and expand go-to-market
as demand for simplified data infrastructure surges

SAN FRANCISCO — March 14, 2026 — Dataflow, the real-time data pipeline
platform that eliminates infrastructure complexity, today announced it has
raised $5 million in seed funding led by Sequoia Capital, with participation
from Y Combinator and angel investors including [notable names]. The
investment will fuel product expansion and team growth as the company
addresses the $45B data integration market.

Dataflow enables engineering teams to build production-grade data pipelines
in minutes rather than months. Since launching in private beta six months
ago, the platform has been adopted by over 200 engineering teams, processing
more than 2 billion events daily.

"Every engineering team we talk to is drowning in data infrastructure
complexity," said [Founder Name], CEO and co-founder of Dataflow. "We
built Dataflow because we lived this problem — and the response from
early customers confirms that the market is ready for a fundamentally
simpler approach."

[Partner Name], Partner at Sequoia Capital, added: "Dataflow is doing for
data pipelines what Stripe did for payments — turning a weeks-long
infrastructure project into a few lines of code. The early traction
speaks for itself."

The funding will be used to expand the engineering team, launch additional
data source integrations, and build out self-serve onboarding to support
the company's product-led growth motion.

**About Dataflow**
Dataflow is the real-time data pipeline platform built for modern
engineering teams. Founded in 2025 by [names], the company makes it
simple to connect, transform, and route data across any system — without
managing infrastructure. Dataflow is backed by Sequoia Capital and
Y Combinator. Learn more at dataflow.io.

###

---

DISTRIBUTION RECOMMENDATIONS:

Wire Services:
- Business Wire or PR Newswire (national circuit + tech trade)
- Consider GlobeNewswire as a cost-effective alternative

Targeted Outreach (pitch individually before wire):
- TechCrunch — Startups/Fundraising beat
- VentureBeat — Enterprise/AI/Data beat
- The Information — VC/Startups desk
- Relevant Substack/newsletter writers in the data space

Timing:
- Embargo with 2-3 top-tier outlets 48-72 hours before wire
- Target Tuesday-Thursday, 8:00-10:00 AM ET for wire distribution
- Avoid major conference weeks or earnings season overlap
```

## Important Notes

- **Newsworthiness matters.** Not everything deserves a press release. If the announcement lacks genuine news value, the pr-specialist agent will suggest alternative formats like blog posts or social announcements.
- **Quotes should sound human.** The generated quotes avoid corporate jargon and are designed to sound like something a real person would actually say in conversation.
- **AP style is the default.** The release follows Associated Press style guidelines, which is the standard most journalists and editors expect.
- **Embargo guidance is included** when relevant. The agent will advise on embargo strategy for sensitive announcements.
- **Localization is available.** If you are announcing in multiple markets, specify the regions and the agent will adjust format and distribution recommendations.
- **Always review facts and figures.** The agent works from the information you provide — double-check all numbers, names, and dates before distributing.

## Related Agents

- **pr-specialist** — Primary agent that handles press release creation and media strategy
- **copywriter** — Can assist with headline variations and quote refinement
- **content-strategist** — Helps plan supporting content around the announcement (blog posts, social, email)
- **brand-guardian** — Reviews the release for brand voice and messaging consistency
