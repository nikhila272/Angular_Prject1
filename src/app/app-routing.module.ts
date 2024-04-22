import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'home', component:HomepageComponent, canActivate: [AuthGuard]},
  {path:'about', component:AboutComponent, canActivate: [AuthGuard]},
  {path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
