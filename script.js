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
    $("#years").append("<p>" + movie.year + "</p>");
    $("#lengths").append("<p>" + movie.length + "</p>");
    $("#images").append("<img src='" + movie.image + "'>");
    $("#trailers").append("<a href='" + movie.trailer + "'> Play </a>");
});
    
}

function emptyMovieInfo(){
    $("#movies").empty();
    $("#images").empty();
    $("#years").empty();
    $("#lengths").empty();
    $("#trailers").empty();
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
    
    var my_movie = {
        title: movieN,
        year: year,
        length: movieL,
        image: imageU,
        trailer: trailer
    }

    list_of_movies.push(my_movie);
    emptyMovieInfo();
    addMovieInfo();
    displayMovieInfo();
});

displayMovieInfo();



var moana = {
        title: "Moana",
        year: "2016",
        length: "1h 53m",
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
}

var incredibles_two = {
        title: "Incredibles 2",
        year: "2018",
        length: "2h 5m",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Td3Eetr5L.jpg",
        trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw&t=1s"
}

var grease = {
        title: "Grease",
        year: "1978",
        length: "1h 51m",
        image: "https://cdn.shopify.com/s/files/1/1057/4964/products/the-shining-vintage-movie-poster-original-1-sheet-27x41-6979.jpg?v=1535845561",
        trailer: "https://www.youtube.com/watch?v=S014oGZiSdI"
}

var sixteen_candles = {
        title: "16 Candles",
        year: "1984",
        length: "1h 33m",
        image: "https://images-na.ssl-images-amazon.com/images/I/51YOA5yQKML.jpg",
        trailer: "https://www.youtube.com/watch?v=JgacDwgKiZg"
}

var crazy_rich_asians = {
        title: "Crazy Rich Asians",
        year: "2018",
        length: "2h 1m",
        image: "https://images-na.ssl-images-amazon.com/images/I/51YOA5yQKML.jpg",
        trailer: "https://www.youtube.com/watch?v=JgacDwgKiZg"
}

$("#random").click(function(){
var potential_random_movies = [moana, incredibles_two, grease, sixteen_candles, crazy_rich_asians];

var index_to_choose_from  = Math.floor(Math.random() * potential_random_movies.length)

list_of_movies.push(potential_random_movies[index_to_choose_from])
emptyMovieInfo();
    addMovieInfo();
    displayMovieInfo();
});    