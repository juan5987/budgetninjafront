import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdateUsernameComponent } from './account-update-username.component';

describe('AccountUpdateUsernameComponent', () => {
  let component: AccountUpdateUsernameComponent;
  let fixture: ComponentFixture<AccountUpdateUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountUpdateUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountUpdateUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
