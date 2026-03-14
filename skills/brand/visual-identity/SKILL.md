---
name: visual-identity
description: Design and document visual identity systems including color, typography, imagery, and layout principles.
origin: ECM
---

# Visual Identity

## When to Activate

- A new brand needs a complete visual identity system
- A rebrand requires updating visual elements while maintaining recognition
- Visual inconsistency across touchpoints needs resolution
- Expanding into new channels that require visual adaptation (app, social, physical)
- Launching a sub-brand that needs to relate visually to the parent
- Internal teams or agencies need clear visual specifications to execute

## First Questions

1. What is the brand's personality? (This drives every visual decision.)
2. Who is the primary audience, and what visual language resonates with them?
3. What industry are you in, and do you want to follow or break visual conventions?
4. Where will this identity live? (Web, print, packaging, environmental, all of the above?)
5. Are there existing brand elements that must be preserved?
6. What is the budget for custom assets vs leveraging existing resources (stock, templates)?
7. What are three brands whose visual identity you admire, and three you want to avoid resembling?

## Color Psychology in Branding

Colors trigger associations. Use this as a starting point, not a rulebook — context, culture, and combination matter more than individual color meanings.

| Color | Common Associations | Industries That Use It |
|---|---|---|
| Blue | Trust, stability, professionalism | Finance, tech, healthcare |
| Red | Energy, urgency, passion | Food, entertainment, retail |
| Green | Growth, health, sustainability | Health, environment, finance |
| Yellow | Optimism, warmth, caution | Food, children, energy |
| Purple | Luxury, creativity, wisdom | Beauty, premium, education |
| Orange | Friendliness, confidence, enthusiasm | Tech, food, fitness |
| Black | Sophistication, power, elegance | Luxury, fashion, tech |
| White | Simplicity, cleanliness, modernity | Tech, healthcare, minimalist brands |

**Important nuances:**
- Cultural context changes meaning (white = purity in Western markets, mourning in some Asian markets)
- Saturation and brightness matter as much as hue (pastel blue feels very different from navy)
- Color meaning is set by context and pairing, not by the color alone

## Color Palette Construction

Build a palette in layers:

### Primary Colors (1-3)
The core brand colors. Used most frequently. Should be immediately recognizable.
- These appear in the logo, primary CTAs, key brand moments
- Test at small scale (favicon) and large scale (billboard)

### Secondary Colors (2-4)
Supporting colors that complement the primary palette.
- Used for sections, categories, supporting UI elements
- Should work alongside primary colors without competing

### Accent Colors (1-2)
High-contrast colors for emphasis and interaction.
- CTAs, notifications, highlights, hover states
- Should stand out clearly against primary and secondary

### Neutral Palette (4-6)
The backbone of any visual system. Grays, off-whites, near-blacks.
- Background colors (light and dark modes)
- Text colors (body, secondary, disabled)
- Borders, dividers, subtle UI
- Often overlooked but used in 60-70% of the visual surface area

### Color Specification Template

For each color, document:
```
Name: Brand Blue
HEX: #1A73E8
RGB: 26, 115, 232
HSL: 214, 84%, 51%
CMYK: 89, 50, 0, 9
Pantone: 2727 C
Usage: Primary buttons, links, key headings
Accessibility: Passes WCAG AA on white (#FFFFFF) at 4.5:1 ratio
```

## Typography Pairing Principles

### Pairing Strategies That Work

1. **Serif heading + Sans-serif body.** Classic, high contrast, editorial feel. Example: Playfair Display + Source Sans Pro.
2. **Sans-serif heading + Sans-serif body.** Modern, clean, tech-forward. Use different weights or families. Example: Inter Bold + Inter Regular, or Poppins + Open Sans.
3. **Same superfamily.** Typefaces designed to work together. Example: Roboto + Roboto Slab, or IBM Plex Sans + IBM Plex Serif.
4. **Display heading + Neutral body.** Distinctive personality in headers with maximum readability in body. Example: Space Grotesk + System UI.

### What to Avoid
- Two decorative or display fonts competing for attention
- Fonts that are too similar but not the same (creates visual tension without purpose)
- More than three typefaces in one system (heading, body, monospace is usually the maximum)

### Type Scale

Establish a consistent scale. A common approach uses a ratio (1.25, 1.333, or 1.5):

