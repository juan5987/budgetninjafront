import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient) { }
  postCategorie(data : any){
    return this.http.post<any>("http://localhost:8080/categorieList",data)
  }
  getCategorie(){
    return this.http.get<any>("http://localhost:8080/categorieList");
}
putCategorie(data:any, id:number ){
return this.http.post<any>("http://localhost:8080/categorieList/"+id,data)
}
deteleCategorie(id:number){
  return this.http.delete<any>("http://localhost:8080/categorieList/"+id)
}
}
