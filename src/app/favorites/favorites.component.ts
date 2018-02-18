import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  allFavorite: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.allFavorite = JSON.parse(localStorage.getItem('favorites')).slice(0, 6);
  }

  showAll () {
    this.allFavorite = JSON.parse(localStorage.getItem('favorites'));
  }

  openMovie(id) {
    this.router.navigate(['']).then(() => {
      this.router.navigate(['movie', id]);
    });
  }

}
