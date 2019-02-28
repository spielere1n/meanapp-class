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

export default router;