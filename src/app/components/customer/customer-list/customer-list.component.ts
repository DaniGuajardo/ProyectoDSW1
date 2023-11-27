import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers:Customer[]=[]
  constructor(
    private customerService:CustomerService,
    private router:Router){
    this.customerService.getCustomers().subscribe(res=>this.customers=res)
  }

  // Metodo para editar
  editCustomer(id:any) {
    this.router.navigate(['/mantenimiento/customers/editCustomer', id]);
  }

 //METODO PARA ELIMIAR
 deleteCustomer(id: number | undefined) {
  if (id !== undefined) {
    if (confirm('¿Estás seguro de que quieres eliminar este Cliente?')) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        console.log('Cliente eliminada correctamente.');
        alert("Se ha eliminado el cliente");
        // Recargar la lista de categorías después de la eliminación
        this.customerService.getCustomers().subscribe(res => this.customers = res);
      });
    }
  }
}

}
