import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '..//..//..//models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  Name: string = '';

  constructor(private router: Router, private categoryService: CategoryService) { }

  guardarCategoria() {
    const newCategory: Category = { name: this.Name };
    this.categoryService.createCategory(newCategory).subscribe(
      (result) => {
        console.log('Categoría creada con éxito:', result);
        //REDIRIGIR AL LISTADO CATEGORIAS
        this.router.navigate(['/mantenimiento/categories']);
      },
      (error) => {
        console.error('Error al crear la categoría:', error);
      }
    );
  }

  goBack() {
    // VOLVER
    this.router.navigate(['/mantenimiento/categories']);
  }
}


