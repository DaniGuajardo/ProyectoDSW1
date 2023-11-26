import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }

}
