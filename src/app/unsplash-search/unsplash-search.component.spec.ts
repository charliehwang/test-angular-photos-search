import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashSearchComponent } from './unsplash-search.component';

describe('UnsplashSearchComponent', () => {
  let component: UnsplashSearchComponent;
  let fixture: ComponentFixture<UnsplashSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsplashSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsplashSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
