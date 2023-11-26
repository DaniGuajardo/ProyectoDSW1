import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarInicioComponent } from './components/navbar/navbar-inicio/navbar-inicio.component';
import { NavbarCrudComponent } from './components/navbar/navbar-crud/navbar-crud.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { InicioComponent } from './components/inicio/inicio.component';
import { CrudComponent } from './components/crud/crud.component';

import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryComponent } from './components/category/category/category.component';
import { BookComponent } from './components/book/book/book.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'mantenimiento', component:CrudComponent, 
  children:[
    {path:'categories', component:CategoryComponent, title: 'Categorias',
      children:[
        {path: '', component: CategoryListComponent},
        {path: 'addCategory', component: CategoryAddComponent, title:'Nueva Categoria'},
        {path: 'editCategory', component: CategoryEditComponent, title:'Editar Categoria'}
      ]},
    {path:'books', component:BookComponent, title: 'Libros',
    children:[
      {path: '', component: BookListComponent},
      {path: 'addBook', component: BookAddComponent, title:'Nuevo Libro'},
      {path: 'editBook', component: BookEditComponent, title:'Editar Libro'}
    ]},
    {path:'customers', component:CustomerComponent, title: 'Clientes',
    children:[
      {path: '', component: CustomerListComponent},
      {path: 'addCustomer', component: CustomerAddComponent, title:'Nuevo Cliente'},
      {path: 'editCustomer', component: CustomerEditComponent, title:'Editar Cliente'}
    ]},
    {path:'employees', component:EmployeeComponent, title: 'Empleados',
    children:[
      {path: '', component: EmployeeListComponent},
      {path: 'addEmployee', component: EmployeeAddComponent, title:'Nuevo Empleado'},
      {path: 'editEmployee', component: EmployeeEditComponent, title:'Editar Empleado'}
    ]},
   
  ]},
  
  
];



@NgModule({
  declarations: [
    AppComponent,

    CartStatusComponent,
    FooterComponent,
    ProductListComponent,
    SidebarComponent,
    NavbarInicioComponent,
    NavbarCrudComponent,
    CategoryListComponent,
    BookListComponent,
    CustomerListComponent,
    EmployeeListComponent,
    InicioComponent,
    CrudComponent,
    CategoryAddComponent,
    CategoryComponent,
    BookComponent,
    EmployeeComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CategoryEditComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    BookAddComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
