import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactApiService } from '../../../core/services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactApi = inject(ContactApiService);

  readonly submitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly submitError = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Honeypot: humans never see this field; bots that fill it get rejected.
    botcheck: [false],
  });

  readonly subjectOptions = [
    'General Inquiry',
    'Project Discussion',
    'Partnership',
    'Support',
    'Other',
  ];

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.submitError.set('');

    this.contactApi.submitContact(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.submitting.set(false);
        if (response.success) {
          this.submitSuccess.set(true);
          this.form.reset();
        } else {
          this.submitError.set(response.message || 'Something went wrong. Please try again.');
        }
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set('Something went wrong. Please try again.');
      },
    });
  }
}
