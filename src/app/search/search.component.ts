import {Component, ViewChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MoviesService} from '../service/movies.service';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myControl: FormControl = new FormControl();
  str: string;

  searchHistory = [];

  options = [];

  constructor(private moviesService: MoviesService,
              private router: Router) {
  }

  ngOnInit() {
    this.searchHistory = JSON.parse(localStorage.getItem('history')) ||  [];
  }

  search() {
    if (this.str.length > 2) {
      this.moviesService.search(this.str).subscribe((res: any) => {
        console.log(res);
        this.options = [];
        this.options.push({
          title: res.Title,
          year: res.Year,
          id: res.imdbID,
          poster: res.Poster
        });
      });
    }
  }

  selection(obj) {
    console.log(obj);
    this.searchHistory.unshift(obj);
    this.searchHistory = _.uniqBy(this.searchHistory, 'id');
    localStorage.setItem('history', JSON.stringify(this.searchHistory));
    this.str = '';
    this.router.navigate(['']).then(() => {
      this.router.navigate(['movie', obj.id]);
    });
  }

}
