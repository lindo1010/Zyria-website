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
