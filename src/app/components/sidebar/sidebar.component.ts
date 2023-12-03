import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories:Category[]=[]
  categorySelected:Category|undefined;

  constructor(private categoryService:CategoryService){
    this.categoryService.getCategories().subscribe(res=>{
      this.categories = res
    })
  }

  seleccionarCategoria(categoria:Category){
    this.categorySelected = categoria;
  }
}


