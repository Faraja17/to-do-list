//jshint esversion:6
//this is our own module we took lines 6-14 from app.js (it was under the get route), and placed it within a function and returned "day".
//the purpose of creating a module was to declutter app.js by removing code not pertinent to routing.

exports.getDate = function () { //anonymous function to make more succint. I left the second one the long way for comparison. Also, module.exports is not required, according to the node.js docs (exports shortcut).
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options); 
}

module.exports.getDay = getDay;

function getDay() { //lines 17-19: extended way of writing the function. see line 5 for a more succint way using anonymous function.
    const today = new Date();

    const options = {
        weekday: "long",
    };
    
    return today.toLocaleDateString("en-US", options); 
}