# Zyria Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive Angular 19 website for Zyria with 4 pages (Landing, Services, About, Contact), dark/light theming with teal accent, and a glowing immersive visual style.

**Architecture:** Frontend-only Angular 19 app using standalone components, signals for state, SCSS with CSS custom properties for theming, and SSR for SEO. All pages lazy-loaded. Contact form is stubbed (no backend). The app shell uses a MainLayoutComponent wrapping navbar + router-outlet + footer.

**Tech Stack:** Angular 19, SCSS, Angular SSR, Angular CDK, Space Grotesk + Inter fonts, Angular Animations

**Spec:** `docs/superpowers/specs/2026-04-10-zyria-website-design.md`

**Design mockups:** `.superpowers/brainstorm/2122-1775831305/content/` (landing-page.html, inner-pages.html, design-direction.html)

---

## File Map

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/services/
│   │   │   ├── theme.service.ts          — dark/light toggle, localStorage, signal
│   │   │   ├── theme.service.spec.ts
│   │   │   ├── scroll.service.ts         — smooth scroll, position tracking
│   │   │   ├── scroll.service.spec.ts
│   │   │   ├── contact-api.service.ts    — stubbed contact form submission
│   │   │   └── contact-api.service.spec.ts
│   │   ├── shared/components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   └── navbar.component.spec.ts
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   └── footer.component.spec.ts
│   │   │   ├── section-header/
│   │   │   │   ├── section-header.component.ts
│   │   │   │   ├── section-header.component.html
│   │   │   │   ├── section-header.component.scss
│   │   │   │   └── section-header.component.spec.ts
│   │   │   ├── service-card/
│   │   │   │   ├── service-card.component.ts
│   │   │   │   ├── service-card.component.html
│   │   │   │   ├── service-card.component.scss
│   │   │   │   └── service-card.component.spec.ts
│   │   │   ├── project-card/
│   │   │   │   ├── project-card.component.ts
│   │   │   │   ├── project-card.component.html
│   │   │   │   ├── project-card.component.scss
│   │   │   │   └── project-card.component.spec.ts
│   │   │   ├── cta-button/
│   │   │   │   ├── cta-button.component.ts
│   │   │   │   ├── cta-button.component.html
│   │   │   │   ├── cta-button.component.scss
│   │   │   │   └── cta-button.component.spec.ts
│   │   │   ├── theme-toggle/
│   │   │   │   ├── theme-toggle.component.ts
│   │   │   │   ├── theme-toggle.component.html
│   │   │   │   ├── theme-toggle.component.scss
│   │   │   │   └── theme-toggle.component.spec.ts
│   │   │   └── loading-spinner/
│   │   │       ├── loading-spinner.component.ts
│   │   │       ├── loading-spinner.component.html
│   │   │       ├── loading-spinner.component.scss
│   │   │       └── loading-spinner.component.spec.ts
│   │   ├── shared/directives/
│   │   │   ├── animate-on-scroll.directive.ts
│   │   │   ├── animate-on-scroll.directive.spec.ts
│   │   │   └── parallax.directive.ts
│   │   ├── features/landing/
│   │   │   ├── landing.component.ts
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── hero-section/
│   │   │   │   ├── hero-section.component.ts
│   │   │   │   ├── hero-section.component.html
│   │   │   │   └── hero-section.component.scss
│   │   │   ├── services-section/
│   │   │   │   ├── services-section.component.ts
│   │   │   │   ├── services-section.component.html
│   │   │   │   └── services-section.component.scss
│   │   │   ├── about-section/
│   │   │   │   ├── about-section.component.ts
│   │   │   │   ├── about-section.component.html
│   │   │   │   └── about-section.component.scss
│   │   │   ├── portfolio-section/
│   │   │   │   ├── portfolio-section.component.ts
│   │   │   │   ├── portfolio-section.component.html
│   │   │   │   └── portfolio-section.component.scss
│   │   │   └── cta-section/
│   │   │       ├── cta-section.component.ts
│   │   │       ├── cta-section.component.html
│   │   │       └── cta-section.component.scss
│   │   ├── features/services/
│   │   │   ├── services.component.ts
│   │   │   ├── services.component.html
│   │   │   ├── services.component.scss
│   │   │   └── process-steps/
│   │   │       ├── process-steps.component.ts
│   │   │       ├── process-steps.component.html
│   │   │       └── process-steps.component.scss
│   │   ├── features/about/
│   │   │   ├── about.component.ts
│   │   │   ├── about.component.html
│   │   │   ├── about.component.scss
│   │   │   ├── company-story/
│   │   │   │   ├── company-story.component.ts
│   │   │   │   ├── company-story.component.html
│   │   │   │   └── company-story.component.scss
│   │   │   ├── mission-section/
│   │   │   │   ├── mission-section.component.ts
│   │   │   │   ├── mission-section.component.html
│   │   │   │   └── mission-section.component.scss
│   │   │   └── values-section/
│   │   │       ├── values-section.component.ts
│   │   │       ├── values-section.component.html
│   │   │       └── values-section.component.scss
│   │   ├── features/contact/
│   │   │   ├── contact.component.ts
│   │   │   ├── contact.component.html
│   │   │   ├── contact.component.scss
│   │   │   └── contact-form/
│   │   │       ├── contact-form.component.ts
│   │   │       ├── contact-form.component.html
│   │   │       ├── contact-form.component.scss
│   │   │       └── contact-form.component.spec.ts
│   │   ├── layout/
│   │   │   ├── main-layout.component.ts
│   │   │   ├── main-layout.component.html
│   │   │   └── main-layout.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/images/                    — logos copied from img/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _typography.scss
│   │   ├── _animations.scss
│   │   ├── _reset.scss
│   │   └── styles.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

---

## Task 1: Scaffold Angular Project

**Files:**
- Create: `frontend/` (entire Angular scaffold)
- Modify: `frontend/angular.json` (asset config)
- Modify: `frontend/src/index.html` (fonts, meta)

- [ ] **Step 1: Scaffold Angular 19 app**

Run from the repo root (`Zyria-website/`):

```bash
npx ng new frontend --style=scss --ssr --routing --skip-git
```

Select defaults when prompted. `--skip-git` because the parent repo already has git.

- [ ] **Step 2: Install additional dependencies**

```bash
cd frontend
npm install @angular/cdk
```

- [ ] **Step 3: Update `frontend/src/index.html` — add fonts and meta**

Replace the contents of `frontend/src/index.html` with:

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <title>Zyria — Smart Software. Real Results.</title>
  <meta name="description" content="Zyria delivers intelligent, scalable software solutions that drive growth and innovation.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="/">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="icon" type="image/svg+xml" href="assets/images/zyria-icon.svg">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

- [ ] **Step 4: Copy logo assets into Angular project**

```bash
mkdir -p frontend/src/assets/images
cp img/zyria-icon.svg frontend/src/assets/images/
cp img/zyria-monochrome.svg frontend/src/assets/images/
cp img/zyria_logo_v2.svg frontend/src/assets/images/
```

- [ ] **Step 5: Verify the scaffold builds and tests pass**

```bash
cd frontend
npx ng build
npx ng test --watch=false --browsers=ChromeHeadless
```

Expected: Build succeeds. Tests pass (default app component test may need adjustment — fix if it fails due to the title change).

- [ ] **Step 6: Commit**

```bash
git add frontend/
git commit -m "feat: scaffold Angular 19 project with SCSS, SSR, and routing"
```

---

## Task 2: Design System — SCSS Foundation

**Files:**
- Create: `frontend/src/styles/_variables.scss`
- Create: `frontend/src/styles/_mixins.scss`
- Create: `frontend/src/styles/_typography.scss`
- Create: `frontend/src/styles/_animations.scss`
- Create: `frontend/src/styles/_reset.scss`
- Modify: `frontend/src/styles.scss` → move to `frontend/src/styles/styles.scss` (update `angular.json`)

- [ ] **Step 1: Create `frontend/src/styles/_variables.scss`**

```scss
:root {
  // Dark theme (default)
  --bg-primary: #0a0a0f;
  --bg-secondary: #0f1a17;
  --bg-card: #12201b;
  --bg-card-hover: #1a2e27;

  --text-primary: #f0f0f5;
  --text-secondary: #a0b0aa;
  --text-muted: #5a6e66;

  --accent: #0D9E75;
  --accent-light: #10C78E;
  --accent-glow: rgba(13, 158, 117, 0.15);
  --accent-glow-strong: rgba(13, 158, 117, 0.3);

  --border-subtle: rgba(13, 158, 117, 0.1);
  --border-hover: rgba(13, 158, 117, 0.2);

  --shadow-glow: 0 0 20px rgba(13, 158, 117, 0.15);
  --shadow-glow-strong: 0 0 25px rgba(13, 158, 117, 0.3);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --font-primary: 'Inter', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;

  --navbar-height: 72px;
}

[data-theme='light'] {
  --bg-primary: #f8f9fc;
  --bg-secondary: #f0f3f1;
  --bg-card: #ffffff;
  --bg-card-hover: #f0f1f5;

  --text-primary: #0a0a0f;
  --text-secondary: #4a4a5a;
  --text-muted: #8888a0;

  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(13, 158, 117, 0.2);

  --shadow-glow: 0 4px 24px rgba(0, 0, 0, 0.06);
  --shadow-glow-strong: 0 0 20px rgba(13, 158, 117, 0.15);

  --accent-glow: rgba(13, 158, 117, 0.08);
  --accent-glow-strong: rgba(13, 158, 117, 0.15);
}
```

