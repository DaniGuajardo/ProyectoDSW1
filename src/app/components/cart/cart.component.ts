import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Order } from 'src/app/models/order';
import { OrderItem } from 'src/app/models/order-item';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  customers:Customer[]=[]
  IdCustomer: number = 0;
  CustomerName?:String 
  
  Total:number=this.totalCart();
  IdBook?:number 
  Title?:String 
  UnitPrice?:number 
  Quantity?:number
  SubTotal?:number

  myCart$ = this.cartService.myCart$

  constructor(
    private customerService:CustomerService,
    private cartService:CartService,
    private location:Location){
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

  


  guardarOrder() {
    const newOrderItem: OrderItem = { idBook: this.IdBook,
                                      title: this.Title,
                                      unitPrice: this.UnitPrice,
                                      quantity: this.Quantity,
                                      subTotal: this.SubTotal};
    const newOrder:Order = { idCustomer:this.IdCustomer,
                             customerName:this.CustomerName,
                             amount:this.Total,
                             orderItem:[newOrderItem]};
                             
    this.cartService.placeOrder(newOrder).subscribe(
      (result) => {
        console.log('Compra creado con éxito:', result);
        alert("La compra se ha registrado correctamente");
      },
      (error) => {
        console.error('Error al crear Order:', error);
      }
    );
  }
  
 

}





