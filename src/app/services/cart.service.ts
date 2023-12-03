import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, IOrder } from '../models/order';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //lista carrito
  private  myList:Book[]=[]

  //carrito
  private myCart = new BehaviorSubject<Book[]>([]);
  myCart$ = this.myCart.asObservable();

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

  addBook(book:Book){
    if(this.myList.length == 0){
      book.stock = 1
      this.myList.push(book)
      this.myCart.next(this.myList)
    }
    else{
      const bookMod = this.myList.find((element) => {
        return element.idBook === book.idBook
      })
      if (bookMod) {
        bookMod.stock = bookMod.stock! + 1;
        this.myCart.next(this.myList);
      } else {
        book.stock = 1;
        this.myList.push(book);
        //ojo hay que emitir la lista!!
        this.myCart.next(this.myList);
      }
    }
  }

  deleteBook(id:number){
    this.myList = this.myList.filter((book) => {
      return book.idBook != id
    })
    this.myCart.next(this.myList);
  }

  
}
