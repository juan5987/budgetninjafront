import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { addTransactionForm } from '../models/addTransactionForm';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  userId: number = 1;
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Erreur:', error.error);
    } else {
      console.error(
        `code erreur:  ${error.status}, message: `, error.error);
    }
    return throwError(() => new Error('Erreur lors de la soumission du formulaire'));
  }

  apiUrl = 'http://localhost:3000';

  addTransaction(FormValues: addTransactionForm): Observable<addTransactionForm> {
    return this.http.post<addTransactionForm>(`${this.apiUrl}/transactions/${this.userId}`, FormValues)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTransaction(FormValues: addTransactionForm): Observable<addTransactionForm> {
    return this.http.put<addTransactionForm>(this.apiUrl, FormValues)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http: HttpClient) { }
}
