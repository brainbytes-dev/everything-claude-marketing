# Contributing to Everything Claude Marketing

Thanks for wanting to contribute! This plugin is a community resource for marketing teams using Claude Code.

## Table of Contents

- [What We're Looking For](#what-were-looking-for)
- [Quick Start](#quick-start)
- [Contributing Skills](#contributing-skills)
- [Contributing Agents](#contributing-agents)
- [Contributing Commands](#contributing-commands)
- [Contributing Hooks](#contributing-hooks)
- [Pull Request Process](#pull-request-process)

---

## What We're Looking For

### Skills by Industry Vertical
- Healthcare marketing (HIPAA-aware, FDA compliance)
- SaaS / B2B marketing patterns
- E-commerce / D2C playbooks
- Real estate marketing
- Financial services marketing (SEC/FINRA compliance)
- Restaurant / hospitality marketing
- Education / EdTech marketing
- Non-profit fundraising and awareness

### New Agents
- Event marketer (conferences, webinars, virtual events)
- Affiliate marketing manager
- Podcast producer / audio content strategist
- Video marketing specialist
- Partnership / co-marketing manager

### Skills
- Platform-specific playbooks (Pinterest, Snapchat, Reddit Ads)
- Industry benchmarks and KPI databases
- Marketing psychology frameworks
- Localization and international marketing
- Account-based marketing (ABM)

### Commands
- `/webinar` — Plan and promote webinars
- `/newsletter` — Design newsletter editions
- `/pricing-page` — Optimize pricing page copy
- `/testimonial` — Collect and format testimonials

---

## Quick Start

```bash
# 1. Fork and clone
gh repo fork brainbytes-dev/everything-claude-marketing --clone
cd everything-claude-marketing

# 2. Create a branch
git checkout -b feat/my-contribution

# 3. Add your contribution (see sections below)

# 4. Test locally with Claude Code
claude plugins install .

# 5. Submit PR
git add . && git commit -m "feat: add my-skill" && git push -u origin feat/my-contribution
```

---

## Contributing Skills

Skills are knowledge modules that Claude loads based on context.

### Directory Structure

```
skills/
└── your-category/
    └── your-skill-name/
        └── SKILL.md
```

### SKILL.md Template

```markdown
---
name: your-skill-name
description: Brief description shown in skill list
origin: ECM
---

# Your Skill Title

Brief overview of what this skill covers.

## When to Activate

Describe scenarios where this skill applies.

## First Questions

Clarify before starting:
- Key question 1
- Key question 2

## Core Rules

1. Rule one
2. Rule two

## Detailed Guidance

### Topic A
Content with examples...

### Topic B
Content with templates...

## Quality Gate

Before delivering:
- [ ] Check 1
- [ ] Check 2
```

### Skill Checklist

- [ ] Focused on one marketing domain
- [ ] Includes practical examples and templates
- [ ] Under 500 lines
- [ ] Uses clear section headers
- [ ] Has a Quality Gate section
- [ ] Tested with Claude Code

---

## Contributing Agents

Agents are specialized assistants invoked automatically or via commands.

### File Location

```
agents/your-agent-name.md
```

### Agent Template

```markdown
---
name: your-agent-name
description: What this agent does and when to invoke it. Be specific!
tools: ["Read", "Grep", "Glob"]
model: sonnet
---

You are a [role] specialist.

## Your Role
- Primary responsibility
- Secondary responsibility

## Process
### Step 1: Understand
### Step 2: Execute
### Step 3: Deliver

## Output Format
What you return.

## Worked Example
Detailed example showing input and output.

## Best Practices
- Do this
- Avoid that

## Red Flags
- Watch for this
```

### Agent Fields

| Field | Description | Options |
|-------|-------------|---------|
| `name` | Lowercase, hyphenated | `event-marketer` |
| `description` | Used to decide when to invoke | Be specific! |
| `tools` | Only what's needed | `Read, Write, Edit, Bash, Grep, Glob` |
| `model` | Complexity level | `haiku` (simple), `sonnet` (standard), `opus` (complex strategy) |

---

## Contributing Commands

Commands are user-invoked actions with `/command-name`.

### File Location

```
commands/your-command.md
```

### Command Template

```markdown
---
description: Brief description shown in /help
---

# Command Name

## What This Command Does
1. Step one
2. Step two

## When to Use
Scenarios...

## How It Works
Which agents are invoked and how.

## Example Usage
Realistic input/output example.

## Related Agents
- agent-one
- agent-two
```

---

## Contributing Hooks

Hooks are automatic behaviors triggered by Claude Code events.

### Hook Types

| Type | Trigger | Use Case |
|------|---------|----------|
| `PreToolUse` | Before tool runs | Validate, warn, remind |
| `PostToolUse` | After tool runs | Check quality, compliance |
| `SessionStart` | Session begins | Load context, welcome |
| `Stop` | Response ends | Audit, remind |

### Hook Script Guidelines

- Write in Node.js (for cross-platform compatibility)
- Read input from stdin (JSON with `tool_name` and `tool_input`)
- Output warnings to stderr
- Exit 0 (non-blocking) unless the hook should block
- Keep execution under 10 seconds

---

## Pull Request Process

### PR Title Format

```
feat(skills): add healthcare-marketing skill
feat(agents): add event-marketer agent
feat(commands): add webinar command
fix(skills): update meta-ads with Advantage+ changes
docs: improve contributing guide
```

### Review Process

1. Maintainers review within 48 hours
2. Address feedback if requested
3. Once approved, merged to main

---

## File Naming

- Use lowercase with hyphens: `email-marketer.md`
- Be descriptive: `landing-page-optimization` not `optimization`
- Match the `name` field in frontmatter to the filename

## Guidelines

### Do
- Keep contributions focused and modular
- Include practical examples and templates
- Test before submitting
- Follow existing patterns
- Ensure compliance awareness (no dark patterns, misleading claims)

### Don't
- Include sensitive data (API keys, client data, real customer info)
- Add overly niche content without broad applicability
- Submit untested contributions
- Create duplicates of existing functionality

---

Thanks for contributing!
