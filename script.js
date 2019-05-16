/* global $ */
var avengers_endgame = {
        title: "Avengers: Endgame",
        year: "2019",
        length: "3h 2m",
        image: "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_SX300.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
}

var the_notebook = {
        title: "The Notebook",
        year: "2004",
        length: "2h 4m",
        image: "",
        trailer: "https://www.youtube.com/watch?v=FC6biTjEyZw&t=1s"
}

var the_shining = {
        title: "The Shining",
        year: "1980",
        length: "2h 26m",
        image: "",
        trailer: "https://www.youtube.com/watch?v=S014oGZiSdI"
}

var bridesmaids = {
        title: "Bridesmaids",
        year: "2011",
        length: "2h 12m",
        image: "",
        trailer: "https://www.youtube.com/watch?v=JgacDwgKiZg"
}

var list_of_movies = [avengers_endgame, the_notebook, the_shining, bridesmaids]

function displayMovieInfo(){
list_of_movies.forEach(function(movie){
    $("#movies").append("<p>" + movie.title + "</p>");
});

}

displayMovieInfo();