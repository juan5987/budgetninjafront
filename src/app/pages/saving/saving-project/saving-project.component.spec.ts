import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProjectComponent } from './saving-project.component';

describe('SavingProjectComponent', () => {
  let component: SavingProjectComponent;
  let fixture: ComponentFixture<SavingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
