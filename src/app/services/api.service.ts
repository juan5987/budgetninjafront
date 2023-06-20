import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient) { }
  postCategorie(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/categories", data);
  }

  getCategorie(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/categories");
  }

  putCategorie(data: any, id: number): Observable<any> {
    return this.http.put<any>("http://localhost:8080/categories/" + id, data);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/categories/" + id);
  }

  getAllCategoriesByUserId(userId: number): Observable<any[]> {
    const url = `http://localhost:8080/categories/${userId}`;
    return this.http.get<any[]>(url);
  }
}
