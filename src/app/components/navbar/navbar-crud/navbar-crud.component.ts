import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar-crud',
  templateUrl: './navbar-crud.component.html',
  styleUrls: ['./navbar-crud.component.css']
})
export class NavbarCrudComponent {
  isNavbarHidden = false;

  constructor(
    private location:Location
    ){
  }

  goBack(){
    this.location.back();
  }
}
