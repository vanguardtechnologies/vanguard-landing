# Vanguard Technology UI Transformation - Implementation Prompt

**Use this prompt to execute the complete UI transformation using /frontend-design and parallel agents.**

---

## Quick Start

Copy the prompt below and paste it to begin implementation:

---

## Implementation Prompt

```
Execute the Vanguard Technology UI Transformation v5.0 (Steel & Gold Premium Edition) according to the design specification at `docs/plans/2026-02-01-ui-transformation-design.md`.

### Skills to Use

1. **Primary:** Use `/frontend-design` skill for ALL UI component work
2. **Planning:** Use `/executing-plans` for systematic phase execution
3. **Parallelization:** Use `/dispatching-parallel-agents` for independent tasks
4. **Verification:** Use `/verification-before-completion` after each phase

### Core Design System (Apply Everywhere)

**Color Palette:**
- Navy: #050A14 (deepest), #0A1628 (primary bg), #0F1D32 (cards), #162544 (elevated), #1E3356 (borders)
- Steel: #E2E8F0 (primary text), #718096 (secondary text), #A0AEC0 (muted)
- Gold: #C9A961 (PRIMARY ACCENT), #D4B978 (hover), #E5D4A1 (light accent), #92722A (dark)

**Design Language:**
- Sharp angular cards with clipped corners (clip-path polygon)
- Monoline gold icons (Lucide with stroke-[1.5])
- 1px navy-600 borders, gold-500 on hover
- Gold glow effects on interaction: box-shadow: 0 0 20px rgba(201,169,97,0.15)

### Phase-by-Phase Implementation

**PHASE 1: Foundation Setup (Run in Parallel)**

Task 1.1: Update `tailwind.config.ts` with new color palette:
- Add navy (950, 900, 800, 700, 600, 500)
- Add steel (600, 500, 400, 300, 200, 100, 50)
- Add gold (700, 600, 500, 400, 300, 200)
- Remove or deprecate old amber colors

Task 1.2: Update `globals.css`:
- Add CSS custom properties for all new colors
- Update body background to navy gradient
- Remove old amber/tactical color references
- Add new utility classes (.card-angular, .text-gradient-gold, etc.)

Task 1.3: Create `lib/animations.ts`:
- fadeInUp, staggerContainer, cardHover, goldGlow presets
- Framer Motion variants for consistent animations

Task 1.4: Create `components/ui/AngularCard.tsx`:
- Base angular card with clip-path
- Hover states with gold border and glow
- Configurable clip sizes

Task 1.5: Create `components/ui/Button.tsx`:
- ButtonPrimary (gold background, angular clips)
- ButtonSecondary (gold outline, angular clips)

Task 1.6: Create `components/icons/GoldIcon.tsx`:
- Wrapper for Lucide icons with gold styling
- stroke-[1.5] for monoline effect

**PHASE 2: Header Transformation**

Using /frontend-design skill, completely redesign `components/Header.tsx`:

- Fixed header with navy-900/95% + backdrop-blur
- Logo with gold filter
- 5 navigation items: Categories, Services, Process, Team, Contact
- Nav links: steel-200 default, gold-500 on hover
- Single CTA: "Start Partnership" with angular gold button
- Mobile menu: full-screen overlay with staggered animations
- Scroll behavior: adds gold border-bottom on scroll
- Remove any old amber styling

**PHASE 3: Hero Section Update**

Using /frontend-design skill, update `components/Hero.tsx`:

- Keep existing image background
- Update gradient overlay to navy colors (see spec)
- Update badge styling to gold
- Update headline to steel-100
- Update CTAs to new gold Button components
- Update trust indicators with gold monoline icons
- Apply fadeInUp animations with stagger

**PHASE 4: Categories Section**

Using /frontend-design skill, update `components/DefenseProducts.tsx`:

- Convert cards to AngularCard component
- Update all colors to navy/gold scheme
- Add gold dot badges for category names
- Update links to gold-500
- Apply staggered reveal animations
- Ensure 3-column (lg), 2-column (md), 1-column (sm) grid

**PHASE 5: Services Section (CRITICAL - Major Change)**

Using /frontend-design skill, completely redesign `components/Services.tsx`:

IMPORTANT: This section currently uses 4 different colors (blue, green, purple, orange).
Convert to unified gold-only design:

- All icons must use GoldIcon wrapper (gold monoline)
- Remove ALL blue, green, purple, orange references
- Convert cards to AngularCard with navy-800 background
- Gold numbered badges (01, 02, 03, 04)
- Gold checkmarks for feature lists
- Update stats section to gold accents

**PHASE 6: Process Section**

Using /frontend-design skill, update `components/Process.tsx`:

- Gold connecting timeline line (2px)
- Gold circular step indicators
- Angular cards for each step
- Monoline gold icons in cards
- Update all colors to navy/gold scheme
- Maintain horizontal (desktop) and vertical (mobile) layouts

**PHASE 7: Team Section**

Using /frontend-design skill, update `components/Team.tsx`:

- Angular card frames for team members
- Gold border around circular photos
- Name in steel-100, title in gold-500
- Bio in steel-400
- Monoline gold LinkedIn icons
- Navy-800 card backgrounds

**PHASE 8: Contact Section**

Using /frontend-design skill, update `components/Contact.tsx`:

- Update form inputs: navy-700 bg, navy-500 border, gold-500 focus
- Update submit button to gold ButtonPrimary (REMOVE BLUE!)
- Update contact info icons to gold monoline
- Update labels to steel-300 uppercase
- Add angular styling to form container

**PHASE 9: Footer Transformation**

Using /frontend-design skill, completely redesign `components/Footer.tsx`:

- Navy-950 background (darkest)
- Gold gradient dividers
- 3-column layout (navigation, contact, social)
- Monoline gold social icons
- DGDP certification badge with gold accent
- Clean copyright line in steel-400
- Remove old gradient orbs and heavy effects
- Simpler, more premium aesthetic

**PHASE 10: Globe Integration**

Update `components/DefenseGlobe/GlobeComponent.tsx`:

- Change arc colors to gold (#C9A961 → #E5D4A1)
- Change point colors to gold tiers
- Change atmosphere to subtle gold glow (rgba(201,169,97,0.15))
- Update hexagonal grid to gold tint
- Update stars to warm white
- REMOVE orbital emoji particles
- Keep all animation logic intact

**PHASE 11: Final Polish (Run in Parallel)**

Task 11.1: Review all components for any remaining amber/blue/green/purple/orange
Task 11.2: Verify navigation includes Team link
Task 11.3: Test all hover states show gold effects
Task 11.4: Verify form submit button is gold (not blue)
Task 11.5: Run `npm run build` to verify no errors
Task 11.6: Test responsive behavior at all breakpoints

### Execution Notes

- Use TodoWrite to track progress through phases
- Commit after each phase with descriptive messages
- Run `npm run dev` to visually verify changes between phases
- The design spec at `docs/plans/2026-02-01-ui-transformation-design.md` has detailed code examples

### Color Quick Reference

Always use these colors:
- Primary bg: navy-900 (#0A1628)
- Card bg: navy-800 (#0F1D32)
- Borders: navy-600 (#1E3356)
- Primary text: steel-100 (#E2E8F0)
- Secondary text: steel-400 (#718096)
- Accent: gold-500 (#C9A961)
- Hover accent: gold-400 (#D4B978)

NEVER use: amber-*, blue-*, green-*, purple-*, orange-* for accents

### Success Criteria

- [ ] All components use navy/steel/gold colors only
- [ ] Header includes Team in navigation
- [ ] All cards have angular clipped corners
- [ ] All icons are monoline gold style
- [ ] Form submit button is gold (not blue)
- [ ] Services section is gold-only (no multi-color icons)
- [ ] Globe uses gold color scheme
- [ ] All hover states show gold effects
- [ ] Animations are subtle and 60fps
- [ ] Build completes without errors
- [ ] Mobile responsive works correctly

Begin implementation now. Start with Phase 1 (Foundation Setup).
```

