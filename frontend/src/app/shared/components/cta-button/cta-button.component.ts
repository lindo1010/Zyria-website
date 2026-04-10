import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="link()" [class]="'cta-btn cta-btn--' + variant()">
      <ng-content />
    </a>
  `,
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly link = input<string>('/');
}
