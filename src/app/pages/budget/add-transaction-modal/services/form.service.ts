import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { addTransactionForm } from '../models/addTransactionForm';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Erreur:', error.error);
    } else {
      console.error(
        `code erreur:  ${error.status}, message: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Erreur lors de la soumission du formulaire'));
  }

  //TODO - Add API URL
  apiUrl = 'http://localhost:3000/api/transactions';

  addTransaction(FormValues: addTransactionForm): Observable<addTransactionForm> {
    return this.http.post<addTransactionForm>(this.apiUrl, FormValues)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http: HttpClient) { }
}
