#!/usr/bin/env node
// CTA check — warns if marketing content lacks a clear call to action

const input = JSON.parse(require('fs').readFileSync('/dev/stdin', 'utf8'));
const content = input.tool_input?.content || input.tool_input?.new_string || '';
if (!content) process.exit(0);

// Only check content that's long enough to warrant a CTA
const wordCount = content.split(/\s+/).filter(Boolean).length;
if (wordCount < 200) process.exit(0);

const contentLower = content.toLowerCase();

const ctaIndicators = [
  'click here', 'click now',
  'sign up', 'signup',
  'subscribe', 'join now',
  'buy now', 'purchase', 'order now', 'add to cart', 'shop now',
  'get started', 'start now', 'start your',
  'learn more', 'read more', 'find out more', 'discover more',
  'download', 'grab your', 'claim your',
  'try it', 'try for free', 'start free', 'free trial',
  'book a demo', 'schedule a call', 'request a demo',
  'contact us', 'reach out', 'get in touch',
  'register', 'enroll', 'apply now',
  'donate', 'contribute',
  'share', 'spread the word', 'tell a friend',
  'reply to this', 'let us know', 'drop a comment',
  'visit', 'check out', 'explore',
  'upgrade', 'unlock', 'activate'
];

const hasCTA = ctaIndicators.some(cta => contentLower.includes(cta));

if (!hasCTA) {
  const warnings = [
    `  ⚠ No clear call to action found in ${wordCount}-word content`,
    '    Consider adding a CTA: sign up, learn more, get started, etc.'
  ];
  process.stderr.write(`\n[CTA Check]\n${warnings.join('\n')}\n\n`);
}

process.exit(0);
