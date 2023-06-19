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

// SAVING : pour le montant de l'épargne affiché dans la page principale
  getSavingAmount() {
    return this.http.get<Saving>(`${this.apiURL}/savings/user/1`);
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
  deleteProject(userId: number){
    return this.http.delete<Project>(`${this.apiURL}/projects/${userId}`);
  }

  // putSavingGoal(data: Saving, id: number) {
  //   return this.http.put<Saving>(`${this.apiURL}/user/${id}`, data);
  // }
  //
  // deleteSavingGoal(id: number) {
  //   return this.http.delete<any>(`${this.apiURL}/user/${id}`);
  // }



  // PROGRAMMED SAVING : représentent la première partie de la page.
  postProgrammedSavingAmount(saving: Saving) {

    return this.http.post<Saving>(`${this.apiURL}/programmed/1`, saving);
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