- [ ] **Step 2: Create `frontend/src/styles/_mixins.scss`**

```scss
// Breakpoints (mobile-first)
@mixin tablet {
  @media (min-width: 640px) { @content; }
}

@mixin desktop {
  @media (min-width: 1024px) { @content; }
}

@mixin wide {
  @media (min-width: 1440px) { @content; }
}

// Reduced motion
@mixin motion-safe {
  @media (prefers-reduced-motion: no-preference) { @content; }
}

// Container
@mixin container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @include tablet { padding: 0 32px; }
  @include wide { max-width: 1320px; }
}

// Glow card
@mixin glow-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  @include motion-safe {
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow);
      border-color: var(--border-hover);
    }
  }
}

// Glow button
@mixin glow-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  color: #fff;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  font-size: 0.9375rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: var(--shadow-glow);

  &:hover {
    box-shadow: var(--shadow-glow-strong);
    background: var(--accent-light);
  }
}

@mixin glow-button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 158, 117, 0.05);
  color: var(--accent);
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-family: var(--font-primary);
  font-size: 0.9375rem;
  font-weight: 500;
  border: 1px solid rgba(13, 158, 117, 0.4);
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-glow);
    background: rgba(13, 158, 117, 0.1);
  }
}
```

- [ ] **Step 3: Create `frontend/src/styles/_typography.scss`**

```scss
body {
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

h1 {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}

p {
  color: var(--text-secondary);
  line-height: 1.8;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-light);
  }
}

.label {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
}
```

- [ ] **Step 4: Create `frontend/src/styles/_animations.scss`**

```scss
// Fade in up — used by animate-on-scroll directive
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Pulse — used by loading spinner
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

// Float — used by hero particles
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

// Glow pulse — used by hero accent elements
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 10px rgba(13, 158, 117, 0.2); }
  50% { box-shadow: 0 0 20px rgba(13, 158, 117, 0.4); }
}

// Classes for the animate-on-scroll directive
.aos-hidden {
  opacity: 0;
}

.aos-visible {
  animation: fadeInUp 0.6s ease forwards;
}
```

- [ ] **Step 5: Create `frontend/src/styles/_reset.scss`**

```scss
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
}

body {
  background-color: var(--bg-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

img, svg {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
  cursor: pointer;
}

ul, ol {
  list-style: none;
}

input, textarea, select {
  font: inherit;
}
```

- [ ] **Step 6: Create `frontend/src/styles/styles.scss` (global entry)**

```scss
@use 'variables';
@use 'reset';
@use 'typography';
@use 'animations';
@use 'mixins';
```

- [ ] **Step 7: Update `angular.json` to point to new styles path**

In `frontend/angular.json`, find the `"styles"` array under `architect > build > options` and change:

```json
"styles": ["src/styles/styles.scss"]
```

Also find the same under `architect > test > options` and update there too. Delete the old `frontend/src/styles.scss` file if it exists.

- [ ] **Step 8: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds with the new SCSS structure.

- [ ] **Step 9: Commit**

```bash
git add frontend/src/styles/ frontend/angular.json
git rm frontend/src/styles.scss 2>/dev/null; true
git commit -m "feat: add SCSS design system — variables, mixins, typography, animations, reset"
```

---

## Task 3: Core Services

**Files:**
- Create: `frontend/src/app/core/services/theme.service.ts`
- Create: `frontend/src/app/core/services/theme.service.spec.ts`
- Create: `frontend/src/app/core/services/scroll.service.ts`
- Create: `frontend/src/app/core/services/scroll.service.spec.ts`
- Create: `frontend/src/app/core/services/contact-api.service.ts`
- Create: `frontend/src/app/core/services/contact-api.service.spec.ts`

- [ ] **Step 1: Write failing test for ThemeService**

Create `frontend/src/app/core/services/theme.service.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { DOCUMENT } from '@angular/common';

describe('ThemeService', () => {
  let service: ThemeService;
  let doc: Document;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    doc = TestBed.inject(DOCUMENT);
  });

  it('should default to dark theme', () => {
    expect(service.theme()).toBe('dark');
  });

  it('should toggle to light theme', () => {
    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  it('should toggle back to dark theme', () => {
    service.toggleTheme();
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should set data-theme attribute on html element', () => {
    service.toggleTheme();
    expect(doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    service.toggleTheme();
    expect(localStorage.getItem('zyria-theme')).toBe('light');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/theme.service.spec.ts'
```

Expected: FAIL — `ThemeService` does not exist.

- [ ] **Step 3: Implement ThemeService**

Create `frontend/src/app/core/services/theme.service.ts`:

```typescript
import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.setAttribute('data-theme', t);
      localStorage.setItem('zyria-theme', t);
    });
  }

  toggleTheme(): void {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem('zyria-theme') as Theme | null;
    if (stored) return stored;

    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/theme.service.spec.ts'
```

Expected: All 5 tests PASS.

- [ ] **Step 5: Write failing test for ScrollService**

Create `frontend/src/app/core/services/scroll.service.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should track scroll position as a signal', () => {
    expect(service.scrollY()).toBeDefined();
    expect(typeof service.scrollY()).toBe('number');
  });

  it('should have a scrollToTop method', () => {
    expect(typeof service.scrollToTop).toBe('function');
  });

  it('should have a scrollToElement method', () => {
    expect(typeof service.scrollToElement).toBe('function');
  });
});
```

