const API_KEY = "f476ac80b4c208eb0cd38b02c248acb3";
const BASE_URL = "https://api.themoviedb.org/3";
const url = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w500/";
const APIURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=f476ac80b4c208eb0cd38b02c248acb3";

const tagsEl = document.getElementById("filter");
let filterInput = document.getElementById("search");
let display = document.querySelector("#movies");
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const moviesWrapper = document.getElementById("movies");
let moviesData = [];

fetch(APIURL)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    moviesData = response.results;
    console.log(moviesData);
    let moviesRendered = "";
    const results = document.getElementById("movies");

    moviesData.map((movie) => {
      moviesRendered += `<div class="movie">
                <img src="https://image.tmdb.org/t/p/w500/${
                  movie.poster_path
                }" alt="${movie.title}" />
                <small>${movie.release_date.slice(
                  0,
                  4
                )} - Horror/Thriller</small>              
                <h5 class="title">${movie.title}</h5>
                <em>${movie.vote_average}</em>
                </div> `;
    });
    results.innerHTML = moviesRendered;
  })
  .catch((err) => {
    console.log(err);
  });

search.addEventListener("keyup", filter);
function filter() {
  let filtervalue = search.value.toUpperCase();

  let item = display.querySelectorAll(".movie");

  for (let i = 0; i < item.length; i++) {
    let span = item[i].querySelector(".title");

    if (span.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
}
