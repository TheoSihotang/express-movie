const mongoose = require("mongoose");
const Movie = require("./models/Movie");

mongoose
    .connect("mongodb://localhost:27017/db_movie")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const movie = [
    {
        title: "Haikyuu",
        year: 2024,
        genre: "Anime",
        actors: [
            "Hinata",
            "Kageyama",
            "Tsukishima",
            "Daichi",
            "Nishinoya",
            "Tanaka",
            "Bokuto",
            "Kenma",
            "Kuroo",
            "Oikawa",
            "Ushijima",
        ],
        synopsis: `Determined to be like the volleyball championship's star player nicknamed "the small giant", Shoyo joins his school's volleyball club.`,
        rating: 10,
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        actors: [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Ellen Page",
            "Tom Hardy",
            "Ken Watanabe",
        ],
        synopsis:
            "A thief who enters the dreams of others to steal their secrets embarks on a mission to plant an idea into the mind of a CEO.",
        rating: 9,
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        actors: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
            "Michael Caine",
            "Gary Oldman",
        ],
        synopsis:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        rating: 9.5,
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        actors: [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson",
            "Bruce Willis",
            "Harvey Keitel",
        ],
        synopsis:
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 9.3,
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        actors: [
            "Tim Robbins",
            "Morgan Freeman",
            "Bob Gunton",
            "William Sadler",
            "Clancy Brown",
        ],
        synopsis:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3,
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        actors: [
            "Matthew McConaughey",
            "Anne Hathaway",
            "Jessica Chastain",
            "Michael Caine",
            "Matt Damon",
        ],
        synopsis:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6,
    },
];
console.log(movie);

Movie.insertMany(movie)
    .then(() => {
        console.log("Data inserted");
    })
    .catch((err) => {
        console.log(err);
    });
