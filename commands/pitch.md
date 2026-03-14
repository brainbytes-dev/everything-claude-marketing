---
description: Create a media pitch or influencer pitch — compelling angle, personalized outreach, and follow-up strategy.
---

# /pitch

Craft a compelling media or influencer pitch with a sharp angle, personalized outreach, and a follow-up plan that gets responses.

## What This Command Does

This command creates a targeted pitch designed to earn media coverage or influencer collaboration. It starts by identifying the right angle — the reason a journalist or creator would care about your story — then builds a concise, personalized outreach message that respects the recipient's time and interests. The output includes the pitch email itself, subject line options, supporting materials to include or have ready, a follow-up sequence, and guidance on timing and targeting. The command adapts its approach based on whether you are pitching traditional media, trade publications, newsletters, podcasts, or social media creators.

## When to Use

- Pitching a journalist about a product launch, funding round, or company news
- Reaching out to a podcast host for a guest appearance
- Contacting a newsletter writer about featuring your product or perspective
- Proposing a contributed article or opinion piece to a publication
- Pitching an influencer or creator for a sponsored collaboration
- Responding to a journalist's request for sources (HARO, Qwoted, etc.)
- Building a media list and outreach plan for a PR campaign

## How It Works

1. **Identifies the target** — Determines whether this is a media pitch, influencer pitch, or podcast pitch and adjusts format accordingly
2. **Finds the angle** — Isolates what makes your story newsworthy, timely, or relevant to the specific outlet's audience
3. **Researches the recipient** — Considers the journalist's beat, recent coverage, or the creator's content style and audience
4. **Writes the pitch** — Crafts a concise, skimmable email that leads with the hook and makes the ask clear
5. **Prepares supporting assets** — Lists what to attach or have ready (data, images, demo access, press kit)
6. **Plans the follow-up** — Builds a follow-up sequence with timing and messaging for each touch
7. **Suggests alternatives** — If the primary target is a long shot, recommends backup outlets or angles

The command delegates to the **pr-specialist** agent for media pitches or the **influencer-manager** agent for creator pitches, depending on the target.

## Example Usage

**Input:**
```
/pitch pitch TechCrunch about our AI-powered marketing attribution tool
```

**Output:**

```
MEDIA PITCH: TECHCRUNCH
Target beat: Enterprise / Marketing Tech / AI
Recommended reporter: [Reporter Name] — covers marketing tech, AI
applications in enterprise, recently wrote about attribution challenges

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ANGLE:
Marketing teams waste 30-40% of ad spend because multi-touch
attribution is still broken. Your tool uses AI to solve a problem
that Google's cookie deprecation made worse — and you have the
customer data to prove it works.

Why this angle works for TechCrunch:
- Timely: Post-cookie attribution is an active storyline
- Data-driven: Concrete waste numbers make it tangible
- Enterprise AI: Fits their coverage of AI solving real
  business problems (not just chatbots)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBJECT LINE OPTIONS:
1. "Marketing teams waste 35% of ad spend — this AI tool fixes
    attribution"
2. "AI attribution startup shows where ad dollars actually convert"
3. "The post-cookie attribution problem just got a real solution"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PITCH EMAIL:

Hi [Reporter Name],

Noticed your piece on [recent relevant article] — the attribution
gap you described is exactly what we've been solving at [Company].

Quick context: marketing teams still waste 30-40% of their ad
spend because existing attribution tools can't connect the dots
across channels. Google's cookie changes made it worse, and most
"solutions" just added another dashboard nobody trusts.

We built [Product] to fix this with AI that maps the actual
customer journey — not modeled data, real observed paths. In the
six months since launch:

- 340+ marketing teams have switched from legacy attribution
- Average customer sees 22% improvement in ROAS within 60 days
- Processing $2.1B in attributed ad spend monthly

Our largest customer, a DTC brand spending $5M/month on ads,
recovered $840K in wasted spend in their first quarter.

Would you be interested in a 15-minute call to see the data?
Happy to share customer case studies and a demo. Also available
to provide expert commentary anytime you're covering attribution
or marketing AI.

Best,
[Name]
[Title, Company]
[Phone]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUPPORTING MATERIALS TO HAVE READY:
- One-page product overview (not a sales deck)
- 2-3 customer case studies with specific metrics
- Headshot and bio of spokesperson
- Product screenshots or demo video (30 seconds max)
- Company fact sheet (founding date, funding, team size, customers)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOLLOW-UP SEQUENCE:

Day 3: Brief follow-up — add one new data point or timely hook
  "Following up quickly — just released our Q1 attribution
   benchmarks showing [new data point]. Thought it might be
   useful for your coverage. Full report attached."

Day 7: Offer alternative angle or format
  "Totally understand if the timing isn't right for a full
   piece. Would [Founder] be useful as a source for future
   stories on marketing AI or attribution? Happy to be a
   resource whenever relevant."

Day 14: Final touch — add value without asking
  "Saw your piece on [topic] — thought you might find this
   data interesting: [relevant stat]. No pitch, just thought
   it was relevant to your beat."

After 3 touches: Move to nurture — engage on social, comment
on their articles, build the relationship for future pitches.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIMING RECOMMENDATIONS:
- Send Tuesday-Thursday, 7:00-9:00 AM in reporter's time zone
- Avoid Mondays (inbox backlog) and Fridays (weekend mode)
- Check if reporter is at a conference — pitch before or after,
  not during
- Avoid embargo break days for competing announcements

BACKUP TARGETS:
1. VentureBeat — MarTech / AI beat
2. MarTech.org — Attribution and analytics coverage
3. The Information — Enterprise software analysis
4. Marketing Brew — Newsletter, broader marketing audience
```

## Important Notes

- **Personalization is non-negotiable.** Generic mass pitches get deleted. The agent tailors each pitch to the specific reporter or creator, but you should verify the personalization details are accurate before sending.
- **Lead with the angle, not yourself.** Journalists care about stories their readers want to read, not about your company. The pitch leads with why their audience should care.
- **Shorter is better.** The pitch email is designed to be read in under 30 seconds. Every sentence earns its place or gets cut.
- **Follow-up is where deals happen.** Most coverage comes from the second or third touch, not the first email. The follow-up sequence is designed to add value, not just repeat the ask.
- **Media and influencer pitches are different.** The agent automatically adjusts tone, format, and ask based on whether you are pitching a journalist (wants a story) or a creator (wants a partnership).
- **Always verify contact details.** The agent suggests reporter names and beats based on available information. Confirm these are current before sending.

## Related Agents

- **pr-specialist** — Primary agent for media pitches, journalist outreach, and earned media strategy
- **influencer-manager** — Handles influencer and creator pitches, partnership negotiations, and collaboration briefs
- **copywriter** — Assists with pitch copy refinement and subject line testing
- **content-strategist** — Plans supporting content that strengthens the pitch (data, reports, bylines)
