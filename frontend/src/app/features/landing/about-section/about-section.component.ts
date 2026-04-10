import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  readonly stats = [
    { value: '50+', label: 'Projects' },
    { value: '15+', label: 'Clients' },
    { value: '99%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];
}
