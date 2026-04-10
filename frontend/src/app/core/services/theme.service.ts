import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.setAttribute('data-theme', t);
      if (this.isBrowser) {
        localStorage.setItem('zyria-theme', t);
      }
    });
  }

  toggleTheme(): void {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'dark';
    const stored = localStorage.getItem('zyria-theme') as Theme | null;
    if (stored) return stored;
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }
}
