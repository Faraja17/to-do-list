//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
let tasks = ["Study.", "Walk dog.", "Study."];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
 
app.get("/", function(req, res) {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options); 
    res.render("list", {currentDay: day, tasks: tasks});

app.post("/", function(req, res) {
    let task = req.body.task;
    tasks.push(task);
    res.redirect("/");

});

});
 
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
