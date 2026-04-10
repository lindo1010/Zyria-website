# Zyria Website — Design Spec

## Overview

A modern, responsive Angular 19 website for Zyria, a software company. Dark theme with glowing teal accent, four pages (Landing, Services, About, Contact), dark/light mode toggle. Frontend only — no backend for now.

**Tagline:** SOFTWARE SOLUTIONS
**Hero headline:** Smart Software. Real Results.
**Visual direction:** Glowing & Immersive — teal `#0D9E75` as atmospheric accent with soft glows, radial gradients, glassmorphism card touches, and a particle grid hero that echoes the logo's node-flow motif.

---

## Tech Stack

- **Framework:** Angular 19, standalone components, signals for state
- **Styling:** SCSS with CSS custom properties for theming
- **SSR:** `@angular/ssr` for SEO
- **Fonts:** Space Grotesk (headings), Inter (body) via Google Fonts
- **Additional:** `@angular/cdk` for accessibility and breakpoint utilities
- **No backend** — contact form submission is stubbed for now

---

## Design System

### Color Palette

**Dark theme (default):**

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Page background |
| `--bg-secondary` | `#0f1a17` | Alternate section backgrounds (teal-tinted) |
| `--bg-card` | `#12201b` | Card backgrounds |
| `--bg-card-hover` | `#1a2e27` | Card hover state |
| `--text-primary` | `#f0f0f5` | Headings, body text |
| `--text-secondary` | `#a0b0aa` | Subtitles, descriptions |
| `--text-muted` | `#5a6e66` | Captions, labels |
| `--accent` | `#0D9E75` | Brand teal — CTAs, icons, links, glows |
| `--accent-light` | `#10C78E` | Hover states, highlights |
| `--accent-glow` | `rgba(13,158,117,0.15)` | Glow/shadow effects |
| `--border-subtle` | `rgba(13,158,117,0.1)` | Card borders, dividers |
| `--shadow-glow` | `0 0 20px rgba(13,158,117,0.15)` | Card/button glow |

**Light theme** (`[data-theme='light']`):
- Backgrounds swap to off-white (`#f8f9fc`) / white (`#ffffff`)
- Text swaps to dark (`#0a0a0f` / `#4a4a5a`)
- Teal accent stays the same
- Glow intensity reduced

### Typography

- **Display/headings:** Space Grotesk, weight 600-700, fluid sizing via `clamp()`
- **Body:** Inter, weight 400-500
- **Scale:** h1 (3.5rem), h2 (2.5rem), h3 (1.75rem), body (1rem), small (0.875rem)

### Spacing & Radius

- Border radius: 8px (sm), 12px (md), 20px (lg)
- Section padding: responsive — generous on desktop, tighter on mobile

### Breakpoints (mobile-first, `min-width`)

- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: 1024px – 1440px
- Wide: > 1440px

---

## Animations

**Philosophy:** Subtle and polished. Nothing distracting.

- **Scroll animations:** Fade-in-up on elements entering viewport via `IntersectionObserver` directive. Gentle, no staggered delays.
- **Hover effects:** Cards lift with `translateY(-4px)` + glow shadow increase. Buttons get slightly brighter glow.
- **Page transitions:** Smooth fade between routes using Angular's `@angular/animations`.
- **Hero particles:** Animated node-flow grid — floating dots with faint connection lines, CSS keyframes. Echoes the logo's Z-mark pattern.
- **Loading screen:** Full-screen Zyria logo with subtle pulse animation on initial load (CSS only).
- **Smooth scroll:** `scroll-behavior: smooth` globally + scroll service for programmatic scroll.
- **`prefers-reduced-motion`:** All animations respect this media query and disable when set.

---

## Logos

Three SVG logos exist in `img/`:

| File | Description | Usage |
|------|-------------|-------|
| `zyria_logo_v2.svg` | Icon + "Zyria" wordmark, teal/slate | Primary logo — page header/footer use when space allows |
| `zyria-icon.svg` | Icon only, teal/slate | Navbar icon, favicon, loading screen |
| `zyria-monochrome.svg` | Icon + "Zyria" wordmark, black/white | Light theme variant, print |

---

## Project Structure

