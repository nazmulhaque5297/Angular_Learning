import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';

@NgModule({
  declarations: [
    AppComponent,FirstComponent,RegistrationComponent, BaseComponentComponent, HeaderComponentComponent, SignInComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
