import { Component, OnInit, inject} from '@angular/core';
import { Location } from '@angular/common';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent  {
  route:ActivatedRoute = inject(ActivatedRoute)
  service = inject(CustomerService)
  customer:Customer = new Customer();

  IdCustomer:number=0;
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';
  constructor(
    private location:Location,
    private customerService:CustomerService){
      const IdCustomer = Number(this.route.snapshot.params['id']);
      this.service.getCustomerById(IdCustomer).subscribe(customer => {
        this.customer = customer;
       });
      this.IdCustomer=Number(this.route.snapshot.params['id'])
      
      //no muestra datos :(
      this.Name = String(this.customer?.name),
      this.Lastname = String(this.customer?.lastName),
      this.Dni = String(this.customer?.dni),
      this.Phone = String(this.customer?.phone),
      this.Email = String(this.customer?.email)
  }

  

 


  guardarCliente() {
    const customer: Customer = { idCustomer: this.IdCustomer,
                                  name: this.Name, 
                                  lastName: this.Lastname, 
                                  dni: this.Dni,
                                  phone: this.Phone,
                                  email: this.Email };
    this.customerService.updateCustomer(customer).subscribe(
      (result) => {
        console.log('Cliente editado con éxito:', result);
        this.location.back();
      },
      (error) => {
        console.error('Error al editar cliente:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
