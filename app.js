const movies = [
  { title:"The Thing (1982)", poster:"https://image.tmdb.org/t/p/w300/rtF0zC4J5cP2xwqP3h2xY9Yx.jpg" },
  { title:"Halloween (1978)", poster:"https://via.placeholder.com/160x240?text=Halloween" },
  { title:"Alien (1979)", poster:"https://via.placeholder.com/160x240?text=Alien" },
  { title:"Blade Runner (1982)", poster:"https://via.placeholder.com/160x240?text=Blade+Runner" },
  { title:"Nightmare on Elm Street", poster:"https://via.placeholder.com/160x240?text=Nightmare" }
];

const row = document.getElementById("movieRow");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${movie.poster}">
    <p>${movie.title}</p>
  `;
  row.appendChild(card);
});

