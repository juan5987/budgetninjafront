import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramedSavingModalComponent } from './delete-programed-saving-modal.component';

describe('DeleteProgramedSavingModalComponent', () => {
  let component: DeleteProgramedSavingModalComponent;
  let fixture: ComponentFixture<DeleteProgramedSavingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProgramedSavingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProgramedSavingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
