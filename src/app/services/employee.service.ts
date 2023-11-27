import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee, IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7204/api/v1/Employee/"

  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}GetEmployees`);
  }

  getEmployeeById​(id: number):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(`${this.url}GetEmployeeById/${id}`).pipe(catchError(this.handleError))
  }

  getEmployeesPagination(page:number, size:number):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}GetEmployees/page/${page}/size/${size}`)
  }
  
  createEmployee(request: Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.url}CreateEmployee`, request)
  }

  updateEmployee(request: Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.url}UpdateEmployee`, request)
  }

  deleteEmployee(id: number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}DeleteEmployee?idEmployee=${id}`)
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
