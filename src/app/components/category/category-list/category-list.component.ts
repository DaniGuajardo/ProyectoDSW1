import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  //METODO PARA ELIMIAR
  deleteCategory(id: number | undefined) {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
        this.categoryService.deleteCategory(id).subscribe(() => {
          console.log('Categoría eliminada correctamente.');
          // Recargar la lista de categorías después de la eliminación
          this.categoryService.getCategories().subscribe(res => this.categories = res);
        });
      }
    }
  }
}

