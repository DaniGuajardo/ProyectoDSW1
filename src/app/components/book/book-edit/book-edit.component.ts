import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  service = inject(BookService)
  book:Book = new Book();

  IdBook:number=0;
  Title: String = '';
  Author: String = '';
  IdCategory: number = 0;
  Price:number = 0;
  Stock:number = 0;
  ImageUrl:String='';

  constructor(
    private location:Location,
    private bookService:BookService,
    ){
      const IdBook= Number(this.route.snapshot.params['id']);
      this.service.getBookById(IdBook).subscribe(book => {
        this.book = book;
       });
      this.IdBook=Number(this.route.snapshot.params['id'])

      //no muestra datos :(
        this.Title = String(this.book?.title),
        this.Author = String(this.book?.author),
        this.IdCategory = Number(this.book?.idCategory),
        this.Price = Number(this.book?.price),
        this.Stock = Number(this.book?.stock),
        this.ImageUrl = String(this.book?.imageUrl)
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
