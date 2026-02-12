<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# projects

## Purpose
Projects listing page with category filtering, search functionality, and dynamic routing for individual project detail pages.

## Key Files

| File | Description |
|------|-------------|
| `page.tsx` | Projects listing page with filters, search, and featured/all sections |
| `[slug]/page.tsx` | Dynamic route for individual project pages with SEO metadata |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `[slug]/` | Dynamic route parameter for individual project pages (see `[slug]/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Main page uses client-side filtering by category and search query
- Featured projects shown separately when no filter/search is active
- Dynamic route generates static params for all projects at build time
- Each project page has unique metadata for SEO

### Testing Requirements
- Category filters should show correct projects
- Search should filter by title, description, and tech stack
- Project links should navigate to detail pages
- Project count should update accurately
- Non-existent slugs should trigger 404

### Common Patterns
- `useMemo` for filtered project arrays
- `AnimatePresence` with mode="wait" for smooth transitions
- `generateStaticParams` for static export of all project pages
- `generateMetadata` for dynamic SEO metadata per project

## Dependencies

### Internal
- `@/lib/data` - Project data array and types
- `@/components/ProjectCard` - Project display card
- `@/components/ui/*` - Button, Input components
- `@/components/sections/ProjectDetail` - Project detail view

### External
- `framer-motion` - Filter transition animations
- `lucide-react` - Search icon
- `next/navigation` - Routing and notFound()

<!-- MANUAL: -->
