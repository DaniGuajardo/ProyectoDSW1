import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  url = "https://localhost:7250/api/v1/Category/"

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.url}GetCategories`)
  }

  getCategoryById(id: number):Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.url}GetCategoryById/${id}`)
  }

  getCategoriesPagination(page:number, size:number):Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.url}GetCategories/page/${page}/size/${size}`)
  }
  //https://localhost:7250/api/v1/Category/GetCategories/page/0/size/2

  createCategory(request: Category):Observable<Category>{
    return this.httpClient.post<Category>(`${this.url}CreateCategory`, request);
  }

  updateCategory(request: Category):Observable<Category>{
    return this.httpClient.put<Category>(`${this.url}UpdateCategory`, request)
  }

  deleteCategory(id: number):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}DeleteCategory/${id}`)
  }

}
