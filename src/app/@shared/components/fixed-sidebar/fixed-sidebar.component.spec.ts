import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import { FixedSidebarComponent } from './fixed-sidebar.component';
import { MenuService } from '../../services/menu.service';

describe('FixedSidebarComponent', () => {
  let component: FixedSidebarComponent;
  let fixture: ComponentFixture<FixedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidebarComponent ],
      providers: [
        { provide: MenuService, useValue: { getMenu: () => Observable.of([]) }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
