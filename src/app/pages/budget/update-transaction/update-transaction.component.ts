import { Transaction } from './../models/transaction';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { TransactionsService } from '../services/transactions.service';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormService } from '../add-transaction-modal/services/form.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.sass']
})
export class UpdateTransactionComponent implements OnInit, OnDestroy {
  isUpdateTransactionModalOpened: boolean = true;
  UpdatingTransactionId: number = 0;
  transaction!: any;
  subscription!: Subscription;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private FormService: FormService, private budgetService: BudgetService, private transactionsService: TransactionsService) { }

  formValues: FormGroup = this.formBuilder.group({
    date: ['', Validators.required],
    amount: ['', Validators.required],
    description: [''],
    type: ['', Validators.required],
    category: '',
  })

  ngOnInit(): void {
    this.subscription = this.budgetService.isUpdateTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isUpdateTransactionModalOpened = bool;
      });
    this.formValues.valueChanges.subscribe(() => {
      this.submitted = false;
    })
    this.subscription = this.transactionsService.getAllTransactions().subscribe(
      (transactions: Transaction[]) => {
        this.transaction = transactions.find(
          transaction => transaction.id === this.budgetService.updatingTransactionIdGetter.getValue()
        );
        this.formValues.patchValue({
          date: formatDate(this.transaction.date, 'yyyy-MM-dd', 'en-US'),
          amount: this.transaction.amount,
          description: this.transaction.description,
          type: this.transaction.type,
          category: this.transaction.category ? this.transaction.category : '',
        })
      });
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
    this.submitted = true;
    if (this.formValues.valid) {
      if (this.formValues.value.category === '') {
        this.formValues.value.category = null;
      }

      this.transactionsService.updateTransactionById(this.formValues.value, this.transaction.id).subscribe(
        (response) => {
          console.log(response)
          this.transactionsService.updateTransaction(response, this.transaction.id);
          this.budgetService.isUpdateTransactionModalOpenedSetter = false;
          this.budgetService.updateAllIndicators();
        }
      )
    }
  }
  public get form() {
    return this.formValues.controls;
  }
}
