//jshint esversion:6
//this is our own module we took lines 4-12 from app.js (it was under the get route), and placed it within a function and returned "day".
//the purpose of creating a module was to declutter app.js by removing code not pertinent to routing.

module.exports = getDate;

function getDate() {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("en-US", options); 
 
    return day;
}
