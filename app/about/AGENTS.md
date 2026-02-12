<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# about

## Purpose
About page displaying professional profile, skills with experience levels, work history, and education. Uses cards and badges for organized information display.

## Key Files

| File | Description |
|------|-------------|
| `page.tsx` | About page client component with hero, skills, experience, and education sections |

## For AI Agents

### Working In This Directory
- This is a client component with comprehensive personal information
- Skills are organized by category (languages, tools, domains, hardware)
- Experience data includes achievements as bullet points
- Education section shows degree, institution, and period

### Testing Requirements
- All sections should render with proper spacing
- Contact buttons should open email client and GitHub
- Download resume button should navigate to resume page
- Animations should trigger on scroll

### Common Patterns
- Card components for grouping related information
- Badge components with icons for skill display
- Timeline-style layout for experience and education
- Call-to-action section at bottom

## Dependencies

### Internal
- `@/components/ui/*` - Card, Button, Badge components
- `@/components/layout/*` - Header component (separate layout)

### External
- `framer-motion` - Scroll animations
- `lucide-react` - Icons for skills and actions
- `next/link` - Link components for navigation

<!-- MANUAL: -->
