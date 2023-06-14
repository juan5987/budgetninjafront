import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  postAlert(data : any){
    return this.http.post<any>("http://localhost:3000/alertList/",data);
  }

  getAlert(){
    return this.http.get<any>("http://localhost:3000/alertList/");
  }

  putAlert(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/alertList/" + id, data);
  }

  deleteAlert(id : number){
    return this.http.delete<any>("http://localhost:3000/alertList/" + id);
  }


}
