let btn = document.getElementById("click");
let area = document.getElementById("area");
let show = document.getElementById("show");
let button = document.getElementById("try");
// imp
let para = document.getElementsByTagName("p");

console.log(para);

let i = 1;
btn.addEventListener("click", () => {
  if (i !== 0) {
    area.type = "text";
    btn.innerText = "eyes icon open";

    i = 0;
  } else {
    area.type = "password";

    btn.innerText = "eyes icon closed";
    i = 1;
  }
});

area.addEventListener("input", (e) => {
  show.innerText = e.target.value;
});

//
let j = 0;
const p = Array.from(para);
p[0].style.backgroundColor = "blue";

button.addEventListener("click", () => {
  if (j === 0) {
    p.forEach((l) => {
      const repSpan = document.createElement("span");
      repSpan.textContent = "gg guys done";
      l.style.backgroundColor = "blue";
      l.append(repSpan);
    });
    j = 1;
  } else {
    p.forEach((l) => {
      l.style.backgroundColor = "white";
      l.style.color = "black";
    });
    j = 0;
  }
});
