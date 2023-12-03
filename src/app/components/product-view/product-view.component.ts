import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/models/book';

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
    private bookService: BookService
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

  // Método para ir hacia atrás
  goBack(): void {
    this.router.navigate(['/product-list']);
  }
}


