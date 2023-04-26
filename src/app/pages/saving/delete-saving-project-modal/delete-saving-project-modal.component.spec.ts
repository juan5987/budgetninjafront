import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSavingProjectModalComponent } from './delete-saving-project-modal.component';

describe('DeleteSavingProjectModalComponent', () => {
  let component: DeleteSavingProjectModalComponent;
  let fixture: ComponentFixture<DeleteSavingProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSavingProjectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSavingProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
