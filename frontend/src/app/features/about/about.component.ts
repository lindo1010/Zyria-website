import { Component } from '@angular/core';
import { CompanyStoryComponent } from './company-story/company-story.component';
import { MissionSectionComponent } from './mission-section/mission-section.component';
import { ValuesSectionComponent } from './values-section/values-section.component';
import { CtaButtonComponent } from '../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CompanyStoryComponent, MissionSectionComponent, ValuesSectionComponent, CtaButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {}
