<!-- Parent: ../../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# sections

## Purpose
Page section components that compose the main content areas. Includes hero sections, project displays, skills presentation, contact form, and project detail view.

## Key Files

| File | Description |
|------|-------------|
| `Hero.tsx` | Terminal-to-NVIM themed hero with animated typing and file tree navigation |
| `FeaturedProjects.tsx` | Featured projects grid display with hover animations |
| `Skills.tsx` | Skills and expertise display with categorized badges |
| `ContactForm.tsx` | Contact form with validation and mailto functionality |
| `ProjectDetail.tsx` | Individual project detail page with related projects |

## For AI Agents

### Working In This Directory
- Hero component simulates a terminal typing "nvim devtae.xyz" then transitions to NVIM interface
- Project sections use staggered animations for entrance effects
- Contact form validates client-side and opens email client on submit
- All sections use consistent animation variant patterns

### Testing Requirements
- Hero typing animation should complete smoothly
- Form validation should show appropriate error messages
- Project cards should have hover effects
- Related projects should filter correctly

### Common Patterns
- `containerVariants` and `itemVariants` for staggered animations
- `whileInView` with `viewport={{ once: true }}` for scroll triggers
- Form errors cleared as user types
- Shimmer animation on gradient text using `animate-shimmer` class

## Dependencies

### Internal
- `@/lib/data` - Project data for displays
- `@/lib/utils` - `cn()` utility
- `@/components/ui/*` - Card, Button, Input, Textarea, Label, Badge components
- `@/components/ProjectCard` - Reusable project card component

### External
- `framer-motion` - All animations
- `lucide-react` - Icon library
- `next/navigation` - Routing (useRouter)

<!-- MANUAL: -->
