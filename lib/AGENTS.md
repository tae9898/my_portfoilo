<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# lib

## Purpose
Utility functions and shared data. Contains the project data structure and helper utilities used throughout the application.

## Key Files

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` utility for merging Tailwind CSS classes using clsx and tailwind-merge |
| `data.ts` | Project data structure with TypeScript interfaces, project array, and category definitions |

## For AI Agents

### Working In This Directory
- `cn()` is the standard utility for conditional className styling
- Project data in `data.ts` is the single source of truth for project information
- Projects are categorized and flagged as featured/non-featured
- Use the TypeScript interfaces when working with project data

### Testing Requirements
- `cn()` should properly merge Tailwind classes without conflicts
- Project data should be properly typed and match the interfaces

### Common Patterns
- Import `cn` from `@/lib/utils` for all className operations
- Import project data and types from `@/lib/data`
- When adding new projects, follow the existing structure and categorization

## Dependencies

### External
- `clsx` - Conditional class names
- `tailwind-merge` - Tailwind-specific class merging

<!-- MANUAL: -->
