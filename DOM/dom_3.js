let btn = document.getElementById("click");
let area = document.getElementById("area");
let show = document.getElementById("show");
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
