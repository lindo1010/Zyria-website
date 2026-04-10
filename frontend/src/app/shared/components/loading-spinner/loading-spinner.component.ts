import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `
    <div class="loading-overlay">
      <div class="loading-logo">
        <img src="assets/images/zyria-icon.svg" alt="Zyria" width="64" height="64">
      </div>
      <span class="loading-text">ZYRIA</span>
    </div>
  `,
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {}
