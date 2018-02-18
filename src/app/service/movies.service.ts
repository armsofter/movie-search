import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MoviesService {

  api = 'http://www.omdbapi.com/';
  apiKey = '7c68440'

  //?i=tt3896198&apikey=7c68440

  constructor(private http: HttpClient) {
  }

  search (str: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.api + '?s=' + str + '&apikey=' + this.apiKey );
  }

  getById (id: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', '  application/json');
    return this.http.get(this.api + '?i=' + id + '&apikey=' + this.apiKey );
  }

}
