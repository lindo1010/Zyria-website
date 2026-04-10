import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { DOCUMENT } from '@angular/common';

describe('ThemeService', () => {
  let service: ThemeService;
  let doc: Document;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    doc = TestBed.inject(DOCUMENT);
  });

  it('should default to dark theme', () => {
    expect(service.theme()).toBe('dark');
  });

  it('should toggle to light theme', () => {
    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  it('should toggle back to dark theme', () => {
    service.toggleTheme();
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should set data-theme attribute on html element', () => {
    service.toggleTheme();
    TestBed.flushEffects();
    expect(doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    service.toggleTheme();
    TestBed.flushEffects();
    expect(localStorage.getItem('zyria-theme')).toBe('light');
  });
});
