import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from './services/budget.service';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './models/transaction';
import { Subscription } from 'rxjs';
import { Budget } from './models/budget';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.sass']
})
export class BudgetComponent implements OnInit, OnDestroy {

  isAddTransactionModalOpened: boolean = false;
  isUpdateTransactionModalOpened: boolean = false;
  isDeleteTransactionModalOpened: boolean = false;
  isBalanceModalOpened: boolean = false;
  transactions: Transaction[] = [];
  subscription!: Subscription;
  revenuTotal: number = 0;
  depenseTotal: number = 0;
  budgetId: number = 0;
  solde: number = 0;
  resteAVivre: number = 0;
  sort: string = 'date';
  order: string = 'décroissant';
  formValues!: FormGroup;
  submitted: boolean = false;

  constructor(private budgetService: BudgetService, private transactionsService: TransactionsService, private formBuilder: FormBuilder) { }

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

    this.subscription.add(this.budgetService.isBalanceModalOpenedSubject.subscribe(bool => {
      this.isBalanceModalOpened = bool;
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

    this.budgetService.getBudget(1).subscribe(
      (budget: Budget) => {
        this.budgetId = budget.id ? budget.id : 0;
        this.solde = budget.balance;
        this.budgetService.soldeSetter = budget.balance;
        this.formValues = this.formBuilder.group({
          balance: [this.solde, Validators.required],
        })
      }
    );

    this.transactionsService.getAllTransactions().subscribe(
      (transactions: Transaction[]) => {
        this.transactionsService.setTransactions = transactions;
        this.transactionsService.sortTransactions(this.order, this.sort);
        this.transactions = transactions;
        this.budgetService.updateAllIndicators();
      }
    );

    this.formValues = this.formBuilder.group({
      balance: [this.solde, Validators.required],
    })

    this.formValues.valueChanges.subscribe(() => {
      this.submitted = false;
    })
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
    const transactionId = this.budgetService.updatingTransactionIdGetter.getValue();
    this.transactionsService.deleteTransactionById(transactionId).subscribe(
      (response) => {
        this.transactionsService.removeTransaction(transactionId);
        this.budgetService.isDeleteTransactionModalOpenedSetter = false;
        this.budgetService.updateAllIndicators();
      }
    );
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }

  handleSortChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.getAttribute('name');
    if (name === 'order') {
      this.order = inputElement.value;
    } else {
      this.sort = inputElement.value;
    }
    console.log(this.sort, this.order)
    this.transactionsService.sortTransactions(this.order, this.sort);
  }

  handleOpenBalanceModal = () => {
    this.budgetService.isBalanceModalOpenedSetter = true;
  }

  handleCloseBalanceModal = () => {
    this.budgetService.isBalanceModalOpenedSetter = false;
  }

  handleSubmitForm = (event: Event) => {
    event.preventDefault();
    this.submitted = true;
    if (this.formValues.valid) {
      this.budgetService.updateBudget({ id: this.budgetId, balance: this.formValues.value.balance }).subscribe(
        (budget: Budget) => {
          this.solde = budget.balance;
          this.budgetService.isBalanceModalOpenedSetter = false;
          console.log(budget)
        }
      );
    } else {
      console.log(this.formValues.get('balance')?.errors);
    }
  }
  public get form() {
    return this.formValues.controls;
  }
}
