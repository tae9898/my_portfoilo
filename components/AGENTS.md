<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# components

## Purpose
React components directory organized by component type (layout, sections, ui). All components use Framer Motion for animations.

## Key Files

| File | Description |
|------|-------------|
| `ProjectCard.tsx` | Reusable card component for displaying project information with hover effects |
| `layout/index.ts` | Barrel export for layout components |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `layout/` | Site-wide layout components (Header, Navigation, Footer) |
| `sections/` | Page section components (Hero, FeaturedProjects, Skills, ContactForm, ProjectDetail) |
| `ui/` | Base UI components from shadcn/ui (Button, Card, Input, etc.) |

## For AI Agents

### Working In This Directory
- All components are client components (use `"use client"` directive)
- Use Framer Motion for animations with consistent variant patterns
- Import utilities from `@/lib/utils` for className merging
- Follow shadcn/ui patterns for base UI components

### Testing Requirements
- Components should render without console errors
- Animations should trigger on viewport entry or user interaction
- Hover states and transitions should work smoothly

### Common Patterns
- Animation variants defined as constants before components
- `whileInView` and `viewport={{ once: true }}` for scroll animations
- `cn()` utility for conditional className merging
- Lucide React icons imported from `lucide-react`

## Dependencies

### Internal
- `@/lib/utils` - `cn()` utility for className merging

### External
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `clsx`, `tailwind-merge` - Used via `cn()` utility

<!-- MANUAL: -->
