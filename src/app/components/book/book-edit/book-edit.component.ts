import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }
}
