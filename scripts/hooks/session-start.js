#!/usr/bin/env node
// Session start — prints a welcome message and reminders for marketing workflows

const message = `
[Marketing Plugin]
  Available commands:
    /marketing:blog-post     — Generate a blog post draft
    /marketing:email         — Draft an email campaign
    /marketing:social        — Create social media content
    /marketing:seo-audit     — Run an SEO audit on content
    /marketing:competitor    — Competitor analysis

  Reminders:
    - Brand guidelines: check .claude/brand-guidelines.md if present
    - All content is checked for brand voice and compliance automatically
    - Use /marketing:help for full command reference
`;

process.stderr.write(message);
process.exit(0);
