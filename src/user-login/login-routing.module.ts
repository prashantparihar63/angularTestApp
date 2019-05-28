import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutingModule { }
