import express from 'express';
const router = express.Router();

import Movie from '../models/Movie';
import { nextTick } from 'q';

router.get('/movies', (req, res) => {
    Movie.find((err, movies) => {
        if(err) {
            console.log(err);
        } else {
            res.json(movies);
        }
    });
});

router.get('/movies/:id', (req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
        if(err) {
            console.log(err);
        } else {
            res.json(movie);
        }
    });
});

router.post('/movies/add', (req, res) => {
    let movie = new Movie(req.body);
    movie.save()
        .then(movie => {
            res.status(200).json({'movie': 'Added successfully'});
        }) 
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.post('/movies/update/:id', (req, res) => {
    Movie.findById(req.params.id, (err, movie) => {
        if(!movie) {
            return next(new Error('Could not load document'));
        } else {
            movie.title = req.body.title;
            movie.year = req.body.year;
            movie.rated = req.body.rated;
            movie.runtime = req.body.runtime;

            movie.save().then(movie => {
                res.json('Update done');
            })
            .catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.delete('/movies/delete/:id', (req, res) => {
    Movie.findByIdAndRemove({_id: req.params.id}, (err, movie) => {
        if(err) {
            res.json(err);
        } else {
            res.json('Successfully removed');
        }
    });
});

export default router;