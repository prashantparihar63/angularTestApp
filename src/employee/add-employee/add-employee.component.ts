import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  valueToTransform: string;
  constructor() {
    this.valueToTransform = "hi this string is transformed using custom pipe."
  }

  ngOnInit() {

  }

}
