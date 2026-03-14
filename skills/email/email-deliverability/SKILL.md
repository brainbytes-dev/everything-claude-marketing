---
name: email-deliverability
description: Optimize email deliverability through authentication, list hygiene, and sender reputation management. Use when improving inbox placement rates.
origin: ECM
---

# Email Deliverability

## When to Activate

Use this skill when:
- Setting up email infrastructure for a new domain or sender
- Diagnosing deliverability problems (emails going to spam)
- Warming a new IP or domain
- Cleaning an email list
- Setting up SPF, DKIM, and DMARC
- Improving inbox placement rates
- Planning a re-permission or re-engagement campaign

## First Questions

Before optimizing deliverability, clarify:
1. What email sending platform is being used? (ESP or self-hosted)
2. Is this a shared IP or dedicated IP?
3. What is the current sending volume? (Daily/weekly/monthly)
4. What are current open rates and bounce rates?
5. Has there been a recent deliverability drop? (When did it start?)
6. Is the sending domain properly authenticated? (SPF, DKIM, DMARC)
7. How was the email list built? (Organic, purchased, scraped — critical question)
8. When was the last list cleaning?

## Core Rules

1. **Deliverability is earned, not bought.** No tool or trick replaces genuine engagement signals.
2. **Authentication is table stakes.** SPF, DKIM, and DMARC must be configured correctly before anything else matters.
3. **List quality is deliverability quality.** A clean, engaged list delivers. A dirty list destroys sender reputation.
4. **Never buy or rent email lists.** This is the single fastest way to destroy deliverability.
5. **Engagement drives placement.** ISPs watch how recipients interact with your email. High engagement = inbox. Low engagement = spam.
6. **Reputation is per domain AND per IP.** Both matter, but domain reputation is increasingly dominant.
7. **Monitor proactively.** Don't wait for problems — monitor deliverability metrics weekly.

## Email Authentication Setup

### SPF (Sender Policy Framework)

SPF tells receiving mail servers which IPs are authorized to send email on behalf of your domain.

**Setup:**
1. Identify all services that send email from your domain (ESP, transactional email, CRM, etc.)
2. Create a TXT record in your DNS:
   ```
   v=spf1 include:_spf.google.com include:sendgrid.net include:mailchimp.com ~all
   ```
3. Include ALL authorized senders
4. Use `~all` (soft fail) or `-all` (hard fail — stricter)
5. Maximum 10 DNS lookups — consolidate if needed

**Common mistakes:**
- Multiple SPF records (you can only have ONE per domain)
- Exceeding the 10 DNS lookup limit
- Forgetting to include all sending services

### DKIM (DomainKeys Identified Mail)

DKIM adds a digital signature to your emails, proving they haven't been tampered with in transit.

**Setup:**
1. Generate a DKIM key pair in your ESP (most ESPs do this automatically)
2. Add the public key as a TXT/CNAME record in your DNS
3. The record name is typically: `selector._domainkey.yourdomain.com`
4. Test with a DKIM validator tool

**Best practices:**
- Use 2048-bit keys (minimum)
- Rotate keys annually
- Use a unique selector per sending service

### DMARC (Domain-based Message Authentication, Reporting & Conformance)

DMARC tells receiving servers what to do with emails that fail SPF and DKIM checks.

**Setup (progressive):**

**Phase 1: Monitor (first 2-4 weeks)**
```
v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com; ruf=mailto:dmarc-forensic@yourdomain.com; pct=100
```

