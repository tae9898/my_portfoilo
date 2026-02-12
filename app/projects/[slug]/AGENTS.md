<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# [slug]

## Purpose
Dynamic route parameter directory for individual project pages. Each project in the data array gets its own static page at build time.

## Key Files

| File | Description |
|------|-------------|
| `page.tsx` | Server component that renders project detail or triggers 404 for invalid slugs |

## For AI Agents

### Working In This Directory
- This is a dynamic route using Next.js App Router conventions
- `[slug]` parameter matches project.id from the data array
- Generates static pages for all projects at build time
- Creates SEO metadata for each project page
- Finds related projects by category for display

### Testing Requirements
- Valid project slugs should render the ProjectDetail component
- Invalid slugs should trigger Next.js 404 page
- Related projects should be from same category (excluding current)
- Metadata should include project title and description

### Common Patterns
- `generateStaticParams()` maps projects to slug params
- `generateMetadata()` creates dynamic metadata per project
- `params` prop is async in Next.js 15+
- `notFound()` for invalid routes

## Dependencies

### Internal
- `@/lib/data` - Project array for lookup and related projects
- `@/components/sections/ProjectDetail` - Detail view component

### External
- `next/navigation` - notFound() function

<!-- MANUAL: -->
