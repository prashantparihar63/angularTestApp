import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PromotedEmployeeComponent } from './promoted-employee/promoted-employee.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    PromotedEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
