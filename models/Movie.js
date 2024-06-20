const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
    },
    genre: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    actors: {
        type: [String],
        required: true
    },
    synopsis: {
        type: String,
        required: true,
        maxlength: 255
    },
    rating: {
        type: Number,
        required: true,
    },
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie