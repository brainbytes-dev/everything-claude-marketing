# The Complete Guide to Everything Claude Marketing

---

> **The marketing intelligence system for Claude Code.** 18 agents, 72 skills, 22 commands — every marketing discipline covered.

This guide explains the philosophy, setup, and advanced patterns behind Everything Claude Marketing (ECM). Whether you're a solo marketer or leading an agency, this is how to get the most out of AI-powered marketing workflows.

---

## Part 1: Foundations

### What This Is (And Isn't)

ECM is not a prompt library. It's a **system** — a set of interconnected agents, skills, commands, hooks, and rules that make Claude genuinely useful for marketing work.

The difference:
- **Without ECM**: "Write me a LinkedIn post" → Generic output
- **With ECM**: `/social-post announce our Series A on LinkedIn` → Platform-native content with proper hooks, formatting, CTAs, brand voice, and compliance checks running automatically

The compound effect: every piece of marketing content goes through brand voice checks, compliance validation, CTA verification, and quality scoring — automatically, via hooks.

---

### Skills and Commands

Skills are knowledge modules Claude loads based on context. They're expert playbooks — not prompts, but structured domain knowledge that shapes how Claude approaches marketing tasks.

**Example workflow:**

```
# Need a full campaign? Chain commands:
/persona create buyer persona for enterprise IT buyers
/campaign plan awareness campaign for Q3 targeting that persona
/content-calendar plan 3 months of content supporting the campaign
/email-sequence design nurture sequence for campaign leads
```

Commands are skills triggered by slash commands. They overlap but are stored differently:

- **Skills**: `skills/<category>/<name>/SKILL.md` — deeper knowledge playbooks
- **Commands**: `commands/<name>.md` — quick workflow triggers that delegate to agents

```
# ECM skills structure
skills/
  brand/           # 6 skills (voice, guidelines, positioning...)
  content/         # 8 skills (pillars, calendar, storytelling...)
  copy/            # 7 skills (frameworks, headlines, CTAs...)
  seo/             # 6 skills (technical, keywords, links...)
  social-media/    # 6 skills (X, LinkedIn, Instagram, TikTok, YouTube...)
  email/           # 5 skills (sequences, deliverability, automation...)
  paid-ads/        # 6 skills (Google, Meta, LinkedIn, retargeting...)
  analytics/       # 5 skills (attribution, dashboards, A/B testing...)
  growth/          # 4 skills (loops, referral, viral, PLG...)
  pr/              # 3 skills (press releases, pitching, crisis...)
  product-marketing/ # 4 skills (positioning, GTM, launch...)
  cro/             # 3 skills (landing pages, funnels, frameworks...)
  research/        # 3 skills (market research, personas, interviews...)
  influencer/      # 2 skills (outreach, ROI...)
  creative/        # 1 skill (campaign concepts)
  community/       # 1 skill (strategy)
  marketing-ops/   # 2 skills (martech, UTM tracking)
```

**Key insight**: Skills don't just tell Claude *what* to write — they tell Claude *how to think* about marketing problems. The `copywriting-frameworks` skill doesn't just list AIDA — it explains when to use AIDA vs PAS vs BAB based on the content type and audience awareness level.

---

### Agents

Agents are specialized processes Claude can delegate to. Each has a defined role, limited tools, and a specific model (opus for strategy, sonnet for execution).

```
agents/
  strategist.md           # CMO-level strategy and planning
  brand-guardian.md        # Brand consistency enforcement
  content-strategist.md    # Editorial calendars and programs
  copywriter.md            # All persuasive marketing text
  seo-analyst.md           # Search optimization
  social-media-manager.md  # Platform-native content
  email-marketer.md        # Email sequences and automation
  paid-ads-optimizer.md    # PPC and performance marketing
  analytics-interpreter.md # Data analysis and reporting
  growth-hacker.md         # Experimentation and growth loops
  pr-specialist.md         # Press and media relations
  influencer-manager.md    # Creator partnerships
  product-marketer.md      # Positioning and GTM
  cro-specialist.md        # Conversion optimization
  creative-director.md     # Campaign concepts and visual direction
  market-researcher.md     # Competitive analysis and personas
  community-manager.md     # Community building
  marketing-ops.md         # Martech and automation infrastructure
```

**Why this matters**: When you ask Claude to plan a product launch, it doesn't wing it. It delegates to the `product-marketer` agent, which follows a structured GTM process with launch tiers, cross-functional checklists, and measurement frameworks — the same process a senior PMM would follow.

**Model selection logic:**

| Model | When | Marketing examples |
|-------|------|-------------------|
| **Opus** | Strategic thinking, complex reasoning | Brand positioning, campaign strategy, competitive analysis |
| **Sonnet** | Execution, content creation, analysis | Writing copy, SEO audits, email sequences, social posts |
| **Haiku** | Simple lookups, quick checks | File searches, data lookups, quick formatting |

---

### Hooks

Hooks are automations that fire on specific events. ECM uses them for marketing-specific quality assurance.

**What runs automatically:**

| Hook | When | What It Checks |
|------|------|---------------|
| **Brand Voice Check** | After writing content | Buzzwords, excessive exclamation marks, ALL CAPS |
| **Compliance Check** | After writing content | FTC disclosures, CAN-SPAM, health/financial claims, fake urgency |
| **CTA Check** | After writing content | Whether long content has a clear call to action |
| **Content Quality** | After writing content | Readability, passive voice, weasel words — outputs quality score |
| **Session Start** | New session | Reminds available commands and brand guidelines |

**How hooks help marketers:**

Before ECM, you'd write an email sequence, then manually check: "Did I include unsubscribe?" "Are my claims substantiated?" "Is the urgency genuine?" Now, hooks catch these automatically after every edit.

```json
{
  "PostToolUse": [
    {
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "node \"${CLAUDE_PLUGIN_ROOT}/scripts/hooks/compliance-check.js\""
      }],
      "description": "Check for compliance issues after content edits"
    }
  ]
}
```

**Building custom hooks:**

Need to check for competitor names in your copy? Add a custom hook:

```javascript
// scripts/hooks/competitor-mention-check.js
const input = JSON.parse(require('fs').readFileSync('/dev/stdin', 'utf8'));
const content = input.tool_input?.content || input.tool_input?.new_string || '';
const competitors = ['CompetitorA', 'CompetitorB', 'CompetitorC'];
const found = competitors.filter(c => content.toLowerCase().includes(c.toLowerCase()));
if (found.length > 0) {
  process.stderr.write(`\n[Competitor Check] Mentions: ${found.join(', ')} — ensure claims are factual and fair\n`);
}
process.exit(0);
```

---

### Rules

Rules are always-active guidelines. Unlike skills (loaded on demand), rules apply to every session. ECM has 5:

1. **Compliance** — GDPR, CAN-SPAM, FTC disclosure, platform-specific ad policies
2. **Brand Consistency** — Voice, tone, messaging hierarchy, visual guidelines
3. **Ethical Marketing** — No dark patterns, misleading claims, fake urgency
4. **Data Privacy** — Consent management, data minimization, PII handling
5. **Platform Policies** — Meta, Google, LinkedIn, TikTok, YouTube specific rules

**Why rules matter**: A skill tells Claude *how* to write a Meta ad. A rule ensures it *never* writes one that violates Meta's ad policies — regardless of which skill is active.

---

### Contexts (Mode Switching)

Contexts change Claude's behavior based on your current work mode:

```bash
# Active campaign execution — prioritize output speed
alias claude-campaign='claude --system-prompt "$(cat contexts/campaign.md)"'

# Market research — prioritize thoroughness and evidence
alias claude-research='claude --system-prompt "$(cat contexts/research.md)"'

# Content review — prioritize quality and compliance
alias claude-review='claude --system-prompt "$(cat contexts/review.md)"'
```

| Context | Behavior | Best For |
|---------|----------|----------|
| **Campaign** | Write first, optimize after. Ship fast. | Creating content, writing copy, building assets |
| **Research** | Read widely, document findings, evidence first. | Competitive analysis, market sizing, personas |
| **Review** | Score against brand guidelines, flag by severity. | Content QA, brand audits, pre-publish checks |

---

### MCP Servers

MCPs connect Claude to external marketing tools. ECM ships with 10 pre-configured servers:

| MCP | What For |
|-----|---------|
| **Firecrawl** | Competitor website analysis, content scraping |
| **Exa** | Neural search for market research and trends |
| **Slack** | Team content approvals and communication |
| **Notion** | Content calendars, campaign tracking, wikis |
| **Google Drive** | Brand assets, content docs, campaign briefs |
| **Playwright** | Landing page testing, competitor UX research |
| **GitHub** | Content management, collaboration |
| **Memory** | Persistent brand guidelines across sessions |
| **Sequential Thinking** | Complex strategy and planning |
| **Context7** | Up-to-date marketing tool documentation |

**Important**: Don't enable all MCPs simultaneously. Each one consumes context window space. Keep 3-5 active based on your current task:

- Writing content? Enable **Memory** (for brand guidelines) + **Notion** (for calendar)
- Doing research? Enable **Firecrawl** + **Exa** + **Sequential Thinking**
- Running a review? Enable **Playwright** + **Google Drive**

---

## Part 2: Advanced Patterns

