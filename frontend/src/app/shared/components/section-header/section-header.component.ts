import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      @if (label()) {
        <span class="section-header__label">{{ label() }}</span>
      }
      <h2 class="section-header__title">{{ title() }}</h2>
      @if (showAccent()) {
        <div class="section-header__accent"></div>
      }
    </div>
  `,
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  readonly label = input<string>('');
  readonly title = input.required<string>();
  readonly showAccent = input(true);
}
