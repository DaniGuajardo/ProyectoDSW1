import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  service = inject(EmployeeService)
  employee:Employee = new Employee();

  IdEmployee:number=0;
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';

  constructor(
    private location:Location,
    private employeeService:EmployeeService
    ){
      const IdEmployee = Number(this.route.snapshot.params['id']);
      this.service.getEmployeeById(IdEmployee).subscribe(employee => {
        this.employee = employee;
       });
      this.IdEmployee=Number(this.route.snapshot.params['id'])
      
      //no muestra datos :(
      this.Name = String(this.employee?.name),
      this.Lastname = String(this.employee?.lastName),
      this.Dni = String(this.employee?.dni),
      this.Phone = String(this.employee?.phone),
      this.Email = String(this.employee?.email)
  }

  guardarEmpleado() {
    const newEmployee: Employee = { idEmployee: this.IdEmployee,
                                    name: this.Name, 
                                    lastName: this.Lastname, 
                                    dni: this.Dni,
                                    phone: this.Phone,
                                    email: this.Email };
    this.employeeService.createEmployee(newEmployee).subscribe(
      (result) => {
        console.log('Empleado editado con éxito:', result);
        this.location.back();
      },
      (error) => {
        console.error('Error al editar Empleado:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }
}
