import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../service/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  currentMovie: any = {};
  favorites: any = [];
  isFavorite = false;

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res.id);
      this.moviesService.getById(res.id).subscribe((data: any) => {
        this.currentMovie = data;
        for (let i = 0; i < this.favorites.length; i++) {
          console.log(this.favorites[i].id, this.currentMovie.imdbID);
          if (this.favorites[i].id === this.currentMovie.imdbID) {
            this.isFavorite = true;
            break;
          }
        }
      });
    });
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  }

  addFavorite() {
    if (!this.isFavorite) {
      this.favorites.unshift({
        title: this.currentMovie.Title,
        year: this.currentMovie.Year,
        id: this.currentMovie.imdbID,
        poster: this.currentMovie.Poster
      });
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = true;
    } else {
      // this.favorites
      this.favorites = this.favorites.filter( (obj: any) => {
        return obj.id !== this.currentMovie.imdbID;
      });
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.isFavorite = false;
    }

  }

}
