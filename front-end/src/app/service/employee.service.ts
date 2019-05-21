import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL: string = "http://localhost:8080/employees"

  constructor(private httpClient: HttpClient) { }

  create(emp: Employee):Observable<any> {
    let options = { "headers": 
                  new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.httpClient.post<Employee>(this.API_URL + "/create", emp, options);
  }

  findById(id:number):Observable<any>{
    let options = { "headers": 
                  new HttpHeaders({ "Accept": "application/json" }) };
    return this.httpClient.get<Employee>(this.API_URL+"/"+id,options);
  }

  

}
