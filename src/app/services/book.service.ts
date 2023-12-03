import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book, IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7062/api/v1/Book/"

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}GetBooks`)
  }

  getBookById(id: number):Observable<IBook>{
    return this.httpClient.get<IBook>(`${this.url}GetBookById/${id}`)
  }

  getBooksPagination(page:number, size:number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}GetBooks/page/${page}/size/${size}`)
  }

  createBook(request: Book):Observable<Book>{
    return this.httpClient.post<Book>(`${this.url}CreateBook`, request)
  }

  updateBook(request: Book):Observable<Book>{
    return this.httpClient.put<Book>(`${this.url}UpdateBook`, request)
  }

  deleteBook(id: number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}DeleteBook?idBook=${id}`)
  }

  getBooksByCategory(id: number){
    return this.httpClient.get<Book[]>(`${this.url}GetBooksByCategory/${id}`).pipe(catchError(this.handleError))
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
