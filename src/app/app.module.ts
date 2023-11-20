import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartStatusComponent,
    FooterComponent,
    ProductListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
