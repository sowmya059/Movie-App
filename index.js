const API_KEY="f476ac80b4c208eb0cd38b02c248acb3";
const url='https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
const IMGPATH = "https://image.tmdb.org/t/p/w500/"
const APIURL="https://api.themoviedb.org/3/movie/550?api_key=f476ac80b4c208eb0cd38b02c248acb3"


fetch('https://api.themoviedb.org/3/movie/550?api_key=f476ac80b4c208eb0cd38b02c248acb3').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    const results=document.getElementById("movies")
    const {poster_path,original_title}=results;
    completedata.results.map((values)=>{
       data1+=`<div class="movie">
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${values.original_title}">
                <p>year</p>
                <p></p>                 
                <h2 class="title">${values.original_title}</h2>
                </div> `
           })
           document.getElementById("movies").innerHTML=data1;
           main.appendChild(results)
}).catch((err)=>{
    console.log(err);
})