import { Component, Input, OnInit, inject } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CategoryService } from 'src/app/services/category.service';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

}
