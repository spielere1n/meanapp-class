import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/db';

import Movie from './models/Movie';

const app = express();

mongoose.connect(config.database, {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log('MongoDB connection established')
});

app.use(bodyParser.json());
app.use(cors());

import movies from './routes/movies';
app.use('/', movies);

app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
});