**Phase 2: Quarantine (after monitoring is clean)**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@yourdomain.com; pct=25
```
Gradually increase `pct` from 25 to 50 to 100.

**Phase 3: Reject (full protection)**
```
v=DMARC1; p=reject; rua=mailto:dmarc-reports@yourdomain.com; pct=100
```

**Never skip Phase 1.** Jumping to `p=reject` without monitoring can block legitimate emails.

### BIMI (Brand Indicators for Message Identification)

BIMI displays your brand logo next to emails in supported inboxes (Gmail, Yahoo, Apple Mail).

**Requirements:**
- DMARC policy must be `p=quarantine` or `p=reject`
- A verified brand logo in SVG format
- A Verified Mark Certificate (VMC) from a certificate authority (for Gmail)
- DNS record: `default._bimi.yourdomain.com` with logo URL

## IP Warming Schedule

New dedicated IPs must be warmed gradually. Sending too much too fast flags spam filters.

### Warming Plan (Typical)

| Day | Emails per Day | Notes |
|-----|---------------|-------|
| 1-2 | 50-100 | Send to your most engaged subscribers only |
| 3-4 | 200-500 | Continue with engaged subscribers |
| 5-7 | 500-1,000 | Begin expanding to broader engaged segments |
| 8-14 | 1,000-5,000 | Monitor bounces and complaints closely |
| 15-21 | 5,000-15,000 | Gradually include less-engaged segments |
| 22-30 | 15,000-50,000 | Approaching full volume |
| 31+ | Full volume | Maintain consistent sending patterns |

**Warming rules:**
- Start with your MOST engaged subscribers (high open rates)
- Never skip days during warming — consistency matters
- If bounce rate exceeds 5% or complaint rate exceeds 0.1%, pause and investigate
- Send real, valuable emails during warming (not test emails)
- Maintain consistent daily volume — don't spike

### Domain Warming
New domains also need warming, even on shared IPs:
- Register the domain at least 30 days before first send
- Set up a basic website on the domain
- Configure all authentication (SPF, DKIM, DMARC)
- Start with transactional emails before marketing emails
- Follow the same gradual volume increase as IP warming

## List Hygiene Protocols

### Regular Cleaning Schedule
- **Monthly:** Remove hard bounces (automatic in most ESPs)
- **Quarterly:** Suppress subscribers with zero engagement in 90 days
- **Biannually:** Run email verification/validation on full list
- **Annually:** Re-permission campaign for inactive subscribers

### Email Verification
Before sending to old or imported lists, verify addresses using a service (ZeroBounce, NeverBounce, BriteVerify):
- Remove invalid addresses
- Remove role-based addresses (info@, admin@, support@)
- Remove disposable email addresses
- Flag catch-all domains for monitoring

### Engagement-Based List Segments

| Segment | Definition | Action |
|---------|-----------|--------|
| Highly engaged | Opened or clicked in last 30 days | Send freely |
| Engaged | Opened or clicked in last 90 days | Send normally |
| At risk | No open in 60-90 days | Reduce frequency, re-engage |
| Dormant | No open in 90-180 days | Re-engagement sequence only |
| Dead | No open in 180+ days | Suppress or sunset |

## Bounce Management

### Hard Bounces
- Invalid addresses — remove immediately and permanently
- Never re-send to a hard-bounced address
- If hard bounce rate exceeds 2% on any send, stop and investigate

### Soft Bounces
- Temporary issues (full mailbox, server down)
- Retry 2-3 times over 48-72 hours
- If an address soft-bounces 3+ times consecutively, treat as hard bounce

## Spam Trap Avoidance

### Types of Spam Traps
1. **Pristine traps** — Addresses that were never real. Only appear on bought/scraped lists. Most damaging.
2. **Recycled traps** — Old addresses repurposed by ISPs. Result of never cleaning your list.
3. **Typo traps** — Common typo domains (gmial.com, yahooo.com). Result of no email validation on forms.

### Prevention
- Never buy or scrape email lists (prevents pristine traps)
- Clean inactive subscribers regularly (prevents recycled traps)
- Use email validation on signup forms (prevents typo traps)
- Use double opt-in for new subscribers
- Monitor blacklist status regularly (MXToolbox, Spamhaus)

## Re-Permission Campaign

When deliverability is damaged or a list has been neglected, run a re-permission campaign:

1. **Identify:** Segment subscribers who haven't engaged in 90+ days
2. **Send Email 1:** "We want to make sure you still want to hear from us. Click to stay subscribed."
3. **Wait 7 days.** If no action, send Email 2.
4. **Send Email 2:** "Last chance — click to keep getting our emails."
5. **Wait 7 days.** If no action, suppress from all future sends.
6. **Result:** A smaller but healthier, higher-engagement list.

**Important:** You will lose subscribers. This is intentional. A smaller, engaged list outperforms a large, disengaged one every time.

## Deliverability Monitoring

### Metrics to Track Weekly
| Metric | Healthy Range | Red Flag |
|--------|--------------|----------|
| Open rate | 20-40% | Below 15% |
| Bounce rate | Below 2% | Above 3% |
| Complaint rate | Below 0.05% | Above 0.1% |
| Unsubscribe rate | Below 0.3% | Above 0.5% |
| Spam placement rate | Below 5% | Above 10% |
| Inbox placement rate | Above 90% | Below 80% |

### Monitoring Tools
- **Google Postmaster Tools** — Free. Shows domain reputation with Gmail.
- **Microsoft SNDS** — Free. Shows reputation with Outlook/Hotmail.
- **MXToolbox** — Blacklist monitoring, DNS checks.
- **GlockApps / Mail-Tester** — Inbox placement testing across ISPs.
- **Your ESP's dashboard** — Bounce, complaint, and engagement data.

## Content Factors Affecting Deliverability

### What Triggers Spam Filters
- ALL CAPS in subject lines
- Excessive exclamation marks!!!
- Spam trigger words in subject lines (free, act now, limited time, congratulations)
- Image-only emails with no text
- Mismatched "From" name and domain
- Missing unsubscribe link
- Misleading subject lines
- Shortened URLs (bit.ly, etc.) — use full branded URLs
- Too many links relative to text

### What Helps Deliverability
- Plain text version included alongside HTML
- Balanced text-to-image ratio (60:40 text-to-image minimum)
- Clear, recognizable "From" name
- Consistent sending frequency
- One-click unsubscribe header (now required by Gmail and Yahoo)
- Relevant, expected content that matches subscriber expectations

## Deliverability Checklist

### Before First Send (New Domain/IP)
- [ ] SPF record configured and validated
- [ ] DKIM keys generated and DNS record added
- [ ] DMARC set to `p=none` for monitoring
- [ ] Domain registered 30+ days ago
- [ ] IP warming plan created
- [ ] List verified through an email validation service
- [ ] Double opt-in enabled for new subscribers
- [ ] Unsubscribe link present in all templates
- [ ] One-click unsubscribe header configured
- [ ] Google Postmaster Tools set up
- [ ] Blacklist monitoring configured

### Ongoing (Monthly)
- [ ] Hard bounces removed
- [ ] Engagement segments updated
- [ ] Complaint rate reviewed (below 0.1%)
- [ ] Blacklist status checked
- [ ] Sending reputation monitored (Postmaster Tools)
- [ ] List growth sources audited (no purchased lists)

## Quality Gate

Before sending any campaign, verify:
- [ ] Is the sending domain fully authenticated (SPF, DKIM, DMARC)?
- [ ] Is the list clean (no hard bounces, verified addresses)?
- [ ] Is the complaint rate below 0.1%?
- [ ] Is there a clear unsubscribe link and one-click unsubscribe header?
- [ ] Is the content free of spam trigger patterns?
- [ ] Is the text-to-image ratio balanced?
- [ ] Is the "From" name recognizable to recipients?
- [ ] Has the email been tested with a deliverability tool?
- [ ] Are inactive subscribers suppressed or segmented?
- [ ] Is the sending volume consistent with recent patterns (no sudden spikes)?
