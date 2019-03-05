import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup

  constructor(private movieService: MoviesService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      year: '',
      rated: '',
      runtime: ''
    });
  }

  addMovie(title, year, rated, runtime) {
    this.movieService.addMovies(title, year, rated, runtime).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
