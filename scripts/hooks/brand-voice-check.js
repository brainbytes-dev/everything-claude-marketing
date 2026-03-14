#!/usr/bin/env node
// Brand voice check — warns about common marketing cliches and style violations

const input = JSON.parse(require('fs').readFileSync('/dev/stdin', 'utf8'));
// input has: tool_name, tool_input (with content or new_string)

const content = input.tool_input?.content || input.tool_input?.new_string || '';
if (!content) process.exit(0);

const buzzwords = ['synergy', 'leverage', 'best-in-class', 'cutting-edge', 'world-class', 'game-changing', 'revolutionary', 'disruptive', 'innovative', 'next-generation', 'paradigm shift', 'holistic', 'scalable solution', 'robust platform'];

const warnings = [];

for (const word of buzzwords) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = content.match(regex);
  if (matches) {
    warnings.push(`  ⚠ Buzzword detected: "${word}" (${matches.length}x) — consider more specific language`);
  }
}

// Check exclamation marks
const exclamations = (content.match(/!/g) || []).length;
if (exclamations > 3) {
  warnings.push(`  ⚠ ${exclamations} exclamation marks — tone may feel overselling`);
}

// Check ALL CAPS (3+ char words, excluding common acronyms)
const acronyms = new Set(['API', 'URL', 'SEO', 'SEM', 'PPC', 'CTA', 'ROI', 'KPI', 'CRM', 'CMS', 'CTR', 'CVR', 'CPM', 'CPC', 'CAC', 'LTV', 'MRR', 'ARR', 'B2B', 'B2C', 'D2C', 'PLG', 'GTM', 'ROAS', 'GDPR', 'FTC', 'FAQ', 'UGC', 'NPS', 'SERP', 'HTML', 'CSS', 'USD', 'EUR']);
const capsWords = content.match(/\b[A-Z]{3,}\b/g) || [];
const nonAcronymCaps = capsWords.filter(w => !acronyms.has(w));
if (nonAcronymCaps.length > 0) {
  warnings.push(`  ⚠ ALL CAPS words: ${nonAcronymCaps.join(', ')} — may feel aggressive`);
}

if (warnings.length > 0) {
  process.stderr.write(`\n[Brand Voice Check]\n${warnings.join('\n')}\n\n`);
}

process.exit(0);
