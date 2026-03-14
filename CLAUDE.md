# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this plugin.

## Project Overview

This is a **Claude Code marketing plugin** — a comprehensive collection of production-ready agents, skills, hooks, commands, and rules covering every marketing discipline. From brand strategy to growth hacking, from SEO to influencer marketing, this plugin gives Claude deep domain expertise across the entire marketing landscape.

## Architecture

The project is organized into core components:

- **agents/** — 18 specialized marketing subagents (strategist, copywriter, seo-analyst, etc.)
- **skills/** — 55+ domain knowledge playbooks organized by marketing discipline
- **commands/** — 22 slash commands for common marketing workflows
- **hooks/** — Trigger-based automations (brand consistency checks, compliance validation)
- **rules/** — Always-active guidelines (GDPR, brand voice, ethical marketing, platform policies)
- **mcp-configs/** — MCP server configurations for external marketing tools

## Key Commands

- `/campaign` — Plan a marketing campaign end-to-end
- `/copy` — Write marketing copy (ads, landing pages, emails, sales pages)
- `/seo-audit` — Run SEO analysis on content or pages
- `/social-post` — Create platform-native social media content
- `/email-sequence` — Design email automation sequences
- `/ad-creative` — Create ad copy and creative briefs
- `/analytics` — Interpret marketing data and build reports
- `/competitive-analysis` — Analyze competitors and market positioning
- `/launch` — Plan a product or feature launch
- `/brand-review` — Check content for brand consistency
- `/ab-test` — Design A/B tests with hypotheses and success metrics
- `/press-release` — Write press releases
- `/content-calendar` — Plan editorial calendars
- `/funnel` — Design and optimize marketing funnels
- `/persona` — Create data-driven buyer personas
- `/pitch` — Create media or influencer pitches
- `/budget` — Plan and allocate marketing budgets
- `/growth-experiment` — Design growth experiments with ICE scoring
- `/landing-page` — Optimize landing pages for conversion
- `/case-study` — Write customer case studies
- `/influencer-brief` — Create influencer collaboration briefs
- `/rebrand` — Plan rebranding initiatives

## Core Principles

1. **Strategy-First** — Always start with objectives and audience before tactics
2. **Data-Driven** — Back claims with metrics, benchmarks, and evidence
3. **Brand-Consistent** — Every output must align with brand voice and guidelines
4. **Compliance-Aware** — GDPR, CAN-SPAM, FTC, DSGVO always respected
5. **Platform-Native** — Content adapts to each platform's conventions, never cross-posted verbatim
6. **Ethical Marketing** — No misleading claims, dark patterns, or manipulative tactics

## Agent Format

Markdown with YAML frontmatter:
- `name`: Agent identifier (kebab-case)
- `description`: When and why to use this agent
- `tools`: Array of allowed tools
- `model`: opus | sonnet | haiku

## Skill Format

Markdown in `skills/<discipline>/<skill-name>/SKILL.md`:
- YAML frontmatter with name, description, origin
- Clear "When to Activate" section
- Core rules and frameworks
- Practical examples and templates
- Quality gate checklist

## Contributing

- Agents: Markdown with frontmatter (name, description, tools, model)
- Skills: Clear sections (When to Activate, Core Rules, Examples, Quality Gate)
- Commands: Markdown with description frontmatter
- File naming: lowercase with hyphens (e.g., `seo-analyst.md`, `email-sequences`)
