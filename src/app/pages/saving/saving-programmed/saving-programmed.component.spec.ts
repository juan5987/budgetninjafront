import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProgrammedComponent } from './saving-programmed.component';

describe('SavingProgrammedComponent', () => {
  let component: SavingProgrammedComponent;
  let fixture: ComponentFixture<SavingProgrammedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingProgrammedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingProgrammedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
