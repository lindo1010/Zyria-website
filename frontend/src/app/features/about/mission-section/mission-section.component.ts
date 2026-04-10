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
