import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [SectionHeaderComponent, AnimateOnScrollDirective],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss'
})
export class ProcessSectionComponent {
  readonly steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      description: 'We start by understanding your business, goals, and constraints — no assumptions.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Architecture and user experience are planned before a single line of code is written.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Iterative development with regular check-ins, so you always know where things stand.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy, monitor, and keep improving your software long after go-live.',
    },
  ];
}
