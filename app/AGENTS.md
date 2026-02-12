<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# app

## Purpose
Next.js App Router directory containing all pages, layouts, and server components. Uses the file-based routing system where each directory represents a route segment.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | Root layout with fonts (Inter, JetBrains Mono), metadata, Header, and Footer |
| `page.tsx` | Home page with Hero section component |
| `globals.css` | Global styles, Tailwind imports, CSS custom properties for theming |
| `sitemap.tsx` | SEO sitemap for search engines |
| `robots.tsx` | SEO robots.txt configuration |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `about/` | About page with skills, experience, education (see `about/AGENTS.md`) |
| `contact/` | Contact page with form (see `contact/AGENTS.md`) |
| `projects/` | Projects listing and dynamic project detail pages (see `projects/AGENTS.md`) |
| `resume/` | Resume download page |

## For AI Agents

### Working In This Directory
- All pages use App Router conventions (file-based routing)
- Root layout wraps all pages with Header and Footer
- Server components by default - add `"use client"` for interactivity
- Metadata defined in `layout.tsx` for SEO
- Fonts configured at root level and passed via CSS variables

### Testing Requirements
- Each page should render without errors
- Navigation between routes should work smoothly
- Metadata should be properly set for SEO

### Common Patterns
- Page components export default function
- Server components can't use hooks or event handlers
- Use `"use client"` directive for components needing useState/useEffect
- Dynamic routes use `[param]` directory syntax

## Dependencies

### Internal
- `@/components/layout/Header` - Site navigation header
- `@/components/layout/Footer` - Site footer
- `@/components/sections/*` - Page section components
- `@/lib/data` - Project data for pages

### External
- `next/font/google` - Font optimization (Inter, JetBrains Mono)

<!-- MANUAL: -->
