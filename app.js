const express = require('express');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

const path = require('path');

mongoose.connect('mongodb://localhost:27017/yelp-camp',);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database Connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, () => {
    console.log("Listening on port 3000");
});


app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: "My Backyard", description: "Cheap Camping" });
    await camp.save();
    res.send(camp);

    // res.send("Hey from Yelp camp");
})