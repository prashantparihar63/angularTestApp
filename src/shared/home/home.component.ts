import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testVariable: string;
  constructor() {
    this.testVariable = "hi this is test value and a example of camel case.";
  }

  ngOnInit() {
  }

}
