import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  customers:Customer[]=[]
  IdCustomer: number = 0;
  Total:number=this.totalCart();
  
  
 
  myCart$ = this.cartService.myCart$

  constructor(
    private customerService:CustomerService,
    private cartService:CartService){
    this.customerService.getCustomers().subscribe(res=>this.customers=res)
  }

  subtotalBook(price:number, units:number){
    return price * units
  }
  deleteBook(id:number){
    this.cartService.deleteBook(id)
  }

  updateUnits(operation: string, id: number) {

    const book = this.cartService.findBookById(id)
    if (book) {
      if (operation === 'minus' && book.stock! > 0) {
        book.stock = book.stock! - 1;
      }
      if (operation === 'add') {
        book.stock = book.stock! + 1;

      }
      if (book.stock! === 0) {
        this.deleteBook(id)
      }
    }

  }

  totalCart(){
    const result = this.cartService.totalCart();
    return result;
  }

  
 

}





