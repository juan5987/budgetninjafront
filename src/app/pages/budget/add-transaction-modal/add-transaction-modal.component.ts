import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormService } from './services/form.service';
import { TransactionsService } from '../services/transactions.service';


@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.sass']
})
export class AddTransactionModalComponent implements OnInit, OnDestroy {
  isAddTransactionModalOpened: boolean = true;
  subscription!: Subscription;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private budgetService: BudgetService, private FormService: FormService, private transactionsService: TransactionsService) { }
  formValues!: FormGroup;


  ngOnInit(): void {
    this.formValues = this.formBuilder.group({
      date: ['', Validators.required],
      amount: [, Validators.required],
      description: [''],
      type: ['', Validators.required],
      category: '',
    })
    this.subscription = this.budgetService.isAddTransactionModalOpenedSubject.subscribe(
      (bool: boolean) => {
        this.isAddTransactionModalOpened = bool;
      });
    this.formValues.valueChanges.subscribe(() => {
      this.submitted = false;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleCloseModal = () => {
    this.budgetService.isAddTransactionModalOpenedSetter = false;
  }

  stopPropagation = (event: Event) => {
    event.stopPropagation();
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.submitted = true;
    if (this.formValues.valid) {
      if(this.formValues.value.category === ''){
        this.formValues.value.category = null;
      } else {
        this.formValues.value.category = {
          name: this.formValues.value.category,
        }

      }

      this.transactionsService.createTransaction(this.formValues.value).subscribe(
        (response) => {
          this.transactionsService.addTransaction(response);
          this.budgetService.updateAllIndicators();
          this.budgetService.isAddTransactionModalOpenedSetter = false;
        }
      );

    }
  }

  public get form() {
    return this.formValues.controls;
  }
}
