import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetIndicatorComponent } from './budget-indicator.component';

describe('BudgetIndicatorComponent', () => {
  let component: BudgetIndicatorComponent;
  let fixture: ComponentFixture<BudgetIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
