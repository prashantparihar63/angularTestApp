import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule
  ]
})
export class LoginModule { }