```
Zyria-website/
├── frontend/                          # Angular 19 app
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   └── services/
│   │   │   │       ├── theme.service.ts
│   │   │   │       ├── scroll.service.ts
│   │   │   │       └── contact-api.service.ts
│   │   │   ├── shared/
│   │   │   │   ├── components/
│   │   │   │   │   ├── navbar/
│   │   │   │   │   ├── footer/
│   │   │   │   │   ├── section-header/
│   │   │   │   │   ├── service-card/
│   │   │   │   │   ├── project-card/
│   │   │   │   │   ├── cta-button/
│   │   │   │   │   ├── theme-toggle/
│   │   │   │   │   └── loading-spinner/
│   │   │   │   └── directives/
│   │   │   │       ├── animate-on-scroll.directive.ts
│   │   │   │       └── parallax.directive.ts
│   │   │   ├── features/
│   │   │   │   ├── landing/
│   │   │   │   │   ├── landing.component.ts
│   │   │   │   │   ├── hero-section/
│   │   │   │   │   ├── services-section/
│   │   │   │   │   ├── about-section/
│   │   │   │   │   ├── portfolio-section/
│   │   │   │   │   └── cta-section/
│   │   │   │   ├── services/
│   │   │   │   │   ├── services.component.ts
│   │   │   │   │   └── process-steps/
│   │   │   │   ├── about/
│   │   │   │   │   ├── about.component.ts
│   │   │   │   │   ├── company-story/
│   │   │   │   │   ├── values-section/
│   │   │   │   │   └── mission-section/
│   │   │   │   └── contact/
│   │   │   │       ├── contact.component.ts
│   │   │   │       └── contact-form/
│   │   │   ├── layout/
│   │   │   │   └── main-layout.component.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   ├── assets/
│   │   │   └── images/                # Brand logos (copied from img/)
│   │   ├── styles/
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _animations.scss
│   │   │   ├── _reset.scss
│   │   │   └── styles.scss
│   │   ├── environments/
│   │   │   ├── environment.ts
│   │   │   └── environment.prod.ts
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── img/                               # Original brand SVGs
│   ├── zyria-icon.svg
│   ├── zyria-monochrome.svg
│   └── zyria_logo_v2.svg
└── README.md
```

---

## Pages

### Landing Page

5 sections, all full-width:

**1. Hero (full viewport height)**
- Animated particle grid background (teal dots + faint connection lines + radial glow)
- "SOFTWARE SOLUTIONS" label above headline
- Headline: "Smart Software. Real Results."
- Subtext: "Empowering businesses with intelligent, scalable software solutions that drive growth and innovation."
- Two CTAs: "Get Started" (solid teal, routes to `/contact`) and "Our Services" (outline, routes to `/services`)
- Scroll-down indicator arrow at bottom

**2. Services Preview**
- Section header: "What We Do" label + "Our Services" title + teal accent line
- 4 service cards in responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- Cards: icon in teal box, title, 2-line description, teal glowing border on hover
- Services: AI Solutions, Web Development, Mobile Development, Cloud & DevOps (placeholder content)
- "View All Services →" link at bottom, routes to `/services`

**3. About Preview**
- Split layout: text left (60%), stats right (40%)
- Left: "About Zyria" label, "Engineering Software With Purpose" heading, company intro paragraph, "Learn More →" link to `/about`
- Right: 2×2 stats grid — 50+/Projects, 15+/Clients, 99%/Uptime, 24-7/Support (placeholder numbers)
- Teal-tinted background (`--bg-secondary`)

**4. Portfolio (placeholder)**
- Section header: "Our Work" label + "Featured Projects" title
- 3 project cards in grid (1 col mobile, 2 col tablet, 3 col desktop)
- Cards: gradient placeholder image area, project title, description, tech tags
- Placeholder content — will be swapped with real projects later

**5. CTA Banner**
- Dark gradient background with radial teal glow
- "Let's Build Something Intelligent Together"
- "Get In Touch" button, routes to `/contact`

**6. Footer (shared across all pages)**
- 4-column grid: Company info + logo, Quick Links, Services, Contact
- Social icons: LinkedIn, GitHub, X
- Copyright line
- Collapses to stacked layout on mobile

### Services Page

- **Page header:** Breadcrumb (Home / Services), title "What We Build", subtitle
- **Service cards:** 4 horizontal cards, each with: icon box, title, description paragraph, tech tags (pill badges)
  - AI Solutions: Machine Learning, NLP, Computer Vision, Predictive Analytics
  - Web Development: Angular, React, Full-Stack, PWA
  - Mobile Development: iOS, Android, Cross-Platform, Flutter
  - Cloud & DevOps: AWS, Azure, CI/CD, Kubernetes
  - All content is placeholder — will be updated later