- [ ] **Step 6: Run test to verify it fails**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/scroll.service.spec.ts'
```

Expected: FAIL — `ScrollService` does not exist.

- [ ] **Step 7: Implement ScrollService**

Create `frontend/src/app/core/services/scroll.service.ts`:

```typescript
import { Injectable, signal, inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly doc = inject(DOCUMENT);
  private readonly zone = inject(NgZone);

  readonly scrollY = signal(0);

  constructor() {
    if (typeof window !== 'undefined') {
      this.zone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {
          this.scrollY.set(window.scrollY);
        }, { passive: true });
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToElement(elementId: string): void {
    const el = this.doc.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
```

- [ ] **Step 8: Run test to verify it passes**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/scroll.service.spec.ts'
```

Expected: All 4 tests PASS.

- [ ] **Step 9: Write failing test for ContactApiService**

Create `frontend/src/app/core/services/contact-api.service.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { ContactApiService, ContactFormData } from './contact-api.service';

describe('ContactApiService', () => {
  let service: ContactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return success observable on submitContact', (done) => {
    const formData: ContactFormData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'General Inquiry',
      message: 'This is a test message that is long enough.'
    };

    service.submitContact(formData).subscribe({
      next: (result) => {
        expect(result.success).toBe(true);
        expect(result.message).toBeDefined();
        done();
      },
      error: () => fail('Should not error')
    });
  });
});
```

- [ ] **Step 10: Run test to verify it fails**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/contact-api.service.spec.ts'
```

Expected: FAIL — `ContactApiService` does not exist.

- [ ] **Step 11: Implement ContactApiService**

Create `frontend/src/app/core/services/contact-api.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  submitContact(data: ContactFormData): Observable<ContactResponse> {
    // Stubbed — logs to console and simulates a success response
    console.log('Contact form submitted:', data);
    return of({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    }).pipe(delay(1000));
  }
}
```

- [ ] **Step 12: Run test to verify it passes**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/contact-api.service.spec.ts'
```

Expected: All 3 tests PASS.

- [ ] **Step 13: Run all tests**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless
```

Expected: All tests pass.

- [ ] **Step 14: Commit**

```bash
git add frontend/src/app/core/
git commit -m "feat: add ThemeService, ScrollService, and ContactApiService with tests"
```

---

## Task 4: Shared Components — CTA Button, Section Header, Theme Toggle

**Files:**
- Create: `frontend/src/app/shared/components/cta-button/`
- Create: `frontend/src/app/shared/components/section-header/`
- Create: `frontend/src/app/shared/components/theme-toggle/`

- [ ] **Step 1: Create CTA Button component**

Create `frontend/src/app/shared/components/cta-button/cta-button.component.ts`:

```typescript
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="link()" [class]="'cta-btn cta-btn--' + variant()">
      <ng-content />
    </a>
  `,
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly link = input<string>('/');
}
```

Create `frontend/src/app/shared/components/cta-button/cta-button.component.scss`:

```scss
@use 'styles/mixins' as *;

:host {
  display: inline-block;
}

.cta-btn {
  text-decoration: none;

  &--primary {
    @include glow-button-primary;
  }

  &--secondary {
    @include glow-button-secondary;
  }
}
```

- [ ] **Step 2: Create Section Header component**

Create `frontend/src/app/shared/components/section-header/section-header.component.ts`:

```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      @if (label()) {
        <span class="section-header__label">{{ label() }}</span>
      }
      <h2 class="section-header__title">{{ title() }}</h2>
      @if (showAccent()) {
        <div class="section-header__accent"></div>
      }
    </div>
  `,
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  readonly label = input<string>('');
  readonly title = input.required<string>();
  readonly showAccent = input(true);
}
```

Create `frontend/src/app/shared/components/section-header/section-header.component.scss`:

```scss
.section-header {
  text-align: center;
  margin-bottom: 48px;

  &__label {
    display: block;
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  &__title {
    margin-bottom: 12px;
  }

  &__accent {
    width: 40px;
    height: 2px;
    background: var(--accent);
    margin: 0 auto;
    border-radius: 1px;
    box-shadow: 0 0 8px var(--accent-glow);
  }
}
```

- [ ] **Step 3: Create Theme Toggle component**

Create `frontend/src/app/shared/components/theme-toggle/theme-toggle.component.ts`:

```typescript
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      class="theme-toggle"
      (click)="themeService.toggleTheme()"
      [attr.aria-label]="'Switch to ' + (themeService.theme() === 'dark' ? 'light' : 'dark') + ' mode'"
    >
      @if (themeService.theme() === 'dark') {
        <svg class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      } @else {
        <svg class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      }
    </button>
  `,
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
}
```

Create `frontend/src/app/shared/components/theme-toggle/theme-toggle.component.scss`:

```scss
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow-glow);
  }

  &__icon {
    width: 18px;
    height: 18px;
  }
}
```

- [ ] **Step 4: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/app/shared/components/cta-button/ frontend/src/app/shared/components/section-header/ frontend/src/app/shared/components/theme-toggle/
git commit -m "feat: add CTA button, section header, and theme toggle components"
```

---

## Task 5: Shared Components — Service Card, Project Card, Loading Spinner

**Files:**
- Create: `frontend/src/app/shared/components/service-card/`
- Create: `frontend/src/app/shared/components/project-card/`
- Create: `frontend/src/app/shared/components/loading-spinner/`

- [ ] **Step 1: Create Service Card component**

Create `frontend/src/app/shared/components/service-card/service-card.component.ts`:

```typescript
import { Component, input } from '@angular/core';

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <div class="service-card" [class.service-card--expanded]="expanded()">
      <div class="service-card__icon">
        <span [innerHTML]="service().icon"></span>
      </div>
      <div class="service-card__content">
        <h3 class="service-card__title">{{ service().title }}</h3>
        <p class="service-card__desc">{{ service().description }}</p>
        @if (service().tags?.length && expanded()) {
          <div class="service-card__tags">
            @for (tag of service().tags; track tag) {
              <span class="service-card__tag">{{ tag }}</span>
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceData>();
  readonly expanded = input(false);
}
```

Create `frontend/src/app/shared/components/service-card/service-card.component.scss`:

```scss
@use 'styles/mixins' as *;

.service-card {
  @include glow-card;
  padding: 24px;
  text-align: center;

  &--expanded {
    text-align: left;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: start;
  }

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--accent);

    .service-card:not(.service-card--expanded) & {
      margin: 0 auto 16px;
    }
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  &__tag {
    background: var(--accent-glow);
    border: 1px solid var(--border-hover);
    color: var(--accent);
    font-size: 0.625rem;
    padding: 4px 10px;
    border-radius: 6px;
  }
}
```

- [ ] **Step 2: Create Project Card component**

Create `frontend/src/app/shared/components/project-card/project-card.component.ts`:

```typescript
import { Component, input } from '@angular/core';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="project-card">
      <div class="project-card__image">
        <span class="project-card__placeholder">&#9674;</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">{{ project().title }}</h3>
        <p class="project-card__desc">{{ project().description }}</p>
        <div class="project-card__tags">
          @for (tag of project().tags; track tag) {
            <span class="project-card__tag">{{ tag }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectData>();
}
```

Create `frontend/src/app/shared/components/project-card/project-card.component.scss`:

```scss
@use 'styles/mixins' as *;

.project-card {
  @include glow-card;
  overflow: hidden;

  &__image {
    height: 160px;
    background: linear-gradient(135deg, var(--accent-glow), rgba(13, 158, 117, 0.03));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__placeholder {
    font-size: 2rem;
    color: rgba(13, 158, 117, 0.3);
  }

  &__body {
    padding: 20px;
  }

  &__title {
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  &__tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__tag {
    background: var(--accent-glow);
    color: var(--accent);
    font-size: 0.5625rem;
    padding: 3px 8px;
    border-radius: 4px;
  }
}
```

- [ ] **Step 3: Create Loading Spinner component**

Create `frontend/src/app/shared/components/loading-spinner/loading-spinner.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="loading-overlay">
      <div class="loading-logo">
        <img src="assets/images/zyria-icon.svg" alt="Zyria" width="64" height="64">
      </div>
      <span class="loading-text">ZYRIA</span>
    </div>
  `,
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {}
```

Create `frontend/src/app/shared/components/loading-spinner/loading-spinner.component.scss`:

```scss
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: var(--bg-primary);
}

.loading-logo {
  animation: pulse 2s ease-in-out infinite;

  img {
    width: 64px;
    height: 64px;
  }
}

.loading-text {
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 4px;
}
```

- [ ] **Step 4: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/app/shared/components/service-card/ frontend/src/app/shared/components/project-card/ frontend/src/app/shared/components/loading-spinner/
git commit -m "feat: add service card, project card, and loading spinner components"
```

---

## Task 6: Shared Directives — Animate on Scroll

**Files:**
- Create: `frontend/src/app/shared/directives/animate-on-scroll.directive.ts`
- Create: `frontend/src/app/shared/directives/animate-on-scroll.directive.spec.ts`

- [ ] **Step 1: Create the directive**

Create `frontend/src/app/shared/directives/animate-on-scroll.directive.ts`:

```typescript
import { Directive, ElementRef, inject, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private observer?: IntersectionObserver;

  readonly appAnimateOnScroll = input<string>('');

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    this.el.nativeElement.classList.add('aos-hidden');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.remove('aos-hidden');
          this.el.nativeElement.classList.add('aos-visible');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
```

- [ ] **Step 2: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add frontend/src/app/shared/directives/
git commit -m "feat: add animate-on-scroll directive using IntersectionObserver"
```

---

## Task 7: Navbar and Footer

**Files:**
- Create: `frontend/src/app/shared/components/navbar/`
- Create: `frontend/src/app/shared/components/footer/`

- [ ] **Step 1: Create Navbar component**

Create `frontend/src/app/shared/components/navbar/navbar.component.ts`:

```typescript
import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);

  readonly mobileMenuOpen = signal(false);
  readonly isScrolled = computed(() => this.scrollService.scrollY() > 50);

  readonly navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/services', label: 'Services', exact: false },
    { path: '/about', label: 'About', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
```

Create `frontend/src/app/shared/components/navbar/navbar.component.html`:

```html
<nav class="navbar" [class.navbar--scrolled]="isScrolled()">
  <div class="navbar__container">
    <!-- Logo -->
    <a routerLink="/" class="navbar__logo" (click)="closeMobileMenu()">
      <img src="assets/images/zyria-icon.svg" alt="Zyria" width="28" height="28" class="navbar__logo-icon">
      <span class="navbar__logo-text">ZYRIA</span>
    </a>

    <!-- Desktop nav -->
    <div class="navbar__links">
      @for (link of navLinks; track link.path) {
        <a
          [routerLink]="link.path"
          routerLinkActive="navbar__link--active"
          [routerLinkActiveOptions]="{ exact: link.exact }"
          class="navbar__link"
        >
          {{ link.label }}
        </a>
      }
      <app-theme-toggle />
    </div>

    <!-- Mobile hamburger -->
    <button
      class="navbar__hamburger"
      (click)="toggleMobileMenu()"
      [attr.aria-expanded]="mobileMenuOpen()"
      aria-label="Toggle navigation menu"
    >
      <span class="navbar__hamburger-line" [class.open]="mobileMenuOpen()"></span>
      <span class="navbar__hamburger-line" [class.open]="mobileMenuOpen()"></span>
      <span class="navbar__hamburger-line" [class.open]="mobileMenuOpen()"></span>
    </button>
  </div>

  <!-- Mobile drawer -->
  @if (mobileMenuOpen()) {
    <div class="navbar__mobile-menu">
      @for (link of navLinks; track link.path) {
        <a
          [routerLink]="link.path"
          routerLinkActive="navbar__mobile-link--active"
          [routerLinkActiveOptions]="{ exact: link.exact }"
          class="navbar__mobile-link"
          (click)="closeMobileMenu()"
        >
          {{ link.label }}
        </a>
      }
      <app-theme-toggle />
    </div>
  }
</nav>
```

Create `frontend/src/app/shared/components/navbar/navbar.component.scss`:

```scss
@use 'styles/mixins' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &--scrolled {
    background: rgba(10, 10, 15, 0.9);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 var(--border-subtle);
  }

  &__container {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  &__logo-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-glow);
  }

  &__logo-text {
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  &__links {
    display: none;
    align-items: center;
    gap: 28px;

    @include desktop {
      display: flex;
    }
  }

  &__link {
    color: var(--text-muted);
    font-size: 0.875rem;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover, &--active {
      color: var(--accent);
    }
  }

  // Hamburger
  &__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;

    @include desktop {
      display: none;
    }
  }

  &__hamburger-line {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 1px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    &.open:nth-child(2) { opacity: 0; }
    &.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  }

  // Mobile menu
  &__mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 20px 24px;
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(12px);
    border-top: 1px solid var(--border-subtle);

    @include desktop {
      display: none;
    }
  }

  &__mobile-link {
    display: block;
    padding: 12px 0;
    color: var(--text-secondary);
    font-size: 1rem;
    text-decoration: none;
    border-bottom: 1px solid var(--border-subtle);

    &:hover, &--active {
      color: var(--accent);
    }
  }
}
```

- [ ] **Step 2: Create Footer component**

Create `frontend/src/app/shared/components/footer/footer.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  readonly services = [
    'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud & DevOps',
  ];
}
```

Create `frontend/src/app/shared/components/footer/footer.component.html`:

```html
<footer class="footer">
  <div class="footer__container">
    <div class="footer__grid">
      <!-- Company -->
      <div class="footer__section footer__section--about">
        <div class="footer__logo">
          <img src="assets/images/zyria-icon.svg" alt="Zyria" width="22" height="22">
          <span>ZYRIA</span>
        </div>
        <p class="footer__desc">Smart software solutions for modern businesses. Building the future, one line of code at a time.</p>
      </div>

      <!-- Quick Links -->
      <div class="footer__section">
        <h4 class="footer__heading">Quick Links</h4>
        <ul class="footer__list">
          @for (link of quickLinks; track link.path) {
            <li><a [routerLink]="link.path" class="footer__link">{{ link.label }}</a></li>
          }
        </ul>
      </div>

      <!-- Services -->
      <div class="footer__section">
        <h4 class="footer__heading">Services</h4>
        <ul class="footer__list">
          @for (service of services; track service) {
            <li><a routerLink="/services" class="footer__link">{{ service }}</a></li>
          }
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer__section">
        <h4 class="footer__heading">Contact</h4>
        <ul class="footer__list">
          <li><span class="footer__link">hello&#64;zyria.dev</span></li>
          <li><a href="#" class="footer__link">LinkedIn</a></li>
          <li><a href="#" class="footer__link">GitHub</a></li>
          <li><a href="#" class="footer__link">Twitter/X</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <span class="footer__copyright">&copy; {{ currentYear }} Zyria. All rights reserved.</span>
      <div class="footer__socials">
        <a href="#" class="footer__social" aria-label="LinkedIn">in</a>
        <a href="#" class="footer__social" aria-label="GitHub">gh</a>
        <a href="#" class="footer__social" aria-label="X">X</a>
      </div>
    </div>
  </div>
</footer>
```

Create `frontend/src/app/shared/components/footer/footer.component.scss`:

```scss
@use 'styles/mixins' as *;

.footer {
  background: #060610;
  border-top: 1px solid var(--border-subtle);
  padding: 48px 0 24px;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;

    @include tablet {
      grid-template-columns: 1fr 1fr;
    }

    @include desktop {
      grid-template-columns: 2fr 1fr 1fr 1fr;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;

    span {
      color: var(--text-primary);
      font-family: var(--font-display);
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  &__heading {
    font-family: var(--font-primary);
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__link {
    font-size: 0.8125rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--accent);
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    @include tablet {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  &__socials {
    display: flex;
    gap: 12px;
  }

  &__social {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-size: 0.75rem;
    text-decoration: none;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}
```

- [ ] **Step 3: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/app/shared/components/navbar/ frontend/src/app/shared/components/footer/
git commit -m "feat: add navbar with mobile menu and footer components"
```

---

## Task 8: Layout, Routing, and App Shell

**Files:**
- Create: `frontend/src/app/layout/main-layout.component.ts`
- Create: `frontend/src/app/layout/main-layout.component.html`
- Create: `frontend/src/app/layout/main-layout.component.scss`
- Modify: `frontend/src/app/app.routes.ts`
- Modify: `frontend/src/app/app.component.ts`
- Modify: `frontend/src/app/app.config.ts`
- Create: `frontend/src/environments/environment.ts`
- Create: `frontend/src/environments/environment.prod.ts`

- [ ] **Step 1: Create MainLayoutComponent**

Create `frontend/src/app/layout/main-layout.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {}
```

Create `frontend/src/app/layout/main-layout.component.html`:

```html
<app-navbar />
<main class="main-content">
  <router-outlet />
</main>
<app-footer />
```

Create `frontend/src/app/layout/main-layout.component.scss`:

```scss
.main-content {
  min-height: 100vh;
  padding-top: var(--navbar-height);
}
```

- [ ] **Step 2: Create placeholder page components**

Create temporary placeholder components so routing works. Each will be replaced in later tasks.

Create `frontend/src/app/features/landing/landing.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  template: `<div class="placeholder"><h1>Landing Page</h1></div>`,
  styles: [`.placeholder { padding: 100px 40px; text-align: center; }`]
})
export default class LandingComponent {}
```

Create `frontend/src/app/features/services/services.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `<div class="placeholder"><h1>Services Page</h1></div>`,
  styles: [`.placeholder { padding: 100px 40px; text-align: center; }`]
})
export default class ServicesComponent {}
```

Create `frontend/src/app/features/about/about.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `<div class="placeholder"><h1>About Page</h1></div>`,
  styles: [`.placeholder { padding: 100px 40px; text-align: center; }`]
})
export default class AboutComponent {}
```

Create `frontend/src/app/features/contact/contact.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<div class="placeholder"><h1>Contact Page</h1></div>`,
  styles: [`.placeholder { padding: 100px 40px; text-align: center; }`]
})
export default class ContactComponent {}
```

