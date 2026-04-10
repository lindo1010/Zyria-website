import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  submitContact(data: ContactFormData): Observable<ContactResponse> {
    console.log('Contact form submitted:', data);
    return of({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    }).pipe(delay(1000));
  }
}
