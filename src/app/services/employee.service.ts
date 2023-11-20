import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7204/api/v1/Employee/"

  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}GetEmployees`);
  }

  getEmployeeById​(id: number):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}GetEmployeeById​/${id}`)
  }

  getEmployeesPagination(page:number, size:number):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}GetEmployees​/page/${page}/size/${size}`)
  }
  
  createEmployee(request: Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.url}CreateEmployee`, request)
  }

  updateEmployee(request: Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.url}UpdateEmployee`, request)
  }

  //deleteEmployee(id: number):Observable<boolean>{
  //  return this.httpClient.delete(`${this.url}DeleteEmployee/${id}`)
  //}

}