```
Caption:    12px / 0.75rem
Body Small: 14px / 0.875rem
Body:       16px / 1rem (base)
H6:         18px / 1.125rem
H5:         20px / 1.25rem
H4:         24px / 1.5rem
H3:         30px / 1.875rem
H2:         36px / 2.25rem
H1:         48px / 3rem
Display:    60px / 3.75rem
```

Define line height (1.4-1.6 for body, 1.1-1.3 for headings), letter spacing (tighter for large text, normal or slightly loose for body), and paragraph spacing.

## Imagery Style Definition

Define imagery across these dimensions:

1. **Subject matter.** What appears in photos? People, products, abstractions, environments?
2. **Composition.** Centered vs rule-of-thirds, close-up vs wide, negative space usage.
3. **Color treatment.** Warm vs cool, saturated vs desaturated, natural vs stylized.
4. **Lighting.** Natural, studio, moody, bright and airy.
5. **People.** Diversity expectations, candid vs posed, eye contact vs environmental.
6. **Mood.** Aspirational, authentic, playful, serious, intimate.

Create a mood board with 10-15 reference images that exemplify the target style. Include annotations explaining why each image is on-brand.

### Stock Photography Guidelines

- Approved sources (Unsplash, Stocksy, custom shoots)
- Keywords and search strategies that yield on-brand results
- Red flags to avoid (overly staged, outdated styling, cliche corporate imagery)
- Editing requirements (color correction to match brand palette, cropping ratios)

## Iconography Guidelines

- **Style:** Line, filled, duotone, outlined, rounded, sharp
- **Stroke weight:** Consistent across all icons (e.g., 2px stroke)
- **Grid:** Design on a consistent grid (24x24, 32x32)
- **Corner radius:** Consistent rounding (sharp, slightly rounded, fully rounded)
- **Color usage:** Single color, dual color, or multi-color
- **Metaphor consistency:** Use consistent metaphors (gear = settings everywhere, not sometimes a wrench)
- **Custom vs library:** When to commission custom icons vs use an existing set (Phosphor, Lucide, Material)

## Layout Grid Systems

### Web Grid
```
Columns: 12
Gutter: 24px (desktop), 16px (mobile)
Margin: 80px (desktop), 24px (tablet), 16px (mobile)
Max content width: 1200px or 1440px
```

### Print Grid
- Define columns, margins, and baseline grid
- Specify bleed and trim for print production

### Spacing System

Use a consistent spacing scale based on a base unit:

```
Base unit: 4px
XS:  4px  (0.25rem)
SM:  8px  (0.5rem)
MD:  16px (1rem)
LG:  24px (1.5rem)
XL:  32px (2rem)
2XL: 48px (3rem)
3XL: 64px (4rem)
4XL: 96px (6rem)
```

## Visual Identity Checklist

### Foundation
- [ ] Color palette defined with full specifications (HEX, RGB, CMYK, Pantone, HSL)
- [ ] Accessibility tested: all text/background combinations meet WCAG AA (4.5:1 for body, 3:1 for large text)
- [ ] Typography system selected with heading, body, and monospace fonts
- [ ] Type scale defined with sizes, weights, line heights, and spacing
- [ ] Spacing system established with consistent base unit

### Assets
- [ ] Imagery style defined with mood board and written guidelines
- [ ] Iconography style selected with size grid and stroke specifications
- [ ] Layout grids defined for web and print
- [ ] Pattern library or component kit started (buttons, cards, forms)

### Validation
- [ ] Palette tested in dark mode and light mode
- [ ] Visual identity tested at small scale (favicon, app icon, social avatar)
- [ ] Visual identity tested at large scale (billboard, banner, environmental)
- [ ] Printed color proofed (screen colors and print colors differ)
- [ ] Identity reviewed for unintended cultural associations in target markets
- [ ] Complete identity applied to three real-world mock-ups (website, social post, email)

## Quality Gate

Before finalizing a visual identity system:

- [ ] Color palette has primary, secondary, accent, and neutral tiers with all format codes
- [ ] Typography includes typeface names, weights, scale, line heights, and fallback stacks
- [ ] Imagery guidelines include mood board, subject matter rules, and stock photo guidance
- [ ] Iconography style is defined and consistent
- [ ] Layout grid and spacing system use consistent base units
- [ ] All combinations tested for accessibility (contrast ratios documented)
- [ ] Identity works across all planned touchpoints (digital, print, environmental)
- [ ] Visual identity is cohesive — all elements feel like they belong to the same brand
