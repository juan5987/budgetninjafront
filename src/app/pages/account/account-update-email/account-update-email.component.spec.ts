import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdateEmailComponent } from './account-update-email.component';

describe('AccountUpdateEmailComponent', () => {
  let component: AccountUpdateEmailComponent;
  let fixture: ComponentFixture<AccountUpdateEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountUpdateEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountUpdateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
