import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allHistory = [];


  constructor() {
  }

  ngOnInit() {
    this.allHistory = JSON.parse(localStorage.getItem('history')).slice(0, 4);
  }

  getFullList() {
    this.allHistory = JSON.parse(localStorage.getItem('history'));

  }

}
