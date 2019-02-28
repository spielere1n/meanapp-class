import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Movie = new Schema({
    title: String,
    year: Number,
    rated: String,
    runtime: Number
});

export default mongoose.model('Movie', Movie, 'movieDetails');