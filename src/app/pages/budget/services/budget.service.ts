import { TransactionsService } from './transactions.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Budget } from '../models/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  isAddTransactionModalOpenedSubject = new BehaviorSubject<boolean>(false);
  isDeleteTransactionModalOpenedSubject = new BehaviorSubject<boolean>(false);
  isUpdateTransactionModalOpenedSubject = new BehaviorSubject<boolean>(false);
  isBalanceModalOpenedSubject = new BehaviorSubject<boolean>(false);
  updatingTransactionIdSubject = new BehaviorSubject<number>(0);

  revenuTotal = new BehaviorSubject<number>(0);
  depenseTotal = new BehaviorSubject<number>(0);
  solde = new BehaviorSubject<number>(0);
  resteAVivre = new BehaviorSubject<number>(0);

  userId:number = 1;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private transactionsService: TransactionsService) { }


  updateAllIndicators = () => {
    this.revenuTotalSetter = 0;
    this.depenseTotalSetter = 0;
    this.resteAVivreSetter = 0;

    this.getBudget(this.userId).subscribe(
      (budget: Budget) => {
        this.soldeSetter = budget.balance;
        for(let transaction of this.transactionsService.getTransactions.getValue()){
          if(transaction.type === "revenu"){
            this.revenuTotalSetter = this.revenuTotalGetter.getValue() + transaction.amount;
          } else if (transaction.type === "depense" || transaction.type === "epargne"){
            this.depenseTotalSetter = this.depenseTotalGetter.getValue() + transaction.amount;
          }
        }
        this.soldeSetter = this.soldeGetter.getValue() + this.revenuTotalGetter.getValue() - this.depenseTotalGetter.getValue();
      }
    );


    // TODO: attendre dépenses récurrentes
    // this.resteAVivreSetter = this.soldeGetter.getValue() - this.depenseRecurrenteGetter.getValue();
  }

  getBudget = (userId: number) => {
    return this.http.get<Budget>(`http://localhost:8080/budgets/user/${userId}`);
  }

  updateBudget = (budget: Budget) => {
    return this.http.put<Budget>(`http://localhost:8080/budgets/${budget.id}`, budget, this.httpOptions);
  }

  get isBalanceModalOpenedGetter():BehaviorSubject<boolean> {
    return this.isBalanceModalOpenedSubject;
  }

  set isBalanceModalOpenedSetter(bool:boolean) {
    this.isBalanceModalOpenedSubject.next(bool);
  }

  get revenuTotalGetter():BehaviorSubject<number> {
    return this.revenuTotal;
  }

  set revenuTotalSetter(value:number) {
    this.revenuTotal.next(value)
  }

  get depenseTotalGetter():BehaviorSubject<number> {
    return this.depenseTotal;
  }

  set depenseTotalSetter(value:number) {
    this.depenseTotal.next(value)
  }

  get soldeGetter():BehaviorSubject<number> {
    return this.solde;
  }

  set soldeSetter(value:number) {
    this.solde.next(value)
  }

  get resteAVivreGetter():BehaviorSubject<number> {
    return this.resteAVivre;
  }

  set resteAVivreSetter(value:number) {
    this.resteAVivre.next(value)
  }

  get updatingTransactionIdGetter():BehaviorSubject<number> {
    return this.updatingTransactionIdSubject;
  }

  set updatingTransactionIdSetter(value:number) {
    this.updatingTransactionIdSubject.next(value)
  }

  get isAddTransactionModalOpenedGetter():BehaviorSubject<boolean> {
    return this.isAddTransactionModalOpenedSubject;
  }

  set isAddTransactionModalOpenedSetter(bool:boolean) {
    this.isAddTransactionModalOpenedSubject.next(bool);
  }

  get isUpdateTransactionModalOpenedGetter():BehaviorSubject<boolean> {
    return this.isUpdateTransactionModalOpenedSubject;
  }

  set isUpdateTransactionModalOpenedSetter(bool:boolean) {
    this.isUpdateTransactionModalOpenedSubject.next(bool);
  }

  get isDeleteTransactionModalOpenedGetter():BehaviorSubject<boolean> {
    return this.isDeleteTransactionModalOpenedSubject;
  }

  set isDeleteTransactionModalOpenedSetter(bool:boolean) {
    this.isDeleteTransactionModalOpenedSubject.next(bool);
  }

}
