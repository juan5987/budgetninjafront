import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  isAddTransactionModalOpened:boolean = false;
  isAddTransactionModalOpenedSubject = new Subject<boolean>();

  isDeleteTransactionModalOpened:boolean = false;
  isDeleteTransactionModalOpenedSubject = new Subject<boolean>();

  isUpdateTransactionModalOpened:boolean = false;
  isUpdateTransactionModalOpenedSubject = new Subject<boolean>();

  constructor() { }

  get isAddTransactionModalOpenedGetter():boolean {
    return this.isAddTransactionModalOpened;
  }

  set isAddTransactionModalOpenedSetter(bool:boolean) {
    this.isAddTransactionModalOpened = bool;
    this.isAddTransactionModalOpenedSubject.next(bool);
  }

  get isUpdateTransactionModalOpenedGetter():boolean {
    return this.isUpdateTransactionModalOpened;
  }

  set isUpdateTransactionModalOpenedSetter(bool:boolean) {
    this.isUpdateTransactionModalOpened = bool;
    this.isUpdateTransactionModalOpenedSubject.next(bool);
  }

  get isDeleteTransactionModalOpenedGetter():boolean {
    return this.isDeleteTransactionModalOpened;
  }

  set isDeleteTransactionModalOpenedSetter(bool:boolean) {
    this.isDeleteTransactionModalOpened = bool;
    this.isDeleteTransactionModalOpenedSubject.next(bool);
  }

}
