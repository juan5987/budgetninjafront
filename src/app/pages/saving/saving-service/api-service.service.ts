import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }


  postSavingGoal(data : any){
    return this.http.post<any>("http://localhost:3000/savingList/",data);
  }

  getSavingGoal(){
    return this.http.get<any>("http://localhost:3000/savingList/");
  }

  putSavingGoal(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/savingList/" + id, data);
  }

  deleteSavingGoal(id : number){
    return this.http.delete<any>("http://localhost:3000/savingList/" + id);
  }


  postProgrammedSaving(data : any){
    return this.http.post<any>("http://localhost:3000/programmedSavingList/",data);
  }

  getProgrammedSaving(){
    return this.http.get<any>("http://localhost:3000/programmedSavingList/");
  }

  putProgrammedSaving(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/programmedSavingList/" + id, data);
  }

  deleteProgrammedSaving(id : number){
    return this.http.delete<any>("http://localhost:3000/programmedSavingList/" + id);
  }
























}
