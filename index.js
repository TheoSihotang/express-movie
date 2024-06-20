const express = require("express");
const app = express();
const path = require("path");
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Listening on port http://localhost:3000");
});
