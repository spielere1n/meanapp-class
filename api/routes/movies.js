import express from 'express';
const router = express.Router();

import Movie from '../models/Movie';

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

export default router;