const movies = [
{
 title:"The Thing (1982)",
 poster:"https://image.tmdb.org/t/p/w300/rtF0zC4J5cP2xwqP3h2xY9Yx.jpg",
 trailer:"https://www.youtube.com/embed/5ftmr17M-a4"
},
{
 title:"Halloween (1978)",
 poster:"https://image.tmdb.org/t/p/w300/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",
 trailer:"https://www.youtube.com/embed/xHuOtLTQ_1I"
},
{
 title:"Alien (1979)",
 poster:"https://image.tmdb.org/t/p/w300/jQ5lPt9edzQ.jpg",
 trailer:"https://www.youtube.com/embed/jQ5lPt9edzQ"
}
];

const row = document.getElementById("movieRow");
const mainTrailer = document.getElementById("mainTrailer");

row.innerHTML = "";

movies.forEach(movie=>{
  const card = document.createElement("div");
  card.className="movie-card";
  card.innerHTML=`
    <img src="${movie.poster}">
    <p>${movie.title}</p>
  `;
  card.onclick=()=>{
    mainTrailer.src = movie.trailer;
  };
  row.appendChild(card);
});
