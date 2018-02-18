import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  allHistory = [];


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.allHistory = JSON.parse(localStorage.getItem('history')).slice(0, 6);
  }

  getFullList() {
    this.allHistory = JSON.parse(localStorage.getItem('history'));

  }

  openMovie(id) {
    this.router.navigate(['']).then(() => {
      this.router.navigate(['movie', id]);
    });
  }
}
