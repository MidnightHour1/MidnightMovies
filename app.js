const movies = [
{title:"The Thing",genre:"horror",poster:"https://image.tmdb.org/t/p/w300/rtF0zC4J5cP2xwqP3h2xY9Yx.jpg",trailer:"https://www.youtube.com/embed/5ftmr17M-a4"},
{title:"Halloween",genre:"horror",poster:"https://image.tmdb.org/t/p/w300/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",trailer:"https://www.youtube.com/embed/xHuOtLTQ_1I"},
{title:"Alien",genre:"scifi",poster:"https://image.tmdb.org/t/p/w300/jQ5lPt9edzQ.jpg",trailer:"https://www.youtube.com/embed/jQ5lPt9edzQ"},
{title:"Blade Runner",genre:"scifi",poster:"https://image.tmdb.org/t/p/w300/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",trailer:"https://www.youtube.com/embed/eogpIG53Cis"},
{title:"Terminator 2",genre:"action",poster:"https://image.tmdb.org/t/p/w300/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",trailer:"https://www.youtube.com/embed/CRRlbK5w8AE"}
];

const row=document.getElementById("movieRow");
const mainTrailer=document.getElementById("mainTrailer");
const search=document.getElementById("search");
const genreFilter=document.getElementById("genreFilter");
const rouletteBtn=document.getElementById("rouletteBtn");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function render(list){
row.innerHTML="";
list.forEach(movie=>{
const card=document.createElement("div");
card.className="movie-card";

const fav = favorites.includes(movie.title) ? "★" : "☆";

card.innerHTML=`
<img src="${movie.poster}">
<p>${movie.title}</p>
<span class="favorite">${fav}</span>
`;

card.onclick=()=>{
mainTrailer.src=movie.trailer;
};

card.querySelector(".favorite").onclick=(e)=>{
e.stopPropagation();
toggleFav(movie.title);
};

row.appendChild(card);
});
}

function toggleFav(title){
if(favorites.includes(title)){
favorites=favorites.filter(f=>f!==title);
}else{
favorites.push(title);
}
localStorage.setItem("favorites",JSON.stringify(favorites));
render(filteredMovies());
}

function filteredMovies(){
return movies.filter(m=>{
return (genreFilter.value==="all"||m.genre===genreFilter.value)
&& m.title.toLowerCase().includes(search.value.toLowerCase());
});
}

search.oninput=()=>render(filteredMovies());
genreFilter.onchange=()=>render(filteredMovies());

rouletteBtn.onclick=()=>{
const random = movies[Math.floor(Math.random()*movies.length)];
mainTrailer.src=random.trailer;
};

render(movies);
