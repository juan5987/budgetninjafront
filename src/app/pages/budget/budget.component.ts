import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from './services/budget.service';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './models/transaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.sass']
})
export class BudgetComponent implements OnInit, OnDestroy{

  isAddTransactionModalOpened:boolean = false;
  transactions: Transaction[] = [];
  subscription!: Subscription;

  constructor(private budgetService: BudgetService, private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.isAddTransactionModalOpenedSubject.subscribe(
      (bool:boolean) => {
        this.isAddTransactionModalOpened = bool;
      });
    this.subscription = this.transactionsService.transactionsSubject.subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions;
      }
    );
    this.transactions = this.transactionsService.getTransactions;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleShowModal = () => {
    this.budgetService.isAddTransactionModalOpenedSetter = true;
  }
}
