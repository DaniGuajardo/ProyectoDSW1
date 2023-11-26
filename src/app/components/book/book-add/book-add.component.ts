import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  constructor(private location:Location){
  }

  goBack(){
    this.location.back();
  }
}
