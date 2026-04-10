import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [SectionHeaderComponent, AnimateOnScrollDirective],
  templateUrl: './values-section.component.html',
  styleUrl: './values-section.component.scss'
})
export class ValuesSectionComponent {
  readonly values = [
    { icon: '★', title: 'Innovation', description: 'Pushing boundaries with creative, forward-thinking solutions.' },
    { icon: '⚗', title: 'Reliability', description: 'Building software you can depend on, every time.' },
    { icon: '⚡', title: 'Performance', description: 'Optimized for speed, efficiency, and scalability.' },
    { icon: '◈', title: 'Collaboration', description: 'Working together to achieve exceptional results.' },
  ];
}
