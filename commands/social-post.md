---
description: Create platform-native social media content for X, LinkedIn, Instagram, TikTok, or YouTube. Adapts content per platform.
---

# /social-post

Create platform-native social media content that fits the conventions, algorithms, and audience expectations of each platform. Supports X, LinkedIn, Instagram, TikTok, YouTube, and more.

## What This Command Does

The `/social-post` command generates ready-to-publish social media content adapted to each specified platform. It handles the nuances that matter — character limits, hashtag strategies, hook formats, content structure, and engagement patterns unique to each network. When you specify multiple platforms, each post is independently crafted rather than copy-pasted across channels.

The command delegates to the **social-media-manager agent**, which understands platform-specific best practices, algorithm preferences, and audience behavior patterns.

## When to Use

- You are announcing company news, product launches, or milestones
- You need to promote blog posts, case studies, or other content
- You want to share thought leadership or industry insights
- You are building a content calendar and need draft posts
- You need to repurpose one piece of content across multiple platforms
- You want to create engagement-focused posts (polls, questions, threads)
- You are drafting posts for executives or team members

## How It Works

1. **Platform Selection** — Identifies which platforms to create content for
2. **Message Extraction** — Distills the core message, news, or story from your input
3. **Format Optimization** — Selects the best content format for each platform (thread, carousel outline, short-form video script, single post, etc.)
4. **Hook Engineering** — Crafts attention-grabbing opening lines tuned to each platform's scroll behavior
5. **Content Structuring** — Formats the body content using platform-native patterns (line breaks, emojis, bullet points as appropriate)
6. **CTA & Engagement** — Adds platform-appropriate calls to action and engagement prompts
7. **Hashtag & Keyword Strategy** — Includes relevant hashtags or keywords based on platform norms

## Example Usage

**Input:**

```
/social-post announce our Series A on LinkedIn and X
```

**Output:**

```markdown
# LinkedIn Post

We just raised our Series A.

But here's what I'm most proud of — it's not the number.

It's the 340 customers who chose us before any investor did.

18 months ago, we launched [Product] with a simple idea:
[core value proposition in one line].

Since then:
- 340 paying customers
- 3x revenue growth quarter over quarter
- Team grew from 4 to 22

Today we're announcing our $12M Series A led by [Investor],
with participation from [others].

This funding lets us:
1. Double our engineering team
2. Launch in 3 new markets
3. Build the features our customers have been asking for

To our customers — you made this possible.
To our team — this is just the beginning.
To anyone building something new — the best fundraise
deck is happy customers.

We're hiring across engineering, sales, and marketing.
Link in comments.

#SeriesA #StartupFunding #SaaS #B2B

---

# X Post (Thread)

**Post 1/4:**
Big news: We just raised $12M in Series A funding led
by [Investor].

But the real story isn't the raise — it's the 340 customers
who got us here.

A thread on what we learned building to this point:

**Post 2/4:**
18 months ago we were 4 people with an idea.

We did one thing differently: we sold before we built.

340 conversations with potential customers before writing
a single line of code.

That changed everything.

**Post 3/4:**
What this funding means:
- 2x engineering team
- 3 new markets
- Features our customers actually asked for

We're not building what investors want.
We're building what customers told us they need.

**Post 4/4:**
We're hiring across the board:
- Engineers (full-stack, backend)
- Sales (AE, SDR)
- Marketing (content, demand gen)

Remote-friendly. Customer-obsessed culture.

DM me or check the link below.
```

## Important Notes

- Specify the platforms you want content for — each platform gets uniquely crafted content, not reformatted copies
- Include the key facts, numbers, and details you want featured — the agent will structure them but cannot invent specifics
- Posts are drafts; review for accuracy, especially quotes, metrics, and claims before publishing
- Hashtag recommendations are based on general best practices; check current trending and relevant tags before posting
- For visual platforms (Instagram, TikTok), the command provides content concepts and captions but not visual assets — pair with a designer for imagery
- LinkedIn posts favor personal storytelling and lessons learned; X favors concise, punchy statements — the agent adapts accordingly

## Related Agents

- **social-media-manager** — Primary agent that creates platform-native content
- **copywriter** — Polish copy or create supporting content
- **brand-guardian** — Ensure posts align with brand voice guidelines
- **strategist** — Plan broader social media strategy and content calendars
- **analytics-interpreter** — Analyze social media performance and optimize
