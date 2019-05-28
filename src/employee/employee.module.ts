import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PromotedEmployeeComponent } from './promoted-employee/promoted-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    PromotedEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class EmployeeModule { }
