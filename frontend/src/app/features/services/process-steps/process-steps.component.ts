import { Component } from '@angular/core';

@Component({
  selector: 'app-process-steps',
  standalone: true,
  templateUrl: './process-steps.component.html',
  styleUrl: './process-steps.component.scss'
})
export class ProcessStepsComponent {
  readonly steps = [
    { number: '1', title: 'Discover', description: 'Understand your needs' },
    { number: '2', title: 'Design', description: 'Plan the solution' },
    { number: '3', title: 'Build', description: 'Develop & iterate' },
    { number: '4', title: 'Deploy', description: 'Launch & support' },
  ];
}
