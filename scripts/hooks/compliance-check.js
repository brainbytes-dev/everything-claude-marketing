#!/usr/bin/env node
// Compliance check — warns about potential compliance issues in marketing content

const input = JSON.parse(require('fs').readFileSync('/dev/stdin', 'utf8'));
const content = input.tool_input?.content || input.tool_input?.new_string || '';
if (!content) process.exit(0);

const warnings = [];
const contentLower = content.toLowerCase();

// Check for affiliate/sponsored content without disclosure
const sponsoredIndicators = ['affiliate', 'commission', 'sponsored', 'paid partnership', 'referral link'];
const disclosurePresent = ['#ad', '#sponsored', 'paid partnership', 'disclosure:', 'affiliate disclosure', 'sponsored content'];
const hasSponsored = sponsoredIndicators.some(s => contentLower.includes(s));
const hasDisclosure = disclosurePresent.some(d => contentLower.includes(d));
if (hasSponsored && !hasDisclosure) {
  warnings.push('  ⚠ Sponsored/affiliate content detected but no disclosure found (FTC requirement)');
}

// Check email content for unsubscribe
const emailIndicators = ['subject line', 'email sequence', 'email campaign', 'newsletter', 'from:', 'reply-to'];
const isEmail = emailIndicators.some(e => contentLower.includes(e));
if (isEmail && !contentLower.includes('unsubscribe')) {
  warnings.push('  ⚠ Email content without unsubscribe mention (CAN-SPAM requirement)');
}

// Check for health claims
const healthClaims = ['cure', 'treat', 'prevent disease', 'clinically proven', 'doctor recommended', 'medical grade', 'FDA approved'];
const healthFound = healthClaims.filter(h => contentLower.includes(h));
if (healthFound.length > 0) {
  warnings.push(`  ⚠ Health claims detected: "${healthFound.join('", "')}" — may require disclaimers`);
}

// Check for financial claims
const financialClaims = ['guaranteed returns', 'risk-free investment', 'get rich', 'financial freedom', 'passive income guaranteed'];
const financeFound = financialClaims.filter(f => contentLower.includes(f));
if (financeFound.length > 0) {
  warnings.push(`  ⚠ Financial claims detected: "${financeFound.join('", "')}" — may require risk disclosures`);
}

// Check for fake urgency/scarcity
const fakeUrgency = ['act now or', 'last chance ever', 'never again', 'once in a lifetime offer'];
const urgencyFound = fakeUrgency.filter(u => contentLower.includes(u));
if (urgencyFound.length > 0) {
  warnings.push(`  ⚠ Potential fake urgency: "${urgencyFound.join('", "')}" — ensure urgency is genuine`);
}

if (warnings.length > 0) {
  process.stderr.write(`\n[Compliance Check]\n${warnings.join('\n')}\n\n`);
}

process.exit(0);
