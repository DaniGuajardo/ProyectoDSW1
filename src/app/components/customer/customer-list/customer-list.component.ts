import { Component, inject } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers:Customer[]=[]
  service: CustomerService = inject(CustomerService)
  constructor(private customerService:CustomerService){
    this.customerService.getCustomers().subscribe(res=>this.customers=res)
  }
}
