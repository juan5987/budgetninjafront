import { Transaction } from '../models/transaction';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { TransactionsService } from '../services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-transaction',
  templateUrl: './budget-transaction.component.html',
  styleUrls: ['./budget-transaction.component.sass']
})
export class BudgetTransactionComponent implements OnInit, OnDestroy {
  @Input() transaction!: Transaction;

  isDeleteTransactionModalOpened: boolean = false;
  isUpdateTransactionModalOpened: boolean = false;
  subscription!: Subscription;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.isDeleteTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isDeleteTransactionModalOpened = bool;
      });
    this.subscription = this.budgetService.isUpdateTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isUpdateTransactionModalOpened = bool;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleOpenDeleteModal = () => {
    this.budgetService.isDeleteTransactionModalOpenedSetter = true;
  }

  handleOpenUpdateModal = () => {
    this.budgetService.isUpdateTransactionModalOpenedSetter = true;
  }
}
