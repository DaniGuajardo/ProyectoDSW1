import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Employee , IEmployee} from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  IdEmployee:number=0;
  Name: String = '';
  Lastname: String = '';
  Dni:String = '';
  Phone:String = '';
  Email:String='';

  datosEmployee!:IEmployee;
  
  constructor(
    private location:Location,
    private employeeService:EmployeeService,
    private activeRoute:ActivatedRoute,
    private route:Router
    ){
      
  }

  ngOnInit(): void {
    let idEmployee = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(idEmployee).subscribe((data) => {
      this.datosEmployee = data
      this.IdEmployee = idEmployee;
      this.Name = this.datosEmployee.name;
      this.Lastname = this.datosEmployee.lastName;
      this.Dni = this.datosEmployee.dni;
      this.Phone =this.datosEmployee.phone;
      this.Email= this.datosEmployee.email;
    })
  }

  guardarEmpleado() {
    const employee: Employee = { idEmployee: this.IdEmployee,
                                    name: this.Name, 
                                    lastName: this.Lastname, 
                                    dni: this.Dni,
                                    phone: this.Phone,
                                    email: this.Email };
    this.employeeService.updateEmployee(employee).subscribe(
      (result) => {
        console.log('Empleado editado con éxito:', result);
        alert("El empleado se ha editado correctamente");
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
