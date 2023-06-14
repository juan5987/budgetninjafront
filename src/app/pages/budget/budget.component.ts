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
export class BudgetComponent implements OnInit, OnDestroy {

  isAddTransactionModalOpened: boolean = false;
  isUpdateTransactionModalOpened: boolean = false;
  isDeleteTransactionModalOpened: boolean = false;
  transactions: Transaction[] = [];
  subscription!: Subscription;

  constructor(private budgetService: BudgetService, private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.isAddTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isAddTransactionModalOpened = bool;
      });
    this.subscription = this.budgetService.isDeleteTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isDeleteTransactionModalOpened = bool;
      });
    this.subscription = this.budgetService.isUpdateTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isUpdateTransactionModalOpened = bool;
      });
    this.subscription = this.transactionsService.transactionsSubject.subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions;
      }
    );
    //TODO: a décommenter quand le back sera prêt
    // this.transactionsService.getAllTransactions().subscribe(
    //   (transactions: Transaction[]) => {
    //     this.transactions = transactions;
    //   }
    // );
    //TODO: a supprimer quand le back sera prêt
    this.transactions = this.transactionsService.getTransactions;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleShowModal = () => {
    this.budgetService.isAddTransactionModalOpenedSetter = true;
  }

  handleShowUpdateModal = () => {
    this.budgetService.isUpdateTransactionModalOpened = true;
  }

  handleShowDeleteModal = () => {
    this.budgetService.isDeleteTransactionModalOpenedSetter = true;
  }

  handleCloseDeleteModal = () => {
    this.budgetService.isDeleteTransactionModalOpenedSetter = false;
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }
}
