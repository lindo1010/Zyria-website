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
