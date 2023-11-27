import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';

  constructor(
    private location:Location, 
    private employeeService:EmployeeService){
  }

  guardarEmpleado() {
    const newEmployee: Employee = { name: this.Name, 
                                    lastName: this.Lastname, 
                                    dni: this.Dni,
                                    phone: this.Phone,
                                    email: this.Email };
    this.employeeService.createEmployee(newEmployee).subscribe(
      (result) => {
        console.log('Empleado creado con éxito:', result);
        alert("El empleado se ha registrado correctamente");
        this.location.back();
      },
      (error) => {
        console.error('Error al crear Empleado:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
