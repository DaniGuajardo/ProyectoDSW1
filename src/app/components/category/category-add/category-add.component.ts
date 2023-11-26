import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }

}
