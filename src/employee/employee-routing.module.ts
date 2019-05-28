import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PromotedEmployeeComponent } from './promoted-employee/promoted-employee.component';
import { HomeComponent } from 'src/shared/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: 'update',
    component: UpdateEmployeeComponent
  },
  {
    path: 'promoted',
    component: PromotedEmployeeComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }
