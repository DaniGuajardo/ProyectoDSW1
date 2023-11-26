import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }

}
