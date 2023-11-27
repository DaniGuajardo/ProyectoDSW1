import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Book, IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit{
  categories:Category[] = []

  IdBook:number=0;
  Title: String = '';
  Author: String = '';
  IdCategory: number = 0;
  Price:number = 0;
  Stock:number = 0;
  ImageUrl:String='';

  datosBook!: IBook;

  constructor(
    private location:Location,
    private bookService:BookService,
    private activeRoute:ActivatedRoute,
    private route:Router,
    private categoryService:CategoryService
    ){
      this.categoryService.getCategories().subscribe(res=>this.categories=res)      
  }

  ngOnInit(): void {
    let idBook = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.bookService.getBookById(idBook).subscribe((data) => {
      this.datosBook = data
      this.IdBook = idBook;
      this.Title = this.datosBook.title;
      this.Author = this.datosBook.author;
      this.IdCategory = this.datosBook.idBook;
      this.Price =this.datosBook.price;
      this.Stock= this.datosBook.stock;
      this.ImageUrl= this.datosBook.imageUrl;
    })
  }



  guardarLibro() {
    const book: Book = { idBook:this.IdBook,
                            title: this.Title, 
                            author: this.Author, 
                            idCategory: this.IdCategory,
                            price: this.Price,
                            stock: this.Stock,
                           imageUrl: this.ImageUrl };
    this.bookService.updateBook(book).subscribe(
      (result) => {
        console.log('Libro editado con éxito:', result);
        alert("El libro se ha editado correctamente");
        this.location.back();
      },
      (error) => {
        console.error('Error al editar Libro:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
