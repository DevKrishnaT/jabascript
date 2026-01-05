let box = document.getElementsByClassName("box")[0];
let topValue = parseInt(getComputedStyle(box).top);
let leftValue = parseFloat(getComputedStyle(box).left);
console.log(leftValue);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "s") topValue += 60;
  if (e.key === "ArrowUp" || e.key === "w") topValue -= 60;
  if (e.key === "ArrowRight" || e.key === "d") leftValue += 60;
  if (e.key === "ArrowLeft" || e.key === "a") leftValue -= 60;

  box.style.left = leftValue + "px";

  box.style.top = topValue + "px";
});
