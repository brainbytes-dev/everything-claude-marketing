---
description: Create a data-driven buyer persona using Jobs-to-be-Done framework. Includes demographics, psychographics, pain points, and buying journey.
---

# /persona

Create a detailed, actionable buyer persona grounded in the Jobs-to-be-Done framework — not a fictional character sheet, but a strategic tool for decision-making.

## What This Command Does

This command builds a comprehensive buyer persona that goes beyond surface-level demographics. Using the Jobs-to-be-Done (JTBD) framework, it identifies the functional, emotional, and social jobs your target buyer is trying to accomplish, along with the pain points, desired outcomes, and decision criteria that drive their purchasing behavior. The persona includes demographic and firmographic context, psychographic insights, media consumption habits, objection patterns, and a mapped buying journey with key influence points. The result is a living document that marketing, sales, product, and customer success teams can all use.

## When to Use

- Launching a new product and defining your ideal customer profile
- Entering a new market segment or vertical
- Refining messaging that is not resonating with your target audience
- Aligning marketing and sales on who you are actually selling to
- Building content strategy and need to understand audience deeply
- Preparing for a brand refresh or repositioning
- Onboarding new marketing or sales team members who need customer context
- Creating ad targeting criteria and lookalike audiences

## How It Works

1. **Gathers inputs** — Asks about your product, market, existing customer data, and any hypotheses about your target buyer
2. **Defines the JTBD** — Identifies the primary functional, emotional, and social jobs the buyer is hiring your product to do
3. **Builds demographics** — Establishes role, seniority, company size, industry, and firmographic context
4. **Maps psychographics** — Defines motivations, frustrations, values, and decision-making style
5. **Identifies pain points** — Catalogs specific problems the buyer faces and how they currently solve them
6. **Charts the buying journey** — Maps the stages from problem recognition through vendor selection
7. **Documents objections** — Lists common objections and the underlying concerns behind them
8. **Profiles media habits** — Identifies where the buyer consumes information, who they trust, and how they evaluate solutions

The command delegates to the **market-researcher** agent, which specializes in audience research, segmentation, and JTBD analysis.

## Example Usage

**Input:**
```
/persona create a buyer persona for our HR tech platform — target is heads of people ops at 100-500 person companies
```

**Output:**

```
BUYER PERSONA: "THE SCALING PEOPLE LEADER"
Role: Head of People Operations / VP People / Director of HR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DEMOGRAPHICS & FIRMOGRAPHICS

Title: Head of People Ops, VP People, Director of HR
Reports to: CEO or COO
Experience: 6-12 years in HR/People, 2-4 years in current role
Age range: 30-42
Education: BA/BS (often Psychology, Business, or Communications);
           some have SHRM-CP/SCP certification
Company size: 100-500 employees (scaling from startup to growth stage)
Industry: Technology, fintech, healthcare, professional services
Location: Major metro areas or remote-first companies
Compensation: $120K-$180K base + equity in tech companies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JOBS TO BE DONE

Functional Jobs:
- "Help me build repeatable people processes that scale from 100
   to 500 employees without adding headcount proportionally"
- "Help me get visibility into workforce data so I can make
   decisions with confidence instead of gut feel"
- "Help me keep the company compliant as we expand into new
   states and countries"

Emotional Jobs:
- "Make me feel like a strategic business partner, not just the
   person who handles paperwork and PIP conversations"
- "Reduce my anxiety about the compliance risks I might be
   missing as we scale"

Social Jobs:
- "Help me demonstrate to the executive team that People Ops
   is a growth driver, not a cost center"
- "Let me be seen by my peers as someone running a modern,
   data-driven people function"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PAIN POINTS

1. Drowning in manual processes — still using spreadsheets for
   headcount planning, compensation bands, and performance cycles
2. No single source of truth — employee data scattered across
   5-8 tools (HRIS, ATS, payroll, benefits, LMS)
3. Compliance anxiety — multi-state or multi-country employment
   creates regulatory blind spots
4. Cannot demonstrate ROI — lacks data to prove People programs
   drive retention, engagement, and performance
5. Under-resourced — team of 2-4 supporting 100-500 employees
   with no budget for additional hires

Current Solutions:
- BambooHR or Gusto (outgrowing it)
- Google Sheets for planning and reporting
- Manual processes held together with Slack reminders
- Outside counsel for compliance questions ($$$)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PSYCHOGRAPHIC PROFILE

Values: Efficiency, employee experience, fairness, transparency
Motivations: Building something scalable, earning a seat at the
             executive table, creating a workplace people love
Frustrations: Being seen as administrative, not strategic; always
              reactive instead of proactive; tool fragmentation
Decision style: Collaborative (involves CEO + Finance); needs to
                build internal business case; values peer validation
Risk tolerance: Moderate — will try new tools but needs proven
                ROI from similar companies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BUYING JOURNEY

1. Trigger: Hits a breaking point — usually a compliance scare,
   a failed audit, or the CEO asking for data they cannot produce
2. Research: Asks peers in People Ops communities (People Ops
   Society, TLNT, Lattice Resources), reads G2/Capterra reviews
3. Shortlist: Narrows to 2-3 vendors based on peer recommendations
   and online reviews; company size fit is a strong filter
4. Evaluation: Runs demos with their team; tests with real
   scenarios from their current pain points
5. Business case: Builds internal justification focused on time
   savings and risk reduction (ROI calculators are very helpful)
6. Decision: Gets sign-off from CEO/COO and Finance; contract
   value typically needs VP-level approval above $25K ARR
7. Timeline: 4-8 weeks from first demo to signed contract

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMMON OBJECTIONS

- "We're not big enough yet to need this" → Actually, the
  transition from 100-200 employees is exactly when manual
  processes break
- "We can't afford to switch right now" → Reframe around cost
  of current approach (time, risk, missed insights)
- "Our team doesn't have bandwidth for implementation" →
  Highlight guided onboarding and time-to-value metrics
- "What if we outgrow this in two years?" → Show the platform's
  track record with companies through the 500+ employee stage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MEDIA CONSUMPTION & INFLUENCE

Reads: Lenny's Newsletter, People Ops Society Slack, SHRM,
       First Round Review, Lattice blog
Listens to: HR Leaders Podcast, Redefining HR
Attends: SHRMTech, From Day One, HR Transform
Trusts: Peers in similar-stage companies, Lattice and Carta
        thought leadership, their outside employment counsel
Social: LinkedIn (active), occasionally Twitter/X
```

## Important Notes

- **Personas are hypotheses until validated.** The agent builds the best persona possible from the information provided, but it should be tested against real customer interviews and data. Plan to refine it quarterly.
- **JTBD over demographics.** The Jobs-to-be-Done framing is more actionable than demographics alone. Two buyers with identical titles can have completely different jobs they need done.
- **One persona is rarely enough.** Most B2B products have 2-4 distinct personas (buyer, user, influencer, blocker). Start with the primary decision-maker and expand from there.
- **Avoid fictional narratives.** This persona is designed as a strategic tool, not a creative writing exercise. No stock photos, fake names, or invented hobbies unless they directly inform strategy.
- **Share across teams.** A persona is only valuable if marketing, sales, product, and customer success all use it. The format is designed to be immediately useful across functions.

## Related Agents

- **market-researcher** — Primary agent that builds the persona using JTBD methodology and market data
- **content-strategist** — Uses the persona to plan content that addresses specific pain points and jobs
- **copywriter** — References the persona for voice, tone, and messaging decisions
- **media-buyer** — Uses demographic and psychographic data for ad targeting
