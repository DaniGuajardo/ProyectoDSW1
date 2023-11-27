import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category, ICategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  IdCategory:number=0;
  Name: String = '';

  datosCategory!:ICategory

  constructor(
    private location:Location,
    private categoryService:CategoryService,
    private activeRoute:ActivatedRoute
    ){
  }

  ngOnInit(): void {
    let idCategory = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.categoryService.getCategoryById(idCategory).subscribe((data) => {
      this.datosCategory = data
      this.IdCategory = idCategory;
      this.Name = this.datosCategory.name;
    })
  }

  guardarCategoria(){
    const category: Category = { idCategory: this.IdCategory,
                                 name: this.Name };
    this.categoryService.updateCategory(category).subscribe(
      (result) => {
        console.log('Categoria editada con éxito:', result);
        alert("La categoria se ha editado correctamente");
        this.location.back();
      },
      (error) => {
        console.error('Error al editar Categoria:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
