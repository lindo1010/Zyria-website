import { Component, input } from '@angular/core';

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <div class="service-card" [class.service-card--expanded]="expanded()">
      <div class="service-card__icon">
        <span [innerHTML]="service().icon"></span>
      </div>
      <div class="service-card__content">
        <h3 class="service-card__title">{{ service().title }}</h3>
        <p class="service-card__desc">{{ service().description }}</p>
        @if (service().tags?.length && expanded()) {
          <div class="service-card__tags">
            @for (tag of service().tags; track tag) {
              <span class="service-card__tag">{{ tag }}</span>
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceData>();
  readonly expanded = input(false);
}
