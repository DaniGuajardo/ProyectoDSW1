import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { OrderItem } from 'src/app/models/order-item';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  books:Book[]=[]
  categories:Category[]=[]
  categorySelected:Category|undefined;
  Titulo:String = "Libros disponibles";
  idCat:number = 0;
  Cantidad:number = 1;

  IdBook:number=0; 
  Title:string="";
  Price:number=0.0; 
  Quantity:number=0;
  SubTotal:number=0.0;
  
  constructor(
    private bookService:BookService,
    private categoryService:CategoryService,
    private cartService:CartService){
    this.bookService.getBooks().subscribe(res=>this.books=res),
    this.categoryService.getCategories().subscribe(res=>{
      this.categories = res
    });
    
  }

  seleccionarCategoria(categoria:Category){
    this.categorySelected = categoria;
    this.idCat = Number(categoria.idCategory);
    if(categoria != null){
      this.Titulo = "Libros de "+ categoria.name;
      this.bookService.getBooksByCategory(this.idCat).subscribe(res=>this.books=res)
    }
    console.log(categoria)
  }

  listarProductos(){
    this.categorySelected = undefined;
    this.bookService.getBooks().subscribe(res=>this.books=res);
    this.Titulo = "Libros disponibles";
  }

  agregarCarrito(item:Book){
    this.cartService.addBook(item)
  }
  


}