- [ ] **Step 3: Set up routing in `app.routes.ts`**

Replace `frontend/src/app/app.routes.ts`:

```typescript
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing.component'),
        title: 'Zyria — Smart Software. Real Results.',
      },
      {
        path: 'services',
        loadComponent: () => import('./features/services/services.component'),
        title: 'Services — Zyria',
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component'),
        title: 'About — Zyria',
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component'),
        title: 'Contact — Zyria',
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
```

- [ ] **Step 4: Update `app.component.ts`**

Replace `frontend/src/app/app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}
```

- [ ] **Step 5: Update `app.config.ts`**

Replace `frontend/src/app/app.config.ts`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
```

- [ ] **Step 6: Create environment files**

Create `frontend/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
};
```

Create `frontend/src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
};
```

- [ ] **Step 7: Verify the app runs**

```bash
cd frontend && npx ng serve --open
```

Expected: App opens in browser. Navbar visible at top with logo, links, and theme toggle. Footer at bottom. Navigating between pages via nav links works. Theme toggle switches dark/light. Mobile hamburger menu works on narrow viewports.

- [ ] **Step 8: Commit**

```bash
git add frontend/src/app/layout/ frontend/src/app/features/ frontend/src/app/app.routes.ts frontend/src/app/app.component.ts frontend/src/app/app.config.ts frontend/src/environments/
git commit -m "feat: add layout shell, routing, and placeholder pages"
```

---

## Task 9: Landing Page — Hero Section

**Files:**
- Create: `frontend/src/app/features/landing/hero-section/`
- Modify: `frontend/src/app/features/landing/landing.component.ts`

- [ ] **Step 1: Create Hero Section component**

Create `frontend/src/app/features/landing/hero-section/hero-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {}
```

Create `frontend/src/app/features/landing/hero-section/hero-section.component.html`:

```html
<section class="hero">
  <!-- Particle grid background -->
  <div class="hero__particles" aria-hidden="true">
    <div class="hero__particle" style="--x: 10%; --y: 20%; --size: 5px; --delay: 0s;"></div>
    <div class="hero__particle" style="--x: 25%; --y: 40%; --size: 3px; --delay: 1s;"></div>
    <div class="hero__particle" style="--x: 45%; --y: 15%; --size: 4px; --delay: 2s;"></div>
    <div class="hero__particle" style="--x: 60%; --y: 55%; --size: 3px; --delay: 0.5s;"></div>
    <div class="hero__particle" style="--x: 75%; --y: 30%; --size: 6px; --delay: 1.5s;"></div>
    <div class="hero__particle" style="--x: 85%; --y: 65%; --size: 4px; --delay: 3s;"></div>
    <div class="hero__particle" style="--x: 15%; --y: 70%; --size: 5px; --delay: 2.5s;"></div>
    <div class="hero__particle" style="--x: 55%; --y: 80%; --size: 3px; --delay: 1.8s;"></div>
    <div class="hero__particle" style="--x: 90%; --y: 10%; --size: 4px; --delay: 0.8s;"></div>
    <div class="hero__particle" style="--x: 35%; --y: 60%; --size: 5px; --delay: 3.5s;"></div>
    <!-- Connection lines -->
    <svg class="hero__connections" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="10" y1="20" x2="25" y2="40" stroke="#0D9E75" stroke-width="0.15" opacity="0.3"/>
      <line x1="25" y1="40" x2="45" y2="15" stroke="#0D9E75" stroke-width="0.1" opacity="0.2"/>
      <line x1="45" y1="15" x2="75" y2="30" stroke="#0D9E75" stroke-width="0.15" opacity="0.25"/>
      <line x1="60" y1="55" x2="85" y2="65" stroke="#0D9E75" stroke-width="0.1" opacity="0.2"/>
      <line x1="15" y1="70" x2="35" y2="60" stroke="#0D9E75" stroke-width="0.15" opacity="0.2"/>
      <line x1="35" y1="60" x2="55" y2="80" stroke="#0D9E75" stroke-width="0.1" opacity="0.15"/>
    </svg>
  </div>

  <!-- Radial glow -->
  <div class="hero__glow" aria-hidden="true"></div>

  <!-- Content -->
  <div class="hero__content">
    <span class="hero__label">Software Solutions</span>
    <h1 class="hero__headline">
      Smart Software.<br>
      Real Results.
    </h1>
    <p class="hero__subtext">
      Empowering businesses with intelligent, scalable software solutions that drive growth and innovation.
    </p>
    <div class="hero__ctas">
      <app-cta-button link="/contact" variant="primary">Get Started</app-cta-button>
      <app-cta-button link="/services" variant="secondary">Our Services</app-cta-button>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="hero__scroll-indicator" aria-hidden="true">
    <div class="hero__scroll-arrow">&#8964;</div>
  </div>
