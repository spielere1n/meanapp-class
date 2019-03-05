import { Component, OnInit } from '@angular/core';
import Movies from '../../Movies';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movies[];

  constructor(private movieService: MoviesService, private router: Router) { }

  refresh() {
    this.movieService.getMovies().subscribe((data: Movies[]) => {
      this.movies = data;
      console.log(data);
      console.log(this.movies);
    });
  }

  editMovie(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteMovie(id) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.refresh();
    });
  }

  ngOnInit() {
    this.refresh();
  }

}
