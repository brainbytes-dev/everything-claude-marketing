---
name: utm-tracking
description: Design UTM naming conventions and campaign tracking systems for marketing attribution. Use when setting up tracking, standardizing naming, or improving attribution data quality.
origin: ECM
---

# UTM Tracking

## When to Activate

Use this skill when setting up UTM tracking for a new marketing program, designing or standardizing naming conventions, building campaign tracking systems, auditing existing UTM data for inconsistencies, troubleshooting attribution issues in analytics, creating UTM governance documentation for a team, or when someone asks about "campaign tracking," "UTM parameters," or "attribution setup." Also activate when analytics data is unreliable due to inconsistent or missing tracking.

## First Questions

Before designing a UTM system, clarify:

1. **What analytics platform is in use?** (GA4, Mixpanel, HubSpot, etc. — UTM behavior varies by platform)
2. **What channels are active?** (paid search, paid social, email, organic social, referral, display, affiliate)
3. **How many people create tracking URLs?** (1 person = light governance needed. 10+ people = strict governance essential)
4. **Is there an existing naming convention?** (audit before replacing — migration requires careful planning)
5. **What decisions will be made from this data?** (channel allocation, campaign ROI, content optimization)
6. **Is there a CRM or MAP that captures UTMs?** (UTMs flowing into HubSpot or Salesforce enable closed-loop attribution)

## Core Rules

1. **Consistency is everything.** A UTM system is only as good as its most inconsistent user. One person writing "facebook" while another writes "Facebook" and a third writes "fb" creates three separate channels in analytics.
2. **Lowercase always.** UTMs are case-sensitive. "Email" and "email" are different values in GA4. Enforce lowercase in every parameter, always.
3. **Use separators consistently.** Pick one separator (hyphens or underscores) and never deviate. Hyphens are the most common convention.
4. **Less is more.** Don't over-parameterize. If you can't act on the data a parameter provides, don't track it. Too many granular UTMs fragment your data.
5. **UTMs are for external traffic only.** Never use UTMs on internal links (site navigation, in-app links). They restart the session in GA4, destroying your attribution data.
6. **Document and share.** A naming convention that lives in one person's head is worthless. It must be documented, shared, and enforced.

## UTM Parameter Definitions

### Required Parameters

**utm_source** — Where the traffic comes from.
- Identifies the platform, website, or sender.
- Examples: `google`, `facebook`, `linkedin`, `newsletter`, `partner-name`
- Rule: Use the platform or publisher name. Be specific enough to distinguish sources but not so specific that you fragment data.

**utm_medium** — How the traffic arrives.
- Identifies the marketing channel or mechanism.
- Examples: `cpc`, `email`, `social`, `display`, `affiliate`, `referral`, `video`
- Rule: Use standardized medium values that align with GA4's default channel groupings. This is the most important parameter for channel-level reporting.

**utm_campaign** — Why the traffic is being sent.
- Identifies the specific campaign, promotion, or initiative.
- Examples: `spring-sale-2026`, `product-launch-q1`, `webinar-seo-masterclass`, `brand-awareness-na`
- Rule: Use a structured naming convention that includes enough context to identify the campaign without looking it up.

### Optional Parameters

**utm_term** — The keyword or targeting criteria.
- Originally for paid search keywords, now used for any targeting detail.
- Examples: `crm-software` (keyword), `cmo-saas-50-200` (audience segment), `retargeting-30day`
- Rule: Use for paid campaigns where targeting detail matters for optimization. Skip for email and organic social.

**utm_content** — What specific element the click came from.
- Differentiates links within the same campaign (A/B test variants, different CTAs, different ad creatives).
- Examples: `hero-cta`, `sidebar-banner`, `version-a`, `image-ad-blue`, `footer-link`
- Rule: Use only when you need to distinguish between multiple links in the same campaign to the same destination.

## Naming Convention Design

### Principles

1. **Hierarchical**: Move from broad to specific. `utm_medium` is broadest (channel), `utm_content` is most specific (individual element).
2. **Self-documenting**: Someone seeing the UTM in a report should understand what it refers to without a lookup table.
3. **Machine-readable**: No spaces, no special characters (except hyphens or underscores), no accented characters.
4. **Future-proof**: Design for campaigns you haven't run yet. Avoid date formats that will become confusing.

### Standard Formatting Rules
- All lowercase: `spring-sale` not `Spring-Sale`
- Hyphens as separators: `product-launch` not `product_launch` or `productlaunch`
- No spaces: Use hyphens instead
- No special characters: No `&`, `%`, `#`, `+`, or accented characters
- Date format (when needed): `YYYY-MM` or `QXYYYY` (e.g., `2026-03` or `q1-2026`)
- Keep values short but descriptive: `brand-awareness` not `ba`

### utm_medium Standard Values

Use these standardized values to align with GA4's default channel groupings:

