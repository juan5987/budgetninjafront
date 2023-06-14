import { Injectable } from '@angular/core';
import { Transaction} from '../models/transaction';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactionsSubject = new BehaviorSubject<Transaction[]>([
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
    {
      id: 5,
      date: '2021-01-03',
      description: 'TV',
      amount: 500,
      category: 'loisir',
      type: 'depense'
    },
  ]);

  get getTransactions(): BehaviorSubject<Transaction[]> {
    return this.transactionsSubject;
  }

  set setTransactions(transactions: Transaction[]) {
    this.transactionsSubject.next(transactions);
  }

  // CRUD
  getAllTransactions= () => {
    return this.http.get<Transaction[]>('http://localhost:8080/transactions');
  }

  createTransaction = (transaction: Transaction) => {
    return this.http.post<Transaction>('http://localhost:8080/transactions', transaction);
  }

  updateTransactionById = (transaction: Transaction) => {
    return this.http.put<Transaction>('http://localhost:8080/transactions/' + transaction.id, transaction);
  }

  deleteTransactionById = (transactionId: number) => {
    return this.http.delete<number>('http://localhost:8080/transactions/' + transactionId);
  }

  // state
  addTransaction = (transaction: Transaction) => {
    this.transactionsSubject.getValue().push(transaction);
  }

  updateTransaction = (transaction: Transaction) => {
    const transactions = this.transactionsSubject.getValue();
    const index = transactions.findIndex((transaction: Transaction) => transaction.id === transaction.id);
    transactions[index] = transaction;
    this.transactionsSubject.next(transactions);
  }

  removeTransaction = (transactionId: number) => {
    const transactions = this.transactionsSubject.getValue();
    const index = transactions.findIndex((transaction: Transaction) => transaction.id === transactionId);
    transactions.splice(index, 1);
    this.transactionsSubject.next(transactions);
    }

  constructor( private http: HttpClient) { }
}
