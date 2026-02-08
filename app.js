const movies = [
{title:"The Thing",genre:"horror",poster:"https://image.tmdb.org/t/p/w300/rtF0zC4J5cP2xwqP3h2xY9Yx.jpg",trailer:"https://www.youtube.com/embed/5ftmr17M-a4"},
{title:"Halloween",genre:"horror",poster:"https://image.tmdb.org/t/p/w300/vjoOFOTBJcJvA1weJejlZ92LZD4.jpg",trailer:"https://www.youtube.com/embed/xHuOtLTQ_1I"},
{title:"Alien",genre:"scifi",poster:"https://image.tmdb.org/t/p/w300/jQ5lPt9edzQ.jpg",trailer:"https://www.youtube.com/embed/jQ5lPt9edzQ"},
{title:"Blade Runner",genre:"scifi",poster:"https://image.tmdb.org/t/p/w300/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",trailer:"https://www.youtube.com/embed/eogpIG53Cis"},
{title:"Terminator 2",genre:"action",poster:"https://image.tmdb.org/t/p/w300/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",trailer:"https://www.youtube.com/embed/CRRlbK5w8AE"}
];

const grid=document.getElementById("grid");
const player=document.getElementById("player");
const search=document.getElementById("search");
const genre=document.getElementById("genre");
const roulette=document.getElementById("roulette");

function render(list){
grid.innerHTML="";
list.forEach(m=>{
const d=document.createElement("div");
d.className="card";
d.innerHTML=`
<img src="${m.poster}">
<p>${m.title}</p>
`;
d.onclick=()=>player.src=m.trailer;
grid.appendChild(d);
});
}

function filtered(){
return movies.filter(m=>{
return (genre.value==="all"||m.genre===genre.value)
&& m.title.toLowerCase().includes(search.value.toLowerCase());
});
}

search.oninput=()=>render(filtered());
genre.onchange=()=>render(filtered());

roulette.onclick=()=>{
const r=movies[Math.floor(Math.random()*movies.length)];
player.src=r.trailer;
};

render(movies);
