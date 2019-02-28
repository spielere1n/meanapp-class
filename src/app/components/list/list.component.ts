import { Component, OnInit } from '@angular/core';
import Movies from '../../Movies';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movies[];

  constructor(private movieService: MoviesService) { }

  refresh() {
    this.movieService.getMovies().subscribe((data: Movies[]) => {
      this.movies = data;
      console.log(data);
      console.log(this.movies);
    });
  }

  ngOnInit() {
    this.refresh();
  }

}
