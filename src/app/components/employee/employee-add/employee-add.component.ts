import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }
}
