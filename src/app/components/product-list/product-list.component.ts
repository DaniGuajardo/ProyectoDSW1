import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  books:Book[]=[]
  constructor(private bookService:BookService){
    this.bookService.getBooks().subscribe(res=>this.books=res)
  }

}
