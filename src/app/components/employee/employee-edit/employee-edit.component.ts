import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }
}
