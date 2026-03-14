#!/usr/bin/env node
// Post-content quality check — readability, passive voice, and weasel words

const input = JSON.parse(require('fs').readFileSync('/dev/stdin', 'utf8'));
const content = input.tool_input?.content || input.tool_input?.new_string || '';
if (!content) process.exit(0);

const warnings = [];
let score = 100;

// --- Readability: sentence length ---
// Split on sentence-ending punctuation followed by whitespace or end of string
const sentences = content
  .replace(/\n/g, ' ')
  .split(/[.!?]+\s+/)
  .filter(s => s.trim().length > 0);

const longSentences = [];
for (const sentence of sentences) {
  const words = sentence.split(/\s+/).filter(Boolean);
  if (words.length > 25) {
    const preview = words.slice(0, 8).join(' ') + '...';
    longSentences.push({ preview, count: words.length });
  }
}

if (longSentences.length > 0) {
  const penalty = Math.min(longSentences.length * 5, 20);
  score -= penalty;
  warnings.push(`  ⚠ ${longSentences.length} long sentence(s) (>25 words):`);
  for (const s of longSentences.slice(0, 3)) {
    warnings.push(`      "${s.preview}" (${s.count} words)`);
  }
  if (longSentences.length > 3) {
    warnings.push(`      ...and ${longSentences.length - 3} more`);
  }
}

// --- Passive voice indicators ---
const passivePatterns = [
  /\b(is|are|was|were|be|been|being)\s+(being\s+)?\w+ed\b/gi,
  /\b(is|are|was|were|be|been|being)\s+(being\s+)?\w+en\b/gi
];

let passiveCount = 0;
for (const pattern of passivePatterns) {
  const matches = content.match(pattern) || [];
  passiveCount += matches.length;
}

if (passiveCount > 0) {
  const penalty = Math.min(passiveCount * 3, 15);
  score -= penalty;
  warnings.push(`  ⚠ ${passiveCount} possible passive voice construction(s) — prefer active voice for marketing`);
}

// --- Weasel words ---
const weaselWords = ['some', 'many', 'various', 'several', 'often', 'usually', 'generally', 'probably', 'arguably', 'virtually', 'practically', 'essentially', 'basically', 'quite', 'rather'];

const weaselFound = [];
for (const word of weaselWords) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = content.match(regex);
  if (matches) {
    weaselFound.push({ word, count: matches.length });
  }
}

if (weaselFound.length > 0) {
  const totalWeasel = weaselFound.reduce((sum, w) => sum + w.count, 0);
  const penalty = Math.min(totalWeasel * 2, 15);
  score -= penalty;
  const summary = weaselFound.map(w => `${w.word} (${w.count}x)`).join(', ');
  warnings.push(`  ⚠ Weasel words: ${summary} — use precise language instead`);
}

// --- Output ---
score = Math.max(score, 0);

let grade;
if (score >= 90) grade = 'Excellent';
else if (score >= 75) grade = 'Good';
else if (score >= 60) grade = 'Needs improvement';
else grade = 'Significant issues';

const output = [`  Quality score: ${score}/100 (${grade})`];
if (warnings.length > 0) {
  output.push(...warnings);
}

process.stderr.write(`\n[Content Quality]\n${output.join('\n')}\n\n`);
process.exit(0);