</section>
```

Create `frontend/src/app/features/landing/hero-section/hero-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(160deg, #060612 0%, #0a1a15 50%, #060612 100%);
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);

  // Particles
  &__particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &__particle {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: #0D9E75;
    opacity: 0.4;
    box-shadow: 0 0 calc(var(--size) * 2) rgba(13, 158, 117, 0.4);

    @include motion-safe {
      animation: float 6s ease-in-out infinite;
      animation-delay: var(--delay);
    }
  }

  &__connections {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 158, 117, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  // Content
  &__content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0 20px;
    max-width: 700px;
  }

  &__label {
    display: block;
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
    text-shadow: 0 0 15px var(--accent-glow);
  }

  &__headline {
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.15;
  }

  &__subtext {
    font-size: clamp(0.9375rem, 2vw, 1.0625rem);
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto 36px;
    line-height: 1.7;
  }

  &__ctas {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  // Scroll indicator
  &__scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  &__scroll-arrow {
    color: var(--accent);
    font-size: 1.5rem;
    opacity: 0.5;

    @include motion-safe {
      animation: float 2s ease-in-out infinite;
    }
  }
}
```

- [ ] **Step 2: Update landing component to use hero section**

Replace `frontend/src/app/features/landing/landing.component.ts`:

```typescript
import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroSectionComponent],
  template: `
    <app-hero-section />
  `,
})
export default class LandingComponent {}
```

- [ ] **Step 3: Verify in browser**

```bash
cd frontend && npx ng serve
```

Expected: Landing page shows full-viewport hero with particle grid, headline, CTAs, and scroll indicator. Theme toggle works. Navbar is transparent over hero, turns solid on scroll.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/app/features/landing/
git commit -m "feat: add landing page hero section with particle grid"
```

---

## Task 10: Landing Page — Services, About, Portfolio, CTA Sections

**Files:**
- Create: `frontend/src/app/features/landing/services-section/`
- Create: `frontend/src/app/features/landing/about-section/`
- Create: `frontend/src/app/features/landing/portfolio-section/`
- Create: `frontend/src/app/features/landing/cta-section/`
- Modify: `frontend/src/app/features/landing/landing.component.ts`

- [ ] **Step 1: Create Services Section**

Create `frontend/src/app/features/landing/services-section/services-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ServiceCardComponent, ServiceData } from '../../../shared/components/service-card/service-card.component';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [SectionHeaderComponent, ServiceCardComponent, RouterLink, AnimateOnScrollDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  readonly services: ServiceData[] = [
    { icon: '◇', title: 'AI Solutions', description: 'Machine learning & intelligent automation for smarter business decisions.' },
    { icon: '◈', title: 'Web Development', description: 'Modern, responsive web applications built for performance and scale.' },
    { icon: '◉', title: 'Mobile Development', description: 'Cross-platform mobile experiences that users love.' },
    { icon: '◆', title: 'Cloud & DevOps', description: 'Scalable infrastructure & automated deployment pipelines.' },
  ];
}
```

Create `frontend/src/app/features/landing/services-section/services-section.component.html`:

```html
<section class="services-preview">
  <div class="services-preview__container">
    <app-section-header label="What We Do" title="Our Services" />
    <div class="services-preview__grid" appAnimateOnScroll>
      @for (service of services; track service.title) {
        <app-service-card [service]="service" />
      }
    </div>
    <div class="services-preview__link">
      <a routerLink="/services">View All Services →</a>
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/landing/services-section/services-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.services-preview {
  padding: 80px 0;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @include tablet { grid-template-columns: repeat(2, 1fr); }
    @include desktop { grid-template-columns: repeat(4, 1fr); }
  }

  &__link {
    text-align: center;
    margin-top: 32px;

    a {
      font-size: 0.875rem;
      color: var(--accent);
      border-bottom: 1px solid rgba(13, 158, 117, 0.3);
      text-decoration: none;

      &:hover { border-color: var(--accent); }
    }
  }
}
```

- [ ] **Step 2: Create About Section**

Create `frontend/src/app/features/landing/about-section/about-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  readonly stats = [
    { value: '50+', label: 'Projects' },
    { value: '15+', label: 'Clients' },
    { value: '99%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];
}
```

Create `frontend/src/app/features/landing/about-section/about-section.component.html`:

```html
<section class="about-preview">
  <div class="about-preview__container" appAnimateOnScroll>
    <div class="about-preview__text">
      <span class="label">About Zyria</span>
      <h2>Engineering Software<br>With Purpose</h2>
      <p>We're a software company focused on building intelligent solutions that solve real problems. Our approach combines technical excellence with strategic thinking to deliver software that matters.</p>
      <a routerLink="/about" class="about-preview__link">Learn More →</a>
    </div>
    <div class="about-preview__stats">
      @for (stat of stats; track stat.label) {
        <div class="about-preview__stat">
          <span class="about-preview__stat-value">{{ stat.value }}</span>
          <span class="about-preview__stat-label">{{ stat.label }}</span>
        </div>
      }
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/landing/about-section/about-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.about-preview {
  padding: 80px 0;
  background: var(--bg-secondary);

  &__container {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;

    @include desktop { grid-template-columns: 1.2fr 1fr; }
  }

  &__text {
    .label { margin-bottom: 12px; }
    h2 { margin-bottom: 16px; }
    p {
      font-size: 0.9375rem;
      line-height: 1.8;
      margin-bottom: 24px;
    }
  }

  &__link {
    font-size: 0.875rem;
    color: var(--accent);
    border-bottom: 1px solid rgba(13, 158, 117, 0.3);
    text-decoration: none;

    &:hover { border-color: var(--accent); }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  &__stat {
    @include glow-card;
    padding: 24px;
    text-align: center;
  }

  &__stat-value {
    display: block;
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--accent);
    text-shadow: 0 0 15px var(--accent-glow);
  }

  &__stat-label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 4px;
  }
}
```

- [ ] **Step 3: Create Portfolio Section**

Create `frontend/src/app/features/landing/portfolio-section/portfolio-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { ProjectCardComponent, ProjectData } from '../../../shared/components/project-card/project-card.component';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [SectionHeaderComponent, ProjectCardComponent, AnimateOnScrollDirective],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  readonly projects: ProjectData[] = [
    { title: 'Project Alpha', description: 'AI-powered analytics platform for real-time business insights.', tags: ['AI', 'Angular'] },
    { title: 'Project Beta', description: 'Cross-platform mobile app for seamless team collaboration.', tags: ['Mobile', 'Flutter'] },
    { title: 'Project Gamma', description: 'Cloud infrastructure dashboard with automated scaling.', tags: ['Cloud', 'AWS'] },
  ];
}
```

Create `frontend/src/app/features/landing/portfolio-section/portfolio-section.component.html`:

```html
<section class="portfolio">
  <div class="portfolio__container">
    <app-section-header label="Our Work" title="Featured Projects" />
    <div class="portfolio__grid" appAnimateOnScroll>
      @for (project of projects; track project.title) {
        <app-project-card [project]="project" />
      }
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/landing/portfolio-section/portfolio-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.portfolio {
  padding: 80px 0;

  &__container {
    @include container;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @include tablet { grid-template-columns: repeat(2, 1fr); }
    @include desktop { grid-template-columns: repeat(3, 1fr); }
  }
}
```

- [ ] **Step 4: Create CTA Section**

Create `frontend/src/app/features/landing/cta-section/cta-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CtaButtonComponent],
  template: `
    <section class="cta-banner">
      <div class="cta-banner__glow" aria-hidden="true"></div>
      <div class="cta-banner__content">
        <h2>Let's Build Something<br>Intelligent Together</h2>
        <p>Ready to turn your idea into reality? Let's talk.</p>
        <app-cta-button link="/contact" variant="primary">Get In Touch</app-cta-button>
      </div>
    </section>
  `,
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {}
```

Create `frontend/src/app/features/landing/cta-section/cta-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.cta-banner {
  position: relative;
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #0a1a15 0%, #0a0a0f 50%, #0a1a15 100%);
  overflow: hidden;

  &__glow {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 158, 117, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 2;

    h2 {
      margin-bottom: 12px;
    }

    p {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      margin-bottom: 32px;
    }
  }
}
```