- **Process timeline:** "Our Process" section — 4 numbered steps in horizontal layout with connector lines
  - Discover → Design → Build → Deploy
  - Each step: numbered circle, title, short description
  - On mobile: stacks vertically
- **CTA:** "Need a Custom Solution?" + "Get In Touch" button

### About Page

- **Page header:** Breadcrumb (Home / About), title "About Zyria", subtitle "The story behind the code."
- **Company story:** Split layout — text left (story paragraphs), branded visual right (logo treatment in a card)
- **Mission statement:** Teal-tinted background strip with centered italic quote
- **Values grid:** 4 cards in a row (stacks on mobile):
  - Innovation, Reliability, Performance, Collaboration
  - Each: icon, title, description
- **No team section** — skipped for now (solo/early-stage)
- **CTA:** "Want to Work With Us?" + "Get In Touch" button

### Contact Page

- **Page header:** Breadcrumb (Home / Contact), title "Get In Touch", subtitle
- **Split layout:** Form (60%) left, info sidebar (40%) right
- **Contact form** (Angular reactive form):
  - Full Name — required, min 2 chars
  - Email — required, valid email format
  - Subject — optional dropdown
  - Message — required, min 10 chars, textarea
  - "Send Message" submit button with loading state
  - Validation errors shown inline below fields
  - Success/error toast after submission
  - Submission is stubbed (no backend) — shows success message with console log
- **Info sidebar:** Stacked cards for:
  - Email: hello@zyria.dev (placeholder)
  - Phone: placeholder
  - Location: "Remote-first, Worldwide"
  - Social links: LinkedIn, GitHub, X
- On mobile: form stacks above info sidebar

---

## Shared Components

All standalone Angular components using signals and `inject()`.

### Navbar
- Fixed top, transparent over hero, solid background on scroll
- Logo: `zyria-icon.svg` + "ZYRIA" text
- Nav links: Home, Services, About, Contact — active link in teal
- Theme toggle (sun/moon)
- Mobile: hamburger icon → slide-in drawer menu
- Scroll detection via `IntersectionObserver` or scroll listener

### Footer
- Described in Landing Page section above
- Shared across all pages via `MainLayoutComponent`

### Section Header
- Reusable: accepts label (uppercase teal text), title (large heading), optional accent line
- Used consistently across all sections on every page

### Service Card
- Two variants: compact (landing preview) and expanded (services page)
- Compact: icon + title + 2-line description, centered
- Expanded: horizontal layout with icon box, title, description paragraph, tech tags

### Project Card
- Image area (placeholder gradient), title, description, tech tag pills
- Hover: subtle scale + glow increase

### CTA Button
- Two variants: primary (solid teal, white text, glow shadow) and secondary (outline, teal text)
- Hover: glow intensifies

### Theme Toggle
- Sun/moon icon toggle
- Wired to `ThemeService`
- Animates between states

### Loading Spinner
- Full-screen overlay with Zyria logo icon
- Subtle pulse animation
- Shown on initial page load, removed after Angular bootstraps

---

## Core Services

### ThemeService
- Signal: `theme = signal<'dark' | 'light'>('dark')`
- Persists to `localStorage`
- Sets `data-theme` attribute on `<html>`
- Respects `prefers-color-scheme` on first visit (no saved preference)

### ScrollService
- Smooth scroll to element by ID
- Scroll position tracking (for navbar transparency state)
- Scroll-to-top utility

### ContactApiService
- Stubbed — does not call any backend
- `submitContact(data)` returns an `Observable` that simulates success after a short delay
- Logs form data to console
- Easy to wire up to a real endpoint later

---

## Routing

All pages lazy-loaded via `loadComponent`:

```
/           → Landing Page
/services   → Services Page
/about      → About Page
/contact    → Contact Page
/**         → Redirect to /
```

`MainLayoutComponent` wraps all routes with navbar + `<router-outlet>` + footer.
Route transitions use Angular animations (fade).

---

## SEO & Performance

- SSR via `@angular/ssr` for initial render
- `<title>` and `<meta description>` per route via Angular's `Title` and `Meta` services
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Lazy-loaded routes for code splitting
- Preconnect to Google Fonts in `index.html`
- `robots.txt` and basic `sitemap.xml`

---

## Out of Scope

- Backend API / .NET project — will be added when needed
- Team section on About page — will be added when team grows
- Testimonials section — will be added when real testimonials exist
- Real portfolio content — placeholder for now
- Email sending — contact form is stubbed
- Authentication / CMS
- Analytics / tracking
