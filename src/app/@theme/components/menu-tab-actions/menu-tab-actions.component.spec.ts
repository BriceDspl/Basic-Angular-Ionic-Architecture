import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabActionsComponent } from './menu-tab-actions.component';

describe('MenuTabActionsComponent', () => {
  let component: MenuTabActionsComponent;
  let fixture: ComponentFixture<MenuTabActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
