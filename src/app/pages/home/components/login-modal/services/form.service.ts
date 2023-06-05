import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginForm } from '../models/form';

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
    return throwError(() => new Error('Erreur lors de la connexion'));
  }

  //TODO - Add API URL
  apiUrl = 'http://localhost:3000/api/login';

  signup(FormValues: LoginForm): Observable<LoginForm> {
    return this.http.post<LoginForm>(this.apiUrl, FormValues)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http: HttpClient) { }
}
