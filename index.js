const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Movie = require("./models/Movie");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
let editMovie;
mongoose
    .connect("mongodb://localhost:27017/db_movie")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    Movie.find().then((movies) => {
        res.render("index", { movies });
    });
});

app.get("/create", (req, res) => {
    res.render("add");
    movie.create(req.body);
});

app.post("/movies", (req, res) => {
    const { title, year, genre, actors, synopsis, rating, image } = req.body;
    const newActors = actors.split(", ");
    const insertMovie = new Movie({
        title: title,
        year: year,
        genre: genre,
        actors: newActors,
        synopsis: synopsis,
        rating: rating,
        image: image,
    });
    insertMovie.save().then(() => {
        res.redirect("/");
    });
});

// render details page
app.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id).then((result, err) => {
        if (result) {
            editMovie = result;
            res.render("details", {result})
        } else {
            console.log(err)
        }
    });
});

app.get("/edit", (req, res) => {
    res.render("edit", { editMovie });
});

app.patch("/movies/:id", (req,res) => {
    const {id} = req.params
    console.log(id)
    Movie.findByIdAndUpdate(id, req.body).then(() => {
        res.redirect("/")
    })
})

app.delete("/movies/:id", (req, res) => {
    const {id} = req.params
    Movie.findByIdAndDelete(id).then(() => {
        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("Listening on port http://localhost:3000");
});
