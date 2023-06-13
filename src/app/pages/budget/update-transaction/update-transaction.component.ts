import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.sass']
})
export class UpdateTransactionComponent implements OnInit, OnDestroy{
  isAddTransactionModalOpened:boolean = true;
  subscription!: Subscription;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.isAddTransactionModalOpenedSubject.subscribe(
      (bool:boolean) => {
        this.isAddTransactionModalOpened = bool;
      });
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
  }
}
