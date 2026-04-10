import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-company-story',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './company-story.component.html',
  styleUrl: './company-story.component.scss'
})
export class CompanyStoryComponent {}
