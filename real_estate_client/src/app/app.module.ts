import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/property-add/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail/property-detail.component';
import { ErrorPageComponent } from './error-page/error-page/error-page.component';
import { UserLoginComponent } from './user/login/user-login/user-login.component';
import { UserRegisterComponent } from './user/register/user-register/user-register.component';

// providers
import { HousingService } from './services/housing.service';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    ErrorPageComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
],
  providers: [
    provideHttpClient(),
    HousingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