- [ ] **Step 5: Update landing component to compose all sections**

Replace `frontend/src/app/features/landing/landing.component.ts`:

```typescript
import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    PortfolioSectionComponent,
    CtaSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-services-section />
    <app-about-section />
    <app-portfolio-section />
    <app-cta-section />
  `,
})
export default class LandingComponent {}
```

- [ ] **Step 6: Verify in browser**

```bash
cd frontend && npx ng serve
```

Expected: Full landing page with all 5 sections visible, scrollable, responsive. Scroll animations trigger as sections enter viewport.

- [ ] **Step 7: Commit**

```bash
git add frontend/src/app/features/landing/
git commit -m "feat: complete landing page — services, about, portfolio, and CTA sections"
```

---

## Task 11: Services Page

**Files:**
- Create: `frontend/src/app/features/services/process-steps/`
- Modify: `frontend/src/app/features/services/services.component.ts`
- Create: `frontend/src/app/features/services/services.component.html`
- Create: `frontend/src/app/features/services/services.component.scss`

- [ ] **Step 1: Create Process Steps component**

Create `frontend/src/app/features/services/process-steps/process-steps.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-process-steps',
  standalone: true,
  templateUrl: './process-steps.component.html',
  styleUrl: './process-steps.component.scss'
})
export class ProcessStepsComponent {
  readonly steps = [
    { number: '1', title: 'Discover', description: 'Understand your needs' },
    { number: '2', title: 'Design', description: 'Plan the solution' },
    { number: '3', title: 'Build', description: 'Develop & iterate' },
    { number: '4', title: 'Deploy', description: 'Launch & support' },
  ];
}
```

Create `frontend/src/app/features/services/process-steps/process-steps.component.html`:

```html
<div class="process">
  <div class="process__header">
    <span class="label">How We Work</span>
    <h2>Our Process</h2>
  </div>
  <div class="process__steps">
    @for (step of steps; track step.number; let last = $last) {
      <div class="process__step">
        <div class="process__circle">
          <span>{{ step.number }}</span>
        </div>
        <h3 class="process__title">{{ step.title }}</h3>
        <p class="process__desc">{{ step.description }}</p>
      </div>
      @if (!last) {
        <div class="process__connector"></div>
      }
    }
  </div>
</div>
```

Create `frontend/src/app/features/services/process-steps/process-steps.component.scss`:

```scss
@use 'styles/mixins' as *;

.process {
  padding: 60px 0;

  &__header {
    text-align: center;
    margin-bottom: 40px;

    .label { margin-bottom: 8px; }
  }

  &__steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @include desktop {
      flex-direction: row;
      justify-content: center;
      gap: 0;
    }
  }

  &__step {
    text-align: center;
    flex: 1;
    max-width: 200px;
  }

  &__circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--accent-glow);
    border: 2px solid var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    box-shadow: 0 0 15px var(--accent-glow);

    span {
      color: var(--accent);
      font-family: var(--font-display);
      font-size: 0.9375rem;
      font-weight: 700;
    }
  }

  &__title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__desc {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  &__connector {
    width: 2px;
    height: 32px;
    background: linear-gradient(to bottom, var(--accent), transparent);

    @include desktop {
      width: 60px;
      height: 2px;
      background: linear-gradient(to right, var(--accent), transparent);
      margin-bottom: 40px;
    }
  }
}
```

- [ ] **Step 2: Build the full Services page**

Replace `frontend/src/app/features/services/services.component.ts`:

```typescript
import { Component } from '@angular/core';
import { ServiceCardComponent, ServiceData } from '../../shared/components/service-card/service-card.component';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { ProcessStepsComponent } from './process-steps/process-steps.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, CtaButtonComponent, ProcessStepsComponent, AnimateOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export default class ServicesComponent {
  readonly services: ServiceData[] = [
    {
      icon: '◇', title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and build intelligent systems that learn and adapt.',
      tags: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: '◈', title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks, designed for performance, scalability, and exceptional user experience.',
      tags: ['Angular', 'React', 'Full-Stack', 'PWA']
    },
    {
      icon: '◉', title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.',
      tags: ['iOS', 'Android', 'Cross-Platform', 'Flutter']
    },
    {
      icon: '◆', title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automated pipelines, and DevOps practices that keep your systems running reliably.',
      tags: ['AWS', 'Azure', 'CI/CD', 'Kubernetes']
    },
  ];
}
```

Create `frontend/src/app/features/services/services.component.html`:

```html
<!-- Page header -->
<section class="page-header">
  <div class="page-header__glow" aria-hidden="true"></div>
  <div class="page-header__content">
    <span class="page-header__breadcrumb">Home / <span class="page-header__breadcrumb--active">Services</span></span>
    <h1>What We Build</h1>
    <p>End-to-end software solutions tailored to your business needs.</p>
  </div>
</section>

<!-- Service cards -->
<section class="services-detail">
  <div class="services-detail__container">
    <div class="services-detail__list" appAnimateOnScroll>
      @for (service of services; track service.title) {
        <app-service-card [service]="service" [expanded]="true" />
      }
    </div>
  </div>
</section>

<!-- Process -->
<section class="services-process">
  <div class="services-process__container">
    <app-process-steps />
  </div>
</section>

<!-- CTA -->
<section class="services-cta">
  <div class="services-cta__container">
    <div class="services-cta__card">
      <h2>Need a Custom Solution?</h2>
      <p>Let's discuss your project requirements.</p>
      <app-cta-button link="/contact" variant="primary">Get In Touch</app-cta-button>
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/services/services.component.scss`:

```scss
@use 'styles/mixins' as *;

