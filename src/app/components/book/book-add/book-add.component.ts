import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  categories:Category[] = []

  Title: String = '';
  Author: String = '';
  IdCategory: number = 0;
  Price:number = 0;
  Stock:number = 0;
  ImageUrl:String='';

  constructor(
    private location:Location,
    private bookService:BookService,
    private categoryService:CategoryService){
      this.categoryService.getCategories().subscribe(res=>this.categories=res)
  }

  guardarLibro() {
    const newBook: Book = { title: this.Title, 
                            author: this.Author, 
                            idCategory: this.IdCategory,
                            price: this.Price,
                            stock: this.Stock,
                          imageUrl: this.ImageUrl };
    this.bookService.createBook(newBook).subscribe(
      (result) => {
        console.log('Libro creado con éxito:', result);
        this.location.back();
      },
      (error) => {
        console.error('Error al crear Libro:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
