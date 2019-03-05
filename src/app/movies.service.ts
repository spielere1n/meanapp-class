import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  uri = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${this.uri}movies`);
  }
  
  getMovieById(id) {
    return this.http.get(`${this.uri}movies/${id}`);
  }

  addMovies(title, year, rated, runtime) {
    const movie = {
      title: title,
      year: year,
      rated: rated,
      runtime: runtime
    };
    return this.http.post(`${this.uri}movies/add`, movie);
  }

  updateMovies(id, title, year, rated, runtime) {
    const movie = {
      title: title,
      year: year,
      rated: rated,
      runtime: runtime
    };
    return this.http.post(`${this.uri}movies/update/${id}`, movie);
  }

  deleteMovie(id) {
    this.http.delete(`${this.uri}movies/delete/${id}`);
  }
}
