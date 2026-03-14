# CLAUDE.md — Marketing Agency

## Agency Context

We are **Signal & Story**, a full-service marketing agency specializing in B2B tech companies. We manage marketing strategy, content, and campaigns for 8-12 active clients at any time.

- **Services:** Content marketing, demand generation, brand strategy, website copy, paid media management
- **Team:** 15 people (strategists, copywriters, designers, paid media specialists, account managers)
- **Clients:** Series A-C B2B SaaS companies, typically $5M-$50M ARR
- **Differentiator:** We embed with client teams — we operate as their marketing department, not an outside vendor

## Multi-Client Context Switching

Each client has their own directory under `clients/`. Always check which client context is active before writing anything.

### Client Directory Structure
```
clients/
  {client-name}/
    brand/
      voice-guide.md        — Brand voice, tone, style rules
      messaging.md          — Messaging hierarchy and proof points
      competitors.md        — Competitive landscape
      visual-identity.md    — Colors, fonts, logo usage
    campaigns/
      {campaign-name}/      — Active campaign assets
    content/
      blog/                 — Blog drafts and published posts
      email/                — Email sequences and templates
      social/               — Social media content
      ads/                  — Ad copy and creative briefs
    reports/                — Performance reports and analysis
    briefs/                 — Client briefs and meeting notes
```

### Before Writing Any Content
1. Read `clients/{client}/brand/voice-guide.md`
2. Read `clients/{client}/brand/messaging.md`
3. Check `clients/{client}/campaigns/` for active campaign context
4. Review recent content in the relevant channel folder for consistency

## Brand Guidelines Per Client

Every client has unique voice, tone, and messaging. Never mix client voices. Key differences to watch:

| Aspect | Example: Client A (DevTools) | Example: Client B (HR Tech) |
|--------|------------------------------|------------------------------|
| Tone | Technical, direct, irreverent | Warm, professional, empathetic |
| Audience | Senior developers, CTOs | HR directors, CHROs |
| Jargon | OK to use dev terminology | Avoid HR acronyms, explain terms |
| CTA style | "Try it free" / "See the docs" | "Book a demo" / "Talk to our team" |
| Proof points | GitHub stars, benchmarks, OSS community | ROI stats, time saved, employee NPS |

## Workflow for Content Creation and Approval

### Standard Content Workflow
```
1. BRIEF        — Account manager creates brief from client input
2. RESEARCH     — Strategist researches topic, keywords, competitors
3. OUTLINE      — Writer creates outline, gets internal review
4. DRAFT        — Writer creates first draft
5. INTERNAL     — Internal review (strategist + account manager)
6. CLIENT       — Client review (tracked in client's Slack channel)
7. REVISIONS    — Incorporate feedback, second draft
8. APPROVAL     — Final client sign-off
9. PUBLISH      — Schedule/publish and add to content tracker
```

### Approval Rules
- Blog posts: 1 round of internal review + 1 round of client review
- Email sequences: Internal review + client review of full sequence before build
- Ad copy: Client approval required before any spend
- Social posts: Batch approval (weekly content calendar sent every Friday)
- Website copy: Client approval required for every page

## How Agents Are Used Across Clients

### Per-Client Agent Usage
- **copywriter** — Always load the client's voice guide first. Specify the client name when invoking.
- **brand-guardian** — Run on every piece of content before internal review. Score against the specific client's guidelines.
- **seo-analyst** — Use for all blog content. Each client has different keyword targets documented in their `brand/messaging.md`.
- **product-marketer** — Use when creating positioning, comparison pages, or feature announcements. Load the client's competitive landscape first.

### Cross-Client Agent Usage
- **market-researcher** — Used for quarterly competitive analyses and market trend reports shared across relevant clients.
- **analytics-interpreter** — Used for monthly performance reporting. Pull data from each client's analytics and present in standardized report format.
- **cro-specialist** — Used for quarterly landing page and conversion audits across all clients.

### Key Commands
```
/campaign {client}       — Plan a campaign for a specific client
/blog-post {client}      — Write a blog post using the client's voice
/email-sequence {client} — Create email flows for a client
/competitor-analysis {client} — Analyze a client's competitive landscape
/content-calendar {client}    — Generate a monthly content calendar
/performance-report {client}  — Create a monthly performance report
/brand-audit {client}    — Audit recent content against brand guidelines
```

## Agency-Wide Rules

- Never reuse copy across clients — even similar ideas must be rewritten in each client's voice
- Always cite the specific brand guideline when flagging a voice issue
- Performance reports use our standard template in `templates/monthly-report.md`
- All content must pass the "would the client's CEO post this?" test
- Track time spent per client for billing — note the client in all task descriptions
- Slack channels follow the pattern `#client-{name}` for client communication
