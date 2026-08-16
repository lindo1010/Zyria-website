import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  botcheck?: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly http = inject(HttpClient);

  submitContact(data: ContactFormData): Observable<ContactResponse> {
    const payload = {
      access_key: environment.web3formsAccessKey,
      name: data.name,
      email: data.email,
      subject: data.subject || 'New contact form submission',
      message: data.message,
      botcheck: data.botcheck ?? false,
      from_name: 'Zyria Website',
    };

    return this.http
      .post<Web3FormsResponse>(environment.web3formsEndpoint, payload)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
        }))
      );
  }
}
