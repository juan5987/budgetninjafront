import { Transaction } from './../models/transaction';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { TransactionsService } from '../services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.sass']
})
export class UpdateTransactionComponent implements OnInit, OnDestroy {
  isUpdateTransactionModalOpened: boolean = true;
  UpdatingTransactionId: number = 0;
  transaction!: Transaction;
  subscription!: Subscription;

  constructor(private budgetService: BudgetService, private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.isUpdateTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isUpdateTransactionModalOpened = bool;
      });
      this.transaction = this.transactionsService.transactions.find(transaction => transaction.id === this.budgetService.UpdatingTransactionIdGetter)!;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleCloseModal = () => {
    this.budgetService.isUpdateTransactionModalOpenedSetter = false;
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
  }
}
