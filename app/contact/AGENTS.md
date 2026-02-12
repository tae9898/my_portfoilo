<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# contact

## Purpose
Contact page with hero section and integrated contact form. The form validates input client-side and opens the user's email client with pre-filled message.

## Key Files

| File | Description |
|------|-------------|
| `page.tsx` | Contact page with gradient background hero and ContactForm section |

## For AI Agents

### Working In This Directory
- This page has its own Header instance (not using root layout)
- Uses gradient backgrounds for visual distinction
- Contact form is in the ContactForm component (not in this directory)
- Page sections have proper spacing and visual hierarchy

### Testing Requirements
- Gradient backgrounds should render correctly in light/dark mode
- Contact form should be accessible from this page
- Navigation should work to return to other pages

### Common Patterns
- Hero section with shimmer animation on heading
- Gradient backgrounds using Tailwind utilities
- Section-based layout with proper vertical rhythm

## Dependencies

### Internal
- `@/components/sections/ContactForm` - Main form component
- `@/components/layout/Header` - Site header

### External
- `framer-motion` - Hero animations

<!-- MANUAL: -->
