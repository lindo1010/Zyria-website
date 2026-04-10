import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should track scroll position as a signal', () => {
    expect(service.scrollY()).toBeDefined();
    expect(typeof service.scrollY()).toBe('number');
  });

  it('should have a scrollToTop method', () => {
    expect(typeof service.scrollToTop).toBe('function');
  });

  it('should have a scrollToElement method', () => {
    expect(typeof service.scrollToElement).toBe('function');
  });
});
