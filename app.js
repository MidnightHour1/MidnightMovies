const movies = [
{
 title:"The Thing (1982)",
 poster:"https://image.tmdb.org/t/p/w300/rtF0zC4J5cP2xwqP3h2xY9Yx.jpg",
 desc:"Scientists in Antarctica face a shape-shifting alien.",
 trailer:"https://www.youtube.com/embed/5ftmr17M-a4"
},
{
 title:"Halloween (1978)",
 poster:"https://image.tmdb.org/t/p/w300/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",
 desc:"A masked killer stalks babysitters.",
 trailer:"https://www.youtube.com/embed/xHuOtLTQ_1I"
}
];

const row=document.getElementById("movieRow");
const popup=document.getElementById("popup");
const poster=document.getElementById("popupPoster");
const title=document.getElementById("popupTitle");
const desc=document.getElementById("popupDesc");
const play=document.getElementById("playTrailer");
const close=document.getElementById("closePopup");
const mainTrailer=document.getElementById("mainTrailer");

movies.forEach(movie=>{
 const card=document.createElement("div");
 card.className="movie-card";
 card.innerHTML=`
 <img src="${movie.poster}">
 <p>${movie.title}</p>
 `;
 card.onclick=()=>{
   poster.src=movie.poster;
   title.innerText=movie.title;
   desc.innerText=movie.desc;
   play.onclick=()=>{
     mainTrailer.src=movie.trailer;
     popup.classList.add("hidden");
   }
   popup.classList.remove("hidden");
 }
 row.appendChild(card);
});

close.onclick=()=>{
 popup.classList.add("hidden");
}
