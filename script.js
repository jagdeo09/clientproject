/* global $ */


var movies = [""];

var images = [""];
var directors = [""];
var trailerlengths = [""];
var links = [""];


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displayMovieInfo(){
movies.forEach(function(movie){
    $("#movies").append("<p>" + movie + "</p>");
});

images.forEach(function(image){
    $("#images").append("<img src='" + image + "'>");
});

directors.forEach(function(director){
    $("#directors").append("<p>" + director + "</p>");
});

trailerlengths.forEach(function(length){
    $("#lengths").append("<p>" + length + "</p>");
});

links.forEach(function(link){
    $("#links").append("<a href='" + link + "'> Listen </a>");
});

}

function emptyMovieInfo(){
    $("#movies").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#directors").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addMovieInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $("#movies").add();
    $("#images").add();
    $("#directors").add();
    $("#lengths").add();
    $("#links").add();
}

$("#add").click(function() {
    var movieN = $("#movie").val();
    var imageU = $("#image").val();
    var directorN = $("#director").val();
    var trailerL = $("#length").val();
    var link = $("#links").val();

    movies.push(movieN);
    directors.push(directorN);
    images.push(imageU);
    trailerlengths.push(trailerL);
    links.push(link);
    emptyMovieInfo();
    addMovieInfo();
    displayMovieInfo();
});

displayMovieInfo();