| Medium Value | Channel | Usage |
|-------------|---------|-------|
| `cpc` | Paid Search | Google Ads, Bing Ads — cost-per-click campaigns |
| `ppc` | Paid Search | Alternative to cpc (pick one and stick with it) |
| `display` | Display | Banner ads, programmatic display |
| `cpm` | Display | Cost-per-impression display campaigns |
| `social` | Organic Social | Unpaid social media posts |
| `paid-social` | Paid Social | Facebook/Meta Ads, LinkedIn Ads, TikTok Ads |
| `email` | Email | Email campaigns and newsletters |
| `affiliate` | Affiliates | Affiliate partner links |
| `referral` | Referral | Partner referrals, guest posts, press |
| `video` | Video | YouTube, Vimeo, or other video platform campaigns |
| `podcast` | Audio | Podcast sponsorships or own podcast links |
| `qr` | Offline | QR codes on physical materials |
| `sms` | SMS | Text message campaigns |

## Naming Convention Templates by Channel

### Paid Search (Google/Bing Ads)
```
utm_source=google
utm_medium=cpc
utm_campaign={campaign-name-with-context}
utm_term={keyword or ad group}
utm_content={ad-variant}
```
Example: `?utm_source=google&utm_medium=cpc&utm_campaign=crm-demo-request-na&utm_term=best-crm-software&utm_content=responsive-ad-v2`

### Paid Social (Meta, LinkedIn, TikTok)
```
utm_source={platform}
utm_medium=paid-social
utm_campaign={campaign-name}
utm_term={audience-segment}
utm_content={ad-creative-identifier}
```
Example: `?utm_source=facebook&utm_medium=paid-social&utm_campaign=webinar-seo-q1-2026&utm_term=marketers-us-25-45&utm_content=video-testimonial-v1`

### Email Marketing
```
utm_source=newsletter OR {email-platform}
utm_medium=email
utm_campaign={email-campaign-name}
utm_content={link-position or variant}
```
Example: `?utm_source=newsletter&utm_medium=email&utm_campaign=weekly-digest-2026-03-14&utm_content=hero-cta`

### Organic Social
```
utm_source={platform}
utm_medium=social
utm_campaign={campaign-or-content-theme}
utm_content={post-type or identifier}
```
Example: `?utm_source=linkedin&utm_medium=social&utm_campaign=thought-leadership-q1&utm_content=carousel-seo-tips`

### Influencer / Creator
```
utm_source={creator-name or platform}
utm_medium=influencer
utm_campaign={campaign-name}
utm_content={content-type}
```
Example: `?utm_source=creator-sarahchen&utm_medium=influencer&utm_campaign=product-launch-march&utm_content=youtube-review`

### Offline (QR Codes, Print, Events)
```
utm_source={event-or-material}
utm_medium=qr OR offline
utm_campaign={campaign-name}
utm_content={specific-placement}
```
Example: `?utm_source=saastr-2026&utm_medium=qr&utm_campaign=conference-lead-gen&utm_content=booth-banner`

## UTM Builder Process

### Manual Process
1. Open UTM documentation/template.
2. Fill in each parameter following the naming convention.
3. Assemble the full URL.
4. Test the URL to confirm it loads correctly and parameters are captured.
5. Shorten with a branded link shortener if needed (Rebrandly, Bitly).
6. Log the URL in the campaign tracking spreadsheet.

### UTM Builder Spreadsheet Structure

| Column | Purpose | Example |
|--------|---------|---------|
| Date Created | When the URL was built | 2026-03-14 |
| Campaign Name | Human-readable campaign reference | Spring Webinar Series |
| Destination URL | Where the link goes | https://example.com/webinar |
| utm_source | Source parameter | linkedin |
| utm_medium | Medium parameter | paid-social |
| utm_campaign | Campaign parameter | webinar-seo-q1-2026 |
| utm_term | Term parameter (optional) | marketers-na |
| utm_content | Content parameter (optional) | video-ad-v1 |
| Full URL | Auto-generated complete URL | [full tagged URL] |
| Short URL | Shortened version | https://brand.link/seo-webinar |
| Owner | Who created it | Jane D. |
| Notes | Context or special instructions | A/B testing ad creative |

### Automation Options
- **Google Sheets template**: Concatenation formula that auto-builds URLs from parameter columns.
- **UTM.io or CampaignTrackly**: Dedicated UTM management platforms with team governance.
- **HubSpot tracking URL builder**: Built-in tool for HubSpot users.
- **Custom internal tool**: For teams with specific governance needs.

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Inconsistent capitalization | Splits data across multiple entries | Enforce lowercase always. Use a tool that auto-lowercases. |
| Different names for same source | "facebook" vs "fb" vs "Facebook" vs "meta" | Publish an approved values list. Lock it down. |
| UTMs on internal links | Restarts sessions, destroys attribution | Use event tracking or internal tagging for internal navigation. |
| Too granular | Report becomes unreadable, patterns invisible | Aggregate at the right level. Use utm_content for detail, not utm_campaign. |
| Missing UTMs on campaigns | Traffic shows as "direct" or "referral" | Make UTM tagging a mandatory step in campaign launch checklists. |
| Spaces in UTM values | URLs break or encode oddly | Use hyphens. Automate URL building to prevent manual errors. |
| No documentation | New team members guess, create inconsistencies | Maintain a living naming convention doc. |
| UTMs in organic search links | Overrides organic search attribution | Never add UTMs to pages that should be found via SEO. |
| Vanity URLs without UTMs | Lose tracking on branded short links | Always redirect vanity URLs through UTM-tagged URLs. |

