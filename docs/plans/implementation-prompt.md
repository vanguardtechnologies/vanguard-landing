# Vanguard Technology v4.0 Implementation Prompt

**Use this prompt to execute the landing page redesign specification.**

Copy everything below the line and paste it as your next message to Claude Code.

---

## Implementation Prompt

Execute the Vanguard Technology Landing Page v4.0 redesign according to the specification at `docs/plans/2026-02-01-landing-page-redesign-spec.md`.

### Implementation Strategy

Use `/executing-plans` skill to systematically implement this specification. Use `/frontend-design` skill for all UI component work. Dispatch parallel agents using `/dispatching-parallel-agents` where tasks are independent.

### Phase-by-Phase Execution

**PHASE 1: Setup & Image Infrastructure**

Tasks (can run in parallel):
1. Create the image directory structure:
   - `/public/images/hero/`
   - `/public/images/categories/`
   - `/public/images/team/`
   - `/public/images/backgrounds/`

2. Update `next.config.js` with image optimization settings:
   - Add remote patterns for Unsplash and Pexels
   - Enable AVIF and WebP formats
   - Configure device sizes and cache TTL

3. Create placeholder images or download from free sources:
   - Hero: Search for "Bangladesh military parade" or "military equipment showcase" on Unsplash/Pexels
   - Categories: Tank, naval ship, fighter jet, radar system, military logistics, artillery
   - Team: Professional business headshots (4 placeholder images)
   - Background: Command center/control room aesthetic

4. Create `lib/animations.ts` with Framer Motion presets from spec

5. Create `data/categories.ts` with the category data structure from spec

**PHASE 2: Hero Section Redesign**

Use `/frontend-design` skill to completely redesign `components/Hero.tsx`:
- Full-screen cinematic layout with background image
- Ken Burns slow zoom effect (20s cycle)
- Left-aligned content (60% width on desktop)
- New headline: "Enter Bangladesh's Defence Market Today"
- New subheadline: "Expert DGDP registration, industry connections, and 24/7 local support"
- Two CTAs: "Start Your DGDP Journey" (primary) and "Explore Capabilities" (secondary)
- Trust indicators bar with 4 items
- Scroll indicator at bottom
- Responsive: centered text on mobile with darker overlay
- Follow the exact code structure in the spec document Section 4.2

**PHASE 3: Defense Categories Redesign**

Use `/frontend-design` skill to redesign the category cards:

1. Create new `components/CategoryCard.tsx`:
   - Photo-based card with 200px image height
   - Gradient overlay with category color
   - Always-visible content (no hover reveal)
   - Category badge, subtitle, budget, and explore link
   - Hover: subtle scale (1.05) and amber border glow
   - Follow the exact code in spec Section 4.3

2. Rewrite `components/DefenseProducts.tsx`:
   - Import new CategoryCard component
   - Use data from `data/categories.ts`
   - 3-column grid (lg), 2-column (md), 1-column (mobile)
   - Staggered fade-in animations
   - Keep section header styling consistent

**PHASE 4: New Team Section**

Use `/frontend-design` skill to create `components/Team.tsx`:
- Follow exact implementation from spec Section 4.7
- 4 team members with mock data
- Circular photos (200x200) with amber border
- Name, role, bio, LinkedIn link
- 4-column grid (lg), 2-column (sm), 1-column (mobile)
- Staggered fade-in on scroll
- Add Team section to `app/page.tsx` between Process and Contact

**PHASE 5: Section Enhancements**

Run these in parallel:

1. **DefenseGlobe Enhancement** (`components/DefenseGlobe/index.tsx`):
   - Add command center background image with 10% opacity
   - Keep all existing globe functionality unchanged

2. **Services Section Enhancement** (`components/Services.tsx`):
   - Keep existing Lucide icons and GSAP animations
   - Enhance card styling: better hover states, consistent borders
   - Add gradient radial glow on hover
   - NO photos - graphics only

3. **Process Section Enhancement** (`components/Process.tsx`):
   - Keep existing SVG icons
   - Enhance timeline connecting line (thicker, better gradient)
   - Improve mobile vertical layout
   - NO photos - graphics only

4. **Contact Section Enhancement** (`components/Contact.tsx`):
   - Add optional "Inquiry Type" dropdown field
   - Consider subtle background enhancement
   - Keep existing form functionality

**PHASE 6: Content Updates**

Update all copy according to spec Section 6:
- Hero headline and subheadline
- Category card descriptions with budget info
- Service descriptions with value propositions
- CTA button text throughout
- Meta descriptions in layout.tsx

**PHASE 7: Animation Polish**

Verify all animations follow spec Section 5:
- Ken Burns on hero (20s)
- Fade-in-up on scroll (0.5s, staggered 0.1s)
- Hover scales (1.02-1.05, 0.3s)
- Respect `prefers-reduced-motion`
- Target 60fps performance

**PHASE 8: Testing & Optimization**

1. Run `npm run build` to verify no errors
2. Run Lighthouse audit (target 90+ performance)
3. Test responsive behavior at all breakpoints
4. Verify all images have proper alt text
5. Test form submission
6. Verify all internal links work

### Execution Notes

- **Use TodoWrite** to track progress through phases
- **Commit after each phase** with descriptive messages
- **Use `/verification-before-completion`** after each major component
- **Run dev server** to visually verify changes: `npm run dev`
- **For image sourcing**: If you cannot download images, create placeholder colored rectangles with the category name as text overlay

### Image Sourcing Commands (if needed)

For placeholder images, you can use these Unsplash URLs in development:
```
Hero: https://images.unsplash.com/photo-1569982175971-d92b01cf8694 (military parade)
Land: https://images.unsplash.com/photo-1563725911583-7e7f56a3c6dc (tank)
Naval: https://images.unsplash.com/photo-1605225811484-d3ebef4def2e (warship)
Air: https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8 (fighter jet)
Radar: https://images.unsplash.com/photo-1451187580459-43490279c0fa (tech/radar)
Support: https://images.unsplash.com/photo-1578662996442-48f60103fc96 (military gear)
Artillery: https://images.unsplash.com/photo-1580197918283-d27f6bbf82c2 (artillery)
```

### Success Criteria

- [ ] Hero section displays full-screen cinematic image with Ken Burns effect
- [ ] All 6 category cards show photos with proper overlays
- [ ] Team section displays 4 members with professional styling
- [ ] All animations are subtle and professional
- [ ] Page maintains dark military aesthetic
- [ ] Lighthouse performance score 90+
- [ ] Mobile responsive at all breakpoints
- [ ] No console errors or warnings

### Begin Implementation

Start with Phase 1. Use the spec document as your primary reference. Ask clarifying questions if any specification is unclear.

Implement the Vanguard Technology Landing Page v4.0 redesign now.
