import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTopNavComponent } from './responsive-top-nav.component';

describe('ResponsiveTopNavComponent', () => {
  let component: ResponsiveTopNavComponent;
  let fixture: ComponentFixture<ResponsiveTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