.page-header {
  position: relative;
  padding: 60px 20px 48px;
  text-align: center;
  background: linear-gradient(160deg, #060612 0%, #0a1a15 50%, #060612 100%);
  overflow: hidden;

  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 158, 117, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__breadcrumb {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 12px;

    &--active { color: var(--accent); }
  }

  h1 { margin-bottom: 12px; }

  p {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    max-width: 450px;
    margin: 0 auto;
  }
}

.services-detail {
  padding: 60px 0;

  &__container {
    @include container;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.services-process {
  padding: 0 0 60px;

  &__container {
    @include container;
  }
}

.services-cta {
  padding: 0 0 80px;

  &__container {
    @include container;
  }

  &__card {
    background: linear-gradient(135deg, var(--accent-glow), rgba(13, 158, 117, 0.03));
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 48px;
    text-align: center;

    h2 { margin-bottom: 8px; }
    p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
    }
  }
}
```

- [ ] **Step 3: Verify in browser**

```bash
cd frontend && npx ng serve
```

Navigate to `/services`. Expected: Page header with breadcrumb, 4 expanded service cards, process timeline, CTA card.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/app/features/services/
git commit -m "feat: build services page with detailed cards and process timeline"
```

---

## Task 12: About Page

**Files:**
- Create: `frontend/src/app/features/about/company-story/`
- Create: `frontend/src/app/features/about/mission-section/`
- Create: `frontend/src/app/features/about/values-section/`
- Modify: `frontend/src/app/features/about/about.component.ts`
- Create: `frontend/src/app/features/about/about.component.html`
- Create: `frontend/src/app/features/about/about.component.scss`

- [ ] **Step 1: Create Company Story component**

Create `frontend/src/app/features/about/company-story/company-story.component.ts`:

```typescript
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-company-story',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './company-story.component.html',
  styleUrl: './company-story.component.scss'
})
export class CompanyStoryComponent {}
```

Create `frontend/src/app/features/about/company-story/company-story.component.html`:

```html
<div class="story" appAnimateOnScroll>
  <div class="story__text">
    <span class="label">Our Story</span>
    <h2>Built on a Passion for<br>Smart Solutions</h2>
    <p>Zyria was founded with a clear mission: to build software that doesn't just work — it thinks. We believe technology should be intelligent, purposeful, and built to last.</p>
    <p>From day one, we've focused on combining cutting-edge technology with practical business thinking to deliver solutions that genuinely make a difference.</p>
  </div>
  <div class="story__visual">
    <div class="story__logo-card">
      <div class="story__logo-glow" aria-hidden="true"></div>
      <img src="assets/images/zyria-icon.svg" alt="Zyria" width="50" height="50">
      <span class="story__logo-name">ZYRIA</span>
      <span class="story__logo-tagline">SOFTWARE SOLUTIONS</span>
    </div>
  </div>
</div>
```

Create `frontend/src/app/features/about/company-story/company-story.component.scss`:

```scss
@use 'styles/mixins' as *;

.story {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @include desktop { grid-template-columns: 1fr 1fr; }

  &__text {
    .label { margin-bottom: 12px; }
    h2 { margin-bottom: 16px; }
    p {
      font-size: 0.9375rem;
      line-height: 1.8;
      margin-bottom: 12px;
    }
  }

  &__visual {
    display: flex;
    justify-content: center;
  }

  &__logo-card {
    @include glow-card;
    width: 100%;
    max-width: 320px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
  }

  &__logo-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  }

  &__logo-name {
    position: relative;
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--accent);
  }

  &__logo-tagline {
    position: relative;
    font-size: 0.5rem;
    letter-spacing: 3px;
    color: var(--text-muted);
  }

  img {
    position: relative;
  }
}
```

- [ ] **Step 2: Create Mission Section component**

Create `frontend/src/app/features/about/mission-section/mission-section.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  template: `
    <div class="mission">
      <span class="label">Our Mission</span>
      <blockquote class="mission__quote">
        "To empower businesses with intelligent, scalable software that drives growth, solves real problems, and pushes the boundaries of what technology can do."
      </blockquote>
    </div>
  `,
  styleUrl: './mission-section.component.scss'
})
export class MissionSectionComponent {}
```

Create `frontend/src/app/features/about/mission-section/mission-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.mission {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 48px 20px;

  .label { margin-bottom: 16px; }

  &__quote {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2vw, 1.125rem);
    font-weight: 500;
    font-style: italic;
    color: var(--text-primary);
    line-height: 1.8;
  }
}
```

- [ ] **Step 3: Create Values Section component**

Create `frontend/src/app/features/about/values-section/values-section.component.ts`:

```typescript
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [SectionHeaderComponent, AnimateOnScrollDirective],
  templateUrl: './values-section.component.html',
  styleUrl: './values-section.component.scss'
})
export class ValuesSectionComponent {
  readonly values = [
    { icon: '★', title: 'Innovation', description: 'Pushing boundaries with creative, forward-thinking solutions.' },
    { icon: '⚗', title: 'Reliability', description: 'Building software you can depend on, every time.' },
    { icon: '⚡', title: 'Performance', description: 'Optimized for speed, efficiency, and scalability.' },
    { icon: '◈', title: 'Collaboration', description: 'Working together to achieve exceptional results.' },
  ];
}
```

Create `frontend/src/app/features/about/values-section/values-section.component.html`:

```html
<div>
  <app-section-header label="What Drives Us" title="Our Values" />
  <div class="values__grid" appAnimateOnScroll>
    @for (value of values; track value.title) {
      <div class="values__card">
        <div class="values__icon">
          <span>{{ value.icon }}</span>
        </div>
        <h3 class="values__title">{{ value.title }}</h3>
        <p class="values__desc">{{ value.description }}</p>
      </div>
    }
  </div>
</div>
```

Create `frontend/src/app/features/about/values-section/values-section.component.scss`:

```scss
@use 'styles/mixins' as *;

.values {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @include tablet { grid-template-columns: repeat(2, 1fr); }
    @include desktop { grid-template-columns: repeat(4, 1fr); }
  }

  &__card {
    @include glow-card;
    padding: 24px;
    text-align: center;
  }

  &__icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-size: 1.125rem;
    color: var(--accent);
  }

  &__title {
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
}
```

- [ ] **Step 4: Compose the About page**

Replace `frontend/src/app/features/about/about.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CompanyStoryComponent } from './company-story/company-story.component';
import { MissionSectionComponent } from './mission-section/mission-section.component';
import { ValuesSectionComponent } from './values-section/values-section.component';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CompanyStoryComponent, MissionSectionComponent, ValuesSectionComponent, CtaButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {}
```

Create `frontend/src/app/features/about/about.component.html`:

```html
<!-- Page header -->
<section class="page-header">
  <div class="page-header__glow" aria-hidden="true"></div>
  <div class="page-header__content">
    <span class="page-header__breadcrumb">Home / <span class="page-header__breadcrumb--active">About</span></span>
    <h1>About Zyria</h1>
    <p>The story behind the code.</p>
  </div>
</section>

<!-- Story -->
<section class="about-story">
  <div class="about-story__container">
    <app-company-story />
  </div>
</section>

<!-- Mission -->
<section class="about-mission">
  <app-mission-section />
</section>

<!-- Values -->
<section class="about-values">
  <div class="about-values__container">
    <app-values-section />
  </div>
</section>

<!-- CTA -->
<section class="about-cta">
  <div class="about-cta__container">
    <div class="about-cta__card">
      <h2>Want to Work With Us?</h2>
      <p>We'd love to hear about your project.</p>
      <app-cta-button link="/contact" variant="primary">Get In Touch</app-cta-button>
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/about/about.component.scss`:

```scss
@use 'styles/mixins' as *;

.page-header {
  position: relative;
  padding: 60px 20px 48px;
  text-align: center;
  background: linear-gradient(160deg, #060612 0%, #0a1a15 50%, #060612 100%);
  overflow: hidden;

  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 158, 117, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &__content { position: relative; z-index: 2; }
  &__breadcrumb {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 12px;

    &--active { color: var(--accent); }
  }

  h1 { margin-bottom: 12px; }
  p {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    max-width: 450px;
    margin: 0 auto;
  }
}

.about-story {
  padding: 60px 0;

  &__container { @include container; }
}

.about-mission {
  padding: 24px 0;
  background: var(--bg-secondary);
}

.about-values {
  padding: 60px 0;

  &__container { @include container; }
}

.about-cta {
  padding: 0 0 80px;

  &__container { @include container; }

  &__card {
    background: linear-gradient(135deg, var(--accent-glow), rgba(13, 158, 117, 0.03));
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 48px;
    text-align: center;

    h2 { margin-bottom: 8px; }
    p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
    }
  }
}
```

- [ ] **Step 5: Verify in browser**

Navigate to `/about`. Expected: Page header, company story with logo card, mission quote, values grid, CTA.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/app/features/about/
git commit -m "feat: build about page with story, mission, and values sections"
```

---

## Task 13: Contact Page with Form Validation

**Files:**
- Create: `frontend/src/app/features/contact/contact-form/`
- Modify: `frontend/src/app/features/contact/contact.component.ts`
- Create: `frontend/src/app/features/contact/contact.component.html`
- Create: `frontend/src/app/features/contact/contact.component.scss`

- [ ] **Step 1: Write failing test for ContactForm component**

Create `frontend/src/app/features/contact/contact-form/contact-form.component.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should require name with min 2 chars', () => {
    const name = component.form.controls['name'];
    name.setValue('');
    expect(name.valid).toBeFalsy();
    name.setValue('A');
    expect(name.valid).toBeFalsy();
    name.setValue('Ab');
    expect(name.valid).toBeTruthy();
  });

  it('should require a valid email', () => {
    const email = component.form.controls['email'];
    email.setValue('');
    expect(email.valid).toBeFalsy();
    email.setValue('notanemail');
    expect(email.valid).toBeFalsy();
    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('should not require subject', () => {
    const subject = component.form.controls['subject'];
    expect(subject.valid).toBeTruthy();
  });

  it('should require message with min 10 chars', () => {
    const message = component.form.controls['message'];
    message.setValue('');
    expect(message.valid).toBeFalsy();
    message.setValue('Short');
    expect(message.valid).toBeFalsy();
    message.setValue('This is long enough to pass validation.');
    expect(message.valid).toBeTruthy();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/contact-form.component.spec.ts'
```

Expected: FAIL — `ContactFormComponent` does not exist.

- [ ] **Step 3: Create Contact Form component**

Create `frontend/src/app/features/contact/contact-form/contact-form.component.ts`:

```typescript
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactApiService } from '../../../core/services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactApi = inject(ContactApiService);

  readonly submitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly submitError = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly subjectOptions = [
    'General Inquiry',
    'Project Discussion',
    'Partnership',
    'Support',
    'Other',
  ];

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.submitError.set('');

    this.contactApi.submitContact(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.submitting.set(false);
        this.submitSuccess.set(true);
        this.form.reset();
      },
      error: (err) => {
        this.submitting.set(false);
        this.submitError.set('Something went wrong. Please try again.');
      },
    });
  }
}
```

Create `frontend/src/app/features/contact/contact-form/contact-form.component.html`:

```html
@if (submitSuccess()) {
  <div class="form-success">
    <div class="form-success__icon">✓</div>
    <h3>Message Sent!</h3>
    <p>Thank you for reaching out. We'll get back to you soon.</p>
    <button class="form-success__btn" (click)="submitSuccess.set(false)">Send Another Message</button>
  </div>
} @else {
  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="contact-form" novalidate>
    <h3 class="contact-form__title">Send Us a Message</h3>

    <!-- Name -->
    <div class="contact-form__field">
      <label for="name" class="contact-form__label">Full Name *</label>
      <input id="name" formControlName="name" type="text" class="contact-form__input" placeholder="Your name">
      @if (form.controls.name.touched && form.controls.name.errors) {
        <span class="contact-form__error">
          @if (form.controls.name.errors['required']) { Name is required. }
          @else if (form.controls.name.errors['minlength']) { Name must be at least 2 characters. }
        </span>
      }
    </div>

    <!-- Email -->
    <div class="contact-form__field">
      <label for="email" class="contact-form__label">Email Address *</label>
      <input id="email" formControlName="email" type="email" class="contact-form__input" placeholder="you@example.com">
      @if (form.controls.email.touched && form.controls.email.errors) {
        <span class="contact-form__error">
          @if (form.controls.email.errors['required']) { Email is required. }
          @else if (form.controls.email.errors['email']) { Please enter a valid email. }
        </span>
      }
    </div>

    <!-- Subject -->
    <div class="contact-form__field">
      <label for="subject" class="contact-form__label">Subject</label>
      <select id="subject" formControlName="subject" class="contact-form__input contact-form__select">
        <option value="">Select a subject...</option>
        @for (option of subjectOptions; track option) {
          <option [value]="option">{{ option }}</option>
        }
      </select>
    </div>

    <!-- Message -->
    <div class="contact-form__field">
      <label for="message" class="contact-form__label">Message *</label>
      <textarea id="message" formControlName="message" class="contact-form__input contact-form__textarea" rows="5" placeholder="Tell us about your project..."></textarea>
      @if (form.controls.message.touched && form.controls.message.errors) {
        <span class="contact-form__error">
          @if (form.controls.message.errors['required']) { Message is required. }
          @else if (form.controls.message.errors['minlength']) { Message must be at least 10 characters. }
        </span>
      }
    </div>

    @if (submitError()) {
      <div class="contact-form__submit-error">{{ submitError() }}</div>
    }

    <button type="submit" class="contact-form__submit" [disabled]="submitting()">
      @if (submitting()) {
        Sending...
      } @else {
        Send Message
      }
    </button>
  </form>
}
```

Create `frontend/src/app/features/contact/contact-form/contact-form.component.scss`:

```scss
@use 'styles/mixins' as *;

