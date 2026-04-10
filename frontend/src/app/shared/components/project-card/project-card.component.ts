import { Component, input } from '@angular/core';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="project-card">
      <div class="project-card__image">
        <span class="project-card__placeholder">&#9674;</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">{{ project().title }}</h3>
        <p class="project-card__desc">{{ project().description }}</p>
        <div class="project-card__tags">
          @for (tag of project().tags; track tag) {
            <span class="project-card__tag">{{ tag }}</span>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectData>();
}