### Multi-Agent Workflows

Complex marketing tasks require multiple agents working in sequence. ECM orchestrates this automatically:

**Campaign Planning Flow:**
```
User: /campaign launch AI writing tool for content marketers

1. strategist agent (opus)
   → Situation analysis, objectives, audience, channel strategy

2. product-marketer agent (opus)
   → Positioning, messaging hierarchy, competitive differentiation

3. content-strategist agent (sonnet)
   → Content pillars, editorial calendar, distribution plan

4. copywriter agent (opus)
   → Key messages, landing page copy, ad copy variants

5. paid-ads-optimizer agent (opus)
   → Channel allocation, targeting, bid strategy

6. email-marketer agent (sonnet)
   → Launch sequence, nurture flow, automation triggers
```

**Product Launch Flow:**
```
/launch → product-marketer → [copywriter + pr-specialist +
          social-media-manager + email-marketer] (parallel)
```

**Growth Sprint Flow:**
```
/growth-experiment → growth-hacker → analytics-interpreter →
                     cro-specialist → paid-ads-optimizer
```

**Key insight**: Agents can run in parallel when their work doesn't overlap. A copywriter writing landing page copy while the social-media-manager creates platform content while the email-marketer designs the launch sequence — all simultaneously.

---

### Context and Memory Management

**The Problem**: Marketing work is inherently contextual. Brand voice, campaign history, audience insights, competitive landscape — you need this context but can't afford to waste your context window loading it every time.

**Solution 1: Brand Memory Files**

Create a living brand document that persists across sessions:

```bash
# Create brand memory
mkdir -p ~/.claude/marketing/

# brand-context.md contains:
# - Brand voice attributes
# - Messaging hierarchy
# - Key proof points
# - Competitor positioning
# - Current campaign themes
```

**Solution 2: Strategic Compaction**

Don't let auto-compaction discard marketing context mid-campaign. Manually compact at logical breakpoints:

```
/compact   # After finishing research, before starting execution
/compact   # After drafting, before review
/compact   # After one campaign, before starting another
```

**Solution 3: Session Persistence**

For multi-day campaigns, save state between sessions:

- What content has been created (and approved)
- What's still in draft
- Key decisions made (positioning, channel mix, messaging)
- What feedback has been received

---

### Token Optimization for Marketing

Marketing content generation is token-intensive. Here's how to optimize:

**1. Use the right model for each task:**

| Task | Model | Token Cost |
|------|-------|-----------|
| Brand strategy, positioning | Opus | Higher, but worth it |
| Writing blog posts, emails | Sonnet | Best balance |
| Reformatting, simple edits | Haiku | Cheapest |
| Social post variants | Sonnet | Good quality/cost |
| Data analysis, reporting | Sonnet | Sufficient |

**2. Replace MCPs with CLI commands where possible:**

Instead of keeping the Notion MCP loaded at all times, create a command that uses the Notion CLI for specific actions. Saves context window space.

**3. Keep brand guidelines in rules, not repeated in prompts:**

Bad: Pasting brand voice doc into every prompt
Good: Brand voice in `rules/common/brand-consistency.md` — loaded once, applied always

**4. Modular content over monolithic briefs:**

Instead of one massive campaign brief, break it into focused pieces:
- Positioning document (fed to product-marketer)
- Creative brief (fed to creative-director)
- Channel plan (fed to strategist)
- Content calendar (fed to content-strategist)

---

### Parallel Marketing Workflows

**The Two-Instance Kickoff Pattern (adapted for marketing):**

**Instance 1: Strategy & Research**
- Run `/competitive-analysis` to map the landscape
- Run `/persona` to build target audience profiles
- Create positioning and messaging framework

**Instance 2: Asset Creation**
- Set up content calendar structure
- Create templates for recurring content
- Draft initial brand guidelines

**The Cascade Method for Campaign Launches:**

When launching a campaign across multiple channels:

1. **Tab 1**: Strategy and messaging (strategist agent)
2. **Tab 2**: Landing page and email copy (copywriter agent)
3. **Tab 3**: Social content across platforms (social-media-manager agent)
4. **Tab 4**: Ad creative and targeting (paid-ads-optimizer agent)

Sweep left to right, oldest to newest. Focus on 3-4 tabs maximum.

---

### Continuous Learning for Marketing

When Claude discovers a pattern that works — a headline formula that consistently gets high CTR, a email subject line pattern that outperforms — it should save that as a skill for future use.

**What to capture:**
- Winning copy patterns specific to your brand/audience
- Platform-specific formatting that performs well
- Campaign structures that drive results
- Audience insights that inform future targeting

**What NOT to capture:**
- One-time campaign details (those belong in project docs)
- Seasonal trends (they change)
- Platform algorithms (they change constantly)

