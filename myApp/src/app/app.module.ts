import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { PersonComponentComponent } from './person-component/person-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListComponent } from './product-component/product-list/product-list.component';
import { SingleProductComponent } from './product-component/single-product/single-product.component';



@NgModule({
  declarations: [
    AppComponent,FirstComponent,RegistrationComponent, BaseComponentComponent, HeaderComponentComponent, SignInComponentComponent, PersonComponentComponent, ProductComponentComponent, ProductListComponent, SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
