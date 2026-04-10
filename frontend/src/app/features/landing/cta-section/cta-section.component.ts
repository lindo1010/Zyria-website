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
