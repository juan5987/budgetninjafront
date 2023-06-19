import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {Saving} from "../models/saving";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {




  constructor(private http: HttpClient) {
  }

  // un subject est un observateur et un observable
  private savingUpdated: Subject<void> = new Subject<void>();

  apiURL = 'http://localhost:8080';

// SAVING et PROGRAMMED SAVING: pour le montant de l'épargne affiché dans la page principale et pour l'épargne programmée
  getSavingAmount() {
    return this.http.get<Saving>(`${this.apiURL}/savings/user/1`);
  }

  getSavingByUserId(userId: number) {
    return this.http.get<Saving>(`${this.apiURL}/savings/user/${userId}`);
  }

  addSavingToUser(saving: Saving) {
    return this.http.post<Saving>(`${this.apiURL}/savings/1`, saving);
  }

  addProgrammedSaving( saving: Saving) {
    return this.http.post<Saving>(`${this.apiURL}/savings/programmed/1`, saving);
  }

  updateProgrammedSaving( saving: Saving) {
    return this.http.put<Saving>(`${this.apiURL}/savings/programmed/1`, saving);
  }

  updateSaving(savingId: number, saving: Saving) {
    return this.http.put<Saving>(`${this.apiURL}/savings/${savingId}`, saving);
  }

  deleteSaving(savingId: number) {
    return this.http.delete<void>(`${this.apiURL}/savings/${savingId}`);
  }


// PROJECTS : représentent la deuxième partie de la page
  postProject(data: Project) {
    return this.http.post<Project>(`${this.apiURL}/projects/1`, data);
  }

  getProjectById(userId: number) {
    return this.http.get<Project>(`${this.apiURL}/projects/${userId}`);
  }

  getAllProject(){
    return this.http.get<Project>(`${this.apiURL}/projects`);
  }

  updateProject(projectId: number, project: Project) {
    return this.http.put<Project>(`${this.apiURL}/projects/${projectId}`, project);
  }
  deleteProject(){
    return this.http.delete<Project>(`${this.apiURL}/projects/1`);
  }



}
