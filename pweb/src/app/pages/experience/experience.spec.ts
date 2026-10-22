import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ExperienceComponent } from './experience';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list Software Engineer as the primary role', () => {
    expect(component.primaryRole).toBe('Software Engineer');
    expect(component.employers[0].roles[0].title).toBe('Software Engineer');
  });

  it('should link each jump link to its section on this page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.exp__jump a'));
    const hrefs = links.map((a) => a.getAttribute('href'));

    expect(hrefs).toEqual([
      '/experience#work',
      '/experience#projects',
      '/experience#skills',
      '/experience#education',
    ]);
    hrefs.forEach((href) => {
      expect(compiled.querySelector(href!.split('/experience')[1])).toBeTruthy();
    });
  });
});
