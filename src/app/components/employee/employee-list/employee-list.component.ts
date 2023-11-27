import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:Employee[]=[]
  constructor(private employeeService:EmployeeService){
    this.employeeService.getEmployees().subscribe(res=>this.employees=res)
  }


 //METODO PARA ELIMIAR
 deleteEmployee(id: number | undefined) {
  if (id !== undefined) {
    if (confirm('¿Estás seguro de que quieres eliminar al Trabajador?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        console.log('Trabajador eliminado correctamente.');
        // Recargar la lista de categorías después de la eliminación
        this.employeeService.getEmployees().subscribe(res => this.employees = res);
      });
    }
  }
}

}
