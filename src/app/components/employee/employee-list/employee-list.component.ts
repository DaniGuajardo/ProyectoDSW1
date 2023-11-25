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

}