---

### Verification Patterns for Marketing

**Pre-Publish Checklist (automated via hooks):**

Every piece of marketing content should pass:

1. Brand voice consistency score (brand-voice-check.js)
2. Compliance validation (compliance-check.js)
3. CTA presence and clarity (cta-check.js)
4. Content quality score (post-content-quality.js)

**Manual Review Layer:**

After hooks pass, human review for:
- Strategic alignment (does this support campaign objectives?)
- Competitive sensitivity (any IP or trademark issues?)
- Timing (is this the right moment for this message?)
- Legal review (for regulated industries)

---

## Part 3: Setup for Your Team

### For Solo Marketers / Startup Growth

```bash
# Install the plugin
claude plugins install everything-claude-marketing

# Start with these commands:
/persona          # Know your audience
/campaign         # Plan your approach
/content-calendar # Structure your output
/copy             # Create the content
/analytics        # Measure results
```

Focus agents: `strategist`, `copywriter`, `seo-analyst`, `growth-hacker`

See: `examples/startup-growth-CLAUDE.md`

### For Marketing Teams

```bash
# Each team member installs the plugin
# Share brand guidelines via a central brand-context.md

# Content team uses:
/copy, /content-calendar, /social-post, /blog-seo, /case-study

# Performance team uses:
/ad-creative, /analytics, /ab-test, /landing-page, /funnel

# Strategy team uses:
/campaign, /competitive-analysis, /persona, /budget, /launch
```

See: `examples/saas-marketing-CLAUDE.md`

### For Agencies

```bash
# Per-client brand context files:
~/.claude/marketing/clients/
  acme-corp/brand-context.md
  startup-xyz/brand-context.md
  bigco/brand-context.md

# Switch context per client:
claude --system-prompt "$(cat ~/.claude/marketing/clients/acme-corp/brand-context.md)"
```

See: `examples/agency-CLAUDE.md`

---

## Part 4: Quick Reference

### All 22 Commands

| Command | Agents Used | Best For |
|---------|------------|---------|
| `/campaign` | strategist | End-to-end campaign planning |
| `/copy` | copywriter | Any marketing text |
| `/seo-audit` | seo-analyst | Search optimization |
| `/social-post` | social-media-manager | Platform-native social content |
| `/email-sequence` | email-marketer | Email automation flows |
| `/ad-creative` | paid-ads-optimizer + copywriter | Ad copy and creative briefs |
| `/analytics` | analytics-interpreter | Data interpretation |
| `/competitive-analysis` | market-researcher + product-marketer | Competitor analysis |
| `/launch` | product-marketer | Product/feature launches |
| `/brand-review` | brand-guardian | Brand consistency checks |
| `/ab-test` | cro-specialist | Experiment design |
| `/press-release` | pr-specialist | Press announcements |
| `/content-calendar` | content-strategist | Editorial planning |
| `/funnel` | cro-specialist | Funnel design |
| `/persona` | market-researcher | Buyer personas |
| `/pitch` | pr-specialist / influencer-manager | Media/influencer outreach |
| `/budget` | strategist + analytics-interpreter | Budget allocation |
| `/growth-experiment` | growth-hacker | Growth experiments |
| `/landing-page` | cro-specialist + copywriter | Landing page optimization |
| `/case-study` | content-strategist + copywriter | Customer stories |
| `/influencer-brief` | influencer-manager | Creator briefs |
| `/rebrand` | brand-guardian + creative-director | Rebranding initiatives |

### Key Shortcuts

- **Chain commands**: `/persona` → `/campaign` → `/content-calendar` → `/copy`
- **Parallel agents**: Launch copywriter + social-media-manager + email-marketer simultaneously
- **Mode switching**: Use contexts to shift between campaign/research/review mindsets
- **Brand memory**: Keep brand-context.md in a persistent location

---

## Key Takeaways

1. **System over prompts** — A well-configured system beats individual prompts every time
2. **Agents are specialists** — Let each agent do what it's best at, don't force one to do everything
3. **Compliance is automated** — Hooks catch issues before they become problems
4. **Context is precious** — Disable unused MCPs, use the right model for each task
5. **Brand consistency is non-negotiable** — Rules enforce it automatically, every session
6. **Platform-native always** — Never cross-post identical content across platforms

---

## Resources

- [Everything Claude Marketing (GitHub)](https://github.com/YOUR_USERNAME/everything-claude-marketing)
- [Everything Claude Code (inspiration)](https://github.com/affaan-m/everything-claude-code) by Affaan Mustafa
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [MCP Overview](https://modelcontextprotocol.io)

---

*Built for marketers who build with AI.*
