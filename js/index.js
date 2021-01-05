const Btn1 = document.getElementById("Btn1");
const list1 = document.getElementById("list1");

Btn1.addEventListener("click", function() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=6fedca7dd5395c04dbc1ad8bb342351a&language=en-US`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            list1.innerHTML = data.genres.map((genre) => `<li>* ${genre.name}</li > `).join("");
        });
});

const Btn2 = document.getElementById("Btn2");
const list2 = document.getElementById("list2");

Btn2.addEventListener("click", function() {
    fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=6fedca7dd5395c04dbc1ad8bb342351a`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {

            list2.innerHTML = data.results.map((result) =>
                `<li><img src="https://image.tmdb.org/t/p/w500/${result.profile_path}">
                <p id="naam">${result.name}</p>
                </li>`).join("")
        });

});

const Btn3 = document.getElementById("Btn3");
const movieDataRef = document.getElementById("movieDataRef");

Btn3.addEventListener("click", function() {
    fetch(` https://api.themoviedb.org/3/movie/264660?api_key=6fedca7dd5395c04dbc1ad8bb342351a&language=en-US`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            movieDataRef.innerHTML = `<h3>${data.original_title}</h3>    
            <p>${data.overview}</p>
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">`;
        });
});