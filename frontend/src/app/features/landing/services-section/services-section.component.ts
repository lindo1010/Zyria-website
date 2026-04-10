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
    { icon: '\u25C7', title: 'AI Solutions', description: 'Machine learning & intelligent automation for smarter business decisions.' },
    { icon: '\u25C8', title: 'Web Development', description: 'Modern, responsive web applications built for performance and scale.' },
    { icon: '\u25C9', title: 'Mobile Development', description: 'Cross-platform mobile experiences that users love.' },
    { icon: '\u25C6', title: 'Cloud & DevOps', description: 'Scalable infrastructure & automated deployment pipelines.' },
  ];
}
