import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HoverDirective } from './directive/hover.directive';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { DateFormatterService } from './services/date-formatter.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    DatepickerComponent,
    HoverDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    HoverDirective,
    UppercasePipe
  ]
})
export class SharedModule {
  // to make a service available in other modules.
  static forRoot(){
    return {
      ngModule:SharedModule,
      providers:[DateFormatterService]
    }
  }
 }
