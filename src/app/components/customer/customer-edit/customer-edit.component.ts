import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer, ICustomer } from 'src/app/models/customer';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  IdCustomer:number=0;
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';

  datosCustomer!:ICustomer;

  constructor(
    private location:Location,
    private customerService:CustomerService,
    private activeRoute:ActivatedRoute,
    private route:Router){

  }

  ngOnInit(): void {
    let idCustomer = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.customerService.getCustomerById(idCustomer).subscribe((data) => {
      this.datosCustomer = data
      this.IdCustomer = idCustomer;
      this.Name = this.datosCustomer.name;
      this.Lastname = this.datosCustomer.lastName;
      this.Dni = this.datosCustomer.dni;
      this.Phone =this.datosCustomer.phone;
      this.Email= this.datosCustomer.email;
    })
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
        alert("El cliente se ha editado correctamente");
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
