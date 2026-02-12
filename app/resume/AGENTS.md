<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# resume

## Purpose
Resume download page. Currently displays a message that the feature is in development and directs users to contact for resume copy.

## Key Files

| File | Description |
|------|-------------|
| `page.tsx` | Resume page with download CTA and navigation options |

## For AI Agents

### Working In This Directory
- This is a placeholder page until resume download is implemented
- Uses a centered card layout for the message
- Provides navigation back to About page and email contact
- Simple client component with basic motion animation

### Testing Requirements
- Page should render with centered card
- Contact button should open email client
- Back to About button should navigate correctly

### Common Patterns
- Card component for centered content
- Button components for actions
- ArrowRight icon for directional navigation
- Simple fade-in animation on mount

## Dependencies

### Internal
- `@/components/ui/*` - Card, Button components

### External
- `framer-motion` - Fade-in animation
- `lucide-react` - ArrowRight, Download icons
- `next/link` - Link components

<!-- MANUAL: When implementing actual resume download, update documentation with the approach used -->