---

## Alternative: Phase-Specific Prompts

If you prefer to run phases individually, use these prompts:

### Phase 1 Only
```
Execute Phase 1 (Foundation Setup) of the UI Transformation.
Read the spec at docs/plans/2026-02-01-ui-transformation-design.md.
Create the color system in tailwind.config.ts and globals.css.
Create the UI components: AngularCard, Button, GoldIcon.
Create lib/animations.ts with Framer Motion presets.
```

### Phase 2-4 (Header, Hero, Categories)
```
Execute Phases 2-4 of the UI Transformation using /frontend-design skill.
Transform Header, Hero, and DefenseProducts components to Steel & Gold theme.
Read the spec at docs/plans/2026-02-01-ui-transformation-design.md for details.
Ensure Header includes Team navigation link.
```

### Phase 5 (Services - Critical)
```
Execute Phase 5 of the UI Transformation using /frontend-design skill.
CRITICAL: Services section must be completely redesigned.
Remove ALL blue, green, purple, orange colors.
Convert to unified gold-only monoline icons.
Read Section 7.3 of docs/plans/2026-02-01-ui-transformation-design.md.
```

### Phase 6-8 (Process, Team, Contact)
```
Execute Phases 6-8 of the UI Transformation using /frontend-design skill.
Transform Process, Team, and Contact sections.
Use gold timeline, angular cards, and gold form styling.
Ensure Contact submit button is gold (not blue).
```

### Phase 9-10 (Footer, Globe)
```
Execute Phases 9-10 of the UI Transformation using /frontend-design skill.
Redesign Footer with premium Steel & Gold aesthetic.
Update Globe colors to gold scheme and remove emoji particles.
```

---

## Verification Checklist

After implementation, verify:

```bash
# Build check
npm run build

# Run dev server
npm run dev
```

Visual checks:
- [ ] Header shows all 5 nav items including Team
- [ ] No amber, blue, green, purple, or orange accents visible
- [ ] All cards have angular clipped corners
- [ ] Globe arcs and points are gold
- [ ] Form inputs focus in gold
- [ ] Submit button is gold
- [ ] Footer is clean with gold accents

---

## Troubleshooting

**If old colors appear:**
1. Search codebase for `amber`, `blue-`, `green-`, `purple-`, `orange-`
2. Replace with appropriate navy, steel, or gold values
3. Check globals.css for old CSS variable references

**If angular clips don't work:**
1. Verify clip-path syntax is correct
2. Check browser support (works in all modern browsers)
3. Ensure parent has overflow: hidden if needed

**If gold glow doesn't appear:**
1. Check box-shadow syntax: `0 0 20px rgba(201,169,97,0.15)`
2. Verify transition is applied: `transition-all duration-300`
3. Ensure hover state is correctly triggered

---

*Implementation Prompt v1.0 - Steel & Gold Premium Edition*
