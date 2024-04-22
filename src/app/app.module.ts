import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationBarComponent,
    HomepageComponent,
    AboutComponent,
    DepartmentsComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
