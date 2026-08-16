import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProcessSectionComponent } from './process-section/process-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    ProcessSectionComponent,
    CtaSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-services-section />
    <app-about-section />
    <!-- TODO: Re-enable <app-portfolio-section /> when we have real projects -->
    <app-process-section />
    <app-cta-section />
  `,
})
export default class LandingComponent {}
