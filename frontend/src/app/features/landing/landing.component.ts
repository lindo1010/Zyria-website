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
