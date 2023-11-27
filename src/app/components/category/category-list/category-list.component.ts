import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router:Router) {
    this.categoryService.getCategories().subscribe(res => this.categories = res);
  }

  // Metodo para editar
  editCategory(id:any) {
    this.router.navigate(['/mantenimiento/categories/editCategory', id]);
  }

  //METODO PARA ELIMIAR
  deleteCategory(id: number | undefined) {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
        this.categoryService.deleteCategory(id).subscribe(() => {
          console.log('Categoría eliminada correctamente.');
          alert("Se ha eliminado la categoria");
          // Recargar la lista de categorías después de la eliminación
          this.categoryService.getCategories().subscribe(res => this.categories = res);
        });
      }
    }
  }
}

