import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { MoviesService } from '../../movies.service';
import Movie from '../../Movies';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  movie: any = {};
  updateForm: FormGroup;

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.moviesService.getMovieById(this.id).subscribe(res => {
        this.movie = res;
        this.updateForm.get('title').setValue(this.movie.title);
        this.updateForm.get('year').setValue(this.movie.year);
        this.updateForm.get('rated').setValue(this.movie.rated);
        this.updateForm.get('runtime').setValue(this.movie.runtime);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required ],
      year: '',
      rated: '',
      runtime: ''
    });
  }

  updateMovie(title, year, rated, runtime) {
    this.moviesService.updateMovies(this.id, title, year, rated, runtime).subscribe(() => {
      this.snackBar.open('Movie updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}