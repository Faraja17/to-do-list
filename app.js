//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
 
app.get("/", function(req, res) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = new Date();
    let currentDay = weekday[today.getDay()];
        if (currentDay === "Sunday" || currentDay === "Saturday") {
            res.write(`<h1>Yay, it's ${currentDay}! It's the weekend!</h1>`);
        }else{
            res.sendFile(__dirname + "/index.html");
        };
});
 
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