.contact-form {
  background: rgba(13, 158, 117, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px;

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  &__field {
    margin-bottom: 20px;
  }

  &__label {
    display: block;
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }

  &__input {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-sm);
    padding: 12px 16px;
    color: var(--text-primary);
    font-size: 0.875rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder { color: var(--text-muted); }

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 2px var(--accent-glow);
    }
  }

  &__select {
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230D9E75' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;

    option {
      background: var(--bg-primary);
      color: var(--text-primary);
    }
  }

  &__textarea {
    resize: vertical;
    min-height: 100px;
  }

  &__error {
    display: block;
    font-size: 0.75rem;
    color: #ef4444;
    margin-top: 4px;
  }

  &__submit-error {
    font-size: 0.8125rem;
    color: #ef4444;
    margin-bottom: 16px;
    text-align: center;
  }

  &__submit {
    @include glow-button-primary;
    width: 100%;
    padding: 14px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.form-success {
  background: rgba(13, 158, 117, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 48px 32px;
  text-align: center;

  &__icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--accent-glow);
    color: var(--accent);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    box-shadow: var(--shadow-glow);
  }

  h3 { margin-bottom: 8px; }

  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  &__btn {
    @include glow-button-secondary;
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless --include='**/contact-form.component.spec.ts'
```

Expected: All 6 tests PASS.

- [ ] **Step 5: Build the full Contact page**

Replace `frontend/src/app/features/contact/contact.component.ts`:

```typescript
import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {}
```

Create `frontend/src/app/features/contact/contact.component.html`:

```html
<!-- Page header -->
<section class="page-header">
  <div class="page-header__glow" aria-hidden="true"></div>
  <div class="page-header__content">
    <span class="page-header__breadcrumb">Home / <span class="page-header__breadcrumb--active">Contact</span></span>
    <h1>Get In Touch</h1>
    <p>Have a project in mind? We'd love to hear from you.</p>
  </div>
</section>

<!-- Contact content -->
<section class="contact-content">
  <div class="contact-content__container">
    <!-- Form -->
    <app-contact-form />

    <!-- Info sidebar -->
    <div class="contact-info">
      <div class="contact-info__card">
        <div class="contact-info__icon">✉</div>
        <div>
          <h4>Email</h4>
          <p>hello&#64;zyria.dev</p>
        </div>
      </div>

      <div class="contact-info__card">
        <div class="contact-info__icon">☎</div>
        <div>
          <h4>Phone</h4>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>

      <div class="contact-info__card">
        <div class="contact-info__icon">⚑</div>
        <div>
          <h4>Location</h4>
          <p>Remote-first, Worldwide</p>
        </div>
      </div>

      <div class="contact-info__card">
        <h4>Follow Us</h4>
        <div class="contact-info__socials">
          <a href="#" class="contact-info__social" aria-label="LinkedIn">in</a>
          <a href="#" class="contact-info__social" aria-label="GitHub">gh</a>
          <a href="#" class="contact-info__social" aria-label="X">X</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

Create `frontend/src/app/features/contact/contact.component.scss`:

```scss
@use 'styles/mixins' as *;

.page-header {
  position: relative;
  padding: 60px 20px 48px;
  text-align: center;
  background: linear-gradient(160deg, #060612 0%, #0a1a15 50%, #060612 100%);
  overflow: hidden;

  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(13, 158, 117, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &__content { position: relative; z-index: 2; }
  &__breadcrumb {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 12px;

    &--active { color: var(--accent); }
  }

  h1 { margin-bottom: 12px; }
  p {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    max-width: 450px;
    margin: 0 auto;
  }
}

.contact-content {
  padding: 60px 0 80px;

  &__container {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include desktop { grid-template-columns: 1.2fr 0.8fr; }
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__card {
    background: rgba(13, 158, 117, 0.04);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    h4 {
      font-family: var(--font-primary);
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 2px;
    }

    p {
      font-size: 0.8125rem;
      color: var(--text-secondary);
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    background: var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: var(--accent);
    flex-shrink: 0;
  }

  &__socials {
    display: flex;
    gap: 10px;
    margin-top: 8px;
  }

  &__social {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-size: 0.75rem;
    text-decoration: none;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}
```

- [ ] **Step 6: Verify in browser**

Navigate to `/contact`. Expected: Page header, form with validation, info sidebar. Try submitting empty — validation errors appear. Fill and submit — success message shows.

- [ ] **Step 7: Commit**

```bash
git add frontend/src/app/features/contact/
git commit -m "feat: build contact page with validated form and info sidebar"
```

---

## Task 14: SEO, robots.txt, and sitemap

**Files:**
- Create: `frontend/src/robots.txt`
- Create: `frontend/src/sitemap.xml`
- Modify: `frontend/angular.json` (add to assets)

- [ ] **Step 1: Create `frontend/src/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://zyria.dev/sitemap.xml
```

- [ ] **Step 2: Create `frontend/src/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://zyria.dev/</loc><priority>1.0</priority></url>
  <url><loc>https://zyria.dev/services</loc><priority>0.8</priority></url>
  <url><loc>https://zyria.dev/about</loc><priority>0.7</priority></url>
  <url><loc>https://zyria.dev/contact</loc><priority>0.8</priority></url>
</urlset>
```

- [ ] **Step 3: Add to `angular.json` assets**

In `frontend/angular.json`, find the `"assets"` array under `architect > build > options` and add:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/robots.txt",
  "src/sitemap.xml"
]
```

- [ ] **Step 4: Verify build**

```bash
cd frontend && npx ng build
```

Expected: Build succeeds. `robots.txt` and `sitemap.xml` appear in the output directory.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/robots.txt frontend/src/sitemap.xml frontend/angular.json
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

## Task 15: Final Integration Test and Polish

**Files:**
- Modify: `frontend/src/app/app.component.spec.ts` (update for new structure)

- [ ] **Step 1: Update app component test**

Replace `frontend/src/app/app.component.spec.ts`:

```typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
```

- [ ] **Step 2: Run all tests**

```bash
cd frontend && npx ng test --watch=false --browsers=ChromeHeadless
```

Expected: All tests pass.

- [ ] **Step 3: Run production build**

```bash
cd frontend && npx ng build --configuration=production
```

Expected: Build succeeds with no errors or warnings.

- [ ] **Step 4: Verify all pages in browser**

```bash
cd frontend && npx ng serve
```

Walk through each page:
- `/` — Hero with particles, services preview, about preview, portfolio, CTA, footer
- `/services` — Header, 4 detailed cards, process timeline, CTA
- `/about` — Header, story, mission, values, CTA
- `/contact` — Header, form with validation, info sidebar
- Theme toggle works on all pages
- Mobile hamburger menu works
- Scroll animations trigger
- All nav links work

- [ ] **Step 5: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final integration test and polish"
```

---

## Summary

| Task | Description | Key deliverables |
|------|-------------|-----------------|
| 1 | Scaffold Angular project | Angular 19 app with SCSS, SSR, routing |
| 2 | Design system | SCSS variables, mixins, typography, animations, reset |
| 3 | Core services | ThemeService, ScrollService, ContactApiService + tests |
| 4 | Shared components (batch 1) | CTA button, section header, theme toggle |
| 5 | Shared components (batch 2) | Service card, project card, loading spinner |
| 6 | Directives | Animate-on-scroll directive |
| 7 | Navbar & Footer | Responsive navbar with mobile menu, footer |
| 8 | Layout & Routing | MainLayout, app routes, placeholder pages, app config |
| 9 | Landing — Hero | Particle grid hero with CTAs |
| 10 | Landing — Remaining sections | Services preview, about preview, portfolio, CTA |
| 11 | Services page | Detailed cards, process timeline, CTA |
| 12 | About page | Story, mission, values, CTA |
| 13 | Contact page | Validated form + info sidebar + tests |
| 14 | SEO | robots.txt, sitemap.xml |
| 15 | Final integration | All tests pass, production build, manual verification |
