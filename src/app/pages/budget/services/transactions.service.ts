import { Injectable } from '@angular/core';
import { Transaction} from '../models/transaction';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactions: Transaction[] = [
    {
      id: 1,
      date: '2021-01-01',
      description: 'salaire juin',
      amount: 1350,
      category: 'salaire',
      type: 'revenu'
    },
    {
      id: 2,
      date: '2021-01-01',
      description: 'diesel',
      amount: 50,
      category: 'carburant',
      type: 'depense'
    },
    {
      id: 3,
      date: '2021-01-01',
      description: 'epargne',
      amount: 100,
      category: 'epargne',
      type: 'epargne'
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

  getAllTransactions= () => {
    // http request
    return this.http.get<Transaction[]>('http://localhost:8080/transactions');
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

  constructor( private http: HttpClient) { }
}
