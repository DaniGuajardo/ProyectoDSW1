import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books:Book[]=[]
  categories:Category[] = []

    constructor(
      private bookService:BookService,
      private categoryService:CategoryService
      ){
      this.bookService.getBooks().subscribe(res=>this.books=res);
      this.categoryService.getCategories().subscribe(res=>this.categories=res)
    }

    mostrarCategoria(categoria: Category): String{
      return categoria.name;
    }


     //METODO PARA ELIMIAR
    deleteBook(id: number | undefined) {
    if (id !== undefined) {
     if (confirm('¿Estás seguro de que quieres eliminar este Libro?')) {
        this.bookService.deleteBook(id).subscribe(() => {
          console.log('Libro eliminado correctamente.');
          this.bookService.getBooks().subscribe(res => this.books = res);
        });
      }
    }
}


}
