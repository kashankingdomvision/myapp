import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string= '';

  constructor() {
    console.log("Constructor loads");
  }

  ngOnInit() {
    console.log("Home Component loads");
  }

  countClick() {
    this.clickCounter++;
  }

}
