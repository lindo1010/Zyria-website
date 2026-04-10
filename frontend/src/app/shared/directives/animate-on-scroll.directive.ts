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
