import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7062/api/v1/Book/"

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}GetBooks`)
  }

  getBookById​(id: number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}GetBookById​/${id}`)
  }

  getBooksPagination(page:number, size:number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}GetBooks​/page/${page}/size/${size}`)
  }
  // /​/api​/v1​/Book​/GetBooks​/page​/{page}​/size​/{size}

  createBook(request: Book):Observable<Book>{
    return this.httpClient.post<Book>(`${this.url}CreateBook`, request)
  }

  updateBook(request: Book):Observable<Book>{
    return this.httpClient.put<Book>(`${this.url}UpdateBook`, request)
  }

  deleteBook(id: number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}DeleteBook/${id}`)
  }

}
