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
import { MessageService } from 'primeng/api';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';

// PrimeNG config
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// PrimeNG UI components
import { ButtonModule } from 'primeng/button';
import { ToastModule  } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { TabsModule } from 'primeng/tabs';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DatePicker } from 'primeng/datepicker';

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
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    MenuModule,
    TabsModule,
    RadioButtonModule,
    DatePicker
],
  providers: [
    provideHttpClient(),
    HousingService,
    UserService,
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        },
    }),
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
