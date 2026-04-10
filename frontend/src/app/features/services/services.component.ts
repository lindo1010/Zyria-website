import { Component } from '@angular/core';
import { ServiceCardComponent, ServiceData } from '../../shared/components/service-card/service-card.component';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';
import { ProcessStepsComponent } from './process-steps/process-steps.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, CtaButtonComponent, ProcessStepsComponent, AnimateOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export default class ServicesComponent {
  readonly services: ServiceData[] = [
    {
      icon: '◇', title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and build intelligent systems that learn and adapt.',
      tags: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: '◈', title: 'Web Development',
      description: 'Full-stack web applications built with modern frameworks, designed for performance, scalability, and exceptional user experience.',
      tags: ['Angular', 'React', 'Full-Stack', 'PWA']
    },
    {
      icon: '◉', title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android.',
      tags: ['iOS', 'Android', 'Cross-Platform', 'Flutter']
    },
    {
      icon: '◆', title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automated pipelines, and DevOps practices that keep your systems running reliably.',
      tags: ['AWS', 'Azure', 'CI/CD', 'Kubernetes']
    },
  ];
}
