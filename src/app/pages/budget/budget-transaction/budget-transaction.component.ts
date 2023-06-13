import { Component, Input } from '@angular/core';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-budget-transaction',
  templateUrl: './budget-transaction.component.html',
  styleUrls: ['./budget-transaction.component.sass']
})
export class BudgetTransactionComponent {
  @Input() transaction!: Transaction;
}
