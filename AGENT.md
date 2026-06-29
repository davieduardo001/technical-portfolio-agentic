# Portfolio — Claude Code Instructions

This is the professional portfolio of Davi Eduardo, developed and maintained via **Agentic Workflow with Claude Code (Anthropic)**.

## Project Context
- Professional portfolio: single conversion-focused landing page for recruiters, Fiverr clients, and direct freelance leads.
- Stack: Next.js 14, TypeScript, Tailwind CSS, Framer Motion.
- Deploy: Vercel via native GitHub integration (automatic CI/CD).
- Repository: git@github.com:davieduardo001/technical-portfolio-agentic.git
- Language: English only — no PT-BR content.

## Project Structure
```
app/          → Next.js App Router (layout.tsx, page.tsx, globals.css)
components/   → One file per section (Navbar, Hero, About, SkillsStrip,
                Achievements, Projects, Certifications, Services, Contact, Footer)
lib/data.ts   → All content data in a single file — edit this to update copy
public/       → Static assets (photo.jpg and cv/Davi_Eduardo_CV_EN.pdf to add)
```

## Content Updates
- All copy, links, projects, certs, skills, and achievements live in `lib/data.ts`.
- To add/edit a project: update the `PROJECTS` array in `lib/data.ts`.
- To add a photo: drop `photo.jpg` into `public/`.
- To add CV: drop `Davi_Eduardo_CV_EN.pdf` into `public/cv/`.

## Development Mandates
- Mobile-first, responsive design. Test both breakpoints.
- Use Tailwind utilities; do not introduce external CSS libraries.
- Keep Framer Motion animations subtle — fade/slide only, no dramatic effects.
- Performance and accessibility (A11y / WCAG) are non-negotiable.
- Do not add features beyond what is requested.
- Prefer editing existing files over creating new ones.

## CI/CD (GitHub Actions → k3s)
- Push to `main` → build → GHCR → SSH via Tailscale → deploy to `dev` namespace
- Push to `homolog` branch → same flow → `homologacao` namespace
- Image registry: `ghcr.io/davieduardo001/technical-portfolio-agentic`
- Each deploy uses a pinned SHA tag (`sha-<commit>`) — no stale image risk
- Workflows: `.github/workflows/deploy-dev.yml` and `deploy-homolog.yml`
- Required GitHub secrets: `TAILSCALE_AUTHKEY`, `SSH_PRIVATE_KEY`

## Agent: Claude Code
- This project uses **Claude Code (claude-sonnet-4-6)** as an agentic engineering partner.
- Responses must be in English only.
- Responses must be concise; no unnecessary summaries.
- Commits and PRs only when explicitly requested.
