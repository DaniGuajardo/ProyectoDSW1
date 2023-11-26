import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }

}
