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


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'mantenimiento', component:CrudComponent, 
  children:[
    {path:'categories', component:CategoryListComponent, title: 'Categorias'},
    {path:'books', component:BookListComponent, title: 'Libros'},
    {path:'customers', component:CustomerListComponent, title: 'Clientes'},
    {path:'employees', component:EmployeeListComponent, title: 'Empleados'}
  ]}
  
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
    CrudComponent
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
