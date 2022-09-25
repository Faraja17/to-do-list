//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //we use __dirname because our module is not a node module.

const app = express();
const tasks = ["Make grocery list.", "Do laundry.", "Go food shopping."];
const workItems = ["Study.", "Practice.", "Network."];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
const day = date.getDate(); //this activates the function in the date.js module that we created and required above.
    res.render("list", {listTitle: "To Do List", currentDay: day, tasks: tasks});

app.post("/", function(req, res) {
    const task = req.body.task;

    if (req.body.list === "Work List") { /* This references the name and value that I gave to the button in list.ejs */
        workItems.push(task);
        res.redirect("/work");
    } else {
        tasks.push(task);
        res.redirect("/");
    }
   

});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", currentDay: day, tasks: workItems});
});

app.get("/about", function(req, res) {
    res.render("about");
});
 
});
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});


