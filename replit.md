# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Project

**Perci Refrigeration & Airconditioning Services** — a marketing/landing page website for a Cebu-based HVAC company. Features include service listings, contact form (WhatsApp integration), testimonials, FAQ, and a floating CTA.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (`artifacts/perci-hvac/`)
- **UI**: Tailwind CSS v4, shadcn/ui components, Plus Jakarta Sans + Inter fonts
- **Routing**: react-router-dom v7
- **API framework**: Express 5 (`artifacts/api-server/`)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- `artifacts/perci-hvac/` — Main HVAC landing page (preview path: `/`)
- `artifacts/api-server/` — Express API server (preview path: `/api`)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
