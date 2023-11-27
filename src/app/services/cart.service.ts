import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, IOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7116/api/v1/Cart/"

  getOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.url}GetOrders`);
  }

  placeOrder(request: Order):Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.url}PlaceOrder`, request)
  }

  getOrderById(id: number):Observable<IOrder>{
    return this.httpClient.get<IOrder>(`${this.url}GetOrderById/${id}`)
  }

  getOrderByCustomer(id: number):Observable<Order>{
    return this.httpClient.get<Order>(`${this.url}GetOrderByCustomer/${id}`)
  }

}
