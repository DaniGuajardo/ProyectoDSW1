import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';

  constructor(
    private location:Location,
    private customerService:CustomerService){
  }

  guardarCliente() {
    const newCustomer: Customer = { name: this.Name, 
                                    lastName: this.Lastname, 
                                    dni: this.Dni,
                                    phone: this.Phone,
                                    email: this.Email };
    this.customerService.createCustomer(newCustomer).subscribe(
      (result) => {
        console.log('Cliente creado con éxito:', result);
        this.location.back();
      },
      (error) => {
        console.error('Error al crear cliente:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
