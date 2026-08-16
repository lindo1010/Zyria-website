import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should require name with min 2 chars', () => {
    const name = component.form.controls['name'];
    name.setValue('');
    expect(name.valid).toBeFalsy();
    name.setValue('A');
    expect(name.valid).toBeFalsy();
    name.setValue('Ab');
    expect(name.valid).toBeTruthy();
  });

  it('should require a valid email', () => {
    const email = component.form.controls['email'];
    email.setValue('');
    expect(email.valid).toBeFalsy();
    email.setValue('notanemail');
    expect(email.valid).toBeFalsy();
    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('should not require subject', () => {
    const subject = component.form.controls['subject'];
    expect(subject.valid).toBeTruthy();
  });

  it('should require message with min 10 chars', () => {
    const message = component.form.controls['message'];
    message.setValue('');
    expect(message.valid).toBeFalsy();
    message.setValue('Short');
    expect(message.valid).toBeFalsy();
    message.setValue('This is long enough to pass validation.');
    expect(message.valid).toBeTruthy();
  });
});