## Integration with Analytics Platforms

### GA4
- UTM parameters automatically populate dimensions: Session source, Session medium, Session campaign, Session manual term, Session manual content.
- Default channel groupings use `utm_medium` as the primary classifier. Use standard medium values to ensure correct channel assignment.
- Custom channel groups can be created if your medium values differ from GA4 defaults.
- Data retention: Set to 14 months for meaningful YoY comparison.

### HubSpot
- UTMs are captured automatically on form submissions and tracked as "original source" data.
- UTM data flows to contact records, enabling closed-loop attribution.
- HubSpot normalizes some UTM values but not all — still enforce your naming convention.

### CRM Integration
- When UTMs flow through to CRM records (via MAP → CRM sync), you can attribute revenue to campaigns.
- Build reports: "Revenue by utm_campaign" or "Pipeline by utm_source" for true ROI analysis.
- This is the foundation of closed-loop attribution: marketing spend → campaign → lead → deal → revenue.

## Campaign ID Systems

For teams managing hundreds of campaigns, add a campaign ID system alongside UTMs:

### Structure
- Create a unique ID for each campaign: `C-2026-0347`
- Format: `C-{YYYY}-{sequential number}`
- Store campaign metadata (objective, budget, channel, dates, owner) in a central database keyed by campaign ID.
- Include the campaign ID in utm_campaign or as a separate internal reference.

### Benefits
- Deduplication: One campaign, one ID, regardless of how many UTM links it generates.
- Cross-channel rollup: Group all UTMs from the same campaign for aggregate performance.
- Budget tracking: Link campaign ID to spend data for ROI calculation.

## QA Checklist for Tracking URLs

Before launching any campaign with tracking URLs:

- [ ] All parameters are lowercase
- [ ] Separators are consistent (hyphens throughout)
- [ ] No spaces or special characters in parameter values
- [ ] utm_source and utm_medium use approved standard values
- [ ] utm_campaign follows the naming convention
- [ ] The destination URL loads correctly with all parameters appended
- [ ] UTMs are not applied to internal links
- [ ] The URL is logged in the campaign tracking spreadsheet
- [ ] Shortened URLs redirect through the UTM-tagged URL (not around it)
- [ ] A test click has been verified in the analytics platform (real-time report)
- [ ] If using Google Ads auto-tagging, UTMs don't conflict with gclid

## UTM Governance Documentation

Every team should maintain a living document containing:

1. **Naming convention rules**: The formatting rules and approved values.
2. **Approved values list**: Master list of approved source, medium, and campaign naming patterns.
3. **UTM builder**: Template or tool for creating URLs.
4. **Campaign tracking log**: Central spreadsheet of all active campaign URLs.
5. **Ownership**: Who is responsible for maintaining and enforcing the system.
6. **Onboarding**: How new team members or agencies learn the system.
7. **Audit cadence**: How often the naming convention is reviewed and cleaned up (quarterly recommended).
8. **Exception process**: How to request a new source, medium, or naming pattern.

## Vanity URL Management

Vanity URLs (e.g., `brand.com/webinar`) are great for offline and spoken media but must be properly tracked:

### Best Practice
1. Create the vanity URL as a redirect (301 or 302).
2. The redirect destination is the full URL with UTM parameters.
3. Example: `brand.com/webinar` → `brand.com/events/seo-webinar?utm_source=conference&utm_medium=qr&utm_campaign=saastr-2026`
4. Log the vanity URL → destination mapping in the tracking spreadsheet.
5. Test the redirect before going to print or broadcasting.

### Vanity URL Naming Rules
- Keep them short and memorable: `/webinar`, `/demo`, `/guide`
- Avoid dates or version numbers in the vanity URL (the redirect can be updated)
- Reserve common paths and don't reuse them for different campaigns without updating the redirect

## Quality Gate

Before delivering a UTM tracking system or naming convention:

- [ ] Naming conventions are documented with examples for every active channel
- [ ] Standard values for utm_source and utm_medium are defined and locked
- [ ] A UTM builder (template or tool) is provided for the team
- [ ] The convention aligns with the analytics platform's channel groupings
- [ ] Common mistakes have been addressed with preventive rules
- [ ] A QA checklist is included for pre-launch verification
- [ ] Governance documentation covers onboarding, enforcement, and exception handling
- [ ] Integration with CRM/MAP is planned for closed-loop attribution
- [ ] A campaign tracking log structure is provided
- [ ] The system is simple enough that every team member will actually use it
