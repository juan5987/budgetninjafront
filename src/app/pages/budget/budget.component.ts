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
    this.subscription = this.budgetService.isAddTransactionModalOpenedSubject.subscribe(bool => {
      this.isAddTransactionModalOpened = bool;
    });

    this.subscription.add(this.budgetService.isDeleteTransactionModalOpenedSubject.subscribe(bool => {
      this.isDeleteTransactionModalOpened = bool;
    }));

    this.subscription.add(this.budgetService.isUpdateTransactionModalOpenedSubject.subscribe(bool => {
      this.isUpdateTransactionModalOpened = bool;
    }));

    this.subscription.add(this.transactionsService.getTransactions.subscribe(transactions => {
      this.transactions = transactions;
    }));

    this.subscription.add(this.budgetService.soldeGetter.subscribe(solde => {
      this.solde = solde;
    }));

    this.subscription.add(this.budgetService.revenuTotalGetter.subscribe(revenuTotal => {
      this.revenuTotal = revenuTotal;
    }));

    this.subscription.add(this.budgetService.depenseTotalGetter.subscribe(depenseTotal => {
      this.depenseTotal = depenseTotal;
    }));

    this.subscription.add(this.budgetService.resteAVivreGetter.subscribe(resteAVivre => {
      this.resteAVivre = resteAVivre;
    }));

    this.transactionsService.getAllTransactions().subscribe(
      (transactions: Transaction[]) => {
        this.transactionsService.setTransactions = transactions;
        this.transactions = transactions;
      }
    );
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
    const transactionId = this.budgetService.updatingTransactionIdGetter.getValue();
    this.transactionsService.deleteTransactionById(transactionId).subscribe(
      (response) => {
        this.transactionsService.deleteTransactionById(transactionId);
        this.transactionsService.removeTransaction(transactionId);
        this.budgetService.isDeleteTransactionModalOpenedSetter = false;
        this.budgetService.updateAllIndicators();
      }
    );
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }
}
