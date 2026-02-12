<!-- Parent: ../../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# layout

## Purpose
Site-wide layout components that appear on every page. Includes the site header with navigation, navigation menu component, and footer with social links.

## Key Files

| File | Description |
|------|-------------|
| `Header.tsx` | Site header with logo, desktop/mobile navigation, and scroll-based backdrop blur effect |
| `Navigation.tsx` | Desktop navigation menu with scroll spy for active section highlighting |
| `Footer.tsx` | Site footer with social links (GitHub, Blog, Email) and copyright |
| `index.ts` | Barrel export for layout components |

## For AI Agents

### Working In This Directory
- Header includes mobile menu with slide-in animation
- Navigation uses scroll position to highlight active section
- Footer social links open in new tabs with proper accessibility
- All components use Framer Motion for entrance animations

### Testing Requirements
- Mobile menu should open/close smoothly with backdrop
- Navigation should highlight correct section on scroll
- Social links should have proper `rel="noopener noreferrer"` for external links
- Header should change appearance on scroll

### Common Patterns
- Motion variants defined as constants at component level
- `useEffect` with scroll listeners for position-based updates
- `AnimatePresence` for exit animations on mobile menu
- Lucide icons for social media links

## Dependencies

### Internal
- `@/lib/utils` - `cn()` utility
- `@/components/ui/button` - Button component for menu toggle

### External
- `framer-motion` - Animations
- `lucide-react` - Icons (Menu, X, Github, Mail, BookOpen)

<!-- MANUAL: -->
