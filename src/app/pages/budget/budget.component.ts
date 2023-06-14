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
  revenuTotal: number = 0;
  depenseTotal: number = 0;
  solde: number = 0;
  resteAVivre: number = 0;


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
    this.subscription = this.transactionsService.getTransactions.subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions;
      });
    this.subscription = this.budgetService.soldeGetter.subscribe(
      (solde: number) => {
        this.solde = solde;
      });
    this.subscription = this.budgetService.revenuTotalGetter.subscribe(
      (revenuTotal: number) => {
        this.revenuTotal = revenuTotal;
      });
    this.subscription = this.budgetService.depenseTotalGetter.subscribe(
      (depenseTotal: number) => {
        this.depenseTotal = depenseTotal;
      });
    this.subscription = this.budgetService.resteAVivreGetter.subscribe(
      (resteAVivre: number) => {
        this.resteAVivre = resteAVivre;
      });

    //TODO: a décommenter quand le back sera prêt
    // this.transactionsService.getAllTransactions().subscribe(
    //   (transactions: Transaction[]) => {
    //     this.transactions = transactions;
    //   }
    // );
    //TODO: a supprimer quand le back sera prêt
    this.transactions = this.transactionsService.getTransactions.getValue();
    for (let transaction of this.transactions) {
      if (transaction.type === "revenu") {
        this.revenuTotal += transaction.amount;
      } else if (transaction.type === "depense" || transaction.type === "epargne") {
        this.depenseTotal += transaction.amount;
      }
    }
    this.resteAVivre = this.solde + this.revenuTotal - this.depenseTotal;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleShowModal = () => {
    this.budgetService.isAddTransactionModalOpenedSetter = true;
  }

  handleShowUpdateModal = () => {
    this.budgetService.isUpdateTransactionModalOpenedSetter = true;
  }

  handleShowDeleteModal = () => {
    this.budgetService.isDeleteTransactionModalOpenedSetter = true;
  }

  handleCloseDeleteModal = () => {
    this.budgetService.isDeleteTransactionModalOpenedSetter = false;
  }

  handleDeleteTransaction = () => {
    //TODO : a décommenter quand le back sera prêt
    // this.transactionsService.deleteTransactionById(transactionId);

    //TODO: a supprimer quand le back sera prêt
    this.transactionsService.removeTransaction(this.budgetService.updatingTransactionIdGetter.getValue());
    this.budgetService.isDeleteTransactionModalOpenedSetter = false;
    this.budgetService.updateAllIndicators();
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }
}
