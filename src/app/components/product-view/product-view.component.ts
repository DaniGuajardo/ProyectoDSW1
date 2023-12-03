import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book, IBook } from 'src/app/models/book';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: IBook | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private location:Location,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    // Leer el ID del producto de la URL
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      // Obtener detalles del producto según el ID
      this.bookService.getBookById(Number(productId)).subscribe(
        (producto: IBook) => {
          this.product = producto;
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    }
  }

  agregarCarrito(item:Book){
    this.cartService.addBook(item)
  }

  // Método para ir hacia atrás
  goBack(){
    this.location.back();
  }
}


