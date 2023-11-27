import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:Employee[]=[]
  constructor(
    private employeeService:EmployeeService,
    private router:Router
    ){
    this.employeeService.getEmployees().subscribe(res=>this.employees=res)
  }


  // Metodo para editar
  editEmployee(id:any) {
    this.router.navigate(['/mantenimiento/employees/editEmployee', id]);
  }
 

 //METODO PARA ELIMIAR
 deleteEmployee(id: number | undefined) {
  if (id !== undefined) {
    if (confirm('¿Estás seguro de que quieres eliminar al Trabajador?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        console.log('Trabajador eliminado correctamente.');
        alert("Se ha eliminado el empleado");
        // Recargar la lista de categorías después de la eliminación
        this.employeeService.getEmployees().subscribe(res => this.employees = res);
      });
    }
  }
}

}
