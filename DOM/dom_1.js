let n = 0;

document.getElementById("bt1").onclick = function change_clr() {
  if (n === 0) {
    document.getElementById("bt1").style.backgroundColor = "black";
    document.getElementById("bt1").style.color = "white";
    document.getElementById("bt1").classList.add("active");
    n = 1;
  } else {
    document.getElementById("bt1").classList.remove("active");

    n = 0;
  }
};
