<!-- Parent: ../../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# ui

## Purpose
Base UI components from shadcn/ui - accessible, reusable primitives that form the building blocks of the interface. These are styled using Tailwind CSS and Radix UI primitives.

## Key Files

| File | Description |
|------|-------------|
| `button.tsx` | Button component with variants (default, outline, ghost) and sizes |
| `card.tsx` | Card container components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) |
| `input.tsx` | Form input with accessibility features |
| `textarea.tsx` | Multi-line text input for forms |
| `label.tsx` | Form label with proper association |
| `badge.tsx` | Badge component for tags and status indicators |

## For AI Agents

### Working In This Directory
- These are shadcn/ui components - follow their patterns for consistency
- Components use class-variance-authority (cva) for variant management
- All components support forwardRef for DOM access
- Use semantic HTML and proper ARIA attributes

### Testing Requirements
- Components should be keyboard accessible
- Focus states should be visible
- Variants should apply correctly
- Ref forwarding should work properly

### Common Patterns
- `Button` asChild pattern for composing with Link
- `Card` components used together for consistent card layouts
- `Badge` for category tags and status indicators
- Form components (Input, Textarea, Label) used in ContactForm

## Dependencies

### Internal
- `@/lib/utils` - `cn()` utility for className merging

### External
- `radix-ui/*` - Headless UI primitives
- `class-variance-authority` - Variant management
- `@tailwindcss/postcss` - Tailwind CSS v4 integration

<!-- MANUAL: -->
