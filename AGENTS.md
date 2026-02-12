<!-- Generated: 2025-02-08 | Updated: 2025-02-08 -->

# portfolio

## Purpose
A Next.js 16 portfolio website for TAE, a Linux Middleware & Embedded Systems Developer. The site showcases projects, skills, and professional experience with a terminal/NVIM-themed hero section.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | Project dependencies including Next.js 16, React 19, Framer Motion, Tailwind CSS v4, and shadcn/ui |
| `next.config.ts` | Next.js configuration (minimal setup) |
| `tsconfig.json` | TypeScript config with path aliases (`@/*` maps to root) |
| `tailwind.config.ts` | Tailwind CSS v4 configuration |
| `eslint.config.mjs` | ESLint configuration using Next.js preset |
| `postcss.config.mjs` | PostCSS configuration for Tailwind CSS |
| `README.md` | Standard Next.js starter documentation |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages and layouts (see `app/AGENTS.md`) |
| `components/` | React components organized by type (see `components/AGENTS.md`) |
| `lib/` | Utility functions and shared data (see `lib/AGENTS.md`) |
| `public/` | Static assets (SVG icons, favicon) |

## For AI Agents

### Working In This Directory
- This is a Next.js 16 project using the App Router (not Pages Router)
- Uses Tailwind CSS v4 with PostCSS
- TypeScript strict mode enabled
- Path alias `@/*` maps to project root for imports
- Run `npm run dev` for development, `npm run build` for production

### Testing Requirements
- Run `npm run lint` to check for ESLint errors
- Run `npm run build` to verify production build succeeds

### Common Patterns
- All client components use `"use client"` directive at top of file
- Use `@/` prefix for imports (e.g., `@/components/ui/button`)
- Framer Motion used for animations throughout
- shadcn/ui components in `components/ui/` directory

## Dependencies

### External
- **next** 16.1.6 - React framework with App Router
- **react** 19.2.3 - UI library
- **framer-motion** 12.33.0 - Animation library
- **tailwindcss** v4 - Styling framework
- **lucide-react** 0.563.0 - Icon library
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class utilities
- **radix-ui** - Headless UI primitives (via shadcn)

### Project URLs
- Live site: https://devtae.xyz
- GitHub: https://github.com/tae9898
- Blog: https://tae-98.tistory.com
- Contact: k99779004@naver.com

<!-- MANUAL: Custom project notes can be added below -->
