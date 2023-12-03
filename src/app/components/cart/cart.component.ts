import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  customers:Customer[]=[]
  IdCustomer: number = 0;
  SubTotal:number=0.00;
  Envio:number=0.0;
  Descuento:number=0.0;
  Total:number=0.0;
 
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

}





