import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { EmployeeModule } from './employee/employee.module';
import { LoginModule } from './user-login/login.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => LoginModule
  },
  {
    path: 'employee',
    loadChildren: () => EmployeeModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {

}

