import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7166/api/v1/Customer/"

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.url}GetCustomers`);
  }

  getCustomerById​(id: number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.url}GetCustomerById​/${id}`)
  }

  getCustomersPagination(page:number, size:number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.url}GetCustomers/page/${page}/size/${size}`)
  }

  createCustomer(request: Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.url}CreateCustomer`, request)
  }

  updateCustomer(request: Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(`${this.url}UpdateCustomer`, request)
  }

  //deleteCustomer(id: number):Observable<boolean>{
  //  return this.httpClient.delete(`${this.url}DeleteCustomer/${id}`)
  //}

}
