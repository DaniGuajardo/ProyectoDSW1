import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      private categoryService:CategoryService,
      private router:Router
      ){
      this.bookService.getBooks().subscribe(res=>this.books=res);
      this.categoryService.getCategories().subscribe(res=>this.categories=res)
    }

    mostrarCategoria(categoria: Category): String{
      return categoria.name;
    }

    // Metodo para editar
  editBook(id:any) {
    this.router.navigate(['/mantenimiento/books/editBook', id]);
  }


     //METODO PARA ELIMIAR
    deleteBook(id: number | undefined) {
    if (id !== undefined) {
     if (confirm('¿Estás seguro de que quieres eliminar este Libro?')) {
        this.bookService.deleteBook(id).subscribe(() => {
          console.log('Libro eliminado correctamente.');
          alert("Se ha eliminado el libro");
          this.bookService.getBooks().subscribe(res => this.books = res);
        });
      }
    }
}


}
