import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import {Saving} from "../models/saving";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  // un subject est un observateur et un observable
  private savingUpdated: Subject<void> = new Subject<void>();

  apiURL = 'http://localhost:8080/savings';

  getSavingUpdated(): Observable<void> {
    return this.savingUpdated.asObservable();
  }

  // retourne un observable data
  emitSavingUpdated(): void {
    this.savingUpdated.next();
  }




// SAVING GOALS
  postSavingGoal(data: Saving) {
    return this.http.post<Saving>(`${this.apiURL}/user/userId`, data);
  }

  getSavingGoal() {
    return this.http.get<Saving[]>(`${this.apiURL}/user/1`);
  }

  putSavingGoal(data: Saving, id: number) {
    return this.http.put<Saving>(`${this.apiURL}/user/${id}`, data);
  }

  deleteSavingGoal(id: number) {
    return this.http.delete<any>(`${this.apiURL}/user/${id}`);
  }






  // PROGRAMMED GOALS
  postProgrammedSaving(data: any) {
    return this.http.post<any>(`${this.apiURL}/programmedSavingList/`, data);
  }

  getProgrammedSaving() {
    return this.http.get<any>(`${this.apiURL}/programmedSavingList/`);
  }

  putProgrammedSaving(data: any, id: number) {
    return this.http.put<any>(`${this.apiURL}/programmedSavingList/${id}`, data);
  }

  deleteProgrammedSaving(id: number) {
    return this.http.delete<any>(`${this.apiURL}/programmedSavingList/${id}`);
  }

























}
