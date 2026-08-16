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
// TODO: Currently unused on the landing page (replaced by ProcessSectionComponent).
// Re-enable in landing.component.ts once the placeholder projects below are replaced with real ones.
export class PortfolioSectionComponent {
  readonly projects: ProjectData[] = [
    { title: 'Project Alpha', description: 'AI-powered analytics platform for real-time business insights.', tags: ['AI', 'Angular'] },
    { title: 'Project Beta', description: 'Cross-platform mobile app for seamless team collaboration.', tags: ['Mobile', 'Flutter'] },
    { title: 'Project Gamma', description: 'Cloud infrastructure dashboard with automated scaling.', tags: ['Cloud', 'AWS'] },
  ];
}
