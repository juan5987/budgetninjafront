import { Injectable } from '@angular/core';
import { Transaction} from '../models/transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  userId: number = 1;
  transactionsSubject = new BehaviorSubject<Transaction[]>([]);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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

    return this.http.post<Transaction>(`http://localhost:8080/transactions/${this.userId}` , transaction, this.httpOptions);
  }

  updateTransactionById = (transaction: Transaction, transactionId: number) => {
    return this.http.put<Transaction>(`http://localhost:8080/transactions/${transactionId}`, transaction, this.httpOptions);
  }

  deleteTransactionById = (transactionId: number) => {
    return this.http.delete<number>('http://localhost:8080/transactions/' + transactionId);
  }

  addTransaction = (transaction: Transaction) => {
    this.transactionsSubject.getValue().push(transaction);
  }

  updateTransaction = (transaction: Transaction, transactionId: number) => {
    const transactions = this.transactionsSubject.getValue();
    const index = transactions.findIndex((transaction: Transaction) => transaction.id === transactionId);
    transactions[index] = transaction;
    this.transactionsSubject.next(transactions);
  }

  removeTransaction = (transactionId: number) => {
    const transactions = this.transactionsSubject.getValue();
    const index = transactions.findIndex((transaction: Transaction) => transaction.id === transactionId);
    transactions.splice(index, 1);
    this.transactionsSubject.next(transactions);
    }

    orderTransactions = (order: string) => {
      const transactions = this.transactionsSubject.getValue();
      switch (order) {
        case 'date':
          transactions.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
          break;
        case 'amount':
          transactions.sort((a, b) => {
            return a.amount - b.amount;
          });
          break;
        case 'description':
          transactions.sort((a, b) => {
            return a.description.localeCompare(b.description);
          });
          break;
        case 'category':
          transactions.sort((a, b) => {
            return a.category.name.localeCompare(b.category.name);
          });
          break;
        default:
          transactions.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
          break;
      }
      this.transactionsSubject.next(transactions);
    }

  constructor( private http: HttpClient) { }
}
