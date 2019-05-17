/* global $ */
var avengers_endgame = {
        title: "Avengers: Endgame",
        year: "2019",
        length: "3h 2m",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
}

var the_notebook = {
        title: "The Notebook",
        year: "2004",
        length: "2h 4m",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Td3Eetr5L.jpg",
        trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw&t=1s"
}

var the_shining = {
        title: "The Shining",
        year: "1980",
        length: "2h 26m",
        image: "https://cdn.shopify.com/s/files/1/1057/4964/products/the-shining-vintage-movie-poster-original-1-sheet-27x41-6979.jpg?v=1535845561",
        trailer: "https://www.youtube.com/watch?v=S014oGZiSdI"
}

var bridesmaids = {
        title: "Bridesmaids",
        year: "2011",
        length: "2h 12m",
        image: "https://images-na.ssl-images-amazon.com/images/I/51YOA5yQKML.jpg",
        trailer: "https://www.youtube.com/watch?v=JgacDwgKiZg"
}

var list_of_movies = [avengers_endgame, the_notebook, the_shining, bridesmaids]

function displayMovieInfo(){
list_of_movies.forEach(function(movie){
    $("#movies").append("<p>" + movie.title + "</p>");
});
    
}

function addMovieInfo(){
    $("#movies").add();
    $("#images").add();
    $("#years").add();
    $("#lengths").add();
    $("#trailers").add();
}

$("#add").click(function() {
    var movieN = $("#movie").val();
    var imageU = $("#image").val();
    var year = $("#year").val();
    var movieL = $("#length").val();
    var trailer = $("#trailer").val();

    list_of_movies.push(movieN);
    list_of_movies.push(year);
    list_of_movies.push(imageU);
    list_of_movies.push(movieL);
    list_of_movies.push(trailer);
    addMovieInfo();
    displayMovieInfo();
});

displayMovieInfo();