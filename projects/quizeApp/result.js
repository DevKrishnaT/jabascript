const params = new URLSearchParams(window.location.search);
let score = params.get("score");
console.log(score);
const scorebar = document.getElementsByClassName("actualno")[0];
let showMarks = document.getElementById("showMarks");
let total = 10;
let percent = (score / total) * 100;
scorebar.style.width = percent + "%";
showMarks.innerText = percent + "%";
