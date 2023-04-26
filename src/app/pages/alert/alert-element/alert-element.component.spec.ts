import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertElementComponent } from './alert-element.component';

describe('AlertElementComponent', () => {
  let component: AlertElementComponent;
  let fixture: ComponentFixture<AlertElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
