import { Injectable } from '@angular/core';
import { Transaction} from '../models/transaction';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactions: Transaction[] = [
    {
      id: 1,
      date: '2021-01-01',
      description: 'Salary',
      amount: 1350,
      category: 'Salary',
      type: 'revenu'
    },
    {
      id: 2,
      date: '2021-01-01',
      description: 'diesel',
      amount: 50,
      category: 'Carburant',
      type: 'dépense'
    },
    {
      id: 3,
      date: '2021-01-01',
      description: 'epargne',
      amount: 100,
      category: 'Epargne',
      type: 'épargne'
    },
    {
      id: 4,
      date: '2021-01-03',
      description: 'remb CPAM',
      amount: 20,
      category: 'santé',
      type: 'revenu'
    },
  ];
  transactionsSubject = new Subject<Transaction[]>();

  get getTransactions() {
    return this.transactions;
  }

  set setTransactions(transactions: Transaction[]) {
    this.transactions = transactions;
  }

  addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction);
  }

  updateTransaction = (transaction: Transaction) => {
    this.transactions = this.transactions.map((t: Transaction) => {
      if (t.id === transaction.id) {
        return transaction;
      }
      return t;
    })
  }

  removeTransaction = (transaction: Transaction) => {
    this.transactions = this.transactions.filter((t: Transaction) => t.id !== transaction.id);
  }

  constructor() { }
}
