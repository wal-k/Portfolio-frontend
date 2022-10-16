import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralBarMiniComponent } from './lateral-bar-mini.component';

describe('LateralBarMiniComponent', () => {
  let component: LateralBarMiniComponent;
  let fixture: ComponentFixture<LateralBarMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralBarMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralBarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
