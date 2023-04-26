import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToAccountComponent } from './link-to-account.component';

describe('LinkToAccountComponent', () => {
  let component: LinkToAccountComponent;
  let fixture: ComponentFixture<LinkToAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkToAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkToAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
