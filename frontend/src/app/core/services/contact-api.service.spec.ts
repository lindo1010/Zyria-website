import { TestBed } from '@angular/core/testing';
import { ContactApiService, ContactFormData } from './contact-api.service';
import { firstValueFrom } from 'rxjs';

describe('ContactApiService', () => {
  let service: ContactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return success observable on submitContact', async () => {
    const formData: ContactFormData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'General Inquiry',
      message: 'This is a test message that is long enough.'
    };

    const result = await firstValueFrom(service.submitContact(formData));
    expect(result.success).toBe(true);
    expect(result.message).toBeDefined();
  });
});
