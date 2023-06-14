import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Subscription, catchError, tap } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormService } from './services/form.service';


@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.sass']
})
export class AddTransactionModalComponent implements OnInit, OnDestroy {
  isAddTransactionModalOpened: boolean = true;
  subscription!: Subscription;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private budgetService: BudgetService, private FormService: FormService) { }

  formValues: FormGroup = this.formBuilder.group({
    date: ['', Validators.required],
    amount: ['50', Validators.required],
    description: ['test'],
    type: ['depense', Validators.required],
    category: ['alimentation', Validators.required],
  })

  ngOnInit(): void {
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
      this.FormService.addTransaction(this.formValues.value).subscribe(
        (response:any) => {
          console.log(response);
        }
      )
    }
  }

  public get form() {
    return this.formValues.controls;
  }
}
